import { NextRequest, NextResponse } from 'next/server'
import { getPaymentProvider } from '@/lib/payments/provider'
import {
  createOrder,
  updateOrderPaymentStatus,
  findOrderBySessionId,
  findOrderByPaymentIntentId,
  createSubscription,
  updateSubscription,
  findSubscriptionByStripeId,
  clearUserCart,
} from '@/lib/orders'
import { createClient } from '@/lib/supabase/server'

/**
 * POST /api/payments/webhook
 * 
 * Handles webhook events from the payment processor
 * 
 * This endpoint processes:
 * - payment_intent.succeeded
 * - payment_intent.payment_failed
 * - checkout.session.completed
 * - customer.subscription.created
 * - customer.subscription.updated
 * - customer.subscription.deleted
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get('stripe-signature')

    if (!signature) {
      return NextResponse.json(
        { error: 'Missing signature' },
        { status: 400 }
      )
    }

    const paymentProvider = getPaymentProvider()
    
    // Verify webhook signature
    if (!paymentProvider.verifyWebhookSignature(body, signature)) {
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      )
    }

    // Parse webhook event
    const event = paymentProvider.parseWebhookEvent(body, signature)

    // Handle different event types
    switch (event.type) {
      case 'checkout.session.completed': {
        // Handle successful checkout
        const session = event.data.object as any
        console.log('Checkout completed:', session.id)
        
        try {
          // Find user by email
          const customerEmail = session.customer_email || session.customer_details?.email
          if (!customerEmail) {
            console.error('No customer email in session')
            break
          }

          const supabase = await createClient()
          const { data: userData } = await supabase
            .from('users')
            .select('id')
            .eq('email', customerEmail)
            .single()

          if (!userData) {
            console.error('User not found for email:', customerEmail)
            break
          }

          const user = { id: userData.id }

          // Get line items from session
          const stripe = (getPaymentProvider() as any).stripe
          const sessionWithLineItems = await stripe.checkout.sessions.retrieve(session.id, {
            expand: ['line_items.data.price.product'],
          })

          const items = sessionWithLineItems.line_items?.data?.map((item: any) => {
            const product = item.price?.product
            const metadata = item.price?.metadata || {}
            
            return {
              itemType: (metadata.type === 'subscription' ? 'SUBSCRIPTION' : 
                        metadata.type === 'service' ? 'SERVICE' : 'PRODUCT') as 'PRODUCT' | 'SERVICE' | 'SUBSCRIPTION',
              itemId: metadata.id || product?.id || 'unknown',
              itemName: product?.name || item.description || 'Unknown Item',
              description: product?.description,
              price: item.price.unit_amount,
              quantity: item.quantity,
              metadata: metadata,
            }
          }) || []

          if (items.length === 0) {
            console.error('No items found in session')
            break
          }

          // Check if order already exists
          let order = await findOrderBySessionId(session.id)
          
          if (!order) {
            // Create order
            order = await createOrder({
              userId: user.id,
              stripeSessionId: session.id,
              customerEmail,
              customerName: session.customer_details?.name,
              items,
              billingAddress: session.customer_details?.address,
            })
          }

          // Update order status
          await updateOrderPaymentStatus(order.id, 'SUCCEEDED', 'COMPLETED')

          // Clear cart if this was from cart checkout
          await clearUserCart(user.id)

          // TODO: Send confirmation email
          // TODO: Grant access to product/service
          
          console.log('Order created/updated:', order.id)
        } catch (error) {
          console.error('Error processing checkout.session.completed:', error)
        }
        
        break
      }

      case 'payment_intent.succeeded': {
        // Handle successful payment
        const paymentIntent = event.data.object as any
        console.log('Payment succeeded:', paymentIntent.id)
        
        try {
          const order = await findOrderByPaymentIntentId(paymentIntent.id)
          if (order) {
            await updateOrderPaymentStatus(order.id, 'SUCCEEDED', 'COMPLETED')
            console.log('Order updated:', order.id)
          }
        } catch (error) {
          console.error('Error processing payment_intent.succeeded:', error)
        }
        
        break
      }

      case 'payment_intent.payment_failed': {
        // Handle failed payment
        const paymentIntent = event.data.object as any
        console.log('Payment failed:', paymentIntent.id)
        
        try {
          const order = await findOrderByPaymentIntentId(paymentIntent.id)
          if (order) {
            await updateOrderPaymentStatus(order.id, 'FAILED')
            console.log('Order updated to failed:', order.id)
          }
        } catch (error) {
          console.error('Error processing payment_intent.payment_failed:', error)
        }
        
        break
      }

      case 'customer.subscription.created': {
        // Handle new subscription
        const subscription = event.data.object as any
        console.log('Subscription created:', subscription.id)
        
        try {
          const customerId = typeof subscription.customer === 'string' 
            ? subscription.customer 
            : subscription.customer?.id

          if (!customerId) {
            console.error('No customer ID in subscription')
            break
          }

          // Find user by Stripe customer ID (stored in metadata or we need to track it)
          // For now, we'll try to find by email from customer object
          const stripe = (getPaymentProvider() as any).stripe
          const customer = await stripe.customers.retrieve(customerId)
          const customerEmail = customer.email

          if (!customerEmail) {
            console.error('No email found for customer')
            break
          }

          const supabase = await createClient()
          const { data: userData } = await supabase
            .from('users')
            .select('id')
            .eq('email', customerEmail)
            .single()

          if (!userData) {
            console.error('User not found for subscription customer')
            break
          }

          const user = { id: userData.id }

          // Get subscription metadata
          const metadata = subscription.metadata || {}
          const serviceId = metadata.serviceId || 'unknown'
          const tierName = metadata.tier || subscription.items?.data[0]?.price?.nickname

          // Check if subscription already exists
          let sub = await findSubscriptionByStripeId(subscription.id)
          
          if (!sub) {
            sub = await createSubscription({
              userId: user.id,
              stripeSubscriptionId: subscription.id,
              stripeCustomerId: customerId,
              stripePriceId: subscription.items?.data[0]?.price?.id,
              serviceId,
              tierName,
              currentPeriodStart: new Date(subscription.current_period_start * 1000),
              currentPeriodEnd: new Date(subscription.current_period_end * 1000),
              status: subscription.status,
              metadata,
            })
            console.log('Subscription created:', sub.id)
          }
        } catch (error) {
          console.error('Error processing customer.subscription.created:', error)
        }
        
        break
      }

      case 'customer.subscription.updated': {
        // Handle subscription update
        const subscription = event.data.object as any
        console.log('Subscription updated:', subscription.id)
        
        try {
          const sub = await findSubscriptionByStripeId(subscription.id)
          if (sub) {
            await updateSubscription(sub.id, {
              status: subscription.status,
              currentPeriodStart: new Date(subscription.current_period_start * 1000),
              currentPeriodEnd: new Date(subscription.current_period_end * 1000),
              cancelAtPeriodEnd: subscription.cancel_at_period_end,
              canceledAt: subscription.canceled_at ? new Date(subscription.canceled_at * 1000) : undefined,
              endedAt: subscription.ended_at ? new Date(subscription.ended_at * 1000) : undefined,
            })
            console.log('Subscription updated:', sub.id)
          }
        } catch (error) {
          console.error('Error processing customer.subscription.updated:', error)
        }
        
        break
      }

      case 'customer.subscription.deleted': {
        // Handle subscription cancellation
        const subscription = event.data.object as any
        console.log('Subscription deleted:', subscription.id)
        
        try {
          const sub = await findSubscriptionByStripeId(subscription.id)
          if (sub) {
            await updateSubscription(sub.id, {
              status: 'CANCELED',
              endedAt: new Date(),
            })
            console.log('Subscription canceled:', sub.id)
            // TODO: Revoke access to service
            // TODO: Send cancellation email
          }
        } catch (error) {
          console.error('Error processing customer.subscription.deleted:', error)
        }
        
        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}



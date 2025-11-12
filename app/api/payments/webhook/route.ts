import { NextRequest, NextResponse } from 'next/server'
import { getPaymentProvider } from '@/lib/payments/provider'

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
        const session = event.data.object
        console.log('Checkout completed:', session.id)
        
        // TODO: Update order status in database
        // TODO: Send confirmation email
        // TODO: Grant access to product/service
        
        break
      }

      case 'payment_intent.succeeded': {
        // Handle successful payment
        const paymentIntent = event.data.object
        console.log('Payment succeeded:', paymentIntent.id)
        
        // TODO: Update order status in database
        // TODO: Send confirmation email
        // TODO: Grant access to product/service
        
        break
      }

      case 'payment_intent.payment_failed': {
        // Handle failed payment
        const paymentIntent = event.data.object
        console.log('Payment failed:', paymentIntent.id)
        
        // TODO: Update order status in database
        // TODO: Send failure notification email
        
        break
      }

      case 'customer.subscription.created': {
        // Handle new subscription
        const subscription = event.data.object
        console.log('Subscription created:', subscription.id)
        
        // TODO: Update subscription status in database
        // TODO: Send welcome email
        // TODO: Grant access to service
        
        break
      }

      case 'customer.subscription.updated': {
        // Handle subscription update
        const subscription = event.data.object
        console.log('Subscription updated:', subscription.id)
        
        // TODO: Update subscription status in database
        
        break
      }

      case 'customer.subscription.deleted': {
        // Handle subscription cancellation
        const subscription = event.data.object
        console.log('Subscription deleted:', subscription.id)
        
        // TODO: Update subscription status in database
        // TODO: Revoke access to service
        // TODO: Send cancellation email
        
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


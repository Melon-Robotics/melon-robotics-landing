import { NextRequest, NextResponse } from 'next/server'
import { getPaymentProvider } from '@/lib/payments/provider'
import { 
  getProductPaymentConfig, 
  getServicePaymentConfig, 
  getROVSubscriptionTier,
  createPaymentItems 
} from '@/lib/payments/products'

/**
 * POST /api/payments/checkout
 * 
 * Creates a checkout session for products or services
 * 
 * Body:
 * - type: 'product' | 'service' | 'subscription'
 * - id: product/service ID
 * - tier?: subscription tier name (for ROV subscriptions)
 * - customerEmail?: string
 * - successUrl?: string
 * - cancelUrl?: string
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, id, tier, customerEmail, successUrl, cancelUrl } = body

    if (!type || !id) {
      return NextResponse.json(
        { error: 'Missing required fields: type, id' },
        { status: 400 }
      )
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const defaultSuccessUrl = `${baseUrl}/payments/success?session_id={CHECKOUT_SESSION_ID}`
    const defaultCancelUrl = `${baseUrl}/payments/cancel`

    const paymentProvider = getPaymentProvider()
    let items: Array<{
      id: string
      name: string
      amount: number
      quantity: number
      description?: string
      metadata?: Record<string, string>
    }> = []
    let mode: 'payment' | 'subscription' = 'payment'

    if (type === 'product') {
      const config = getProductPaymentConfig(id)
      if (!config) {
        return NextResponse.json(
          { error: `Product not found: ${id}` },
          { status: 404 }
        )
      }

      if (config.price === 0 || config.metadata?.requiresQuote === 'true') {
        // Redirect to contact for custom pricing
        return NextResponse.json(
          { 
            error: 'Custom pricing required',
            redirectTo: '/contact',
            requiresQuote: true 
          },
          { status: 200 }
        )
      }

      items = [{
        id: config.productId,
        name: config.name,
        amount: config.price,
        quantity: 1,
        description: config.description,
        metadata: {
          ...config.metadata,
          type: 'product',
        },
      }]
      mode = config.type === 'subscription' ? 'subscription' : 'payment'
    } else if (type === 'service') {
      const config = getServicePaymentConfig(id)
      if (!config) {
        return NextResponse.json(
          { error: `Service not found: ${id}` },
          { status: 404 }
        )
      }

      if (config.price === 0 || config.metadata?.requiresQuote === 'true') {
        // Redirect to contact for custom pricing
        return NextResponse.json(
          { 
            error: 'Custom pricing required',
            redirectTo: '/contact',
            requiresQuote: true 
          },
          { status: 200 }
        )
      }

      items = [{
        id: config.serviceId,
        name: config.name,
        amount: config.price!,
        quantity: 1,
        description: config.description,
        metadata: {
          ...config.metadata,
          type: 'service',
        },
      }]
      mode = config.type === 'subscription' ? 'subscription' : 'payment'
    } else if (type === 'subscription' && tier) {
      // Subscription tier (ROV Inspection or Ocean Data)
      let tierConfig: any = null
      
      // Try ROV subscription tier first
      tierConfig = getROVSubscriptionTier(tier)
      
      // If not found, try Ocean Data subscription (monthly)
      if (!tierConfig && id === 'ocean-data') {
        // Ocean Data subscriptions are monthly
        const oceanDataTiers: Record<string, { price: number; name: string }> = {
          'core': { price: 29900, name: 'Core' },
          'pro': { price: 79900, name: 'Pro' },
          'enterprise': { price: 249900, name: 'Enterprise' },
        }
        const tierKey = tier.toLowerCase()
        if (oceanDataTiers[tierKey]) {
          tierConfig = {
            tierId: `ocean-data-${tierKey}`,
            name: oceanDataTiers[tierKey].name,
            price: oceanDataTiers[tierKey].price,
            interval: 'month',
            description: `${oceanDataTiers[tierKey].name} Subscription`,
            metadata: {
              serviceId: 'ocean-data',
              tier: tierKey,
            },
          }
        }
      }
      
      if (!tierConfig) {
        return NextResponse.json(
          { error: `Subscription tier not found: ${tier}` },
          { status: 404 }
        )
      }

      if (tierConfig.price === 0 || tierConfig.metadata?.requiresQuote === 'true') {
        return NextResponse.json(
          { 
            error: 'Custom pricing required',
            redirectTo: '/contact',
            requiresQuote: true 
          },
          { status: 200 }
        )
      }

      items = [{
        id: tierConfig.tierId,
        name: `${tierConfig.name} Subscription`,
        amount: tierConfig.price,
        quantity: 1,
        description: tierConfig.description,
        metadata: {
          ...tierConfig.metadata,
          type: 'subscription',
          interval: tierConfig.interval || 'year',
        },
      }]
      mode = 'subscription'
    } else {
      return NextResponse.json(
        { error: 'Invalid type or missing tier for subscription' },
        { status: 400 }
      )
    }

    const paymentItems = createPaymentItems(items)

    const session = await paymentProvider.createCheckoutSession({
      items: paymentItems,
      customerEmail,
      successUrl: successUrl || defaultSuccessUrl,
      cancelUrl: cancelUrl || defaultCancelUrl,
      metadata: {
        type,
        id,
        ...(tier && { tier }),
      },
      mode,
    })

    return NextResponse.json({ 
      sessionId: session.id,
      url: session.url,
    })
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}


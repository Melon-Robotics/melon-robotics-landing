import { NextRequest, NextResponse } from 'next/server'
import { getPaymentProvider } from '@/lib/payments/provider'

/**
 * GET /api/payments/subscription/:id
 * Get subscription details
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const subscriptionId = searchParams.get('id')

    if (!subscriptionId) {
      return NextResponse.json(
        { error: 'Missing subscription ID' },
        { status: 400 }
      )
    }

    const paymentProvider = getPaymentProvider()
    const subscription = await paymentProvider.getSubscription(subscriptionId)

    return NextResponse.json(subscription)
  } catch (error) {
    console.error('Get subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to get subscription', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

/**
 * DELETE /api/payments/subscription/:id
 * Cancel a subscription
 */
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const subscriptionId = searchParams.get('id')
    const immediately = searchParams.get('immediately') === 'true'

    if (!subscriptionId) {
      return NextResponse.json(
        { error: 'Missing subscription ID' },
        { status: 400 }
      )
    }

    const paymentProvider = getPaymentProvider()
    const subscription = await paymentProvider.cancelSubscription(subscriptionId, immediately)

    return NextResponse.json(subscription)
  } catch (error) {
    console.error('Cancel subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to cancel subscription', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

/**
 * PATCH /api/payments/subscription/:id
 * Update a subscription
 */
export async function PATCH(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const subscriptionId = searchParams.get('id')
    const body = await request.json()

    if (!subscriptionId) {
      return NextResponse.json(
        { error: 'Missing subscription ID' },
        { status: 400 }
      )
    }

    const paymentProvider = getPaymentProvider()
    const subscription = await paymentProvider.updateSubscription(subscriptionId, body)

    return NextResponse.json(subscription)
  } catch (error) {
    console.error('Update subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to update subscription', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}



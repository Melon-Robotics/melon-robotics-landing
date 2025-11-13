import { createClient } from './supabase/server'

export interface CreateOrderParams {
  userId: string
  stripeSessionId?: string
  stripePaymentIntentId?: string
  customerEmail: string
  customerName?: string
  items: Array<{
    itemType: 'PRODUCT' | 'SERVICE' | 'SUBSCRIPTION'
    itemId: string
    itemName: string
    description?: string
    price: number
    quantity: number
    metadata?: any
  }>
  billingAddress?: any
}

/**
 * Create an order from a successful payment
 */
export async function createOrder(params: CreateOrderParams) {
  const supabase = await createClient()
  const totalAmount = params.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  // Create order
  const { data: order, error: orderError } = await supabase
    .from('orders')
    .insert({
      user_id: params.userId,
      stripe_session_id: params.stripeSessionId,
      stripe_payment_intent_id: params.stripePaymentIntentId,
      customer_email: params.customerEmail,
      customer_name: params.customerName,
      total_amount: totalAmount,
      billing_address: params.billingAddress,
    })
    .select()
    .single()

  if (orderError) {
    throw new Error(`Failed to create order: ${orderError.message}`)
  }

  // Create order items
  const orderItems = params.items.map((item) => ({
    order_id: order.id,
    item_type: item.itemType,
    item_id: item.itemId,
    item_name: item.itemName,
    description: item.description,
    price: item.price,
    quantity: item.quantity,
    total_price: item.price * item.quantity,
    metadata: item.metadata,
  }))

  const { error: itemsError } = await supabase
    .from('order_items')
    .insert(orderItems)

  if (itemsError) {
    throw new Error(`Failed to create order items: ${itemsError.message}`)
  }

  // Fetch complete order with items
  const { data: completeOrder, error: fetchError } = await supabase
    .from('orders')
    .select(`
      *,
      order_items (*)
    `)
    .eq('id', order.id)
    .single()

  if (fetchError) {
    throw new Error(`Failed to fetch order: ${fetchError.message}`)
  }

  return completeOrder
}

/**
 * Update order payment status
 */
export async function updateOrderPaymentStatus(
  orderId: string,
  status: 'PENDING' | 'PROCESSING' | 'SUCCEEDED' | 'FAILED' | 'CANCELED' | 'REFUNDED',
  orderStatus?: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'CANCELLED' | 'REFUNDED'
) {
  const supabase = await createClient()
  const updateData: any = {
    payment_status: status,
    updated_at: new Date().toISOString(),
  }

  if (orderStatus) {
    updateData.status = orderStatus
  }

  if (status === 'SUCCEEDED') {
    updateData.paid_at = new Date().toISOString()
  }

  if (orderStatus === 'COMPLETED') {
    updateData.completed_at = new Date().toISOString()
  }

  const { data, error } = await supabase
    .from('orders')
    .update(updateData)
    .eq('id', orderId)
    .select()
    .single()

  if (error) {
    throw new Error(`Failed to update order: ${error.message}`)
  }

  return data
}

/**
 * Find order by Stripe session ID
 */
export async function findOrderBySessionId(sessionId: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('orders')
    .select(`
      *,
      order_items (*)
    `)
    .eq('stripe_session_id', sessionId)
    .single()

  if (error && error.code !== 'PGRST116') {
    throw new Error(`Failed to find order: ${error.message}`)
  }

  return data
}

/**
 * Find order by Stripe payment intent ID
 */
export async function findOrderByPaymentIntentId(paymentIntentId: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('orders')
    .select(`
      *,
      order_items (*)
    `)
    .eq('stripe_payment_intent_id', paymentIntentId)
    .single()

  if (error && error.code !== 'PGRST116') {
    throw new Error(`Failed to find order: ${error.message}`)
  }

  return data
}

/**
 * Create subscription record
 */
export async function createSubscription(params: {
  userId: string
  stripeSubscriptionId: string
  stripeCustomerId: string
  stripePriceId?: string
  serviceId: string
  tierName?: string
  currentPeriodStart: Date
  currentPeriodEnd: Date
  status: string
  metadata?: any
}) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('subscriptions')
    .insert({
      user_id: params.userId,
      stripe_subscription_id: params.stripeSubscriptionId,
      stripe_customer_id: params.stripeCustomerId,
      stripe_price_id: params.stripePriceId,
      service_id: params.serviceId,
      tier_name: params.tierName,
      current_period_start: params.currentPeriodStart.toISOString(),
      current_period_end: params.currentPeriodEnd.toISOString(),
      status: params.status,
      metadata: params.metadata,
    })
    .select()
    .single()

  if (error) {
    throw new Error(`Failed to create subscription: ${error.message}`)
  }

  return data
}

/**
 * Update subscription status
 */
export async function updateSubscription(
  subscriptionId: string,
  updates: {
    status?: string
    currentPeriodStart?: Date
    currentPeriodEnd?: Date
    cancelAtPeriodEnd?: boolean
    canceledAt?: Date
    endedAt?: Date
  }
) {
  const supabase = await createClient()
  const updateData: any = {
    updated_at: new Date().toISOString(),
  }

  if (updates.status) updateData.status = updates.status
  if (updates.currentPeriodStart) updateData.current_period_start = updates.currentPeriodStart.toISOString()
  if (updates.currentPeriodEnd) updateData.current_period_end = updates.currentPeriodEnd.toISOString()
  if (updates.cancelAtPeriodEnd !== undefined) updateData.cancel_at_period_end = updates.cancelAtPeriodEnd
  if (updates.canceledAt) updateData.canceled_at = updates.canceledAt.toISOString()
  if (updates.endedAt) updateData.ended_at = updates.endedAt.toISOString()

  const { data, error } = await supabase
    .from('subscriptions')
    .update(updateData)
    .eq('id', subscriptionId)
    .select()
    .single()

  if (error) {
    throw new Error(`Failed to update subscription: ${error.message}`)
  }

  return data
}

/**
 * Find subscription by Stripe subscription ID
 */
export async function findSubscriptionByStripeId(stripeSubscriptionId: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('subscriptions')
    .select('*')
    .eq('stripe_subscription_id', stripeSubscriptionId)
    .single()

  if (error && error.code !== 'PGRST116') {
    throw new Error(`Failed to find subscription: ${error.message}`)
  }

  return data
}

/**
 * Clear user's cart after successful purchase
 */
export async function clearUserCart(userId: string) {
  const supabase = await createClient()
  
  // Get user's cart
  const { data: cart } = await supabase
    .from('carts')
    .select('id')
    .eq('user_id', userId)
    .single()

  if (cart) {
    const { error } = await supabase
      .from('cart_items')
      .delete()
      .eq('cart_id', cart.id)

    if (error) {
      console.error('Error clearing cart:', error)
    }
  }
}

/**
 * Payment Processor Abstraction Layer
 * 
 * This interface allows for easy swapping of payment processors.
 * To switch from Stripe to another provider, simply implement this interface
 * and update the payment provider configuration.
 */

export type PaymentType = 'one-time' | 'subscription'

export type PaymentStatus = 
  | 'pending'
  | 'processing'
  | 'succeeded'
  | 'failed'
  | 'canceled'
  | 'refunded'

export type SubscriptionStatus =
  | 'active'
  | 'canceled'
  | 'past_due'
  | 'unpaid'
  | 'trialing'

export interface PaymentItem {
  id: string
  name: string
  description?: string
  amount: number // in cents
  quantity: number
  metadata?: Record<string, string>
}

export interface Customer {
  id: string
  email: string
  name?: string
  phone?: string
  metadata?: Record<string, string>
}

export interface PaymentIntent {
  id: string
  amount: number
  currency: string
  status: PaymentStatus
  customerId?: string
  metadata?: Record<string, string>
  clientSecret?: string
}

export interface Subscription {
  id: string
  customerId: string
  status: SubscriptionStatus
  currentPeriodStart: Date
  currentPeriodEnd: Date
  cancelAtPeriodEnd: boolean
  items: SubscriptionItem[]
  metadata?: Record<string, string>
}

export interface SubscriptionItem {
  id: string
  priceId: string
  quantity: number
}

export interface CheckoutSession {
  id: string
  url: string
  successUrl: string
  cancelUrl: string
}

export interface CreateCheckoutSessionParams {
  items: PaymentItem[]
  customerEmail?: string
  customerId?: string
  successUrl: string
  cancelUrl: string
  metadata?: Record<string, string>
  mode: 'payment' | 'subscription'
  subscriptionData?: {
    trialPeriodDays?: number
  }
}

export interface CreatePaymentIntentParams {
  amount: number
  currency?: string
  customerEmail?: string
  customerId?: string
  metadata?: Record<string, string>
  description?: string
}

export interface CreateSubscriptionParams {
  customerEmail: string
  customerId?: string
  priceId: string
  quantity?: number
  trialPeriodDays?: number
  metadata?: Record<string, string>
}

export interface WebhookEvent {
  id: string
  type: string
  data: any
  timestamp: Date
}

/**
 * Payment Processor Interface
 * 
 * All payment processors must implement this interface.
 * This allows for easy swapping between providers.
 */
export interface PaymentProcessor {
  /**
   * Create a checkout session for one-time payments or subscriptions
   */
  createCheckoutSession(params: CreateCheckoutSessionParams): Promise<CheckoutSession>

  /**
   * Create a payment intent for custom payment flows
   */
  createPaymentIntent(params: CreatePaymentIntentParams): Promise<PaymentIntent>

  /**
   * Create a subscription
   */
  createSubscription(params: CreateSubscriptionParams): Promise<Subscription>

  /**
   * Get a payment intent by ID
   */
  getPaymentIntent(paymentIntentId: string): Promise<PaymentIntent>

  /**
   * Get a subscription by ID
   */
  getSubscription(subscriptionId: string): Promise<Subscription>

  /**
   * Cancel a subscription
   */
  cancelSubscription(subscriptionId: string, immediately?: boolean): Promise<Subscription>

  /**
   * Update a subscription
   */
  updateSubscription(
    subscriptionId: string,
    updates: {
      priceId?: string
      quantity?: number
      cancelAtPeriodEnd?: boolean
    }
  ): Promise<Subscription>

  /**
   * Create or retrieve a customer
   */
  getOrCreateCustomer(email: string, name?: string, phone?: string): Promise<Customer>

  /**
   * Verify webhook signature
   */
  verifyWebhookSignature(payload: string | Buffer, signature: string): boolean

  /**
   * Parse webhook event
   */
  parseWebhookEvent(payload: string | Buffer, signature: string): WebhookEvent
}


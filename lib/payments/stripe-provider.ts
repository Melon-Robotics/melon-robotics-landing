/**
 * Stripe Payment Provider Implementation
 * 
 * This implements the PaymentProcessor interface using Stripe.
 * To switch to another provider, create a new implementation
 * and update the payment provider configuration.
 */

import Stripe from 'stripe'
import type {
  PaymentProcessor,
  CheckoutSession,
  PaymentIntent,
  Subscription,
  Customer,
  CreateCheckoutSessionParams,
  CreatePaymentIntentParams,
  CreateSubscriptionParams,
  WebhookEvent,
  PaymentStatus,
  SubscriptionStatus,
} from './types'

export class StripePaymentProvider implements PaymentProcessor {
  private stripe: Stripe

  constructor() {
    const secretKey = process.env.STRIPE_SECRET_KEY
    if (!secretKey) {
      throw new Error('STRIPE_SECRET_KEY environment variable is required')
    }
    this.stripe = new Stripe(secretKey, {
      apiVersion: '2024-12-18.acacia',
    })
  }

  async createCheckoutSession(params: CreateCheckoutSessionParams): Promise<CheckoutSession> {
    const lineItems = params.items.map((item) => {
      const interval = item.metadata?.interval as 'month' | 'year' | undefined
      
      const productData: Stripe.Checkout.SessionCreateParams.LineItem.PriceData.ProductData = {
        name: item.name,
        description: item.description,
        metadata: item.metadata,
      }
      
      // Add images if provided (Stripe requires absolute URLs)
      if (item.images && item.images.length > 0) {
        productData.images = item.images
      }
      
      return {
        price_data: {
          currency: 'usd',
          product_data: productData,
          unit_amount: item.amount,
          recurring: params.mode === 'subscription' ? {
            interval: interval || 'year', // Use metadata interval or default to annual
          } : undefined,
        },
        quantity: item.quantity,
      }
    })

    const sessionParams: Stripe.Checkout.SessionCreateParams = {
      mode: params.mode,
      line_items: lineItems,
      success_url: params.successUrl,
      cancel_url: params.cancelUrl,
      metadata: params.metadata,
    }

    if (params.customerEmail) {
      sessionParams.customer_email = params.customerEmail
    }

    if (params.customerId) {
      sessionParams.customer = params.customerId
    }

    if (params.mode === 'subscription' && params.subscriptionData) {
      sessionParams.subscription_data = {
        trial_period_days: params.subscriptionData.trialPeriodDays,
        metadata: params.metadata,
      }
    }

    const session = await this.stripe.checkout.sessions.create(sessionParams)

    return {
      id: session.id,
      url: session.url || '',
      successUrl: params.successUrl,
      cancelUrl: params.cancelUrl,
    }
  }

  async createPaymentIntent(params: CreatePaymentIntentParams): Promise<PaymentIntent> {
    const intentParams: Stripe.PaymentIntentCreateParams = {
      amount: params.amount,
      currency: params.currency || 'usd',
      metadata: params.metadata,
      description: params.description,
    }

    if (params.customerEmail) {
      const customer = await this.getOrCreateCustomer(params.customerEmail)
      intentParams.customer = customer.id
    } else if (params.customerId) {
      intentParams.customer = params.customerId
    }

    const intent = await this.stripe.paymentIntents.create(intentParams)

    return {
      id: intent.id,
      amount: intent.amount,
      currency: intent.currency,
      status: this.mapStripePaymentStatus(intent.status),
      customerId: typeof intent.customer === 'string' ? intent.customer : intent.customer?.id,
      metadata: intent.metadata,
      clientSecret: intent.client_secret || undefined,
    }
  }

  async createSubscription(params: CreateSubscriptionParams): Promise<Subscription> {
    let customerId = params.customerId
    if (!customerId) {
      const customer = await this.getOrCreateCustomer(params.customerEmail, undefined, undefined)
      customerId = customer.id
    }

    const subscriptionParams: Stripe.SubscriptionCreateParams = {
      customer: customerId,
      items: [{
        price: params.priceId,
        quantity: params.quantity || 1,
      }],
      metadata: params.metadata,
    }

    if (params.trialPeriodDays) {
      subscriptionParams.trial_period_days = params.trialPeriodDays
    }

    const subscription = await this.stripe.subscriptions.create(subscriptionParams)

    return this.mapStripeSubscription(subscription)
  }

  async getPaymentIntent(paymentIntentId: string): Promise<PaymentIntent> {
    const intent = await this.stripe.paymentIntents.retrieve(paymentIntentId)

    return {
      id: intent.id,
      amount: intent.amount,
      currency: intent.currency,
      status: this.mapStripePaymentStatus(intent.status),
      customerId: typeof intent.customer === 'string' ? intent.customer : intent.customer?.id,
      metadata: intent.metadata,
      clientSecret: intent.client_secret || undefined,
    }
  }

  async getSubscription(subscriptionId: string): Promise<Subscription> {
    const subscription = await this.stripe.subscriptions.retrieve(subscriptionId)
    return this.mapStripeSubscription(subscription)
  }

  async cancelSubscription(subscriptionId: string, immediately = false): Promise<Subscription> {
    const subscription = await this.stripe.subscriptions.update(subscriptionId, {
      cancel_at_period_end: !immediately,
    })

    if (immediately) {
      await this.stripe.subscriptions.cancel(subscriptionId)
      const canceled = await this.stripe.subscriptions.retrieve(subscriptionId)
      return this.mapStripeSubscription(canceled)
    }

    return this.mapStripeSubscription(subscription)
  }

  async updateSubscription(
    subscriptionId: string,
    updates: {
      priceId?: string
      quantity?: number
      cancelAtPeriodEnd?: boolean
    }
  ): Promise<Subscription> {
    const updateParams: Stripe.SubscriptionUpdateParams = {}

    if (updates.priceId !== undefined) {
      const subscription = await this.stripe.subscriptions.retrieve(subscriptionId)
      updateParams.items = [{
        id: subscription.items.data[0].id,
        price: updates.priceId,
      }]
    }

    if (updates.quantity !== undefined) {
      const subscription = await this.stripe.subscriptions.retrieve(subscriptionId)
      updateParams.items = [{
        id: subscription.items.data[0].id,
        quantity: updates.quantity,
      }]
    }

    if (updates.cancelAtPeriodEnd !== undefined) {
      updateParams.cancel_at_period_end = updates.cancelAtPeriodEnd
    }

    const subscription = await this.stripe.subscriptions.update(subscriptionId, updateParams)
    return this.mapStripeSubscription(subscription)
  }

  async getOrCreateCustomer(email: string, name?: string, phone?: string): Promise<Customer> {
    // Search for existing customer
    const existingCustomers = await this.stripe.customers.list({
      email,
      limit: 1,
    })

    if (existingCustomers.data.length > 0) {
      const customer = existingCustomers.data[0]
      return {
        id: customer.id,
        email: customer.email || email,
        name: customer.name || name,
        phone: customer.phone || phone,
        metadata: customer.metadata,
      }
    }

    // Create new customer
    const customer = await this.stripe.customers.create({
      email,
      name,
      phone,
    })

    return {
      id: customer.id,
      email: customer.email || email,
      name: customer.name || name,
      phone: customer.phone || phone,
      metadata: customer.metadata,
    }
  }

  verifyWebhookSignature(payload: string | Buffer, signature: string): boolean {
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
    if (!webhookSecret) {
      throw new Error('STRIPE_WEBHOOK_SECRET environment variable is required')
    }

    try {
      this.stripe.webhooks.constructEvent(payload, signature, webhookSecret)
      return true
    } catch (error) {
      return false
    }
  }

  parseWebhookEvent(payload: string | Buffer, signature: string): WebhookEvent {
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
    if (!webhookSecret) {
      throw new Error('STRIPE_WEBHOOK_SECRET environment variable is required')
    }

    const event = this.stripe.webhooks.constructEvent(payload, signature, webhookSecret)

    return {
      id: event.id,
      type: event.type,
      data: event.data,
      timestamp: new Date(event.created * 1000),
    }
  }

  private mapStripePaymentStatus(status: Stripe.PaymentIntent.Status): PaymentStatus {
    const statusMap: Record<Stripe.PaymentIntent.Status, PaymentStatus> = {
      'requires_payment_method': 'pending',
      'requires_confirmation': 'pending',
      'requires_action': 'processing',
      'processing': 'processing',
      'requires_capture': 'processing',
      'succeeded': 'succeeded',
      'canceled': 'canceled',
    }
    return statusMap[status] || 'pending'
  }

  private mapStripeSubscriptionStatus(status: Stripe.Subscription.Status): SubscriptionStatus {
    const statusMap: Record<Stripe.Subscription.Status, SubscriptionStatus> = {
      'active': 'active',
      'canceled': 'canceled',
      'incomplete': 'past_due',
      'incomplete_expired': 'unpaid',
      'past_due': 'past_due',
      'trialing': 'trialing',
      'unpaid': 'unpaid',
      'paused': 'active', // Map paused to active for simplicity
    }
    return statusMap[status] || 'active'
  }

  private mapStripeSubscription(subscription: Stripe.Subscription): Subscription {
    return {
      id: subscription.id,
      customerId: typeof subscription.customer === 'string' 
        ? subscription.customer 
        : subscription.customer.id,
      status: this.mapStripeSubscriptionStatus(subscription.status),
      currentPeriodStart: new Date(subscription.current_period_start * 1000),
      currentPeriodEnd: new Date(subscription.current_period_end * 1000),
      cancelAtPeriodEnd: subscription.cancel_at_period_end,
      items: subscription.items.data.map((item) => ({
        id: item.id,
        priceId: typeof item.price === 'string' ? item.price : item.price.id,
        quantity: item.quantity || 1,
      })),
      metadata: subscription.metadata,
    }
  }
}


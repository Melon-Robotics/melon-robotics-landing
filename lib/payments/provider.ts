/**
 * Payment Provider Factory
 * 
 * This is the single point of configuration for the payment processor.
 * To switch payment providers, simply change the implementation here.
 */

import { StripePaymentProvider } from './stripe-provider'
import type { PaymentProcessor } from './types'

let paymentProvider: PaymentProcessor | null = null

/**
 * Get the configured payment provider
 * 
 * Currently configured to use Stripe. To switch providers:
 * 1. Create a new provider implementation (e.g., PayPalProvider)
 * 2. Update the getPaymentProvider function to return the new provider
 * 3. All existing code will automatically use the new provider
 */
export function getPaymentProvider(): PaymentProcessor {
  if (!paymentProvider) {
    const providerType = process.env.PAYMENT_PROVIDER || 'stripe'
    
    switch (providerType) {
      case 'stripe':
        paymentProvider = new StripePaymentProvider()
        break
      // Add other providers here:
      // case 'paypal':
      //   paymentProvider = new PayPalProvider()
      //   break
      default:
        throw new Error(`Unsupported payment provider: ${providerType}`)
    }
  }
  
  return paymentProvider
}

/**
 * Reset the payment provider (useful for testing)
 */
export function resetPaymentProvider(): void {
  paymentProvider = null
}



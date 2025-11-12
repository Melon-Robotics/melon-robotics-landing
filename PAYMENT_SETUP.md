# Payment Processing Setup Guide

This guide explains how to set up and configure the payment processing system for the Melon Robotics website.

## Architecture Overview

The payment system uses a **plug-and-play architecture** that allows you to easily switch between payment processors (e.g., Stripe, PayPal, etc.) without changing your application code.

### Key Components

1. **Payment Abstraction Layer** (`lib/payments/types.ts`)
   - Defines the `PaymentProcessor` interface that all payment providers must implement
   - Provides type-safe payment operations

2. **Stripe Provider** (`lib/payments/stripe-provider.ts`)
   - Implements the `PaymentProcessor` interface using Stripe
   - Handles all Stripe-specific operations

3. **Payment Provider Factory** (`lib/payments/provider.ts`)
   - Single point of configuration for payment processors
   - To switch providers, simply update this file

4. **Product/Service Payment Config** (`lib/payments/products.ts`)
   - Maps products and services to their payment configurations
   - Defines prices, subscription tiers, and metadata

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Payment Provider Configuration
PAYMENT_PROVIDER=stripe  # Options: 'stripe' (default)

# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_...  # Your Stripe secret key
STRIPE_WEBHOOK_SECRET=whsec_...  # Your Stripe webhook signing secret

# Application Configuration
NEXT_PUBLIC_BASE_URL=http://localhost:3000  # Your application URL
```

### Getting Stripe Keys

1. **Create a Stripe Account**
   - Go to https://stripe.com and create an account
   - Complete the account setup process

2. **Get Your API Keys**
   - Navigate to: https://dashboard.stripe.com/test/apikeys
   - Copy your **Publishable key** (starts with `pk_test_`)
   - Copy your **Secret key** (starts with `sk_test_`)
   - Add the secret key to `STRIPE_SECRET_KEY`

3. **Set Up Webhooks**
   - Navigate to: https://dashboard.stripe.com/test/webhooks
   - Click "Add endpoint"
   - Set the endpoint URL to: `https://yourdomain.com/api/payments/webhook`
   - Select events to listen for:
     - `checkout.session.completed`
     - `payment_intent.succeeded`
     - `payment_intent.payment_failed`
     - `customer.subscription.created`
     - `customer.subscription.updated`
     - `customer.subscription.deleted`
   - Copy the **Signing secret** (starts with `whsec_`)
   - Add it to `STRIPE_WEBHOOK_SECRET`

4. **For Production**
   - Switch to live mode in Stripe dashboard
   - Use live API keys instead of test keys
   - Update webhook endpoint to production URL

## Product & Service Payment Configuration

### Products

Products are configured in `lib/payments/products.ts`:

- **BlackBox**: Free app (price: 0)
- **PneumaForce**: Custom pricing (requires quote)
- **Melon Scout**: Custom pricing (requires quote)

### Services

Services are configured in `lib/payments/products.ts`:

- **ROV Inspection**: Subscription tiers (Bronze, Silver, Gold, Enterprise)
- **Photogrammetry**: Custom pricing (requires quote)
- **Ocean Data**: Subscription tiers (Core, Pro, Enterprise, Fleet)
- **Safety Standards**: Custom pricing (requires quote)

### Adding New Products/Services

1. Add payment configuration to `lib/payments/products.ts`
2. Update the `PRODUCT_PAYMENTS` or `SERVICE_PAYMENTS` object
3. For subscriptions, add tier configurations

## API Routes

### POST `/api/payments/checkout`
Creates a checkout session for products or services.

**Request Body:**
```json
{
  "type": "product" | "service" | "subscription",
  "id": "product-or-service-id",
  "tier": "tier-name" (optional, for subscriptions),
  "customerEmail": "customer@example.com" (optional),
  "successUrl": "https://..." (optional),
  "cancelUrl": "https://..." (optional)
}
```

**Response:**
```json
{
  "sessionId": "cs_...",
  "url": "https://checkout.stripe.com/..."
}
```

### POST `/api/payments/webhook`
Handles webhook events from Stripe. This endpoint should be publicly accessible.

### GET `/api/payments/subscription?id=sub_...`
Gets subscription details.

### DELETE `/api/payments/subscription?id=sub_...&immediately=true`
Cancels a subscription.

### PATCH `/api/payments/subscription?id=sub_...`
Updates a subscription.

## UI Components

### CheckoutButton
A button component that initiates checkout for products or services.

```tsx
import { CheckoutButton } from '@/components/payments/checkout-button'

<CheckoutButton
  type="product"
  id="blackbox"
  customerEmail="customer@example.com"
>
  Buy Now
</CheckoutButton>
```

### SubscribeButton
A button component specifically for subscription services.

```tsx
import { SubscribeButton } from '@/components/payments/subscribe-button'

<SubscribeButton
  serviceId="rov-inspection"
  tierName="Gold"
  tierPrice="$9,000/yr"
  isRecommended={true}
/>
```

## Switching Payment Processors

To switch from Stripe to another payment processor:

1. **Create a new provider implementation**
   - Create a new file: `lib/payments/[provider]-provider.ts`
   - Implement the `PaymentProcessor` interface
   - Follow the same pattern as `stripe-provider.ts`

2. **Update the provider factory**
   - Edit `lib/payments/provider.ts`
   - Add a case for your new provider
   - Update the default provider if needed

3. **Update environment variables**
   - Add new environment variables for the new provider
   - Update `.env.local`

4. **Test thoroughly**
   - Test all payment flows
   - Verify webhook handling
   - Test subscription management

## Testing

### Test Cards (Stripe)

Use these test card numbers in Stripe test mode:

- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- **3D Secure**: `4000 0025 0000 3155`

Use any future expiry date, any CVC, and any ZIP code.

### Testing Subscriptions

1. Use test card: `4242 4242 4242 4242`
2. Complete checkout
3. Check Stripe dashboard for subscription
4. Test webhook events

## Troubleshooting

### Webhook Not Receiving Events

1. Check webhook endpoint URL is correct
2. Verify webhook secret is set correctly
3. Check Stripe dashboard for webhook delivery logs
4. Ensure endpoint is publicly accessible (not localhost)

### Payment Fails

1. Check Stripe dashboard for error details
2. Verify API keys are correct
3. Check product/service configuration
4. Review browser console for errors

### Subscription Not Created

1. Verify subscription tier configuration
2. Check Stripe logs for errors
3. Ensure webhook is properly configured
4. Verify customer email is provided

## Security Considerations

1. **Never expose secret keys** in client-side code
2. **Always verify webhook signatures** before processing
3. **Use HTTPS** in production
4. **Validate all input** in API routes
5. **Implement rate limiting** on payment endpoints
6. **Log all payment events** for audit purposes

## Support

For issues or questions:
- Check Stripe documentation: https://stripe.com/docs
- Review application logs
- Contact development team


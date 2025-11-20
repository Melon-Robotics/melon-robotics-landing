# Authentication & User Management Setup Guide

This guide explains how to set up authentication, user carts, and purchase history for the Melon Robotics website.

## Overview

The authentication system uses:
- **NextAuth.js** for session management and authentication
- **Prisma** with **PostgreSQL** for database storage
- **bcryptjs** for password hashing
- **JWT** for session tokens

## Database Setup

### 1. Install PostgreSQL

You'll need a PostgreSQL database. Options:
- **Local**: Install PostgreSQL locally
- **Cloud**: Use services like:
  - [Supabase](https://supabase.com) (Free tier available)
  - [Neon](https://neon.tech) (Free tier available)
  - [Railway](https://railway.app) (Free tier available)
  - [Vercel Postgres](https://vercel.com/storage/postgres)

### 2. Configure Database URL

Add to your `.env.local` file:

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/melon_robotics?schema=public"
```

For cloud providers, use the connection string they provide.

### 3. Run Database Migrations

```bash
# Generate Prisma Client
npx prisma generate

# Run migrations to create tables
npx prisma migrate dev --name init

# (Optional) View database in Prisma Studio
npx prisma studio
```

## Environment Variables

Add these to your `.env.local` file:

```bash
# Database
DATABASE_URL="postgresql://..."

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# Generate a secret with:
# openssl rand -base64 32
```

## Features

### Authentication

- **User Registration**: `/auth/register`
  - Email and password required
  - Optional name and phone
  - Password must be at least 8 characters
  - Automatically creates a cart for new users

- **User Login**: `/auth/login`
  - Email and password authentication
  - JWT-based sessions (30 days)
  - Automatic redirect after login

### Shopping Cart

- **Add to Cart**: `POST /api/cart`
  - Supports products, services, and subscriptions
  - Automatically increments quantity if item exists
  - Stores metadata (tier info, subscription details, etc.)

- **View Cart**: `GET /api/cart`
  - Returns all cart items with details
  - Calculates totals

- **Update Quantity**: `PATCH /api/cart/[itemId]`
  - Update item quantity
  - Remove item if quantity is 0

- **Remove Item**: `DELETE /api/cart/[itemId]`
  - Remove specific item from cart

- **Clear Cart**: `DELETE /api/cart`
  - Remove all items from cart

### Purchase History

- **List Orders**: `GET /api/orders`
  - Returns paginated list of user's orders
  - Includes order status and totals
  - Query params: `limit`, `offset`

- **Order Details**: `GET /api/orders/[orderId]`
  - Full order details with all items
  - Payment status and timestamps
  - Customer information snapshot

### Protected Routes

The following routes require authentication:
- `/cart` - Shopping cart
- `/orders` - Purchase history
- `/orders/[orderId]` - Order details
- `/profile` - User profile (if implemented)

Unauthenticated users are redirected to `/auth/login`.

## Database Schema

### Users
- User accounts with email/password authentication
- Role-based access (CUSTOMER, ADMIN, STAFF)
- Linked to carts, orders, and subscriptions

### Carts
- One cart per user
- Stores items before checkout
- Automatically cleared after successful purchase

### Orders
- Complete order history
- Links to Stripe payment sessions
- Stores customer info snapshot
- Tracks payment and order status

### Subscriptions
- Active subscription management
- Links to Stripe subscriptions
- Tracks billing periods and status

## API Usage Examples

### Add Item to Cart

```typescript
const response = await fetch('/api/cart', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    itemType: 'SUBSCRIPTION',
    itemId: 'rov-gold',
    itemName: 'Gold Subscription',
    price: 900000, // $9,000 in cents
    quantity: 1,
    metadata: {
      serviceId: 'rov-inspection',
      tier: 'gold',
    },
  }),
})
```

### Get User Orders

```typescript
const response = await fetch('/api/orders?limit=10&offset=0')
const { orders, pagination } = await response.json()
```

## Webhook Integration

The payment webhook (`/api/payments/webhook`) automatically:
- Creates orders when checkout completes
- Updates order status on payment success/failure
- Creates subscription records
- Clears user cart after successful purchase

## Security Features

1. **Password Hashing**: bcrypt with 12 rounds
2. **JWT Sessions**: Secure token-based sessions
3. **Protected Routes**: Middleware enforces authentication
4. **Input Validation**: All API routes validate input
5. **SQL Injection Protection**: Prisma ORM prevents SQL injection
6. **CSRF Protection**: NextAuth handles CSRF tokens

## Testing

### Create Test User

1. Navigate to `/auth/register`
2. Fill in registration form
3. Sign in at `/auth/login`

### Test Cart Flow

1. Sign in
2. Add items to cart via API or UI
3. View cart at `/cart`
4. Proceed to checkout
5. Complete payment
6. Cart automatically clears
7. Order appears in `/orders`

## Troubleshooting

### Database Connection Issues

- Verify `DATABASE_URL` is correct
- Check database is running
- Ensure network access is allowed (for cloud databases)

### Authentication Not Working

- Verify `NEXTAUTH_SECRET` is set
- Check `NEXTAUTH_URL` matches your domain
- Clear browser cookies and try again

### Cart Not Persisting

- Ensure user is authenticated
- Check database connection
- Verify Prisma migrations ran successfully

### Orders Not Appearing

- Check webhook is configured correctly
- Verify webhook events are being received
- Check database for order records
- Review webhook logs in Stripe dashboard

## Production Considerations

1. **Use Strong Secrets**: Generate strong `NEXTAUTH_SECRET`
2. **HTTPS Only**: Always use HTTPS in production
3. **Database Backups**: Set up regular database backups
4. **Rate Limiting**: Consider adding rate limiting to auth endpoints
5. **Email Verification**: Consider adding email verification
6. **Password Reset**: Implement password reset functionality
7. **2FA**: Consider adding two-factor authentication for admin users

## Next Steps

- [ ] Set up email service for notifications
- [ ] Implement password reset flow
- [ ] Add email verification
- [ ] Create admin dashboard
- [ ] Add subscription management UI
- [ ] Implement order cancellation/refunds




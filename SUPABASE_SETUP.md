# Supabase Setup Guide

This guide explains how to set up Supabase for database and authentication in the Melon Robotics website.

## Overview

The application now uses **Supabase** for:
- **PostgreSQL Database** - Managed PostgreSQL with Row Level Security
- **Authentication** - Built-in auth with email/password
- **Real-time capabilities** - Available for future features
- **Storage** - Available for file uploads

## Quick Start

### 1. Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in
3. Click "New Project"
4. Fill in project details:
   - **Name**: melon-robotics (or your preferred name)
   - **Database Password**: Choose a strong password (save it!)
   - **Region**: Choose closest to your users
5. Wait for project to be created (~2 minutes)

### 2. Get Your API Keys

1. Go to **Settings** → **API**
2. Copy the following:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **anon/public key** (starts with `eyJ...`)

### 3. Set Up Environment Variables

Create or update `.env.local`:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# Stripe (existing)
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 4. Run Database Migrations

#### Option A: Using Supabase Dashboard (Recommended)

1. Go to **SQL Editor** in Supabase dashboard
2. Open the file: `supabase/migrations/001_initial_schema.sql`
3. Copy the entire SQL content
4. Paste into SQL Editor
5. Click **Run**

#### Option B: Using Supabase CLI

```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link your project
supabase link --project-ref your-project-ref

# Run migrations
supabase db push
```

### 5. Verify Setup

1. Check **Table Editor** in Supabase dashboard
2. You should see these tables:
   - `users`
   - `carts`
   - `cart_items`
   - `orders`
   - `order_items`
   - `subscriptions`

3. Check **Authentication** → **Policies**
   - Row Level Security (RLS) should be enabled
   - Policies should be created

## Database Schema

The schema includes:

### Users
- Extends Supabase `auth.users`
- Stores profile information (name, phone, role)
- Automatically created via database trigger

### Carts
- One cart per user
- Automatically created on user signup
- Protected by RLS

### Cart Items
- Items in user's cart
- Supports products, services, subscriptions
- Stores metadata (tier info, etc.)

### Orders
- Complete order history
- Links to Stripe payments
- Customer info snapshot

### Order Items
- Line items for each order
- Preserves pricing at time of purchase

### Subscriptions
- Active subscriptions
- Links to Stripe subscriptions
- Tracks billing periods

## Authentication

### User Registration

Users can register at `/auth/register`:
- Email and password required
- Optional name and phone
- Password must be at least 8 characters
- Profile and cart created automatically

### User Login

Users can login at `/auth/login`:
- Email and password authentication
- Sessions managed by Supabase
- Automatic redirect after login

### Session Management

- Sessions are managed via HTTP-only cookies
- Middleware automatically refreshes sessions
- Protected routes require authentication

## Row Level Security (RLS)

All tables have RLS enabled with policies:

- **Users**: Can view/update own profile
- **Carts**: Can manage own cart
- **Cart Items**: Can manage items in own cart
- **Orders**: Can view own orders
- **Order Items**: Can view items in own orders
- **Subscriptions**: Can view own subscriptions

## API Routes

All API routes use Supabase client:

- `/api/auth/register` - User registration
- `/api/auth/login` - User login
- `/api/auth/logout` - User logout
- `/api/cart` - Cart management
- `/api/orders` - Order history
- `/api/payments/webhook` - Payment webhooks

## Testing

### 1. Create Test User

1. Navigate to `/auth/register`
2. Fill in registration form
3. Check Supabase dashboard → **Authentication** → **Users**
4. User should appear with profile in `users` table

### 2. Test Cart

1. Sign in at `/auth/login`
2. Add items to cart via API or UI
3. View cart at `/cart`
4. Check `carts` and `cart_items` tables in Supabase

### 3. Test Orders

1. Complete a purchase
2. Check `orders` and `order_items` tables
3. View orders at `/orders`

## Production Considerations

### 1. Environment Variables

- Use production Supabase project
- Never commit `.env.local` to git
- Use environment variables in deployment platform

### 2. Database Backups

- Supabase automatically backs up daily
- Can configure additional backup schedules
- Test restore procedures

### 3. Security

- RLS policies protect data
- Use service role key only server-side (never expose)
- Review and test all RLS policies
- Enable email confirmation (optional)

### 4. Performance

- Add database indexes as needed
- Use connection pooling for high traffic
- Monitor query performance in Supabase dashboard

### 5. Monitoring

- Set up alerts in Supabase dashboard
- Monitor API usage
- Track authentication events
- Review error logs

## Troubleshooting

### "Invalid API key"

- Verify `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Check keys in Supabase dashboard → Settings → API

### "User not found" errors

- Check if user exists in `auth.users` table
- Verify trigger created profile in `users` table
- Check RLS policies allow access

### "Row Level Security" errors

- Verify RLS is enabled on tables
- Check policies are created correctly
- Ensure user is authenticated

### Migration errors

- Check SQL syntax in migration file
- Verify you have correct permissions
- Review Supabase logs for details

### Cart not persisting

- Verify user is authenticated
- Check RLS policies on `carts` and `cart_items`
- Ensure cart was created (check trigger)

## Next Steps

- [ ] Set up email templates in Supabase
- [ ] Configure email confirmation (optional)
- [ ] Set up password reset flow
- [ ] Add social auth providers (Google, GitHub, etc.)
- [ ] Configure rate limiting
- [ ] Set up monitoring and alerts
- [ ] Review and optimize RLS policies
- [ ] Add database indexes for performance

## Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Auth Guide](https://supabase.com/docs/guides/auth)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)









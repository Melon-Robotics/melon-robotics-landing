"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'

interface CheckoutButtonProps {
  type: 'product' | 'service' | 'subscription'
  id: string
  tier?: string
  customerEmail?: string
  className?: string
  children: React.ReactNode
  variant?: 'default' | 'outline' | 'ghost'
  onSuccess?: () => void
  onError?: (error: string) => void
}

export function CheckoutButton({
  type,
  id,
  tier,
  customerEmail,
  className,
  children,
  variant = 'default',
  onSuccess,
  onError,
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/payments/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type,
          id,
          tier,
          customerEmail,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        if (data.requiresQuote) {
          // Redirect to contact page for custom pricing
          window.location.href = '/contact'
          return
        }
        throw new Error(data.error || 'Failed to create checkout session')
      }

      if (data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url
        onSuccess?.()
      } else {
        throw new Error('No checkout URL returned')
      }
    } catch (error) {
      console.error('Checkout error:', error)
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred'
      onError?.(errorMessage)
      alert(`Checkout failed: ${errorMessage}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button
      onClick={handleCheckout}
      disabled={loading}
      className={className}
      variant={variant}
    >
      {loading ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Processing...
        </>
      ) : (
        children
      )}
    </Button>
  )
}





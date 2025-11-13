"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'

interface ScoutCheckoutButtonProps {
  tier: string
  quantity: number
  className?: string
  children: React.ReactNode
  variant?: 'default' | 'outline' | 'ghost'
  onSuccess?: () => void
  onError?: (error: string) => void
}

export function ScoutCheckoutButton({
  tier,
  quantity,
  className,
  children,
  variant = 'default',
  onSuccess,
  onError,
}: ScoutCheckoutButtonProps) {
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
          type: 'product',
          id: 'scout',
          tier,
          quantity,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        if (data.requiresQuote) {
          window.location.href = '/contact'
          return
        }
        throw new Error(data.error || 'Failed to create checkout session')
      }

      if (data.url) {
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


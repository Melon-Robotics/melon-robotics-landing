"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Loader2, ShoppingCart, Check } from 'lucide-react'
import { useUser } from '@/hooks/use-user'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'

interface AddToCartButtonProps {
  type: 'product' | 'service' | 'subscription'
  id: string
  name: string
  price: number // in cents
  quantity?: number
  tier?: string
  metadata?: Record<string, any>
  className?: string
  children?: React.ReactNode
  variant?: 'default' | 'outline' | 'ghost'
  onSuccess?: () => void
  onError?: (error: string) => void
}

export function AddToCartButton({
  type,
  id,
  name,
  price,
  quantity = 1,
  tier,
  metadata,
  className,
  children,
  variant = 'default',
  onSuccess,
  onError,
}: AddToCartButtonProps) {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const { user } = useUser()
  const router = useRouter()
  const pathname = usePathname()

  const handleAddToCart = async () => {
    if (!user) {
      router.push('/auth/login?redirect=' + encodeURIComponent(pathname))
      return
    }

    setLoading(true)
    setSuccess(false)

    try {
      // Determine item type for cart
      let itemType: 'PRODUCT' | 'SERVICE' | 'SUBSCRIPTION' = 'PRODUCT'
      if (type === 'service') itemType = 'SERVICE'
      if (type === 'subscription') itemType = 'SUBSCRIPTION'

      // Build metadata
      const itemMetadata = {
        ...metadata,
        ...(tier && { tier }),
      }

      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          itemType,
          itemId: id,
          itemName: name,
          price,
          quantity,
          metadata: itemMetadata,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to add item to cart')
      }

      setSuccess(true)
      onSuccess?.()

      // Dispatch event to update cart count
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('cartUpdated'))
      }

      // Reset success state after 2 seconds
      setTimeout(() => setSuccess(false), 2000)
    } catch (error) {
      console.error('Add to cart error:', error)
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred'
      onError?.(errorMessage)
      alert(`Failed to add to cart: ${errorMessage}`)
    } finally {
      setLoading(false)
    }
  }

  if (!user) {
    return (
      <Link href={`/auth/login?redirect=${encodeURIComponent(pathname)}`}>
        <Button className={className} variant={variant}>
          {children || 'Sign In to Add to Cart'}
        </Button>
      </Link>
    )
  }

  return (
    <Button
      onClick={handleAddToCart}
      disabled={loading || success}
      className={className}
      variant={variant}
    >
      {loading ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Adding...
        </>
      ) : success ? (
        <>
          <Check className="w-4 h-4 mr-2" />
          Added!
        </>
      ) : (
        <>
          <ShoppingCart className="w-4 h-4 mr-2" />
          {children || 'Add to Cart'}
        </>
      )}
    </Button>
  )
}


"use client"

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { X, Plus, Minus, ShoppingCart, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { CheckoutButton } from '@/components/payments/checkout-button'

interface CartItem {
  id: string
  itemType: string
  itemId: string
  itemName: string
  price: number
  quantity: number
  metadata?: any
}

interface Cart {
  id: string
  items: CartItem[]
}

export function Cart() {
  const [cart, setCart] = useState<Cart | null>(null)
  const [loading, setLoading] = useState(true)
  const [updating, setUpdating] = useState<string | null>(null)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    setUser(user)
    
    if (user) {
      fetchCart()
    } else {
      setLoading(false)
    }
  }

  const fetchCart = async () => {
    try {
      const response = await fetch('/api/cart')
      if (response.ok) {
        const data = await response.json()
        setCart(data)
      }
    } catch (error) {
      console.error('Error fetching cart:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateQuantity = async (itemId: string, newQuantity: number) => {
    if (newQuantity < 0) return

    setUpdating(itemId)
    try {
      const response = await fetch(`/api/cart/${itemId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity: newQuantity }),
      })

      if (response.ok) {
        await fetchCart()
        window.dispatchEvent(new Event('cartUpdated'))
      }
    } catch (error) {
      console.error('Error updating cart:', error)
    } finally {
      setUpdating(null)
    }
  }

  const removeItem = async (itemId: string) => {
    setUpdating(itemId)
    try {
      const response = await fetch(`/api/cart/${itemId}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        await fetchCart()
        window.dispatchEvent(new Event('cartUpdated'))
      }
    } catch (error) {
      console.error('Error removing item:', error)
    } finally {
      setUpdating(null)
    }
  }

  const clearCart = async () => {
    try {
      const response = await fetch('/api/cart', {
        method: 'DELETE',
      })

      if (response.ok) {
        await fetchCart()
        window.dispatchEvent(new Event('cartUpdated'))
      }
    } catch (error) {
      console.error('Error clearing cart:', error)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="w-6 h-6 animate-spin text-amber-500" />
      </div>
    )
  }

  if (!user) {
    return (
      <div className="text-center p-8 border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625]">
        <ShoppingCart className="w-12 h-12 text-gray-500 mx-auto mb-4" />
        <p className="text-gray-400 mb-4">Please sign in to view your cart</p>
        <Link href="/auth/login">
          <Button className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30">
            Sign In
          </Button>
        </Link>
      </div>
    )
  }

  if (!cart || cart.items.length === 0) {
    return (
      <div className="text-center p-8 border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625]">
        <ShoppingCart className="w-12 h-12 text-gray-500 mx-auto mb-4" />
        <p className="text-gray-400 mb-4">Your cart is empty</p>
        <Link href="/products">
          <Button className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30">
            Browse Products
          </Button>
        </Link>
      </div>
    )
  }

  const total = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-light text-white/90">Shopping Cart</h2>
        <Button
          variant="outline"
          onClick={clearCart}
          className="text-xs text-gray-400 hover:text-white"
        >
          Clear Cart
        </Button>
      </div>

      <div className="space-y-4">
        {cart.items.map((item) => (
          <div
            key={item.id}
            className="border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-light text-white/90 mb-2">{item.itemName}</h3>
                <p className="text-sm text-gray-500 mb-4">
                  {item.itemType === 'SUBSCRIPTION' && item.metadata?.tier && (
                    <span className="text-amber-500/80">Tier: {item.metadata.tier}</span>
                  )}
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 border border-gray-700/50">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={updating === item.id || item.quantity <= 1}
                      className="h-8 w-8 p-0"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="px-4 text-white/90">{item.quantity}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      disabled={updating === item.id}
                      className="h-8 w-8 p-0"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="text-lg font-light text-amber-500/90">
                    ${((item.price * item.quantity) / 100).toFixed(2)}
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeItem(item.id)}
                disabled={updating === item.id}
                className="text-gray-400 hover:text-red-400"
              >
                {updating === item.id ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <X className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-800/50 pt-6">
        <div className="flex items-center justify-between mb-6">
          <span className="text-xl font-light text-white/90">Total</span>
          <span className="text-2xl font-light text-amber-500/90">
            ${(total / 100).toFixed(2)}
          </span>
        </div>
        <CheckoutButton
          type="product"
          id="cart"
          className="w-full bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 py-6 text-lg font-medium"
        >
          Proceed to Checkout
        </CheckoutButton>
      </div>
    </div>
  )
}


"use client"

import { useState, useEffect } from 'react'
import { useUser } from './use-user'

export function useCartCount(): number {
  const [count, setCount] = useState(0)
  const { user } = useUser()

  useEffect(() => {
    if (!user) {
      setCount(0)
      return
    }

    const fetchCartCount = async () => {
      try {
        const response = await fetch('/api/cart')
        if (response.ok) {
          const data = await response.json()
          const itemCount = data?.items?.reduce((sum: number, item: any) => sum + item.quantity, 0) || 0
          setCount(itemCount)
        }
      } catch (error) {
        console.error('Error fetching cart count:', error)
      }
    }

    fetchCartCount()

    // Listen for storage events (when cart is updated in another tab)
    const handleStorageChange = () => {
      fetchCartCount()
    }
    window.addEventListener('storage', handleStorageChange)

    // Also listen for custom cart update events
    const handleCartUpdate = () => {
      fetchCartCount()
    }
    window.addEventListener('cartUpdated', handleCartUpdate)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('cartUpdated', handleCartUpdate)
    }
  }, [user])

  return count
}







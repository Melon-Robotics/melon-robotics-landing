"use client"

import { Cart } from '@/components/cart/cart'

export default function CartPage() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white pt-20">
      <div className="container-responsive max-w-4xl py-16 px-4">
        <Cart />
      </div>
    </div>
  )
}


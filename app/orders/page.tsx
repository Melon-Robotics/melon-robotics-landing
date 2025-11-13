"use client"

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Loader2, Package, Calendar, DollarSign, CheckCircle2, XCircle, Clock } from 'lucide-react'

interface OrderItem {
  id: string
  itemType: string
  itemId: string
  itemName: string
  price: number
  quantity: number
  totalPrice: number
}

interface Order {
  id: string
  totalAmount: number
  currency: string
  status: string
  paymentStatus: string
  createdAt: string
  paidAt?: string
  items: OrderItem[]
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    setUser(user)
    
    if (user) {
      fetchOrders()
    } else {
      setLoading(false)
    }
  }

  const fetchOrders = async () => {
    try {
      const response = await fetch('/api/orders')
      if (response.ok) {
        const data = await response.json()
        setOrders(data.orders || [])
      }
    } catch (error) {
      console.error('Error fetching orders:', error)
    } finally {
      setLoading(false)
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return <CheckCircle2 className="w-5 h-5 text-green-500" />
      case 'CANCELLED':
        return <XCircle className="w-5 h-5 text-red-500" />
      default:
        return <Clock className="w-5 h-5 text-amber-500" />
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0e1a] text-white pt-20 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-amber-500" />
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-[#0a0e1a] text-white pt-20 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <Package className="w-16 h-16 text-gray-500 mx-auto mb-4" />
          <h1 className="text-2xl font-light mb-4 text-white/90">Purchase History</h1>
          <p className="text-gray-400 mb-6">Please sign in to view your order history</p>
          <Link href="/auth/login">
            <Button className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white pt-20">
      <div className="container-responsive max-w-6xl py-16 px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-light mb-4 text-white/90">Purchase History</h1>
          <div className="h-px w-24 bg-amber-500/30" />
        </div>

        {orders.length === 0 ? (
          <div className="text-center py-16 border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625]">
            <Package className="w-16 h-16 text-gray-500 mx-auto mb-4" />
            <p className="text-gray-400 mb-4">No orders yet</p>
            <Link href="/products">
              <Button className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30">
                Browse Products
              </Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <Link key={order.id} href={`/orders/${order.id}`}>
                <div className="border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 hover:border-amber-500/30 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-light text-white/90">
                          Order #{order.id.slice(0, 8)}
                        </h3>
                        {getStatusIcon(order.status)}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {formatDate(order.createdAt)}
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4" />
                          ${(order.totalAmount / 100).toFixed(2)}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 mb-1">Status</div>
                      <div className="text-sm font-mono text-amber-500/80 uppercase">
                        {order.status}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-800/50 pt-4">
                    <div className="text-sm text-gray-400">
                      {order.items.length} item{order.items.length !== 1 ? 's' : ''}
                    </div>
                    <div className="mt-2 space-y-1">
                      {order.items.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="text-sm text-gray-500">
                          {item.quantity}x {item.itemName}
                        </div>
                      ))}
                      {order.items.length > 3 && (
                        <div className="text-sm text-gray-600">
                          +{order.items.length - 3} more
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}


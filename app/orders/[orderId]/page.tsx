"use client"

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { use } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Loader2, Package, Calendar, DollarSign, CheckCircle2, ArrowLeft } from 'lucide-react'

interface OrderItem {
  id: string
  itemType: string
  itemId: string
  itemName: string
  description?: string
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
  customerEmail: string
  customerName?: string
  createdAt: string
  paidAt?: string
  items: OrderItem[]
}

interface PageProps {
  params: Promise<{ orderId: string }>
}

export default function OrderDetailPage({ params }: PageProps) {
  const { orderId } = use(params)
  const router = useRouter()
  const [order, setOrder] = useState<Order | null>(null)
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
      fetchOrder()
    } else {
      router.push('/auth/login')
    }
  }

  const fetchOrder = async () => {
    try {
      const response = await fetch(`/api/orders/${orderId}`)
      if (response.ok) {
        const data = await response.json()
        setOrder(data)
      } else if (response.status === 404) {
        router.push('/orders')
      }
    } catch (error) {
      console.error('Error fetching order:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-[#0a0e1a] text-white pt-20 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-amber-500" />
      </div>
    )
  }

  if (!order) {
    return null
  }

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white pt-20">
      <div className="container-responsive max-w-4xl py-16 px-4">
        <Link href="/orders" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Orders
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl font-light text-white/90">
              Order #{order.id.slice(0, 8)}
            </h1>
            {order.status === 'COMPLETED' && (
              <CheckCircle2 className="w-6 h-6 text-green-500" />
            )}
          </div>
          <div className="h-px w-24 bg-amber-500/30" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6">
            <div className="flex items-center gap-2 text-gray-500 mb-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Order Date</span>
            </div>
            <div className="text-white/90">{formatDate(order.createdAt)}</div>
          </div>

          {order.paidAt && (
            <div className="border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6">
              <div className="flex items-center gap-2 text-gray-500 mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-sm">Paid On</span>
              </div>
              <div className="text-white/90">{formatDate(order.paidAt)}</div>
            </div>
          )}

          <div className="border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6">
            <div className="flex items-center gap-2 text-gray-500 mb-2">
              <Package className="w-4 h-4" />
              <span className="text-sm">Status</span>
            </div>
            <div className="text-white/90 font-mono uppercase">{order.status}</div>
          </div>

          <div className="border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6">
            <div className="flex items-center gap-2 text-gray-500 mb-2">
              <DollarSign className="w-4 h-4" />
              <span className="text-sm">Total</span>
            </div>
            <div className="text-2xl font-light text-amber-500/90">
              ${(order.totalAmount / 100).toFixed(2)}
            </div>
          </div>
        </div>

        <div className="border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 mb-8">
          <h2 className="text-xl font-light mb-4 text-white/90">Order Items</h2>
          <div className="space-y-4">
            {order.items.map((item) => (
              <div key={item.id} className="border-t border-gray-800/50 pt-4 first:border-t-0 first:pt-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-light text-white/90 mb-1">{item.itemName}</h3>
                    {item.description && (
                      <p className="text-sm text-gray-500 mb-2">{item.description}</p>
                    )}
                    <div className="text-sm text-gray-500">
                      Quantity: {item.quantity} × ${(item.price / 100).toFixed(2)}
                    </div>
                  </div>
                  <div className="text-lg font-light text-amber-500/90">
                    ${(item.totalPrice / 100).toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6">
          <h2 className="text-xl font-light mb-4 text-white/90">Customer Information</h2>
          <div className="space-y-2 text-gray-400">
            <div>
              <span className="text-gray-500">Email:</span> {order.customerEmail}
            </div>
            {order.customerName && (
              <div>
                <span className="text-gray-500">Name:</span> {order.customerName}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}


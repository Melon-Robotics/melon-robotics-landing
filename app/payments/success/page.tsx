"use client"

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Loader2 } from 'lucide-react'

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // You can verify the payment here if needed
    if (sessionId) {
      // Payment verification logic can go here
      setLoading(false)
    } else {
      setError('No session ID provided')
      setLoading(false)
    }
  }, [sessionId])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0e1a] text-white flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-amber-500 mx-auto mb-4" />
          <p className="text-gray-400">Verifying payment...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#0a0e1a] text-white flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <div className="w-16 h-16 border-2 border-red-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-red-500 text-2xl">✕</span>
            </div>
            <h1 className="text-3xl font-light mb-4 text-white/90">Payment Verification Failed</h1>
            <p className="text-gray-400 mb-8">{error}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 px-8 py-6">
                Return Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-gray-700/50 text-gray-400 hover:text-white">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-16 h-16 border-2 border-amber-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-10 h-10 text-amber-500" />
          </div>
          <h1 className="text-3xl font-light mb-4 text-white/90">Payment Successful!</h1>
          <p className="text-gray-400 mb-2">
            Thank you for your purchase. Your payment has been processed successfully.
          </p>
          {sessionId && (
            <p className="text-xs text-gray-600 font-mono mt-4">
              Session ID: {sessionId.slice(0, 20)}...
            </p>
          )}
        </div>
        <div className="mb-8 p-6 border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625]">
          <p className="text-sm text-gray-400 mb-4">
            You will receive a confirmation email shortly with your order details and access instructions.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 px-8 py-6">
              Return Home
            </Button>
          </Link>
          <Link href="/products">
            <Button variant="outline" className="border-gray-700/50 text-gray-400 hover:text-white">
              View Products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}


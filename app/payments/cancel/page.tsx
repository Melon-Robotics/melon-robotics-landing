"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { XCircle } from 'lucide-react'

export default function PaymentCancelPage() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-16 h-16 border-2 border-gray-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
            <XCircle className="w-10 h-10 text-gray-500" />
          </div>
          <h1 className="text-3xl font-light mb-4 text-white/90">Payment Canceled</h1>
          <p className="text-gray-400 mb-2">
            Your payment was canceled. No charges were made to your account.
          </p>
        </div>
        <div className="mb-8 p-6 border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625]">
          <p className="text-sm text-gray-400">
            If you experienced any issues during checkout, please contact our support team for assistance.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 px-8 py-6">
              Return Home
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="border-gray-700/50 text-white/70 hover:text-white">
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}





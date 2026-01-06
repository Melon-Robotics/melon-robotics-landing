"use client"

import { use } from 'react'
import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { AddToCartButton } from '@/components/payments/add-to-cart-button'
import {
  getAccessory,
  type ScoutAccessory,
} from '@/lib/data/scout-accessories'
import { Package, Radio, Zap, Wrench, Satellite, Battery, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { AccessoryVisualization } from '@/components/accessory-visualization'

const CATEGORY_ICONS = {
  sensor: Package,
  peripheral: Wrench,
  attachment: Zap,
  communication: Satellite,
  power: Battery,
  payload: Radio,
}

const CATEGORY_LABELS = {
  sensor: 'Sensors',
  peripheral: 'Peripherals',
  attachment: 'Attachments',
  communication: 'Communication',
  power: 'Power Systems',
  payload: 'Payload Systems',
}

interface PageProps {
  params: Promise<{ id: string }>
}

export default function AccessoryDetailPage({ params }: PageProps) {
  const { id } = use(params)
  const accessory = getAccessory(id)

  if (!accessory) {
    notFound()
  }

  const Icon = CATEGORY_ICONS[accessory.category]

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 border-b border-amber-500/10">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(245,158,11,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245,158,11,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Technical Frame Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
          <div className="absolute top-0 left-0 h-16 w-px bg-gradient-to-b from-amber-500/30 to-transparent" />
          <div className="absolute top-0 right-0 h-16 w-px bg-gradient-to-b from-amber-500/30 to-transparent" />
          <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-amber-500/20" />
          <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-amber-500/20" />
        </div>

        {/* Technical Status Indicators */}
        <div className="absolute top-4 left-4 text-[10px] sm:text-xs font-mono text-amber-500/80 z-10 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block border border-amber-500/30 bg-black/60 backdrop-blur-sm px-2 py-1"
          >
            <span className="hidden xs:inline">MR-ACC-{accessory.id.toUpperCase()} | </span>REF: {accessory.id}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-1 text-[8px] text-gray-600 font-mono"
          >
            CAT: {accessory.category.toUpperCase()} | STOCK: <span className="text-green-400">AVAILABLE</span>
          </motion.div>
        </div>

        {/* Status Indicators - Top Right */}
        <div className="absolute top-4 right-4 text-[10px] sm:text-xs font-mono text-amber-500/80 z-10 pointer-events-none hidden xs:block">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block border border-amber-500/30 bg-black/60 backdrop-blur-sm px-2 py-1"
          >
            PRICE: <span className="text-amber-400">${(accessory.price / 100).toLocaleString()}</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-1 text-[8px] text-gray-600 font-mono text-right"
          >
            TIERS: {accessory.compatibleTiers.length} COMPATIBLE
          </motion.div>
        </div>

        {/* Bottom Left Indicators */}
        <div className="absolute bottom-4 left-4 flex flex-col gap-2 text-[10px] sm:text-xs font-mono z-10 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center"
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 mr-1.5 animate-pulse" />
            <span className="text-green-400">IN STOCK</span>
            <span className="text-gray-600 ml-2 hidden sm:inline">| STATUS: ACTIVE</span>
          </motion.div>
        </div>

        <div className="container-responsive max-w-7xl relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link href="/products/scout/accessories">
              <Button
                variant="outline"
                className="border-amber-500/30 text-amber-500/80 hover:text-amber-500 hover:border-amber-500/50 font-mono text-xs tracking-wider uppercase"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Accessories
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
            {/* Device Visualization */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <AccessoryVisualization accessory={accessory} />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-4xl order-1 lg:order-2"
            >
            {/* Technical Status Bar */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="flex items-center gap-2 font-mono text-[10px] text-amber-500/80 tracking-[0.25em] uppercase">
                <div className="relative">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  <div className="absolute inset-0 w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping opacity-75" />
                </div>
                <span>ACCESSORY MODULE</span>
              </div>
              <div className="h-px w-12 bg-amber-500/20" />
              <div className="font-mono text-[10px] text-gray-600">
                MODULE: MR-ACC-{accessory.id.toUpperCase()} | REV: A.1
              </div>
            </motion.div>

            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 bg-black/60 border border-amber-500/30 px-4 py-2">
                <Icon className="w-4 h-4 text-amber-500/70" />
                <div className="font-mono text-xs text-amber-500/80 tracking-widest uppercase">
                  {CATEGORY_LABELS[accessory.category]}
                </div>
              </div>
            </motion.div>

            {/* Title & Price */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-white/90 tracking-tight">
              {accessory.name}
            </h1>
            <div className="h-px w-16 bg-gradient-to-r from-amber-500/40 to-transparent mb-6" />
            <div className="text-4xl md:text-5xl font-light text-amber-500/90 mb-8 font-mono">
              ${(accessory.price / 100).toLocaleString()}
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed font-light max-w-3xl">
              {accessory.description}
            </p>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="relative py-20 md:py-32 px-4 border-b border-amber-500/10">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(245,158,11,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245,158,11,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container-responsive max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-block border border-amber-500/30 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] px-3 py-1.5 mb-6 text-xs md:text-sm font-mono text-amber-500 tracking-widest uppercase">
              SPECIFICATIONS
            </div>
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-white/90 tracking-tight">
              Technical Details
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accessory.specifications.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 hover:border-amber-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500/60 mt-2 flex-shrink-0 rounded-full" />
                  <span className="text-base text-gray-300 leading-relaxed font-mono">
                    {spec}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatibility Section */}
      <section className="py-20 md:py-32 px-4 border-b border-amber-500/10">
        <div className="container-responsive max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-block border border-amber-500/30 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] px-3 py-1.5 mb-6 text-xs md:text-sm font-mono text-amber-500 tracking-widest uppercase">
              COMPATIBILITY
            </div>
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-white/90 tracking-tight">
              Compatible Scout Tiers
            </h2>
          </motion.div>

          <div className="flex flex-wrap gap-4">
            {accessory.compatibleTiers.map((tier) => (
              <motion.div
                key={tier}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="border border-amber-500/30 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] px-6 py-4 hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="font-mono text-sm text-amber-500/90 uppercase tracking-wider">
                  {tier}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 px-4 border-t border-amber-500/10">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(245,158,11,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245,158,11,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container-responsive max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-amber-500/30 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-12 md:p-16"
          >
            {/* Technical Corner Indicators */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-amber-500/20" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-amber-500/20" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-amber-500/20" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-amber-500/20" />

            <h2 className="text-3xl md:text-4xl font-light mb-6 text-white/90 relative z-10">
              Ready to Add to Your Scout?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto relative z-10">
              Add this accessory to your cart or contact our team for custom configurations and volume pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <AddToCartButton
                type="product"
                id={accessory.id}
                name={accessory.name}
                price={accessory.price}
                metadata={{
                  productId: 'scout-accessory',
                  category: accessory.category,
                }}
                className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 px-12 py-6 text-sm font-mono tracking-wider uppercase"
              >
                Add to Cart
              </AddToCartButton>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border border-amber-500/30 text-amber-500/80 hover:text-amber-500 hover:border-amber-500/50 px-12 py-6 text-sm font-mono tracking-wider uppercase"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


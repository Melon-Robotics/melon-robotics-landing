"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { CheckoutButton } from '@/components/payments/checkout-button'
import {
  getAllAccessories,
  getAccessoriesByCategory,
  type ScoutAccessory,
} from '@/lib/data/scout-accessories'
import { Package, Radio, Zap, Wrench, Satellite, Battery } from 'lucide-react'
import Link from 'next/link'

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

export default function ScoutAccessoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<ScoutAccessory['category'] | 'all'>('all')

  const accessories =
    selectedCategory === 'all'
      ? getAllAccessories()
      : getAccessoriesByCategory(selectedCategory)

  const categories: Array<ScoutAccessory['category'] | 'all'> = [
    'all',
    'sensor',
    'communication',
    'power',
    'payload',
    'attachment',
    'peripheral',
  ]

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 border-b border-amber-500/10">
        <div className="container-responsive max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
              <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">
                ACCESSORIES & PERIPHERALS
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 text-white/90 tracking-tight">
              Scout<br />Accessories
            </h1>
            <div className="h-px w-24 bg-amber-500/30 mx-auto mb-6" />
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
              Modular sensors, peripherals, and attachments to customize your Scout for mission-specific requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 border-b border-amber-500/10">
        <div className="container-responsive max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => {
              const Icon = category === 'all' ? Package : CATEGORY_ICONS[category]
              return (
                <Button
                  key={category}
                  variant="outline"
                  onClick={() => setSelectedCategory(category)}
                  className={`${
                    selectedCategory === category
                      ? 'bg-amber-500/10 border-amber-500/30 text-amber-500'
                      : 'border-gray-700/50 text-gray-400 hover:text-white'
                  } font-mono text-xs tracking-wider uppercase`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {category === 'all' ? 'All' : CATEGORY_LABELS[category]}
                </Button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Accessories Grid */}
      <section className="py-20 md:py-32 px-4">
        <div className="container-responsive max-w-7xl">
          {accessories.length === 0 ? (
            <div className="text-center py-16">
              <Package className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-400">No accessories found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {accessories.map((accessory, index) => {
                const Icon = CATEGORY_ICONS[accessory.category]
                return (
                  <motion.div
                    key={accessory.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 hover:border-amber-500/30 transition-all duration-500"
                  >
                    {/* Category Badge */}
                    <div className="mb-4">
                      <div className="inline-flex items-center gap-2 bg-black/60 border border-gray-700/50 px-3 py-1">
                        <Icon className="w-3 h-3 text-amber-500/60" />
                        <div className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">
                          {CATEGORY_LABELS[accessory.category]}
                        </div>
                      </div>
                    </div>

                    {/* Title & Price */}
                    <h3 className="text-xl font-light text-white/90 mb-3 tracking-tight">
                      {accessory.name}
                    </h3>
                    <div className="h-px w-12 bg-amber-500/30 mb-4" />
                    <div className="text-2xl font-light text-amber-500/90 mb-4 font-mono">
                      ${(accessory.price / 100).toLocaleString()}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-400 mb-6 leading-relaxed font-light">
                      {accessory.description}
                    </p>

                    {/* Specifications */}
                    <div className="mb-6">
                      <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-2">
                        SPECIFICATIONS
                      </div>
                      <ul className="space-y-1">
                        {accessory.specifications.map((spec, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-amber-500/60 mt-2 flex-shrink-0" />
                            <span className="text-xs text-gray-500 leading-relaxed font-mono">
                              {spec}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Compatible Tiers */}
                    <div className="mb-6">
                      <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-2">
                        COMPATIBLE WITH
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {accessory.compatibleTiers.map((tier) => (
                          <span
                            key={tier}
                            className="text-xs px-2 py-1 bg-black/40 border border-gray-700/50 text-gray-400 font-mono uppercase"
                          >
                            {tier}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Add to Cart */}
                    <CheckoutButton
                      type="product"
                      id={accessory.id}
                      className="w-full bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 py-6 text-xs font-mono tracking-wider uppercase"
                    >
                      Add to Cart
                    </CheckoutButton>
                  </motion.div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 border-t border-amber-500/10">
        <div className="container-responsive max-w-4xl text-center">
          <div className="border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-12">
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-white/90">
              Need Custom Configuration?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Our engineering team can design custom accessories and configurations for your specific mission requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 px-12 py-6 text-sm font-mono tracking-wider uppercase">
                  Contact Sales
                </Button>
              </Link>
              <Link href="/products/scout">
                <Button
                  variant="outline"
                  className="border border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-600 px-12 py-6 text-sm font-mono tracking-wider uppercase"
                >
                  Back to Scout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


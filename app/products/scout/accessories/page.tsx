"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { AddToCartButton } from '@/components/payments/add-to-cart-button'
import {
  getAllAccessories,
  getAccessoriesByCategory,
  getAddOnAccessories,
  getReplacementAccessories,
  type ScoutAccessory,
} from '@/lib/data/scout-accessories'
import { Package, Radio, Zap, Wrench, Satellite, Battery, RefreshCw } from 'lucide-react'
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

  // Separate add-ons from replacements
  const allAccessories = selectedCategory === 'all'
    ? getAllAccessories()
    : getAccessoriesByCategory(selectedCategory)
  
  const addOns = allAccessories.filter(acc => !acc.isReplacement)
  const replacements = allAccessories.filter(acc => acc.isReplacement === true)

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

        <div className="container-responsive max-w-7xl relative z-10">
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

      {/* Add-On Accessories Section */}
      {addOns.length > 0 && (
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
                ADD-ON MODULES
              </div>
              <h2 className="text-3xl md:text-4xl font-light mb-4 text-white/90 tracking-tight">
                Additional Accessories
              </h2>
              <p className="text-gray-400 max-w-2xl">
              Expand your Scout's capabilities with additional sensors, peripherals, and attachments.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {addOns.map((accessory, index) => {
                const Icon = CATEGORY_ICONS[accessory.category]
                return (
                  <motion.div
                    key={accessory.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    whileHover={{ y: -4 }}
                    className="group"
                  >
                    <Link 
                      href={`/products/scout/accessories/${accessory.id}`}
                      className="block h-full touch-manipulation"
                    >
                      <div className="relative h-full border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 md:p-8 transition-all duration-300 hover:border-amber-500/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] active:scale-[0.98]">
                        {/* Subtle Glow Effect on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/0 to-amber-500/0 group-hover:via-amber-500/3 group-hover:to-amber-500/6 transition-all duration-300 pointer-events-none" />
                        
                        {/* Technical Corner Indicators */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-amber-500/20 group-hover:border-amber-500/40 transition-colors" />
                        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-amber-500/20 group-hover:border-amber-500/40 transition-colors" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-amber-500/20 group-hover:border-amber-500/40 transition-colors" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-amber-500/20 group-hover:border-amber-500/40 transition-colors" />

                        {/* Category Badge */}
                        <div className="mb-4 relative z-10">
                          <div className="inline-flex items-center gap-2 bg-black/60 border border-amber-500/30 px-3 py-1.5 group-hover:border-amber-500/50 transition-colors">
                            <Icon className="w-3 h-3 text-amber-500/70 group-hover:text-amber-500 transition-colors" />
                            <div className="font-mono text-[10px] text-amber-500/80 tracking-widest uppercase">
                              {CATEGORY_LABELS[accessory.category]}
                            </div>
                          </div>
                        </div>

                        {/* Title & Price */}
                        <h3 className="text-xl md:text-2xl font-light text-white/90 mb-3 tracking-tight relative z-10">
                          {accessory.name}
                        </h3>
                        <div className="h-px w-12 bg-gradient-to-r from-amber-500/40 to-transparent mb-4 relative z-10" />
                        <div className="text-2xl md:text-3xl font-light text-amber-500/90 mb-4 font-mono relative z-10">
                          ${(accessory.price / 100).toLocaleString()}
                        </div>

                        {/* Description */}
                        <p className="text-sm md:text-base text-gray-400 mb-6 leading-relaxed font-light relative z-10">
                          {accessory.description}
                        </p>

                        {/* Specifications */}
                        <div className="mb-6 relative z-10">
                          <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-3">
                            SPECIFICATIONS
                          </div>
                          <ul className="space-y-1.5">
                            {accessory.specifications.slice(0, 3).map((spec, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="w-1 h-1 bg-amber-500/60 mt-2 flex-shrink-0 rounded-full" />
                                <span className="text-xs text-gray-500 leading-relaxed font-mono">
                                  {spec}
                                </span>
                              </li>
                            ))}
                            {accessory.specifications.length > 3 && (
                              <li className="text-xs text-amber-500/60 font-mono mt-2">
                                +{accessory.specifications.length - 3} more
                              </li>
                            )}
                          </ul>
                        </div>

                        {/* Compatible Tiers */}
                        <div className="mb-6 relative z-10">
                          <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-2">
                            COMPATIBLE WITH
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {accessory.compatibleTiers.map((tier) => (
                              <span
                                key={tier}
                                className="text-xs px-2 py-1 bg-black/40 border border-amber-500/20 text-amber-500/80 font-mono uppercase group-hover:border-amber-500/40 transition-colors"
                              >
                                {tier}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* View Details CTA */}
                        <div className="relative z-10">
                          <div className="text-xs font-mono text-amber-500/70 uppercase tracking-wider group-hover:text-amber-500 transition-colors">
                            VIEW DETAILS →
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Replacement Modules Section */}
      {replacements.length > 0 && (
        <section className="relative py-20 md:py-32 px-4">
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
              <div className="inline-flex items-center gap-2 border border-amber-500/40 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] px-3 py-1.5 mb-6 text-xs md:text-sm font-mono text-amber-500 tracking-widest uppercase">
                <RefreshCw className="w-3 h-3" />
                REPLACEMENT PARTS
              </div>
              <h2 className="text-3xl md:text-4xl font-light mb-4 text-white/90 tracking-tight">
                Replacement Parts
              </h2>
              <p className="text-gray-400 max-w-2xl">
                Replacement modules for standard equipment included with Scout tiers. Use these parts when default equipment needs to be replaced due to damage, wear, or maintenance requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {replacements.map((accessory, index) => {
                const Icon = CATEGORY_ICONS[accessory.category]
                return (
                  <motion.div
                    key={accessory.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    whileHover={{ y: -4 }}
                    className="group"
                  >
                    <Link 
                      href={`/products/scout/accessories/${accessory.id}`}
                      className="block h-full touch-manipulation"
                    >
                      <div className="relative h-full border border-amber-500/30 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 md:p-8 transition-all duration-300 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] active:scale-[0.98]">
                        {/* Replacement/Upgrade Badge */}
                        <div className="absolute top-4 right-4 z-20">
                          {accessory.isUpgrade ? (
                            <div className="bg-amber-500/30 border border-amber-500/60 px-2 py-1">
                              <div className="flex items-center gap-1">
                                <Zap className="w-2.5 h-2.5 text-amber-500" />
                                <span className="font-mono text-[8px] text-amber-500 uppercase tracking-wider">UPGRADE</span>
                              </div>
                            </div>
                          ) : (
                            <div className="bg-amber-500/20 border border-amber-500/50 px-2 py-1">
                              <div className="flex items-center gap-1">
                                <RefreshCw className="w-2.5 h-2.5 text-amber-500" />
                                <span className="font-mono text-[8px] text-amber-500 uppercase tracking-wider">REPLACEMENT</span>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Subtle Glow Effect on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/0 to-amber-500/0 group-hover:via-amber-500/5 group-hover:to-amber-500/10 transition-all duration-300 pointer-events-none" />
                        
                        {/* Technical Corner Indicators */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-amber-500/30 group-hover:border-amber-500/50 transition-colors" />
                        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-amber-500/30 group-hover:border-amber-500/50 transition-colors" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-amber-500/30 group-hover:border-amber-500/50 transition-colors" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-amber-500/30 group-hover:border-amber-500/50 transition-colors" />

                        {/* Category Badge */}
                        <div className="mb-4 relative z-10">
                          <div className="inline-flex items-center gap-2 bg-black/60 border border-amber-500/40 px-3 py-1.5 group-hover:border-amber-500/60 transition-colors">
                            <Icon className="w-3 h-3 text-amber-500/80 group-hover:text-amber-500 transition-colors" />
                            <div className="font-mono text-[10px] text-amber-500/90 tracking-widest uppercase">
                              {CATEGORY_LABELS[accessory.category]}
                            </div>
                          </div>
                        </div>

                        {/* Replacement/Upgrade Notice */}
                        {accessory.replacesDefault && (
                          <div className="mb-4 relative z-10">
                            <div className={`px-3 py-2 ${
                              accessory.isUpgrade 
                                ? 'bg-amber-500/15 border border-amber-500/40' 
                                : 'bg-amber-500/10 border border-amber-500/30'
                            }`}>
                              <p className={`text-xs font-mono leading-tight ${
                                accessory.isUpgrade 
                                  ? 'text-amber-500' 
                                  : 'text-amber-500/90'
                              }`}>
                                {accessory.replacesDefault}
                              </p>
                            </div>
                          </div>
                        )}

                        {/* Title & Price */}
                        <h3 className="text-xl md:text-2xl font-light text-white/90 mb-3 tracking-tight relative z-10">
                          {accessory.name}
                        </h3>
                        <div className="h-px w-12 bg-gradient-to-r from-amber-500/50 to-transparent mb-4 relative z-10" />
                        <div className="text-2xl md:text-3xl font-light text-amber-500/90 mb-4 font-mono relative z-10">
                          ${(accessory.price / 100).toLocaleString()}
                        </div>

                        {/* Description */}
                        <p className="text-sm md:text-base text-gray-400 mb-6 leading-relaxed font-light relative z-10">
                          {accessory.description}
                        </p>

                        {/* Specifications */}
                        <div className="mb-6 relative z-10">
                          <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-3">
                            SPECIFICATIONS
                          </div>
                          <ul className="space-y-1.5">
                            {accessory.specifications.slice(0, 3).map((spec, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="w-1 h-1 bg-amber-500/60 mt-2 flex-shrink-0 rounded-full" />
                                <span className="text-xs text-gray-500 leading-relaxed font-mono">
                                  {spec}
                                </span>
                              </li>
                            ))}
                            {accessory.specifications.length > 3 && (
                              <li className="text-xs text-amber-500/60 font-mono mt-2">
                                +{accessory.specifications.length - 3} more
                              </li>
                            )}
                          </ul>
                        </div>

                        {/* Compatible Tiers */}
                        <div className="mb-6 relative z-10">
                          <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-2">
                            COMPATIBLE WITH
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {accessory.compatibleTiers.map((tier) => (
                              <span
                                key={tier}
                                className="text-xs px-2 py-1 bg-black/40 border border-amber-500/30 text-amber-500/90 font-mono uppercase group-hover:border-amber-500/50 transition-colors"
                              >
                                {tier}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* View Details CTA */}
                        <div className="relative z-10">
                          <div className="text-xs font-mono text-amber-500/70 uppercase tracking-wider group-hover:text-amber-500 transition-colors">
                            VIEW DETAILS →
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Empty State */}
      {addOns.length === 0 && replacements.length === 0 && (
        <section className="relative py-20 md:py-32 px-4">
          <div className="container-responsive max-w-7xl relative z-10">
            <div className="text-center py-16">
              <Package className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-400">No accessories found in this category.</p>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative py-20 px-4 border-t border-amber-500/10">
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
              Need Custom Configuration?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto relative z-10">
              Our engineering team can design custom accessories and configurations for your specific mission requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link href="/contact">
                <Button className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 px-12 py-6 text-sm font-mono tracking-wider uppercase">
                  Contact Sales
                </Button>
              </Link>
              <Link href="/products/scout">
                <Button
                  variant="outline"
                  className="border border-amber-500/30 text-amber-500/80 hover:text-amber-500 hover:border-amber-500/50 px-12 py-6 text-sm font-mono tracking-wider uppercase"
                >
                  Back to Scout
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}








"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { AddToCartButton } from '@/components/payments/add-to-cart-button'
import { SCOUT_TIERS, VOLUME_DISCOUNTS, calculateScoutPrice, getVolumeDiscount, getScoutTier } from '@/lib/data/scout-pricing'
import { CheckCircle2, Package, TrendingDown, Users } from 'lucide-react'
import Link from 'next/link'

export default function ScoutPricingPage() {
  const [selectedTier, setSelectedTier] = useState<string>('standard')
  const [quantity, setQuantity] = useState<number>(1)

  const tier = SCOUT_TIERS[selectedTier as keyof typeof SCOUT_TIERS]
  const discount = getVolumeDiscount(quantity)
  const totalPrice = calculateScoutPrice(selectedTier, quantity)
  const pricePerUnit = totalPrice / quantity

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
              <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">PRICING</div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 text-white/90 tracking-tight">
              Melon Scout<br />Pricing
            </h1>
            <div className="h-px w-24 bg-amber-500/30 mx-auto mb-6" />
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
              Choose your configuration tier and take advantage of volume discounts for swarm deployments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 md:py-32 px-4">
        <div className="container-responsive max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {Object.values(SCOUT_TIERS).map((tierOption, index) => (
              <motion.div
                key={tierOption.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative border ${
                  selectedTier === tierOption.id
                    ? 'border-amber-500/40 bg-amber-500/5'
                    : 'border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625]'
                } p-8 transition-all duration-500 hover:border-amber-500/30 cursor-pointer`}
                onClick={() => setSelectedTier(tierOption.id)}
              >
                {selectedTier === tierOption.id && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-500 text-black text-[10px] font-mono tracking-wider uppercase">
                    SELECTED
                  </div>
                )}

                <div className="mb-6">
                  <div className="font-mono text-[9px] text-gray-600 mb-2">
                    TIER: {tierOption.name.toUpperCase()}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light text-white/90 mb-3 tracking-tight">
                    {tierOption.name}
                  </h3>
                  <div className="h-px w-12 bg-amber-500/30 mb-4" />
                  <div className="text-3xl md:text-4xl font-light text-amber-500/90 mb-2 font-mono">
                    ${(tierOption.basePrice / 100).toLocaleString()}
                  </div>
                  <div className="font-mono text-[9px] text-gray-600">BASE PRICE</div>
                </div>

                <p className="text-sm text-gray-400 mb-6 leading-relaxed font-light">
                  {tierOption.description}
                </p>

                <div className="space-y-2 mb-6">
                  {tierOption.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-500/60 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-gray-400 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full ${
                    selectedTier === tierOption.id
                      ? 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30'
                      : 'border border-gray-700/50 text-white/60 hover:text-white hover:border-gray-600 bg-black/20'
                  } py-6 text-sm font-mono tracking-wider uppercase transition-all duration-300`}
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedTier(tierOption.id)
                  }}
                >
                  {selectedTier === tierOption.id ? 'Selected' : 'Select Tier'}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Quantity Selector & Volume Discounts */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-8">
              <div className="flex items-center gap-3 mb-8">
                <Users className="w-6 h-6 text-amber-500/60" />
                <h2 className="text-2xl font-light text-white/90">Quantity & Volume Discounts</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Quantity Input */}
                <div>
                  <label className="block text-sm text-gray-400 mb-4">Number of Units</label>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="border-gray-700/50"
                    >
                      −
                    </Button>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-24 px-4 py-2 bg-black/40 border border-gray-700/50 text-white text-center font-mono text-lg"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setQuantity(quantity + 1)}
                      className="border-gray-700/50"
                    >
                      +
                    </Button>
                  </div>
                </div>

                {/* Volume Discount Info */}
                <div>
                  <label className="block text-sm text-gray-400 mb-4">Volume Discount</label>
                  <div className="border border-gray-800/50 bg-black/40 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingDown className="w-5 h-5 text-amber-500/60" />
                      <span className="text-lg font-light text-amber-500/90">
                        {discount.discountPercent}% OFF
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 font-mono">
                      {discount.label}
                    </div>
                  </div>
                </div>
              </div>

              {/* Discount Tiers */}
              <div className="border-t border-gray-800/50 pt-6">
                <div className="text-sm text-gray-400 mb-4">Volume Discount Schedule:</div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {VOLUME_DISCOUNTS.map((disc, idx) => (
                    <div
                      key={idx}
                      className={`p-3 border ${
                        quantity >= disc.minQuantity &&
                        (disc.maxQuantity === null || quantity <= disc.maxQuantity)
                          ? 'border-amber-500/30 bg-amber-500/5'
                          : 'border-gray-800/50 bg-black/20'
                      }`}
                    >
                      <div className="text-xs text-gray-500 mb-1 font-mono">
                        {disc.minQuantity}
                        {disc.maxQuantity ? `-${disc.maxQuantity}` : '+'} units
                      </div>
                      <div className="text-sm font-light text-white/90">
                        {disc.discountPercent}% off
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Price Summary */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="border border-amber-500/30 bg-amber-500/5 p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-sm text-gray-400 mb-2">Selected Configuration</div>
                  <div className="text-xl font-light text-white/90">{tier.name} Tier</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400 mb-2">Base Price</div>
                  <div className="text-xl font-light text-amber-500/90">
                    ${(tier.basePrice / 100).toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="border-t border-amber-500/20 pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Quantity</span>
                  <span className="text-white/90 font-mono">{quantity} units</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Subtotal</span>
                  <span className="text-white/90 font-mono">
                    ${((tier.basePrice * quantity) / 100).toLocaleString()}
                  </span>
                </div>
                {discount.discountPercent > 0 && (
                  <div className="flex items-center justify-between text-amber-500/80">
                    <span>Volume Discount ({discount.discountPercent}%)</span>
                    <span className="font-mono">
                      -${(((tier.basePrice * quantity * discount.discountPercent) / 100) / 100).toLocaleString()}
                    </span>
                  </div>
                )}
                <div className="border-t border-amber-500/20 pt-4 flex items-center justify-between">
                  <span className="text-lg font-light text-white/90">Total</span>
                  <span className="text-3xl font-light text-amber-500/90 font-mono">
                    ${(totalPrice / 100).toLocaleString()}
                  </span>
                </div>
                <div className="text-sm text-gray-500 text-center">
                  ${(pricePerUnit / 100).toLocaleString()} per unit
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <AddToCartButton
                  type="product"
                  id={`scout-${selectedTier}`}
                  name={`Melon Scout ${tier.name} Tier`}
                  price={Math.round(pricePerUnit)}
                  quantity={quantity}
                  tier={selectedTier}
                  metadata={{
                    productId: 'scout',
                    tier: selectedTier,
                    basePrice: tier.basePrice.toString(),
                  }}
                  className="flex-1 bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 py-6 text-sm font-mono tracking-wider uppercase"
                >
                  Add to Cart
                </AddToCartButton>
                <Link href="/products/scout/accessories" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full border border-gray-700/50 text-white/60 hover:text-white hover:border-gray-600 py-6 text-sm font-mono tracking-wider uppercase"
                  >
                    View Accessories
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="max-w-4xl mx-auto">
            <div className="border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-8">
              <h3 className="text-xl font-light mb-6 text-white/90">Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="text-xs text-gray-500 mb-1 font-mono uppercase">Operating Depth</div>
                  <div className="text-white/90">{tier.specifications.depth}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1 font-mono uppercase">Autonomy</div>
                  <div className="text-white/90">{tier.specifications.autonomy}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1 font-mono uppercase">AI Level</div>
                  <div className="text-white/90">{tier.specifications.aiLevel}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1 font-mono uppercase">Sensors</div>
                  <div className="text-white/90">{tier.specifications.sensors.join(', ')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


"use client"

import { motion } from "framer-motion"
import { notFound } from "next/navigation"
import { getProduct } from "@/lib/data/products"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { use } from "react"

// Scout-specific components
import { MelonScoutHero } from "@/components/melon-scout-hero"
import { WhatIsMelonScout } from "@/components/what-is-melon-scout"
import { FeverSwarmAdvantage } from "@/components/fever-swarm-advantage"
import { BuiltForDefense } from "@/components/built-for-defense"
import { ScoutDashboardPreview } from "@/components/scout-dashboard-preview"
import { MelonEdge } from "@/components/melon-edge"
import { ScoutCTASection } from "@/components/scout-cta-section"
import { CTASection } from "@/components/cta-section"

// BlackBox & PneumaForce bespoke components
import { BlackBoxHero } from "@/components/blackbox-hero"
import { BlackBoxDemo } from "@/components/blackbox-demo"
import { BlackBoxExplainer } from "@/components/blackbox-explainer"
import { BlackBoxPreview } from "@/components/blackbox-preview"
import { PneumaForceHero } from "@/components/pneumaforce-hero"
import { PneumaForceDemos } from "@/components/pneumaforce-demos"
import { PneumaForceExplainer } from "@/components/pneumaforce-explainer"

interface PageProps {
  params: Promise<{ id: string }>
}

export default function ProductPage({ params }: PageProps) {
  const { id } = use(params)
  const product = getProduct(id)

  if (!product) {
    notFound()
  }

  // Special handling for Scout product - use the full experience
  if (id === 'scout') {
    return (
      <div className="min-h-screen bg-[#0a0e1a] text-white overflow-hidden">
        <main className="relative">
          <MelonScoutHero />
          <WhatIsMelonScout />
          <FeverSwarmAdvantage />
          <BuiltForDefense />
          <ScoutDashboardPreview />
          <MelonEdge />
          <ScoutCTASection />
        </main>
      </div>
    )
  }

  // BlackBox bespoke experience
  if (id === 'blackbox') {
    return (
      <div className="min-h-screen bg-[#0a0e1a] text-white overflow-hidden">
        <main className="relative">
          <BlackBoxHero />
          <BlackBoxDemo />
          <BlackBoxExplainer />
          <BlackBoxPreview />
          <CTASection />
        </main>
      </div>
    )
  }

  // PneumaForce bespoke experience
  if (id === 'pneumaforce') {
    return (
      <div className="min-h-screen bg-[#0a0e1a] text-white overflow-hidden">
        <main className="relative">
          <PneumaForceHero />
          <PneumaForceDemos />
          <PneumaForceExplainer />
          <CTASection />
        </main>
      </div>
    )
  }

  const iconMap: { [key: string]: React.ReactNode } = {
    Cpu: <div className="w-8 h-8 border border-amber-500/30 flex items-center justify-center">CPU</div>,
    Battery: <div className="w-8 h-8 border border-amber-500/30 flex items-center justify-center">BAT</div>,
    Flag: <div className="w-8 h-8 border border-amber-500/30 flex items-center justify-center">FLG</div>,
    Radio: <div className="w-8 h-8 border border-amber-500/30 flex items-center justify-center">RAD</div>,
    Map: <div className="w-8 h-8 border border-amber-500/30 flex items-center justify-center">MAP</div>,
    Search: <div className="w-8 h-8 border border-amber-500/30 flex items-center justify-center">SRC</div>,
    Waves: <div className="w-8 h-8 border border-amber-500/30 flex items-center justify-center">WVS</div>,
    Zap: <div className="w-8 h-8 border border-amber-500/30 flex items-center justify-center">PWR</div>,
    Activity: <div className="w-8 h-8 border border-amber-500/30 flex items-center justify-center">ACT</div>,
    Depth: <div className="w-8 h-8 border border-amber-500/30 flex items-center justify-center">DPT</div>,
    Shield: <div className="w-8 h-8 border border-amber-500/30 flex items-center justify-center">SHD</div>,
    Compass: <div className="w-8 h-8 border border-amber-500/30 flex items-center justify-center">CMP</div>,
  }

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute inset-0 bg-ocean-gradient" />

        <div className="container-responsive relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center max-w-6xl mx-auto">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] md:h-[500px] order-2 lg:order-1"
            >
              <div className="absolute inset-0 border border-amber-500/30 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 md:p-8">
                <div className="relative h-full w-full">
                  <Image
                    src={product.heroImage}
                    alt={product.name}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 border border-amber-500/30 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] px-3 py-1.5 mb-6 text-xs md:text-sm font-mono text-amber-500 tracking-widest">
                {product.category.toUpperCase()}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 md:mb-6 tracking-tighter leading-tight">
                {product.name}
              </h1>
              <p className="text-xl md:text-2xl text-amber-400 mb-4 md:mb-5 font-normal leading-snug">{product.tagline}</p>
              <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed max-w-xl">{product.description}</p>
              <p className="text-sm md:text-base text-amber-500/70 mb-10 leading-relaxed max-w-xl font-medium">
                Available through authorized vendors or direct sales inquiry.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="flex-1 sm:flex-none">
                  <Button className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-black border border-amber-400 px-8 md:px-10 py-6 md:py-7 text-base md:text-lg font-semibold shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all">
                    {product.cta.primary}
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10 hover:border-amber-500/80 px-8 md:px-10 py-6 md:py-7 text-base md:text-lg transition-all"
                >
                  {product.cta.secondary}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding px-4 border-t border-amber-500/20 bg-[#0a0e1a]" aria-labelledby="features-heading">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-20"
          >
            <div className="inline-block border border-amber-500/30 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] px-3 py-1.5 mb-6 text-xs md:text-sm font-mono text-amber-500 tracking-widest">
              FEATURES
            </div>
            <h2 id="features-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 md:mb-6 leading-tight">Capabilities</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {product.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 md:p-8 transition-all duration-300 hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/5"
              >
                <div className="mb-5">{iconMap[feature.icon]}</div>
                <h3 className="text-xl md:text-2xl font-semibold text-amber-100 mb-3 leading-tight">{feature.title}</h3>
                <p className="text-base text-gray-200 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="section-padding px-4 border-t border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625]" aria-labelledby="specs-heading">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-block border border-amber-500/30 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] px-3 py-1.5 mb-6 text-xs md:text-sm font-mono text-amber-500 tracking-widest">
              SPECIFICATIONS
            </div>
            <h2 id="specs-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 md:mb-6 leading-tight">Technical Details</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {product.specifications.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -2 }}
                className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-5 md:p-6 transition-all duration-300 hover:border-amber-500/30 hover:bg-[#0f1625]"
              >
                <div className="text-xs md:text-sm text-amber-500/80 mb-2 font-mono uppercase tracking-wider">{spec.title}</div>
                <div className="text-base md:text-lg text-amber-100 font-medium">{spec.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {product.testimonial && (
        <section className="section-padding px-4 border-t border-amber-500/20" aria-label="Testimonial">
          <div className="container-responsive max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <blockquote className="text-2xl md:text-3xl text-gray-200 mb-8 leading-relaxed font-light">
                "{product.testimonial.quote}"
              </blockquote>
              <div className="text-amber-500 font-mono text-sm md:text-base">
                — {product.testimonial.author}, {product.testimonial.role}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding px-4 border-t border-amber-500/20" aria-labelledby="product-cta-heading">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container-responsive max-w-4xl text-center"
        >
          <div className="border border-amber-500/30 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] backdrop-blur-sm p-10 md:p-14 lg:p-16">
            <h2 id="product-cta-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight">
              Ready to Get Started?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
              Contact our team to discuss your requirements and explore deployment options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-black px-8 md:px-10 py-6 md:py-7 text-base md:text-lg font-semibold border border-amber-400 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all">
                  Contact Sales
                </Button>
              </Link>
              <Link href="/products" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-amber-500/50 text-amber-400 hover:bg-amber-500/10 hover:border-amber-500/80 px-8 md:px-10 py-6 md:py-7 text-base md:text-lg transition-all"
                >
                  View All Products
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}



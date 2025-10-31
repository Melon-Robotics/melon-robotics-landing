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
import { RealTimeOps } from "@/components/real-time-ops"
import { MelonEdge } from "@/components/melon-edge"
import { CTASection } from "@/components/cta-section"

// BlackBox & PneumaForce bespoke components
import { BlackBoxHero } from "@/components/blackbox-hero"
import { BlackBoxDemo } from "@/components/blackbox-demo"
import { BlackBoxExplainer } from "@/components/blackbox-explainer"
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
      <div className="min-h-screen bg-black text-white overflow-hidden">
        <main>
          <MelonScoutHero />
          <WhatIsMelonScout />
          <FeverSwarmAdvantage />
          <BuiltForDefense />
          <RealTimeOps />
          <MelonEdge />
          <CTASection />
        </main>
      </div>
    )
  }

  // BlackBox bespoke experience
  if (id === 'blackbox') {
    return (
      <div className="min-h-screen bg-black text-white overflow-hidden">
        <main>
          <BlackBoxHero />
          <BlackBoxDemo />
          <BlackBoxExplainer />
          <CTASection />
        </main>
      </div>
    )
  }

  // PneumaForce bespoke experience
  if (id === 'pneumaforce') {
    return (
      <div className="min-h-screen bg-black text-white overflow-hidden">
        <main>
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
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image */}
            <div className="relative h-96">
              <Image
                src={product.heroImage}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block border border-amber-500/30 bg-black/50 px-3 py-1 mb-4 text-sm font-mono text-amber-500">
                {product.category.toUpperCase()}
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tighter">
                {product.name}
              </h1>
              <p className="text-2xl text-gray-300 mb-2">{product.tagline}</p>
              <p className="text-gray-400 mb-8">{product.description}</p>

              <div className="flex gap-4">
                <Link href="/contact">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-black border border-amber-400 px-8 py-6 text-lg">
                    {product.cta.primary}
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10 px-8 py-6 text-lg"
                >
                  {product.cta.secondary}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 border-t border-amber-500/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block border border-amber-500/30 bg-black/50 px-3 py-1 mb-4 text-sm font-mono text-amber-500">
              FEATURES
            </div>
            <h2 className="text-4xl font-bold">Capabilities</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-amber-500/20 bg-black/40 p-6"
              >
                <div className="mb-4">{iconMap[feature.icon]}</div>
                <h3 className="text-xl font-semibold text-amber-100 mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-24 px-4 border-t border-amber-500/20 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block border border-amber-500/30 bg-black/50 px-3 py-1 mb-4 text-sm font-mono text-amber-500">
              SPECIFICATIONS
            </div>
            <h2 className="text-4xl font-bold">Technical Details</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.specifications.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border border-amber-500/20 bg-black/40 p-4"
              >
                <div className="text-xs text-amber-500/80 mb-1 font-mono uppercase">{spec.title}</div>
                <div className="text-amber-100">{spec.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {product.testimonial && (
        <section className="py-24 px-4 border-t border-amber-500/20">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <blockquote className="text-2xl text-gray-300 mb-6">
                "{product.testimonial.quote}"
              </blockquote>
              <div className="text-amber-500 font-mono">
                — {product.testimonial.author}, {product.testimonial.role}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 px-4 border-t border-amber-500/20">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to discuss your requirements and explore deployment options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-6 text-lg">
                  Contact Sales
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  variant="outline"
                  className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10 px-8 py-6 text-lg"
                >
                  View All Products
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}



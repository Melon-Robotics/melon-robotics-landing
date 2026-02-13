"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { services } from "@/lib/data/services"
import { Button } from "@/components/ui/button"
import { ArrowRight, Waves, Database, Shield, Scan } from "lucide-react"

export default function ServicesPage() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  const iconMap: { [key: string]: React.ReactNode } = {
    inspection: <Waves className="w-6 h-6 text-amber-500/70" />,
    data: <Database className="w-6 h-6 text-amber-500/70" />,
    safety: <Shield className="w-6 h-6 text-amber-500/70" />,
    infrastructure: <Scan className="w-6 h-6 text-amber-500/70" />,
  }

  const categoryLabels = {
    inspection: 'INSPECTION',
    data: 'DATA',
    safety: 'SAFETY',
    infrastructure: 'INFRASTRUCTURE'
  }

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 md:pt-0">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 opacity-[0.02] z-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(245,158,11,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245,158,11,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Depth Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0f1625] to-[#1a2332]" />

        {/* Glowing Orbs */}
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

        {/* HUD Overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-amber-500/20" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-amber-500/20" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-amber-500/20" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-amber-500/20" />

          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
          <div className="absolute top-0 left-0 h-20 w-px bg-gradient-to-b from-amber-500/30 to-transparent" />
          <div className="absolute top-0 right-0 h-20 w-px bg-gradient-to-b from-amber-500/30 to-transparent" />

          {/* System Reference - Top Left */}
          <div className="absolute top-4 left-4 text-[10px] sm:text-xs font-mono text-amber-500/80">
            <div className="inline-block border border-amber-500/30 bg-black/60 backdrop-blur-sm px-2 py-1">
              <span className="hidden xs:inline">MR-SERVICES | </span>REF: 002-S
            </div>
          </div>

          {/* Status - Top Right */}
          <div className="absolute top-4 right-4 text-[10px] sm:text-xs font-mono text-amber-500/80 hidden sm:block">
            <div className="inline-block border border-amber-500/30 bg-black/60 backdrop-blur-sm px-2 py-1">
              STATUS: <span className="text-green-400">OPERATIONAL</span>
            </div>
          </div>

          {/* Bottom Left */}
          <div className="absolute bottom-4 left-4 text-[10px] sm:text-xs font-mono">
            <div className="flex items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5 animate-pulse" />
              <span className="text-green-400">{services.length} SERVICES ACTIVE</span>
            </div>
          </div>
        </div>

        {/* Animated Scan Line */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
          <motion.div
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/15 to-transparent"
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* Content */}
        <div className="container-responsive relative z-10 max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: loaded ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Status Indicator */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : -10 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 md:mb-8"
            >
              <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-[10px] md:text-xs text-amber-500/80 tracking-[0.2em] uppercase">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                    <div className="absolute inset-0 w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping opacity-75" />
                  </div>
                  <span>SERVICES ONLINE</span>
                </div>
                <div className="h-px w-8 md:w-12 bg-amber-500/20" />
                <div className="text-gray-600">
                  FIELD OPERATIONS & SUBSEA SERVICES
                </div>
              </div>
            </motion.div>

            {/* Primary Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 15 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[-0.02em] leading-[0.95] mb-6 sm:mb-8"
            >
              <span className="block text-white">OUR</span>
              <span className="block text-amber-500">SERVICES</span>
            </motion.h1>

            {/* Technical Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: loaded ? 1 : 0, scaleX: loaded ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent mx-auto mb-6 sm:mb-8"
            />

            {/* Capability Line */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 10 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12 md:mb-16 font-mono tracking-wide"
            >
              ROV inspection. 3D photogrammetry. Ocean data. Safety standards.
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom Technical Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/25 to-transparent" />
      </section>

      {/* Services - System Catalog Layout by Category */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-40 px-4">
        <div className="container-responsive max-w-7xl">
          {/* Group services by category */}
          {(['inspection', 'data', 'safety'] as const).map((category, categoryIndex) => {
            const categoryServices = services.filter(s => s.category === category)
            if (categoryServices.length === 0) return null

            return (
              <div key={category} className="mb-20 sm:mb-28 md:mb-36">
                {/* Category Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="mb-12 sm:mb-16 md:mb-20"
                >
                  <div className="inline-block border border-amber-500/20 bg-black/30 px-4 py-2 mb-6">
                    <div className="text-xs sm:text-sm font-mono text-amber-500/70 tracking-widest uppercase">
                      {categoryLabels[category]}
                    </div>
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight text-white mb-4">
                    {category.charAt(0).toUpperCase() + category.slice(1)} Services
                  </h2>
                  <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-amber-500/35 to-transparent" />
                </motion.div>

                {/* Services in Category */}
                <div className="space-y-16 sm:space-y-20 md:space-y-24">
                  {categoryServices.map((service, serviceIndex) => {
                    const globalIndex = services.findIndex(s => s.id === service.id)
                    
                    return (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: (categoryIndex * 0.1) + (serviceIndex * 0.15), ease: [0.16, 1, 0.3, 1] }}
                        className="relative"
                      >
                        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-start ${serviceIndex % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                          {/* Icon/Visual - Technical */}
                          <motion.div 
                            className={`relative ${serviceIndex % 2 === 1 ? "lg:col-start-2" : ""}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: (categoryIndex * 0.1) + (serviceIndex * 0.15) + 0.2, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <div className="relative aspect-[4/3] max-w-2xl mx-auto border border-amber-500/20 bg-gradient-to-br from-[#0a0e1a] to-[#0f1625] p-4 sm:p-6 md:p-8 flex items-center justify-center">
                              <div className="w-24 h-24 sm:w-32 sm:h-32 border border-amber-500/30 bg-black/40 flex items-center justify-center">
                                {iconMap[service.category] || <Waves className="w-12 h-12 sm:w-16 sm:h-16 text-amber-500/80" />}
                              </div>
                              {/* Technical overlay badge */}
                              <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
                                <span className="inline-block border border-amber-500/30 bg-black/80 backdrop-blur-sm px-2 py-1 text-[10px] sm:text-xs font-mono text-amber-500/80 uppercase tracking-wider">
                                  {service.category}
                                </span>
                              </div>
                            </div>
                          </motion.div>

                          {/* Content - System Catalog Style */}
                          <div className={`${serviceIndex % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: (categoryIndex * 0.1) + (serviceIndex * 0.15) + 0.3, ease: [0.16, 1, 0.3, 1] }}
                              className="max-w-xl"
                            >
                              {/* Service Name */}
                              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight mb-4 sm:mb-6 text-white">
                                {service.name}
                              </h3>

                              {/* Value Proposition - One Sentence */}
                              <p className="text-lg sm:text-xl md:text-2xl text-amber-500/90 mb-4 sm:mb-6 leading-snug font-normal">
                                {service.valueProposition}
                              </p>
                              
                              {/* Supporting Paragraph */}
                              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed font-light">
                                {service.supportingParagraph}
                              </p>

                              {/* Key Specifications - 3-4 Bullets */}
                              <div className="mb-8 sm:mb-10 space-y-3 sm:space-y-4">
                                {service.keySpecs.map((spec, specIndex) => (
                                  <div key={specIndex} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 border-l border-amber-500/20 pl-4 sm:pl-6 py-1">
                                    <span className="text-xs sm:text-sm text-amber-500/70 font-mono uppercase tracking-wider min-w-[140px] sm:min-w-[160px]">
                                      {spec.label}:
                                    </span>
                                    <span className="text-sm sm:text-base text-gray-200 font-light">
                                      {spec.value}
                                    </span>
                                  </div>
                                ))}
                              </div>

                              {/* Purpose-Driven CTAs */}
                              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                <Link href={service.servicesPageCta.primaryHref} className="group">
                                  <Button className="w-full sm:w-auto bg-amber-500/12 hover:bg-amber-500/20 active:bg-amber-500/25 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 active:border-amber-500/60 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-normal tracking-wide transition-all duration-200 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] backdrop-blur-sm">
                                    {service.servicesPageCta.primary}
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                  </Button>
                                </Link>
                                {service.servicesPageCta.secondary && service.servicesPageCta.secondaryHref && (
                                  <Link href={service.servicesPageCta.secondaryHref}>
                                    <Button
                                      variant="outline"
                                      className="w-full sm:w-auto border border-gray-700/40 text-white/80 hover:text-white hover:border-gray-500 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-normal tracking-wide transition-all duration-200"
                                    >
                                      {service.servicesPageCta.secondary}
                                    </Button>
                                  </Link>
                                )}
                              </div>
                            </motion.div>
                          </div>
                        </div>

                        {/* Divider - Technical */}
                        {serviceIndex < categoryServices.length - 1 && (
                          <div className="mt-12 sm:mt-16 md:mt-20 border-t border-amber-500/10" />
                        )}
                      </motion.div>
                    )
                  })}
                </div>

                {/* Category Divider */}
                {categoryIndex < 2 && (
                  <div className="mt-16 sm:mt-24 md:mt-32 border-t border-amber-500/20" />
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 sm:py-24 md:py-32 px-4 border-t border-amber-500/10 bg-gradient-to-b from-[#0a0e1a] to-black overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/[0.02] rounded-full blur-3xl" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="container-responsive max-w-4xl text-center relative z-10"
        >
          <div className="font-mono text-[10px] md:text-xs text-amber-500/60 tracking-[0.2em] uppercase mb-6">
            READY TO DEPLOY
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight mb-4 sm:mb-6 text-white">
            Request an Operations Brief
          </h2>
          <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent mx-auto mb-6" />
          <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto mb-8 sm:mb-10 font-mono tracking-wide">
            Mission requirements. Deployment timelines. Capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/contact">
              <Button className="w-full sm:w-auto bg-amber-500/12 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-normal tracking-wide transition-all duration-200 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] backdrop-blur-sm">
                Contact Operations
              </Button>
            </Link>
            <Link href="/products">
              <Button
                variant="outline"
                className="w-full sm:w-auto border border-gray-700/40 text-white/80 hover:text-white hover:border-gray-500 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-normal tracking-wide transition-all duration-200"
              >
                View Technology
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

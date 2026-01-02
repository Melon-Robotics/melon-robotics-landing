"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { products } from "@/lib/data/products"
import { services } from "@/lib/data/services"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Cpu, Waves, Shield, Zap, Navigation, Database, Gauge, Activity } from "lucide-react"

export default function Home() {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      {/* Hero Section - Mobile Optimized */}
      <section
        ref={heroRef}
        className="relative min-h-[85vh] sm:min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-0"
        aria-label="Hero section"
      >
        {/* Technical Grid Background - Standardized */}
        <div className="absolute inset-0 bg-grid-pattern opacity-100" />

        {/* Refined Depth Gradient with Subtle Radial Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0f1625] to-[#1a2332]" />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at center, rgba(245,158,11,0.06) 0%, transparent 70%)'
        }} />
        
        {/* Subtle Animated Scan Lines - Disabled on Mobile for Performance */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none hidden md:block">
          <div 
            className="absolute inset-0"
            style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(245,158,11,0.08) 2px, rgba(245,158,11,0.08) 4px)',
              animation: 'scanLines 12s linear infinite'
            }}
          />
        </div>
        
        {/* Industrial Depth Indicators */}
        <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="flex flex-col gap-6 md:gap-8 font-mono text-[10px] sm:text-xs text-amber-500/40 tracking-widest">
            {[0, 1000, 2000, 3000, 4000, 5000].map((depth) => (
              <motion.div
                key={depth}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: depth / 1000 }}
                className="flex items-center gap-2 md:gap-3"
              >
                <div className="w-6 md:w-8 h-px bg-amber-500/20" />
                <span>{depth}m</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pressure Gauge Indicator */}
        <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative w-20 h-20 md:w-24 md:h-24"
          >
            <div className="absolute inset-0 border-2 border-amber-500/20 rounded-full" />
            <div className="absolute inset-0 border-2 border-amber-500/40 rounded-full border-t-transparent" style={{ clipPath: 'polygon(50% 50%, 100% 0%, 100% 50%)' }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-[10px] md:text-xs font-mono text-amber-500/60">PSI</div>
                <div className="text-base md:text-lg font-mono text-amber-500 font-bold">450</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 container-responsive max-w-6xl"
        >
          {/* Technical Status Indicator - Simplified for Mobile */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 sm:mb-8 md:mb-12 lg:mb-16 px-4"
          >
            <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
              {/* Primary Status - Mobile Optimized */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                <div className="flex items-center gap-1.5 sm:gap-2 font-mono text-[9px] sm:text-[10px] text-amber-500/80 tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                  <div className="relative">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                    <div className="absolute inset-0 w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping opacity-75" />
                  </div>
                  <span className="whitespace-nowrap">SYSTEM OPERATIONAL</span>
                </div>
                <div className="h-px w-6 sm:w-8 md:w-12 bg-amber-500/20 hidden sm:block" />
                <div className="font-mono text-[8px] sm:text-[10px] text-gray-600 hidden sm:block">
                  REF: MR-2024-001
                </div>
              </div>
              
              {/* Technical Readout - Simplified on Mobile */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-6 font-mono text-[8px] sm:text-[9px] text-gray-600">
                <div className="flex items-center gap-1.5">
                  <span className="text-gray-700">DEPTH:</span>
                  <span className="text-amber-500/80">0m</span>
                </div>
                <div className="w-px h-3 bg-gray-800 hidden sm:block" />
                <div className="flex items-center gap-1.5">
                  <span className="text-gray-700">TEMP:</span>
                  <span className="text-amber-500/80">22°C</span>
                </div>
                <div className="w-px h-3 bg-gray-800 hidden sm:block" />
                <div className="flex items-center gap-1.5 hidden sm:flex">
                  <span className="text-gray-700">PRESSURE:</span>
                  <span className="text-amber-500/80">1.0 ATM</span>
                </div>
                <div className="w-px h-3 bg-gray-800 hidden md:block" />
                <div className="flex items-center gap-1.5 hidden sm:flex">
                  <span className="text-gray-700">STATUS:</span>
                  <span className="text-amber-500/80">NOMINAL</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Headline - Mobile Optimized Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16"
          >
            <div className="relative">
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-[-0.02em] leading-[0.95] mb-4 sm:mb-6 md:mb-8 px-4">
                <motion.span 
                  className="block text-white"
                  initial={{ opacity: 0, y: 8 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  OCEAN
                </motion.span>
                <motion.span 
                  className="block text-amber-500"
                  initial={{ opacity: 0, y: 8 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  INTELLIGENCE
                </motion.span>
              </div>
              {/* Subtle glow effect - Reduced on mobile */}
              <div className="absolute inset-0 blur-2xl sm:blur-3xl opacity-5 sm:opacity-10 -z-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-amber-500/15 sm:bg-amber-500/20" />
              </div>
            </div>
            <motion.div 
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6 md:mt-8 px-4"
              initial={{ opacity: 0 }}
              animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="text-meta text-amber-500/80 text-[10px] sm:text-xs">
                ENGINEERED FOR EXTREME DEPTHS
              </div>
              <div className="h-px w-6 sm:w-8 md:w-12 bg-amber-500/25 hidden sm:block" />
              <div className="text-meta text-gray-500 text-[9px] sm:text-[10px] hidden sm:block">
                MAX DEPTH: 6000m | CLASS: MIL-SPEC
              </div>
            </motion.div>
          </motion.h1>

          {/* Mobile Optimized Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-center text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-4 leading-[1.6] sm:leading-[1.7] font-light"
          >
            Precision robotics and safety systems for <span className="text-amber-500/90 font-normal">defense, research, and commercial operations</span> in the world's most demanding marine environments.
          </motion.p>

          {/* Mobile Optimized CTA Buttons - Thumb Zone Placement */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-3 sm:gap-4 md:gap-5 justify-center items-stretch sm:items-center px-4 w-full max-w-md sm:max-w-none mx-auto"
          >
            <Link href="/products" className="w-full group">
              <Button 
                className="w-full bg-amber-500/12 hover:bg-amber-500/20 active:bg-amber-500/25 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 active:border-amber-500/60 px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 text-base sm:text-lg font-normal tracking-wide transition-all duration-200 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] backdrop-blur-sm relative overflow-hidden min-h-[52px] touch-manipulation"
                aria-label="View our products"
              >
                <span className="relative z-10">View Products</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </Link>
            <Link href="/services" className="w-full group">
              <Button
                variant="outline"
                className="w-full border border-gray-700/50 text-gray-300 hover:text-white active:text-white hover:border-gray-600 active:border-gray-500 px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 text-base sm:text-lg font-normal tracking-wide transition-all duration-200 bg-black/20 hover:bg-black/30 active:bg-black/40 backdrop-blur-sm min-h-[52px] touch-manipulation"
                aria-label="Explore our services"
              >
                Our Services
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom Technical Divider - Refined */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/25 to-transparent" />
      </section>

      {/* Narrative Introduction - The Challenge */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 border-t border-amber-500/15 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] overflow-hidden" aria-labelledby="challenge-heading">
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-100" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full opacity-30 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at center, rgba(245,158,11,0.06) 0%, transparent 70%)'
        }} />

        <div className="container-responsive max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            {/* Section Label */}
            <div className="mb-6 sm:mb-8">
              <div className="inline-block border border-amber-500/20 bg-black/30 px-4 py-2 mb-6">
                <div className="text-meta text-amber-500/70">
                  THE CHALLENGE
                </div>
              </div>
            </div>

            <h2 id="challenge-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[-0.01em] leading-[1.05] mb-6 sm:mb-8 text-white max-w-4xl mx-auto">
              The Ocean Doesn't<br />Forgive Mistakes
            </h2>
            <div className="h-px w-16 sm:w-20 md:w-24 bg-gradient-to-r from-transparent via-amber-500/35 to-transparent mx-auto mb-8 sm:mb-10" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16">
              {[
                {
                  title: "Extreme Conditions",
                  description: "Pressure, temperature, and visibility challenges that push human and equipment limits.",
                  stat: "6000m"
                },
                {
                  title: "Mission-Critical Stakes",
                  description: "When operations go underwater, failure isn't an option. Lives, assets, and missions depend on precision.",
                  stat: "99.9%"
                },
                {
                  title: "Fragmented Solutions",
                  description: "Current tools are disconnected, expensive, or inadequate for modern operational needs.",
                  stat: "24/7"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-light text-amber-500/90 mb-3 font-mono">
                    {item.stat}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-light text-white/90 mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 leading-[1.6] font-light">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Our Approach */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <div className="border border-amber-500/20 bg-black/20 p-8 sm:p-10 md:p-12 backdrop-blur-sm">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white/95 mb-4 sm:mb-6">
                  We Engineer Solutions That Work<br />Where Others Fail
                </h3>
                <p className="text-base sm:text-lg text-gray-300 leading-[1.7] font-light mb-6 sm:mb-8">
                  Our products and services work together as an integrated system—technology that operates autonomously, services that provide complete operational support, and standards that ensure mission success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                  <Link href="/products">
                    <Button className="w-full sm:w-auto bg-amber-500/12 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 px-6 sm:px-8 md:px-10 py-4 sm:py-5 text-base sm:text-lg font-normal tracking-wide transition-all duration-200 min-h-[52px] touch-manipulation">
                      Explore Technology
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto border border-gray-700/40 text-gray-300 hover:text-white hover:border-gray-500 px-6 sm:px-8 md:px-10 py-4 sm:py-5 text-base sm:text-lg font-normal tracking-wide transition-all duration-200 min-h-[52px] touch-manipulation"
                    >
                      See Operational Support
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview - Mobile Optimized */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 px-4 border-t border-amber-500/15 bg-gradient-to-b from-[#0a0e1a] to-black overflow-hidden" aria-labelledby="services-heading">
        {/* Standardized Technical Grid - Reduced on Mobile */}
        <div className="absolute inset-0 bg-grid-pattern opacity-100" />

        {/* Subtle Radial Gradient - Reduced on Mobile */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full opacity-20 sm:opacity-30 md:opacity-40 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at center, rgba(245,158,11,0.06) 0%, transparent 70%)'
        }} />

        <div className="container-responsive max-w-7xl relative z-10">
          {/* Section Header - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 sm:mb-12 md:mb-16 lg:mb-24"
          >
            {/* Reference Number - Desktop Only */}
            <div className="mb-4 md:mb-6 hidden lg:block">
              <div className="font-mono text-[9px] text-gray-600/60 tracking-wider">
                REF: MR-SVC-001 | REV: A.3
              </div>
            </div>

            <h2 id="services-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[-0.01em] leading-[1.05] mb-4 sm:mb-6 md:mb-8 text-white">
              Complete Operational<br />Support
            </h2>
            <div className="h-px w-12 sm:w-16 md:w-20 lg:w-24 bg-gradient-to-r from-transparent via-amber-500/35 to-transparent mb-4 sm:mb-6 md:mb-8" />
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-[1.6] sm:leading-[1.7] font-light">
              End-to-end services that support your underwater operations—from inspection and mapping to data intelligence and safety standards. <span className="text-amber-500/90 font-normal">Many services offer annual subscriptions for predictable costs and priority scheduling.</span>
            </p>
          </motion.div>

          {/* Services Grid - Mobile Optimized Spacing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {services.map((service, index) => {
              const iconMap: { [key: string]: React.ReactNode } = {
                inspection: <Waves className="w-8 h-8 md:w-10 md:h-10 text-amber-500/70" />,
                data: <Database className="w-8 h-8 md:w-10 md:h-10 text-amber-500/70" />,
                safety: <Shield className="w-8 h-8 md:w-10 md:h-10 text-amber-500/70" />,
                infrastructure: <Zap className="w-8 h-8 md:w-10 md:h-10 text-amber-500/70" />,
              }

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group"
                >
                  <Link href={`/services/${service.id}`} className="block h-full touch-manipulation">
                    <div className="relative h-full border border-gray-800/40 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-5 sm:p-6 md:p-8 lg:p-10 transition-all duration-200 active:scale-[0.98] hover:border-amber-500/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] sm:group-hover:scale-[1.01] flex flex-col">
                      {/* Subtle Glow Effect on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/0 to-amber-500/0 group-hover:via-amber-500/3 group-hover:to-amber-500/6 transition-all duration-300 pointer-events-none" />

                      {/* Mobile Optimized Icon */}
                      <div className="mb-5 sm:mb-6 md:mb-8">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border border-gray-700/40 bg-black/30 flex items-center justify-center group-hover:border-amber-500/40 group-hover:bg-amber-500/5 transition-all duration-200">
                          {iconMap[service.category] || <Navigation className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-amber-500/70 group-hover:text-amber-500 transition-colors" />}
                        </div>
                      </div>

                      {/* Title - Mobile Optimized */}
                      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-3 sm:mb-4 text-white tracking-tight">
                        {service.name}
                      </h3>
                      <div className="h-px w-10 sm:w-12 md:w-16 lg:w-20 bg-gradient-to-r from-amber-500/35 to-transparent mb-4 sm:mb-5 md:mb-6" />

                      {/* Description - Mobile Optimized */}
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-5 sm:mb-6 md:mb-8 lg:mb-10 flex-grow leading-[1.6] sm:leading-[1.7] font-light">
                        {service.tagline}
                      </p>

                      {/* Mobile Optimized CTA */}
                      <div className="flex items-center justify-between pt-5 sm:pt-6 md:pt-8 border-t border-gray-800/40 group-hover:border-amber-500/25 transition-colors min-h-[44px]">
                        <div className="text-sm sm:text-base md:text-lg text-gray-400 group-hover:text-gray-300 font-normal transition-colors">
                          {service.subscriptionTiers ? 'View subscriptions' : 'See how we help'}
                        </div>
                        <div className="text-amber-500/60 group-hover:text-amber-500 transition-all text-lg sm:text-xl md:text-2xl group-hover:translate-x-1">
                          →
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* View All - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mt-10 sm:mt-12 md:mt-16 lg:mt-20"
          >
            <Link href="/services" className="inline-block w-full sm:w-auto max-w-md sm:max-w-none mx-auto">
              <Button
                className="w-full sm:w-auto bg-amber-500/12 hover:bg-amber-500/20 active:bg-amber-500/25 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 active:border-amber-500/60 px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 text-base sm:text-lg font-normal tracking-wide transition-all duration-200 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] backdrop-blur-sm min-h-[52px] touch-manipulation"
                aria-label="Explore all services"
              >
                Explore All Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Products Preview - Mobile Optimized */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 px-4 border-t border-amber-500/15 bg-[#0a0e1a] overflow-hidden" aria-labelledby="products-heading">
        {/* Standardized Technical Grid - Reduced on Mobile */}
        <div className="absolute inset-0 bg-grid-pattern opacity-100" />

        {/* Subtle Radial Gradient - Reduced on Mobile */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full opacity-20 sm:opacity-30 md:opacity-40 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at center, rgba(245,158,11,0.06) 0%, transparent 70%)'
        }} />

        <div className="container-responsive max-w-7xl relative z-10">
          {/* Section Header - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 sm:mb-12 md:mb-16 lg:mb-24"
          >
            {/* Reference Number - Desktop Only */}
            <div className="mb-4 md:mb-6 hidden lg:block">
              <div className="font-mono text-[9px] text-gray-600/60 tracking-wider">
                REF: MR-PROD-001 | REV: A.3
              </div>
            </div>

            <h2 id="products-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[-0.01em] leading-[1.05] mb-4 sm:mb-6 md:mb-8 text-white">
              Technology That<br />Operates Autonomously
            </h2>
            <div className="h-px w-12 sm:w-16 md:w-20 lg:w-24 bg-gradient-to-r from-transparent via-amber-500/35 to-transparent mb-4 sm:mb-6 md:mb-8" />
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-[1.6] sm:leading-[1.7] font-light">
              Hardware, software, and robotics systems that work when humans can't—autonomous operations, intelligent communication, and human augmentation for extreme environments. <span className="text-amber-500/90 font-normal">Available through authorized vendors or direct inquiry.</span>
            </p>
          </motion.div>

          {/* Products Grid - Mobile Optimized Spacing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {products.slice(0, 3).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <Link href={`/products/${product.id}`} className="block h-full touch-manipulation">
                  <div className="relative h-full border border-gray-800/40 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] overflow-hidden transition-all duration-200 active:scale-[0.98] hover:border-amber-500/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] sm:group-hover:scale-[1.01]">
                    {/* Subtle Glow Effect on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/0 to-amber-500/0 group-hover:via-amber-500/3 group-hover:to-amber-500/6 transition-all duration-300 pointer-events-none" />
                    
                    {/* Image Container - Mobile Optimized */}
                    <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 bg-black/50 overflow-hidden">
                      <Image
                        src={product.heroImage}
                        alt={`${product.name} - ${product.tagline}`}
                        fill
                        className="object-cover transition-transform duration-500 ease-out sm:group-hover:scale-110"
                        loading={index === 0 ? "eager" : "lazy"}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
                      
                      {/* Overlay Glow - Reduced on Mobile */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Part Number - Desktop Only */}
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 hidden lg:block">
                        <div className="bg-black/80 border border-amber-500/30 px-2.5 sm:px-3 py-1 sm:py-1.5 backdrop-blur-sm">
                          <div className="text-meta text-amber-500/80 text-[9px]">
                            P/N: MR-{product.id.toUpperCase()}-001
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content - Mobile Optimized */}
                    <div className="p-5 sm:p-6 md:p-8 lg:p-10 flex-grow flex flex-col">
                      <div className="mb-4 sm:mb-5">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-3 sm:mb-4 text-white tracking-tight">
                          {product.name}
                        </h3>
                        <div className="h-px w-10 sm:w-12 md:w-16 lg:w-20 bg-gradient-to-r from-amber-500/35 to-transparent mb-4 sm:mb-5" />
                      </div>
                      
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-5 sm:mb-6 md:mb-8 lg:mb-10 flex-grow leading-[1.6] sm:leading-[1.7] font-light">
                        {product.tagline}
                      </p>

                      {/* Mobile Optimized CTA */}
                      <div className="flex items-center justify-between pt-5 sm:pt-6 md:pt-8 border-t border-gray-800/40 group-hover:border-amber-500/25 transition-colors min-h-[44px]">
                        <div className="text-sm sm:text-base md:text-lg text-gray-400 group-hover:text-gray-300 font-normal transition-colors">
                          Explore technology
                        </div>
                        <div className="text-amber-500/60 group-hover:text-amber-500 transition-all text-lg sm:text-xl md:text-2xl group-hover:translate-x-1">
                          →
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mt-10 sm:mt-12 md:mt-16 lg:mt-20"
          >
            <Link href="/products" className="inline-block w-full sm:w-auto max-w-md sm:max-w-none mx-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto border border-gray-700/40 text-gray-400 hover:text-white active:text-white hover:border-gray-500 active:border-gray-400 px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 text-base sm:text-lg font-normal tracking-wide transition-all duration-200 min-h-[52px] touch-manipulation"
                aria-label="View all products"
              >
                View All Products
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>


      {/* CTA Section - Mobile Optimized */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 border-t border-amber-500/10 bg-[#0a0e1a]" aria-labelledby="cta-heading">
        {/* Subtle Technical Grid - Reduced on Mobile */}
        <div className="absolute inset-0 bg-grid-pattern opacity-100" />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="container-responsive max-w-5xl relative z-10"
        >
            <div className="relative border border-gray-800/30 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20">
            <div className="text-center relative z-10">
              <h2 id="cta-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-[-0.01em] leading-[1.05] mb-4 sm:mb-6 md:mb-8 text-white/95">
                Ready to Take Your<br className="hidden sm:block" />Operations Underwater?
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto leading-[1.6] sm:leading-[1.7] font-light">
                Contact our team to discuss your requirements and explore how Melon Robotics can support your mission.
              </p>

              {/* CTA Buttons - Mobile Optimized Thumb Zone */}
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
                <Link href="/contact" className="w-full">
                  <Button className="w-full bg-amber-500/12 hover:bg-amber-500/20 active:bg-amber-500/25 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 active:border-amber-500/60 px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 text-base sm:text-lg font-normal tracking-wide transition-all duration-200 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] min-h-[52px] touch-manipulation">
                    Contact Sales
                  </Button>
                </Link>
                <Link href="/about" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full border border-gray-700/40 text-gray-400 hover:text-white active:text-white hover:border-gray-500 active:border-gray-400 px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 text-base sm:text-lg font-normal tracking-wide transition-all duration-200 min-h-[52px] touch-manipulation"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}


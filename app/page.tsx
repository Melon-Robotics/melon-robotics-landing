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
      {/* Hero Section - Enhanced Visual Impact */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0"
        aria-label="Hero section"
      >
        {/* Technical Grid Background - More Visible */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(245,158,11,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245,158,11,0.15) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Enhanced Depth Gradient with Radial Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0f1625] to-[#1a2332]" />
        <div className="absolute inset-0 bg-radial-gradient from-amber-500/5 via-transparent to-transparent" style={{
          background: 'radial-gradient(ellipse at center, rgba(245,158,11,0.08) 0%, transparent 70%)'
        }} />
        
        {/* Animated Scan Lines */}
        <div className="absolute inset-0 opacity-[0.03]">
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(245,158,11,0.1) 2px, rgba(245,158,11,0.1) 4px)'
            }}
            animate={{
              y: [0, 100, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
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
          {/* Technical Status Indicator - DARPA Style */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 md:mb-12 lg:mb-16 px-4"
          >
            <div className="flex flex-col items-center gap-3 md:gap-4">
              {/* Primary Status */}
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
                <div className="flex items-center gap-2 font-mono text-[9px] sm:text-[10px] text-amber-500/80 tracking-[0.2em] sm:tracking-[0.25em] uppercase">
                  <div className="relative">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                    <div className="absolute inset-0 w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping opacity-75" />
                  </div>
                  <span>SYSTEM OPERATIONAL</span>
                </div>
                <div className="h-px w-8 md:w-12 bg-amber-500/20 hidden sm:block" />
                <div className="font-mono text-[8px] sm:text-[10px] text-gray-600">
                  REF: MR-2024-001 | REV: A.3
                </div>
              </div>
              
              {/* Technical Readout */}
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 font-mono text-[8px] sm:text-[9px] text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-gray-700">DEPTH:</span>
                  <span className="text-amber-500/80">0m</span>
                </div>
                <div className="w-px h-3 bg-gray-800 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <span className="text-gray-700">TEMP:</span>
                  <span className="text-amber-500/80">22°C</span>
                </div>
                <div className="w-px h-3 bg-gray-800 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <span className="text-gray-700">PRESSURE:</span>
                  <span className="text-amber-500/80">1.0 ATM</span>
                </div>
                <div className="w-px h-3 bg-gray-800 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <span className="text-gray-700">STATUS:</span>
                  <span className="text-amber-500/80">NOMINAL</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Headline - Enhanced Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center mb-8 md:mb-12"
          >
            <div className="relative">
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-light tracking-[-0.03em] leading-[0.9] mb-6 px-4">
                <motion.span 
                  className="block text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  OCEAN
                </motion.span>
                <motion.span 
                  className="block text-amber-500 font-normal drop-shadow-[0_0_40px_rgba(245,158,11,0.3)]"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  INTELLIGENCE
                </motion.span>
              </div>
              {/* Glow effect behind text */}
              <div className="absolute inset-0 blur-3xl opacity-20 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-amber-500/30" />
              </div>
            </div>
            <motion.div 
              className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mt-6 md:mt-8 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="font-mono text-[10px] sm:text-xs text-amber-500/70 tracking-[0.2em] sm:tracking-[0.25em] uppercase">
                ENGINEERED FOR EXTREME DEPTHS
              </div>
              <div className="h-px w-8 md:w-12 bg-amber-500/30 hidden sm:block" />
              <div className="font-mono text-[9px] sm:text-[10px] text-gray-500">
                MAX DEPTH: 6000m | CLASS: MIL-SPEC
              </div>
            </motion.div>
          </motion.h1>

          {/* Enhanced Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-center text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light mb-12 md:mb-16 lg:mb-20 px-4"
          >
            Precision robotics and safety systems for <span className="text-amber-500/90 font-medium">defense, research, and commercial operations</span> in the world's most demanding marine environments.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
          >
            <Link href="/products" className="w-full sm:w-auto group">
              <Button 
                className="w-full sm:w-auto bg-amber-500/15 hover:bg-amber-500/25 text-amber-500 border-2 border-amber-500/40 hover:border-amber-500/60 px-10 md:px-12 py-6 md:py-7 text-sm md:text-base font-medium tracking-wide transition-all duration-300 hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] hover:scale-105 backdrop-blur-sm relative overflow-hidden"
                aria-label="View our products"
              >
                <span className="relative z-10">View Products</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </Button>
            </Link>
            <Link href="/services" className="w-full sm:w-auto group">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-2 border-gray-600/50 text-gray-300 hover:text-white hover:border-gray-500 px-10 md:px-12 py-6 md:py-7 text-sm md:text-base font-medium tracking-wide transition-all duration-300 bg-black/30 hover:bg-black/40 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:scale-105"
                aria-label="Explore our services"
              >
                Our Services
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom Technical Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-t from-amber-500/30 to-transparent" />
      </section>

      {/* Products Preview - Enhanced Visual Impact */}
      <section className="relative py-24 md:py-36 lg:py-48 px-4 border-t border-amber-500/20 bg-[#0a0e1a] overflow-hidden" aria-labelledby="products-heading">
        {/* Enhanced Technical Grid */}
        <div className="absolute inset-0 opacity-[0.025]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(245,158,11,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245,158,11,0.15) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Subtle Radial Gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full opacity-30" style={{
          background: 'radial-gradient(ellipse at center, rgba(245,158,11,0.1) 0%, transparent 70%)'
        }} />

        {/* DARPA Corner Markers - More Visible */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-amber-500/25 hidden lg:block" />
        <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-amber-500/25 hidden lg:block" />
        <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-amber-500/25 hidden lg:block" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-amber-500/25 hidden lg:block" />

        <div className="container-responsive max-w-7xl relative z-10">
          {/* Section Header - Clean & Refined */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-16 lg:mb-24"
          >
            {/* Reference Number - Desktop Only */}
            <div className="mb-4 md:mb-6 hidden lg:block">
              <div className="font-mono text-[9px] text-gray-600/60 tracking-wider">
                REF: MR-PROD-001 | REV: A.3
              </div>
            </div>

            <h2 id="products-heading" className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6 md:mb-8 text-white">
              Technology<br />for the Ocean
            </h2>
            <div className="h-px w-20 md:w-24 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent mb-6 md:mb-8" />
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light max-w-3xl leading-relaxed">
              Hardware, software, and robotics engineered for extreme conditions and mission-critical operations.
            </p>
          </motion.div>

          {/* Products Grid - Clean & Refined */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {products.slice(0, 3).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="group"
              >
                <Link href={`/products/${product.id}`} className="block h-full">
                  <div className="relative h-full border-2 border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] overflow-hidden transition-all duration-500 hover:border-amber-500/50 hover:shadow-[0_0_60px_rgba(245,158,11,0.25)] group-hover:scale-[1.02]">
                    {/* Enhanced Corner Markers */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden lg:block" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden lg:block" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden lg:block" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden lg:block" />
                    
                    {/* Glow Effect on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/0 to-amber-500/0 group-hover:via-amber-500/5 group-hover:to-amber-500/10 transition-all duration-500 pointer-events-none" />
                    
                    {/* Image Container - Enhanced */}
                    <div className="relative h-72 sm:h-80 md:h-96 bg-black/50 overflow-hidden">
                      <Image
                        src={product.heroImage}
                        alt={`${product.name} - ${product.tagline}`}
                        fill
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                        loading={index === 0 ? "eager" : "lazy"}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
                      
                      {/* Enhanced Overlay Glow */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Part Number - Enhanced */}
                      <div className="absolute top-4 left-4 hidden lg:block">
                        <div className="bg-black/90 border-2 border-amber-500/40 px-3 py-1.5 backdrop-blur-md shadow-lg">
                          <div className="font-mono text-[9px] text-amber-500/90 tracking-wider font-medium">
                            P/N: MR-{product.id.toUpperCase()}-001
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content - Enhanced */}
                    <div className="p-6 md:p-8 lg:p-10 flex-grow flex flex-col">
                      <div className="mb-5">
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 text-white tracking-tight">
                          {product.name}
                        </h3>
                        <div className="h-px w-16 md:w-20 bg-gradient-to-r from-amber-500/40 to-transparent mb-5" />
                      </div>
                      
                      <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-10 flex-grow leading-relaxed font-light">
                        {product.tagline}
                      </p>

                      {/* Enhanced CTA */}
                      <div className="flex items-center justify-between pt-6 md:pt-8 border-t-2 border-gray-800/50 group-hover:border-amber-500/30 transition-colors">
                        <div className="text-base md:text-lg text-gray-400 group-hover:text-gray-300 font-medium transition-colors">
                          Learn more
                        </div>
                        <div className="text-amber-500/70 group-hover:text-amber-500 transition-all text-xl md:text-2xl group-hover:translate-x-2">
                          →
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-12 md:mt-16 lg:mt-20"
          >
            <Link href="/products">
              <Button
                variant="outline"
                className="border border-gray-700/40 text-gray-400 hover:text-white hover:border-gray-500 px-8 md:px-10 py-5 md:py-6 text-sm md:text-base font-light tracking-wide transition-all duration-300"
                aria-label="View all products"
              >
                View All Products
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview - Enhanced Visual Impact */}
      <section className="relative py-24 md:py-36 lg:py-48 px-4 border-t border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-black overflow-hidden" aria-labelledby="services-heading">
        {/* Enhanced Technical Grid */}
        <div className="absolute inset-0 opacity-[0.025]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(245,158,11,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245,158,11,0.15) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Subtle Radial Gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full opacity-30" style={{
          background: 'radial-gradient(ellipse at center, rgba(245,158,11,0.1) 0%, transparent 70%)'
        }} />

        {/* DARPA Corner Markers - More Visible */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-amber-500/25 hidden lg:block" />
        <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-amber-500/25 hidden lg:block" />
        <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-amber-500/25 hidden lg:block" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-amber-500/25 hidden lg:block" />

        <div className="container-responsive max-w-7xl relative z-10">
          {/* Section Header - Clean & Refined */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-16 lg:mb-24"
          >
            {/* Reference Number - Desktop Only */}
            <div className="mb-4 md:mb-6 hidden lg:block">
              <div className="font-mono text-[9px] text-gray-600/60 tracking-wider">
                REF: MR-SVC-001 | REV: A.3
              </div>
            </div>

            <h2 id="services-heading" className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6 md:mb-8 text-white">
              Professional<br />Subsea Solutions
            </h2>
            <div className="h-px w-20 md:w-24 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent mb-6 md:mb-8" />
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light max-w-3xl leading-relaxed">
              Advanced capabilities for inspection, data collection, and safety standards in underwater operations.
            </p>
          </motion.div>

          {/* Services Grid - Clean & Refined */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
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
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/services/${service.id}`} className="block h-full">
                    <div className="relative h-full border-2 border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 md:p-8 lg:p-10 transition-all duration-500 hover:border-amber-500/50 hover:shadow-[0_0_60px_rgba(245,158,11,0.25)] group-hover:scale-[1.02] flex flex-col">
                      {/* Enhanced Corner Markers */}
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden lg:block" />
                      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden lg:block" />
                      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden lg:block" />
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden lg:block" />
                      
                      {/* Glow Effect on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/0 to-amber-500/0 group-hover:via-amber-500/5 group-hover:to-amber-500/10 transition-all duration-500 pointer-events-none" />

                      {/* Enhanced Icon */}
                      <div className="mb-8 md:mb-10">
                        <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-gray-700/40 bg-black/40 flex items-center justify-center group-hover:border-amber-500/50 group-hover:bg-amber-500/5 transition-all duration-500 shadow-lg">
                          {iconMap[service.category] || <Navigation className="w-10 h-10 md:w-12 md:h-12 text-amber-500/80 group-hover:text-amber-500 transition-colors" />}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 text-white tracking-tight">
                        {service.name}
                      </h3>
                      <div className="h-px w-16 md:w-20 bg-gradient-to-r from-amber-500/40 to-transparent mb-5 md:mb-6" />

                      {/* Description */}
                      <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-10 leading-relaxed font-light flex-grow">
                        {service.tagline}
                      </p>

                      {/* Enhanced CTA */}
                      <div className="flex items-center justify-between pt-6 md:pt-8 border-t-2 border-gray-800/50 group-hover:border-amber-500/30 transition-colors">
                        <div className="text-base md:text-lg text-gray-400 group-hover:text-gray-300 font-medium transition-colors">
                          Learn more
                        </div>
                        <div className="text-amber-500/70 group-hover:text-amber-500 transition-all text-xl md:text-2xl group-hover:translate-x-2">
                          →
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* View All */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-12 md:mt-16 lg:mt-20"
          >
            <Link href="/services">
              <Button
                variant="outline"
                className="border border-gray-700/40 text-gray-400 hover:text-white hover:border-gray-500 px-8 md:px-10 py-5 md:py-6 text-sm md:text-base font-light tracking-wide transition-all duration-300"
                aria-label="Explore all services"
              >
                Explore All Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Clean & Refined */}
      <section className="relative py-20 md:py-32 lg:py-40 px-4 border-t border-amber-500/10 bg-[#0a0e1a]" aria-labelledby="cta-heading">
        {/* Subtle Technical Grid - Desktop Only */}
        <div className="absolute inset-0 opacity-[0.015] hidden lg:block">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(245,158,11,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245,158,11,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="container-responsive max-w-5xl relative z-10"
        >
          <div className="relative border border-gray-800/40 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-8 md:p-12 lg:p-16 xl:p-20">
            {/* Subtle Corner Markers - Desktop Only */}
            <div className="absolute top-0 left-0 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 border-t border-l border-amber-500/15 hidden lg:block" />
            <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 border-t border-r border-amber-500/15 hidden lg:block" />
            <div className="absolute bottom-0 left-0 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 border-b border-l border-amber-500/15 hidden lg:block" />
            <div className="absolute bottom-0 right-0 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 border-b border-r border-amber-500/15 hidden lg:block" />

            <div className="text-center relative z-10">
              <h2 id="cta-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 md:mb-8 text-white/90 leading-tight">
                Ready to Take Your<br className="hidden sm:block" />Operations Underwater?
            </h2>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Contact our team to discuss your requirements and explore how Melon Robotics can support your mission.
            </p>

              {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 px-8 md:px-10 py-5 md:py-6 text-sm md:text-base font-light tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                    Contact Sales
                </Button>
              </Link>
                <Link href="/about" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                    className="w-full sm:w-auto border border-gray-700/40 text-gray-400 hover:text-white hover:border-gray-500 px-8 md:px-10 py-5 md:py-6 text-sm md:text-base font-light tracking-wide transition-all duration-300"
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


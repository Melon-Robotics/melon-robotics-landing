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
      {/* Hero Section - Industrial Marine Design */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0"
        aria-label="Hero section"
      >
        {/* Technical Grid Background - Engineering Drawing Style */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(245,158,11,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245,158,11,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Depth Pressure Visualization */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0f1625] to-[#1a2332]" />
        
        {/* Industrial Depth Indicators */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="flex flex-col gap-8 font-mono text-xs text-amber-500/40 tracking-widest">
            {[0, 1000, 2000, 3000, 4000, 5000].map((depth) => (
              <motion.div
                key={depth}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: depth / 1000 }}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-px bg-amber-500/20" />
                <span>{depth}m</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pressure Gauge Indicator */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative w-24 h-24"
          >
            <div className="absolute inset-0 border-2 border-amber-500/20 rounded-full" />
            <div className="absolute inset-0 border-2 border-amber-500/40 rounded-full border-t-transparent" style={{ clipPath: 'polygon(50% 50%, 100% 0%, 100% 50%)' }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-xs font-mono text-amber-500/60">PSI</div>
                <div className="text-lg font-mono text-amber-500 font-bold">450</div>
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
            className="mb-12 md:mb-16"
          >
            <div className="flex flex-col items-center gap-4">
              {/* Primary Status */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 font-mono text-[10px] text-amber-500/80 tracking-[0.25em] uppercase">
                  <div className="relative">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                    <div className="absolute inset-0 w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping opacity-75" />
                  </div>
                  <span>SYSTEM OPERATIONAL</span>
                </div>
                <div className="h-px w-12 bg-amber-500/20" />
                <div className="font-mono text-[10px] text-gray-600">
                  REF: MR-2024-001 | REV: A.3
                </div>
              </div>
              
              {/* Technical Readout */}
              <div className="flex items-center gap-6 font-mono text-[9px] text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-gray-700">DEPTH:</span>
                  <span className="text-amber-500/80">0m</span>
                </div>
                <div className="w-px h-3 bg-gray-800" />
                <div className="flex items-center gap-2">
                  <span className="text-gray-700">TEMP:</span>
                  <span className="text-amber-500/80">22°C</span>
                </div>
                <div className="w-px h-3 bg-gray-800" />
                <div className="flex items-center gap-2">
                  <span className="text-gray-700">PRESSURE:</span>
                  <span className="text-amber-500/80">1.0 ATM</span>
                </div>
                <div className="w-px h-3 bg-gray-800" />
                <div className="flex items-center gap-2">
                  <span className="text-gray-700">STATUS:</span>
                  <span className="text-amber-500/80">NOMINAL</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Headline - Industrial Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center mb-8 md:mb-12"
          >
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-[-0.02em] leading-[0.95] mb-4">
              <span className="block text-white/90">OCEAN</span>
              <span className="block text-amber-500/90 font-normal">INTELLIGENCE</span>
            </div>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="font-mono text-[10px] text-gray-600 tracking-[0.2em] uppercase">
                ENGINEERED FOR EXTREME DEPTHS
              </div>
              <div className="h-px w-8 bg-gray-800" />
              <div className="font-mono text-[10px] text-gray-600">
                MAX DEPTH: 6000m | CLASS: MIL-SPEC
              </div>
            </div>
          </motion.h1>

          {/* Technical Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light mb-16 md:mb-20"
          >
            Precision robotics and safety systems for <span className="text-amber-500/80 font-normal">defense, research, and commercial operations</span> in the world's most demanding marine environments.
          </motion.p>

          {/* Industrial CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/products" className="w-full sm:w-auto">
              <Button 
                className="w-full sm:w-auto bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 px-10 py-7 text-sm font-mono tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] backdrop-blur-sm"
                aria-label="View our products"
              >
                View Products
              </Button>
            </Link>
            <Link href="/services" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto border border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-600 px-10 py-7 text-sm font-mono tracking-wider uppercase transition-all duration-300 bg-black/20 backdrop-blur-sm"
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

      {/* Products Preview - Industrial Equipment Display */}
      <section className="py-32 md:py-40 px-4 border-t border-amber-500/10" aria-labelledby="products-heading">
        <div className="container-responsive max-w-7xl">
          {/* Section Header - Technical Drawing Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-20 md:mb-28"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
              <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">PRODUCT PORTFOLIO</div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            </div>
            <h2 id="products-heading" className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 text-white/90">
              Technology<br />for the Ocean
            </h2>
            <p className="text-base md:text-lg text-gray-500 font-light max-w-xl leading-relaxed">
              Hardware, software, and robotics engineered for extreme conditions and mission-critical operations.
            </p>
          </motion.div>

          {/* Products Grid - Industrial Equipment Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
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
                  <div className="relative h-full border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] overflow-hidden transition-all duration-500 hover:border-amber-500/30 hover:shadow-[0_0_40px_rgba(245,158,11,0.1)]">
                    {/* Technical Drawing Lines */}
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Image Container - DARPA Equipment Display */}
                    <div className="relative h-64 md:h-72 bg-black/40 overflow-hidden border-b border-gray-800/50">
                      <Image
                        src={product.heroImage}
                        alt={`${product.name} - ${product.tagline}`}
                        fill
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                        loading={index === 0 ? "eager" : "lazy"}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
                      
                      {/* Technical Drawing Reference */}
                      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-amber-500/20 via-transparent to-transparent" />
                      
                      {/* Part Number Badge */}
                      <div className="absolute top-4 left-4">
                        <div className="bg-black/95 border border-amber-500/40 px-3 py-1.5 backdrop-blur-sm">
                          <div className="font-mono text-[9px] text-amber-500/90 tracking-wider uppercase mb-0.5">
                            {product.category}
                          </div>
                          <div className="font-mono text-[8px] text-gray-600">
                            P/N: MR-{product.id.toUpperCase()}-001
                          </div>
                        </div>
                      </div>

                      {/* Technical Specifications */}
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="bg-black/95 border border-gray-700/50 px-3 py-1.5 backdrop-blur-sm">
                          <div className="font-mono text-[8px] text-gray-600 space-y-0.5">
                            <div>MAX DEPTH: 6000m</div>
                            <div>RATING: MIL-SPEC</div>
                            <div>REV: A.2</div>
                          </div>
                        </div>
                      </div>

                      {/* Dimension Line Indicator */}
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/10 to-transparent" />
                    </div>

                    {/* Content - DARPA Technical Specifications */}
                    <div className="p-8 flex-grow flex flex-col">
                      {/* Part Number & Classification */}
                      <div className="mb-4 flex items-center justify-between">
                        <div className="font-mono text-[9px] text-gray-600">
                          P/N: MR-{product.id.toUpperCase()}-001 | REV: A.2
                        </div>
                        <div className="font-mono text-[9px] text-amber-500/60">
                          CLASS: MIL-SPEC
                        </div>
                      </div>

                      <div className="mb-4">
                        <h3 className="text-2xl md:text-3xl font-light mb-2 text-white/90 tracking-tight">
                          {product.name}
                        </h3>
                        <div className="h-px w-12 bg-amber-500/30 mb-4" />
                      </div>
                      
                      <p className="text-sm md:text-base text-gray-400 mb-8 flex-grow leading-relaxed font-light">
                        {product.tagline}
                      </p>

                      {/* Technical Readout - DARPA Style */}
                      <div className="pt-6 border-t border-gray-800/50">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-mono text-[9px] text-gray-600 uppercase tracking-wider">
                            View Technical Specifications
                          </div>
                          <div className="text-amber-500/60 group-hover:text-amber-500 transition-colors font-mono text-xs">
                            →
                          </div>
                        </div>
                        <div className="font-mono text-[8px] text-gray-700 mt-1">
                          DOCUMENT: MR-TS-{product.id.toUpperCase()}-001 | PAGES: 24
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All - Industrial Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-16 md:mt-20"
          >
            <Link href="/products">
              <Button
                variant="outline"
                className="border border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-600 px-12 py-8 text-sm font-mono tracking-wider uppercase transition-all duration-300 bg-black/20 backdrop-blur-sm"
                aria-label="View all products"
              >
                View All Products
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview - Industrial Service Modules */}
      <section className="py-32 md:py-40 px-4 border-t border-amber-500/10 bg-gradient-to-b from-[#0a0e1a] to-black" aria-labelledby="services-heading">
        <div className="container-responsive max-w-7xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-20 md:mb-28"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
              <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">SERVICE MODULES</div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            </div>
            <h2 id="services-heading" className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 text-white/90">
              Professional<br />Subsea Solutions
            </h2>
            <p className="text-base md:text-lg text-gray-500 font-light max-w-xl leading-relaxed">
              Advanced capabilities for inspection, data collection, and safety standards in underwater operations.
            </p>
          </motion.div>

          {/* Services Grid - Technical Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {services.map((service, index) => {
              const iconMap: { [key: string]: React.ReactNode } = {
                inspection: <Waves className="w-8 h-8 text-amber-500/60" />,
                data: <Database className="w-8 h-8 text-amber-500/60" />,
                safety: <Shield className="w-8 h-8 text-amber-500/60" />,
                infrastructure: <Zap className="w-8 h-8 text-amber-500/60" />,
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
                    <div className="relative h-full border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-8 transition-all duration-500 hover:border-amber-500/30 hover:shadow-[0_0_40px_rgba(245,158,11,0.1)]">
                      {/* Technical Drawing Corner */}
                      <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Icon - Industrial Style */}
                      <div className="mb-8">
                        <div className="w-16 h-16 border border-gray-700/50 bg-black/40 flex items-center justify-center group-hover:border-amber-500/30 transition-colors duration-500">
                          {iconMap[service.category] || <Navigation className="w-8 h-8 text-amber-500/60" />}
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="mb-6">
                        <div className="inline-block bg-black/60 border border-gray-700/50 px-3 py-1">
                          <div className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">
                            {service.category}
                          </div>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-light mb-4 text-white/90 tracking-tight">
                        {service.name}
                      </h3>
                      <div className="h-px w-12 bg-amber-500/30 mb-6" />

                      {/* Description */}
                      <p className="text-sm md:text-base text-gray-400 mb-8 leading-relaxed font-light">
                        {service.tagline}
                      </p>

                      {/* Technical Readout */}
                      <div className="flex items-center justify-between pt-6 border-t border-gray-800/50">
                        <div className="font-mono text-xs text-gray-600 uppercase tracking-wider">
                          View Details
                        </div>
                        <div className="text-amber-500/60 group-hover:text-amber-500 transition-colors">
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
            className="text-center mt-16 md:mt-20"
          >
            <Link href="/services">
              <Button
                variant="outline"
                className="border border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-600 px-12 py-8 text-sm font-mono tracking-wider uppercase transition-all duration-300 bg-black/20 backdrop-blur-sm"
                aria-label="Explore all services"
              >
                Explore All Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Industrial Contact Module */}
      <section className="py-32 md:py-40 px-4 border-t border-amber-500/10" aria-labelledby="cta-heading">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="container-responsive max-w-5xl"
        >
          <div className="relative border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-12 md:p-16 lg:p-20">
            {/* Technical Drawing Corners */}
            <div className="absolute top-0 left-0 w-24 h-24 border-t border-l border-amber-500/20" />
            <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-amber-500/20" />
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-amber-500/20" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b border-r border-amber-500/20" />

            <div className="text-center relative z-10">
              {/* Section Label - DARPA Style */}
              <div className="mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="font-mono text-[10px] text-gray-700">
                    REF: MR-CT-001
                  </div>
                  <div className="h-px w-8 bg-gray-800" />
                  <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">
                    INITIATE CONTACT
                  </div>
                  <div className="h-px w-8 bg-gray-800" />
                  <div className="font-mono text-[10px] text-gray-700">
                    REV: A.1
                  </div>
                </div>
                <div className="h-px w-24 mx-auto bg-amber-500/20" />
              </div>

              <h2 id="cta-heading" className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8 text-white/90 leading-tight">
                Ready to Take Your<br />Operations Underwater?
            </h2>
              
              <p className="text-base md:text-lg text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed font-light">
              Contact our team to discuss your requirements and explore how Melon Robotics can support your mission.
            </p>

              {/* Industrial CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 px-12 py-8 text-sm font-mono tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] backdrop-blur-sm">
                  Contact Sales
                </Button>
              </Link>
                <Link href="/about" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                    className="w-full sm:w-auto border border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-600 px-12 py-8 text-sm font-mono tracking-wider uppercase transition-all duration-300 bg-black/20 backdrop-blur-sm"
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


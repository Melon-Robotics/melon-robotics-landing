"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { products } from "@/lib/data/products"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Cpu, Battery, Radio, Map, Shield, Waves, Compass, Activity, Award, Building2, Users, Globe } from "lucide-react"

export default function ProductsPage() {
  const iconMap: { [key: string]: React.ReactNode } = {
    Cpu: <Cpu className="w-6 h-6 text-amber-500" />,
    Battery: <Battery className="w-6 h-6 text-amber-500" />,
    Flag: <Radio className="w-6 h-6 text-amber-500" />,
    Radio: <Radio className="w-6 h-6 text-amber-500" />,
    Map: <Map className="w-6 h-6 text-amber-500" />,
    Search: <Shield className="w-6 h-6 text-amber-500" />,
    Waves: <Waves className="w-6 h-6 text-amber-500" />,
    Zap: <Compass className="w-6 h-6 text-amber-500" />,
    Activity: <Activity className="w-6 h-6 text-amber-500" />,
    Compass: <Map className="w-6 h-6 text-amber-500" />,
  }

  const stats = [
    { value: "100%", label: "Made in the USA", icon: Award },
    { value: "150+", label: "Active Deployments", icon: Globe },
    { value: "24/7", label: "Global Operations", icon: Activity },
  ]

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      {/* Hero Section - Industrial Product Catalog */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 opacity-[0.02]">
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
        
        <div className="container-responsive relative z-10 max-w-7xl">
          {/* Technical Status Bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-12 md:mb-16"
          >
            <div className="flex items-center gap-2 font-mono text-xs text-amber-500/80 tracking-[0.2em] uppercase">
              <div className="relative">
                <div className="w-2 h-2 bg-amber-500 rounded-full" />
                <div className="absolute inset-0 w-2 h-2 bg-amber-500 rounded-full animate-ping opacity-75" />
              </div>
              <span>PRODUCT CATALOG</span>
            </div>
            <div className="h-px w-16 bg-amber-500/20" />
            <div className="font-mono text-xs text-gray-500">
              CLASSIFIED // OPERATIONAL
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center mb-8 md:mb-12"
          >
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.95] mb-4">
              <span className="block text-white/90">Mission-Critical</span>
              <span className="block text-amber-500/90 font-normal">Ocean Technology</span>
            </div>
            <div className="text-sm md:text-base font-mono text-gray-500 tracking-widest uppercase mt-6">
              ENGINEERED FOR EXTREME DEPTHS
            </div>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-center text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light mb-16 md:mb-20"
          >
            Software, hardware, and autonomous systems engineered for <span className="text-amber-500/80 font-normal">defense, government, and commercial operations</span> in the world's most extreme environments. <span className="text-amber-500/70 font-medium">Products are typically sold through authorized vendors, but this serves as a central information and purchasing resource.</span>
          </motion.p>

          {/* Technical Specifications Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="relative border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 md:p-8 text-center"
              >
                {/* Technical Drawing Corner */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-amber-500/10" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-amber-500/10" />
                
                <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-amber-500/60 mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-light text-amber-500/90 mb-2 leading-none font-mono">{stat.value}</div>
                <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider font-mono">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Technical Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      </section>

      {/* Compliance Indicators - Industrial Badges */}
      <section className="py-16 px-4 border-b border-amber-500/10 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625]">
        <div className="container-responsive max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
          >
            {[
              { icon: Shield, text: "ITAR Compliant" },
              { icon: Award, text: "Made in USA" },
              { icon: Shield, text: "NIST 800-171" },
              { icon: Users, text: "Defense Cleared" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-8 border border-gray-700/50 bg-black/40 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-amber-500/60" />
            </div>
                <span className="text-xs text-gray-500 font-mono tracking-wider uppercase">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Showcase - Industrial Equipment Display */}
      <section className="py-32 md:py-40 px-4">
        <div className="container-responsive max-w-7xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 md:mb-28"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
              <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">EQUIPMENT CATALOG</div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 text-white/90">
              Technology<br />Stack
            </h2>
            <p className="text-base md:text-lg text-gray-500 font-light max-w-xl leading-relaxed">
              Enterprise-grade systems designed for operational excellence and mission-critical reliability.
            </p>
          </motion.div>

          <div className="space-y-32 md:space-y-40">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 lg:gap-24 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                  {/* Image - Industrial Display Case */}
                  <motion.div 
                    className={`relative h-[450px] md:h-[550px] ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                    initial={{ opacity: 0, x: index % 2 === 1 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="absolute inset-0 border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-8 md:p-10">
                      {/* Technical Drawing Corners */}
                      <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-amber-500/20" />
                      <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-amber-500/20" />
                      <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-amber-500/20" />
                      <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-amber-500/20" />
                      
                      {/* Drawing Reference Number */}
                      <div className="absolute top-2 left-2">
                        <div className="font-mono text-[8px] text-gray-700">
                          DWG: MR-{product.id.toUpperCase()}-001
                        </div>
                      </div>
                      
                      {/* Scale Indicator */}
                      <div className="absolute bottom-2 right-2">
                        <div className="font-mono text-[8px] text-gray-700">
                          SCALE: 1:1
                        </div>
                      </div>
                      
                      <div className="relative h-full w-full">
                        <Image
                          src={product.heroImage}
                          alt={product.name}
                          fill
                          className="object-contain"
                          priority={index === 0}
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Content - Technical Specifications */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 1 ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      {/* Part Number & Classification */}
                      <div className="mb-6 flex items-center justify-between">
                        <div className="font-mono text-[9px] text-gray-600">
                          P/N: MR-{product.id.toUpperCase()}-001
                    </div>
                        <div className="font-mono text-[9px] text-amber-500/60">
                          REV: A.2 | CLASS: MIL-SPEC
                    </div>
                  </div>

                      {/* Category Badge */}
                      <div className="mb-8">
                        <div className="inline-block bg-black/60 border border-gray-700/50 px-4 py-2">
                          <div className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">
                            {product.category}
                          </div>
                        </div>
                    </div>

                      {/* Product Name */}
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight text-white/90">
                        {product.name}
                    </h2>
                      <div className="h-px w-16 bg-amber-500/30 mb-6" />

                      {/* Tagline */}
                      <p className="text-xl md:text-2xl text-amber-500/80 mb-8 font-light leading-snug">{product.tagline}</p>
                      
                      {/* Description */}
                      <p className="text-base md:text-lg text-gray-400 mb-12 leading-relaxed font-light max-w-xl">{product.description}</p>

                      {/* Key Features - DARPA Technical Specs */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-12">
                      {product.features.slice(0, 4).map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 + idx * 0.05 }}
                            className="relative border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-5"
                          >
                            {/* Reference Number */}
                            <div className="absolute top-2 right-2">
                              <div className="font-mono text-[8px] text-gray-700">
                                REF: {String(idx + 1).padStart(2, '0')}
                              </div>
                            </div>

                            <div className="flex items-start gap-4 pr-8">
                          <div className="flex-shrink-0 mt-1">
                                {iconMap[feature.icon] || <Shield className="w-5 h-5 text-amber-500/60" />}
                          </div>
                              <div className="flex-1">
                                <h4 className="text-sm md:text-base font-light text-white/90 mb-2 leading-tight">
                              {feature.title}
                            </h4>
                                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                          </motion.div>
                      ))}
                    </div>

                      {/* CTA Buttons - Industrial Style */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href={`/products/${product.id}`} className="flex-1">
                          <Button className="w-full bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 py-7 text-sm font-mono tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] backdrop-blur-sm">
                            View Specifications
                        </Button>
                      </Link>
                      <Link href="/contact" className="flex-1">
                        <Button
                          variant="outline"
                            className="w-full border border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-600 py-7 text-sm font-mono tracking-wider uppercase transition-all duration-300 bg-black/20 backdrop-blur-sm"
                        >
                          Contact Sales
                        </Button>
                      </Link>
                    </div>
                    </motion.div>
                  </div>
                </div>

                {/* Section divider */}
                {index < products.length - 1 && (
                  <div className="mt-32 md:mt-40 border-t border-amber-500/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA - Industrial Contact Module */}
      <section className="py-32 md:py-40 px-4 border-t border-amber-500/10 bg-gradient-to-b from-[#0a0e1a] to-black">
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
              <div className="mb-8">
                <Award className="w-12 h-12 md:w-14 md:h-14 text-amber-500/60 mx-auto mb-6" />
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="font-mono text-[10px] text-gray-700">
                    REF: MR-CS-001
                  </div>
                  <div className="h-px w-8 bg-gray-800" />
                  <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">
                    CUSTOM SOLUTIONS
                  </div>
                  <div className="h-px w-8 bg-gray-800" />
                  <div className="font-mono text-[10px] text-gray-700">
                    REV: A.2
                  </div>
                </div>
                <div className="h-px w-24 mx-auto bg-amber-500/20" />
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8 text-white/90 leading-tight">
                Product Information<br />& Sales
            </h2>
              
              <p className="text-base md:text-lg text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed font-light">
              Our products are available through authorized vendors and direct sales. Contact us to learn more about purchasing options, technical specifications, and deployment support for your operational requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                  <Button className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 px-12 py-8 text-sm font-mono tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] backdrop-blur-sm">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                    className="border border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-600 px-12 py-8 text-sm font-mono tracking-wider uppercase transition-all duration-300 bg-black/20 backdrop-blur-sm"
                >
                  Company Overview
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

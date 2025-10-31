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
    { value: "$40B", label: "Projected Valuation", icon: Building2 },
    { value: "150+", label: "Active Deployments", icon: Globe },
    { value: "15+", label: "Government Contracts", icon: Shield },
    { value: "24/7", label: "Global Operations", icon: Activity },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Premium Authority */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden border-b border-amber-500/30">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-black" />
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 border border-amber-500/30 bg-black/80 backdrop-blur-sm px-4 py-2 mb-8 text-xs font-mono text-amber-500 tracking-widest">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              CLASSIFIED // PRODUCTS PORTAL
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter leading-none">
              <span className="text-white">Mission-Critical</span>
              <br />
              <span className="text-amber-500">Ocean Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Software, hardware, and autonomous systems engineered for <span className="text-amber-400">defense, government, and commercial operations</span> in the world's most extreme environments.
            </p>
          </motion.div>

          {/* Authority Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-5xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center border border-amber-500/20 bg-black/40 backdrop-blur-sm p-6">
                <stat.icon className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-amber-500 mb-2">{stat.value}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider font-mono">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      </section>

      {/* Trust Indicators */}
      <section className="py-12 px-4 border-b border-amber-500/20 bg-black/40">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
          >
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-amber-500" />
              <span className="text-sm text-gray-300 font-mono">ITAR Compliant</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-amber-500" />
              <span className="text-sm text-gray-300 font-mono">Made in USA</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-amber-500" />
              <span className="text-sm text-gray-300 font-mono">NIST 800-171</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-amber-500" />
              <span className="text-sm text-gray-300 font-mono">Defense Cleared</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-24 md:py-32 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-block border border-amber-500/30 bg-black/50 px-3 py-1 mb-6 text-xs font-mono text-amber-500 tracking-widest">
              PRODUCT PORTFOLIO
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Technology Stack</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Enterprise-grade systems designed for operational excellence and mission-critical reliability.
            </p>
          </motion.div>

          <div className="space-y-32">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="relative"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                  {/* Image */}
                  <div className={`relative h-[500px] ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="absolute inset-0 border border-amber-500/30 bg-black/40 p-8">
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
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none">
                      <div className="absolute top-0 left-0 w-px h-8 bg-amber-500" />
                      <div className="absolute top-0 left-0 w-8 h-px bg-amber-500" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none">
                      <div className="absolute bottom-0 right-0 w-px h-8 bg-amber-500" />
                      <div className="absolute bottom-0 right-0 w-8 h-px bg-amber-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <div className="inline-flex items-center gap-2 border border-amber-500/30 bg-black/50 px-3 py-1 mb-6 text-xs font-mono text-amber-500 tracking-widest">
                      {product.category.toUpperCase()}
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                      <span className="text-white">{product.name}</span>
                    </h2>
                    <p className="text-2xl text-amber-400 mb-6 font-light">{product.tagline}</p>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">{product.description}</p>

                    {/* Key Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                      {product.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-4 border border-amber-500/10 bg-black/30 p-4">
                          <div className="flex-shrink-0 mt-1">
                            {iconMap[feature.icon] || <Shield className="w-6 h-6 text-amber-500" />}
                          </div>
                          <div>
                            <h4 className="text-base font-semibold text-amber-100 mb-1">
                              {feature.title}
                            </h4>
                            <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href={`/products/${product.id}`} className="flex-1">
                        <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black border border-amber-400 py-6 text-base font-semibold">
                          View Product Details
                        </Button>
                      </Link>
                      <Link href="/contact" className="flex-1">
                        <Button
                          variant="outline"
                          className="w-full border-amber-500/50 text-amber-400 hover:bg-amber-500/10 py-6 text-base"
                        >
                          Request Demo
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Section divider */}
                {index < products.length - 1 && (
                  <div className="mt-32 border-t border-amber-500/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-32 px-4 border-t border-amber-500/30 bg-gradient-to-b from-black to-black/50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto max-w-5xl text-center"
        >
          <div className="border border-amber-500/30 bg-black/60 backdrop-blur-sm p-12 md:p-16">
            <Award className="w-12 h-12 text-amber-500 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Custom Enterprise Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Our engineering team designs and deploys custom technology solutions for specialized requirements in defense, government, and industrial sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-amber-500 hover:bg-amber-600 text-black px-10 py-7 text-lg font-semibold border border-amber-400">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10 px-10 py-7 text-lg"
                >
                  Company Overview
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

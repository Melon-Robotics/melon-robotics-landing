"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { products } from "@/lib/data/products"
import { services } from "@/lib/data/services"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Cpu, Waves, Shield, Zap, Navigation, Database } from "lucide-react"

export default function Home() {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Harsh glare overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isHeroInView ? "visible" : "hidden"}
          className="relative z-10 container mx-auto px-4 max-w-6xl"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <div className="inline-block border border-amber-500/30 bg-black/50 px-3 py-1 mb-6 text-sm font-mono text-amber-500">
              MELON ROBOTICS // OFFLINE
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter">
              <span className="text-amber-500">OCEAN</span>
              <br />
              INTELLIGENCE
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Advanced robotics and safety technology for <span className="text-amber-400">defense, research, and commercial operations</span> in the world's most demanding environments.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
          >
            <Link href="/products">
              <Button className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-6 text-lg border border-amber-400">
                View Products
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10 px-8 py-6 text-lg"
              >
                Our Services
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      </section>

      {/* Products Preview */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block border border-amber-500/30 bg-black/50 px-3 py-1 mb-4 text-sm font-mono text-amber-500">
              PRODUCTS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technology for the Ocean
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Hardware, software, and robotics engineered for extreme conditions and mission-critical operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.slice(0, 3).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/products/${product.id}`}>
                  <div className="border border-amber-500/20 bg-black/40 hover:border-amber-500/50 transition-all duration-300 group">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={product.heroImage}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="border border-amber-500/50 bg-black/80 px-2 py-1 text-xs font-mono text-amber-500">
                          {product.category.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2 text-amber-100">{product.name}</h3>
                      <p className="text-gray-300 mb-4">{product.tagline}</p>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        Learn more →
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link href="/products">
              <Button
                variant="outline"
                className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10"
              >
                View All Products
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-4 border-t border-amber-500/20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block border border-amber-500/30 bg-black/50 px-3 py-1 mb-4 text-sm font-mono text-amber-500">
              SERVICES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional Subsea Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Advanced capabilities for inspection, data collection, and safety standards in underwater operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const iconMap: { [key: string]: React.ReactNode } = {
                inspection: <Waves className="w-6 h-6 text-amber-500" />,
                data: <Database className="w-6 h-6 text-amber-500" />,
                safety: <Shield className="w-6 h-6 text-amber-500" />,
                infrastructure: <Zap className="w-6 h-6 text-amber-500" />,
              }

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={`/services/${service.id}`}>
                    <div className="border border-amber-500/20 bg-black/40 hover:border-amber-500/50 transition-all duration-300 p-6 h-full group">
                      <div className="mb-4">{iconMap[service.category] || <Navigation className="w-6 h-6 text-amber-500" />}</div>
                      <h3 className="text-xl font-bold mb-2 text-amber-100">{service.name}</h3>
                      <p className="text-gray-300 text-sm">{service.tagline}</p>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link href="/services">
              <Button
                variant="outline"
                className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10"
              >
                Explore All Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 border-t border-amber-500/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto max-w-4xl text-center"
        >
          <div className="border border-amber-500/30 bg-black/40 p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Take Your Operations Underwater?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to discuss your requirements and explore how Melon Robotics can support your mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-6 text-lg">
                  Contact Sales
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10 px-8 py-6 text-lg"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}


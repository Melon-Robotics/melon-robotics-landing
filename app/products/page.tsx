"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { products } from "@/lib/data/products"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      {/* Hero Section - Apple-Level Minimalism */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0f1625] to-[#1a2332]" />
        
        <div className="container-responsive relative z-10 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[-0.02em] leading-[0.95] mb-6 sm:mb-8 text-white">
              Technology that<br />operates autonomously.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-[1.6] font-light mb-12 sm:mb-16">
              Hardware, software, and robotics systems engineered for extreme environments. When operations go underwater, these systems work when humans can't.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products - Apple-Style Showcase */}
      <section className="py-20 sm:py-28 md:py-36 lg:py-48 px-4">
        <div className="container-responsive max-w-7xl">
          <div className="space-y-24 sm:space-y-32 md:space-y-40">
            {products.map((product, index) => {
              const problemStatements: Record<string, string> = {
                blackbox: "Communication breakdowns in extreme conditions cost lives.",
                pneumaforce: "Human divers face physical limitations at depth.",
                scout: "Autonomous operations require systems that work when humans can't."
              }

              const solutionStatements: Record<string, string> = {
                blackbox: "Every word captured, even in extreme conditions.",
                pneumaforce: "Human strength augmented for extreme depths.",
                scout: "Autonomous missions executed with precision."
              }

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="relative"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 lg:gap-24 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                    {/* Image - Clean, Minimal */}
                    <motion.div 
                      className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.15 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="relative aspect-square max-w-2xl mx-auto">
                        <Image
                          src={product.heroImage}
                          alt={product.name}
                          fill
                          className="object-contain"
                          priority={index === 0}
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    </motion.div>

                    {/* Content - Apple-Style Typography */}
                    <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.15 + 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-xl"
                      >
                        {/* Category */}
                        <div className="mb-6 sm:mb-8">
                          <span className="text-sm sm:text-base text-amber-500/70 font-normal tracking-wide uppercase">
                            {product.category}
                          </span>
                        </div>

                        {/* Product Name */}
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[-0.02em] leading-[0.95] mb-4 sm:mb-6 text-white">
                          {product.name}
                        </h2>

                        {/* Problem Statement - Subtle */}
                        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 leading-[1.6] font-light">
                          {problemStatements[product.id]}
                        </p>

                        {/* Solution Statement - Prominent */}
                        <p className="text-xl sm:text-2xl md:text-3xl text-amber-500/90 mb-8 sm:mb-10 leading-[1.3] font-light">
                          {solutionStatements[product.id]}
                        </p>
                        
                        {/* Description */}
                        <p className="text-base sm:text-lg text-gray-300 mb-10 sm:mb-12 leading-[1.7] font-light">
                          {product.description}
                        </p>

                        {/* CTA - Clean, Minimal */}
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Link href={`/products/${product.id}`} className="group">
                            <Button className="w-full sm:w-auto bg-amber-500/12 hover:bg-amber-500/20 active:bg-amber-500/25 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 active:border-amber-500/60 px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 text-base sm:text-lg font-normal tracking-wide transition-all duration-200 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] backdrop-blur-sm">
                              Learn more
                              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Divider - Minimal */}
                  {index < products.length - 1 && (
                    <div className="mt-24 sm:mt-32 md:mt-40 border-t border-amber-500/10" />
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Integration CTA - Apple-Style */}
      <section className="py-20 sm:py-28 md:py-36 px-4 border-t border-amber-500/10 bg-gradient-to-b from-[#0a0e1a] to-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="container-responsive max-w-4xl text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[-0.02em] leading-[0.95] mb-6 sm:mb-8 text-white">
            Products + Services<br />= Complete capability
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-[1.6] font-light mb-10 sm:mb-12">
            Our products work best when supported by our services. ROV Inspection uses Scout technology. Ocean Data powers autonomous missions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <Button className="w-full sm:w-auto bg-amber-500/12 hover:bg-amber-500/20 active:bg-amber-500/25 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 active:border-amber-500/60 px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 text-base sm:text-lg font-normal tracking-wide transition-all duration-200 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] backdrop-blur-sm">
                Explore services
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="w-full sm:w-auto border border-gray-700/40 text-gray-300 hover:text-white active:text-white hover:border-gray-500 active:border-gray-400 px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 text-base sm:text-lg font-normal tracking-wide transition-all duration-200"
              >
                Contact sales
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

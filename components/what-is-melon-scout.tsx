"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Cpu, Zap, Waves, Compass } from "lucide-react"

export function WhatIsMelonScout() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section id="about" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
              Introducing <span className="text-amber-500">Melon Scout</span>
            </h2>
            <p className="text-xl text-gray-300/90 max-w-3xl mx-auto leading-relaxed">
              Our flagship autonomous underwater vehicle engineered for precision exploration, surveillance, and data
              collection. Small. Smart. Fast.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="order-2 md:order-1">
              <div className="space-y-8">
                {[
                  {
                    icon: <Cpu className="w-8 h-8 text-amber-500" />,
                    title: "AI-Powered Intelligence",
                    description:
                      "Advanced neural networks enable autonomous decision-making and adaptive mission planning in complex underwater environments.",
                  },
                  {
                    icon: <Zap className="w-8 h-8 text-amber-500" />,
                    title: "Modular Design",
                    description:
                      "Customizable payload options allow for mission-specific configurations, from sonar mapping to sample collection.",
                  },
                  {
                    icon: <Waves className="w-8 h-8 text-amber-500" />,
                    title: "Deep Ocean Capability",
                    description:
                      "Engineered to withstand extreme pressures and operate efficiently at depths of up to 1,000 meters.",
                  },
                  {
                    icon: <Compass className="w-8 h-8 text-amber-500" />,
                    title: "Precision Navigation",
                    description:
                      "Multi-sensor fusion provides centimeter-level positioning accuracy even in GPS-denied underwater environments.",
                  },
                ].map((feature, index) => (
                  <motion.div key={index} variants={itemVariants} className="flex gap-4">
                    <div className="flex-shrink-0 p-2 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-amber-100">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="order-1 md:order-2 relative">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 rounded-full bg-amber-500/20 blur-3xl transform -translate-x-1/2 -translate-y-1/2" />

                <div className="relative bg-gradient-to-br from-black to-gray-900 border border-amber-500/30 rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(245,158,11,0.2)]">
                  <div className="p-1">
                    <div className="bg-black rounded-xl overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=600&width=600"
                        width={600}
                        height={600}
                        alt="Melon Scout AUV"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  {/* Tech overlay elements */}
                  <div className="absolute top-4 left-4 px-2 py-1 bg-black/80 border border-amber-500/30 rounded text-xs text-amber-500 font-mono">
                    SCOUT_MK3.v1
                  </div>

                  <div className="absolute bottom-4 right-4 px-2 py-1 bg-black/80 border border-amber-500/30 rounded text-xs text-amber-500 font-mono">
                    DEPTH: 750m
                  </div>

                  {/* Animated scan line */}
                  <motion.div
                    animate={{
                      y: ["0%", "100%", "0%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/10 to-transparent h-1/3 pointer-events-none"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

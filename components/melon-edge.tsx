"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Flag, Layers, PenToolIcon as Tool, Zap, Code } from "lucide-react"

export function MelonEdge() {
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

  const advantages = [
    {
      icon: <Flag className="w-6 h-6" />,
      title: "Made in the USA",
      description: "Designed, engineered, and manufactured in the United States with secure supply chains.",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Designed for scale",
      description: "From single units to swarms of hundreds, our platform scales to meet mission requirements.",
    },
    {
      icon: <Tool className="w-6 h-6" />,
      title: "Rugged, repairable, and modular",
      description: "Field-serviceable components and modular design for rapid maintenance and customization.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Powered by Rust/C++",
      description: "High-performance, memory-safe code ensures reliable operation in critical environments.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Low-power design for deep endurance",
      description: "Advanced power management enables extended missions without recharging.",
    },
  ]

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
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
              The <span className="text-amber-500">Melon</span> Advantage
            </h2>
            <p className="text-xl text-gray-300/90 max-w-3xl mx-auto leading-relaxed">
              What sets Melon Robotics apart in the autonomous underwater systems industry.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/20 rounded-xl p-6 hover:border-amber-500/40 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-2 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                    {advantage.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-amber-100">{advantage.title}</h3>
                    <p className="text-gray-400 text-sm">{advantage.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

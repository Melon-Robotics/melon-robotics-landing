"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Shield, Map, Fish, Wrench, Search } from "lucide-react"
import Image from "next/image"

export function BuiltForDefense() {
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

  const applications = [
    {
      icon: <Map className="w-6 h-6" />,
      title: "Real-time bathymetric mapping",
      description: "Create detailed 3D maps of the ocean floor with centimeter-level precision.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Maritime security and threat detection",
      description: "Monitor sensitive areas and identify underwater threats in real-time.",
    },
    {
      icon: <Fish className="w-6 h-6" />,
      title: "Marine life monitoring",
      description: "Track and study marine ecosystems with minimal environmental impact.",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Offshore rig inspection",
      description: "Conduct thorough inspections of underwater infrastructure without human divers.",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Search-and-rescue logistics",
      description: "Rapidly deploy to locate and assist in maritime emergencies.",
    },
  ]

  return (
    <section id="applications" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
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
              <span className="text-amber-500">Applications</span> Across Industries
            </h2>
            <p className="text-xl text-gray-300/90 max-w-3xl mx-auto leading-relaxed">
              Melon Robotics delivers unparalleled underwater capabilities for defense, scientific research, and
              industrial applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <div className="space-y-6">
                {applications.map((app, index) => (
                  <motion.div key={index} variants={itemVariants} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                      {app.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-amber-100">{app.title}</h3>
                      <p className="text-gray-400 text-sm">{app.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="order-1 lg:order-2">
              <div className="relative">
                {/* Main image */}
                <div className="relative rounded-xl overflow-hidden border border-amber-500/30 shadow-[0_0_25px_rgba(245,158,11,0.2)]">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    width={800}
                    height={600}
                    alt="Melon Scout in action"
                    className="w-full h-auto"
                  />

                  {/* Overlay elements */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Tech overlay elements */}
                  <div className="absolute top-4 left-4 px-2 py-1 bg-black/80 border border-amber-500/30 rounded text-xs text-amber-500 font-mono">
                    MISSION_ID: DEF-2305
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between items-center">
                      <div className="px-2 py-1 bg-black/80 border border-amber-500/30 rounded text-xs text-amber-500 font-mono">
                        UNITS: 12 ACTIVE
                      </div>
                      <div className="px-2 py-1 bg-black/80 border border-amber-500/30 rounded text-xs text-amber-500 font-mono">
                        MISSION STATUS: OPERATIONAL
                      </div>
                    </div>
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

                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-amber-500/30 rounded-xl" />
                <div className="absolute -top-6 -left-6 w-24 h-24 border border-amber-500/30 rounded-xl" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

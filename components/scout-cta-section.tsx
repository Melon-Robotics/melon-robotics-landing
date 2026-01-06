"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ScoutCTASection() {
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
    <section id="contact" ref={sectionRef} className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold tracking-tighter mb-4 sm:mb-6">
            <span className="text-amber-500">Ready to Deploy Scout?</span>
            <br />
            <span className="text-white">Choose your configuration and accessories.</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300/90 max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 leading-relaxed"
          >
            Explore pricing tiers with volume discounts, browse accessories and support platforms, or contact our team for custom configurations.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
            <Link href="/products/scout/pricing">
              <Button
                className="bg-white hover:bg-gray-100 text-black border border-white/20 shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20 text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full transition-all duration-300"
                size="lg"
              >
                View Pricing
              </Button>
            </Link>

            <Link href="/products/scout/accessories">
              <Button
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-gray-900 hover:text-white hover:border-gray-600 text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full transition-all duration-300"
                size="lg"
              >
                Browse Accessories
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                variant="outline"
                className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10 hover:border-amber-500/80 text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full transition-all duration-300"
                size="lg"
              >
                Contact Sales
              </Button>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="border-t border-amber-500/20 pt-6 sm:pt-8">
            <p className="text-xs sm:text-sm text-gray-400/80 mb-4 font-mono uppercase tracking-wider">
              Support Platforms
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
              <Link href="/products/scout/support#vessels">
                <Button
                  variant="outline"
                  className="border-amber-500/30 text-amber-500/80 hover:bg-amber-500/10 hover:border-amber-500/50 hover:text-amber-500 text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3 font-mono uppercase tracking-wider transition-all duration-300"
                >
                  Support Vessels
                </Button>
              </Link>
              <Link href="/products/scout/support/buoy">
                <Button
                  variant="outline"
                  className="border-amber-500/30 text-amber-500/80 hover:bg-amber-500/10 hover:border-amber-500/50 hover:text-amber-500 text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3 font-mono uppercase tracking-wider transition-all duration-300"
                >
                  Support Buoys
                </Button>
              </Link>
              <Link href="/products/scout/support/semisub">
                <Button
                  variant="outline"
                  className="border-amber-500/30 text-amber-500/80 hover:bg-amber-500/10 hover:border-amber-500/50 hover:text-amber-500 text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3 font-mono uppercase tracking-wider transition-all duration-300"
                >
                  Semi-Submersibles
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}









"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
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
            <span className="text-amber-500">Partner with Melon.</span>
            <br />
            <span className="text-white">Transform your underwater operations.</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300/90 max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 leading-relaxed"
          >
            Ready to revolutionize your underwater capabilities? Contact our team to schedule a demonstration or discuss
            your specific requirements.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/contact">
              <Button
                className="bg-white hover:bg-gray-100 text-black border border-white/20 shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20 text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full transition-all duration-300"
                size="lg"
              >
                Request a Demo
              </Button>
            </Link>

            <Link href="/products">
              <Button
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-gray-900 hover:text-white hover:border-gray-600 text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full transition-all duration-300"
                size="lg"
              >
                View All Products
              </Button>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 sm:mt-12 md:mt-16 pt-10 sm:pt-12 md:pt-16 border-t border-amber-500/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-amber-500 font-semibold text-sm sm:text-base mb-2">Contact</h3>
                <p className="text-gray-400 text-xs sm:text-sm">info@melonscout.com</p>
                <p className="text-gray-400 text-xs sm:text-sm">+1 (800) 555-0123</p>
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-amber-500 font-semibold text-sm sm:text-base mb-2">Headquarters</h3>
                <p className="text-gray-400 text-xs sm:text-sm">1234 Ocean Drive</p>
                <p className="text-gray-400 text-xs sm:text-sm">San Diego, CA 92101</p>
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-amber-500 font-semibold text-sm sm:text-base mb-2">Follow Us</h3>
                <div className="flex gap-4 justify-center md:justify-start">
                  <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>

                  <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                    <span className="sr-only">YouTube</span>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

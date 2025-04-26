"use client"

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useAnimation, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  const controls = useAnimation()
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  return (
    <section 
      id="home"
      ref={containerRef} 
      className="relative min-h-[90vh] flex items-center pt-20 pb-16 md:py-28 lg:py-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-black">
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-20 bg-grid-white/[0.2]" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 via-gray-900/50 to-black" />
        
        {/* Animated particle effect for desktop */}
        {!isMobile && (
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-radial-blue opacity-20" />
          </div>
        )}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  delay: 0.2,
                },
              },
            }}
            className="text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6 tracking-tight text-white">
              <span className="block">Next Generation</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Robotics Platform
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 mb-6 md:mb-8">
              Introducing Melon Robotics – where cutting-edge hardware meets 
              intelligent software for the future of autonomous robotics.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-lg shadow-blue-500/25 w-full sm:w-auto text-sm sm:text-base"
              >
                Request Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gray-800/80 border border-gray-700 text-white flex items-center justify-center font-medium group w-full sm:w-auto text-sm sm:text-base"
              >
                <span>Learn More</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
            
            <div className="mt-8 md:mt-10 grid grid-cols-3 gap-3 sm:gap-6 text-center lg:text-left">
              {[
                { label: 'Accuracy', value: '99.8%' },
                { label: 'Processing', value: '12ms' },
                { label: 'Battery', value: '48hrs' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={controls}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        delay: 0.8 + i * 0.1,
                      },
                    },
                  }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-gray-800/50"
                >
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right content - Robot image */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 1,
                  delay: 0.5,
                },
              },
            }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative aspect-square max-w-[320px] sm:max-w-md md:max-w-lg mx-auto">
              {/* Glow effect behind the robot */}
              <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-transparent to-transparent rounded-full blur-2xl" />
              
              {/* Robot image */}
              <div className="relative aspect-square w-full z-10">
                <Image
                  src="/robot-hero.png"
                  alt="Melon Robotics Robot"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              
              {/* Floating indicator elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 1.2 },
                  },
                }}
                className="absolute top-[15%] left-[5%] bg-black/70 backdrop-blur-sm p-2 md:p-3 rounded-lg border border-gray-700 hidden sm:block"
              >
                <div className="text-white text-xs font-medium">Neural Processing Unit</div>
                <div className="text-cyan-400 text-xs">Active • 98% Efficiency</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 1.4 },
                  },
                }}
                className="absolute bottom-[20%] right-[10%] bg-black/70 backdrop-blur-sm p-2 md:p-3 rounded-lg border border-gray-700 hidden sm:block"
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-400 mr-2" />
                  <span className="text-white text-xs font-medium">Sensors calibrated</span>
                </div>
              </motion.div>

              {/* Mobile-only indicator - simplified version that shows on small screens */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 1.2 },
                  },
                }}
                className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-2 rounded-lg border border-gray-700 sm:hidden mx-auto max-w-[200px]"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-400 mr-2" />
                    <span className="text-white text-xs">System Active</span>
                  </div>
                  <div className="text-cyan-400 text-xs">98% Efficiency</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
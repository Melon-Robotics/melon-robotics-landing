"use client"

import React, { useRef, useEffect, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

export function FeverSwarm() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [isMobile, setIsMobile] = useState(false)

  // Mobile detection
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  }

  return (
    <section id="fever-swarm" className="py-16 sm:py-20 md:py-24 lg:py-32 relative bg-black overflow-hidden" ref={ref}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
      <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:50px_50px] opacity-20"></div>
      
      {/* Colored spotlights - only on desktop */}
      {!isMobile && (
        <>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px]"></div>
        </>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-6xl mx-auto"
        >
          {/* Section heading */}
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
              Fever <span className="text-indigo-400">Swarm</span> Technology
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
              Our proprietary swarm intelligence system enables robots to work together 
              as a coordinated fleet, sharing data and adapting to changing conditions in real-time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-center">
            {/* Left side - Content */}
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 sm:p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent"></div>
                  <div className="relative z-10">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Collective Intelligence</h3>
                    <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
                      Each robot in the swarm contributes to a shared intelligence network. 
                      They continuously gather and process data from their environment, creating 
                      a distributed neural network that enhances overall efficiency and adaptability.
                    </p>
                    <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                      {[
                        "Distributed decision making across multiple robots",
                        "Real-time data sharing and processing",
                        "Adaptive behavior based on collective learning"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-indigo-400 mr-2 mt-1">•</span>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-3 sm:p-5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent"></div>
                    <div className="relative z-10">
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Self-Optimization</h4>
                      <p className="text-xs sm:text-sm text-gray-300">
                        The swarm continuously optimizes its behavior, 
                        improving performance through machine learning algorithms.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-3 sm:p-5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
                    <div className="relative z-10">
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Fault Tolerance</h4>
                      <p className="text-xs sm:text-sm text-gray-300">
                        The system maintains operation even when individual robots are 
                        compromised, ensuring mission continuity.
                      </p>
                    </div>
                  </div>
                </div>

                <motion.div variants={itemVariants} className="mt-4 sm:mt-6">
                  <button className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm sm:text-base font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all flex items-center justify-center sm:justify-start cursor-pointer">
                    <span>Explore Swarm Intelligence</span>
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Right side - Swarm visualization */}
            <motion.div 
              variants={imageVariants} 
              className="order-1 lg:order-2 relative"
            >
              <div className="relative aspect-square md:aspect-[4/3] rounded-xl overflow-hidden border border-gray-800 shadow-2xl shadow-indigo-900/10">
                {/* Purple glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 to-black z-10"></div>
                
                {/* Main image */}
                <Image
                  src="/fever-swarm.jpg"
                  alt="Fever Swarm Technology"
                  fill
                  className="object-cover"
                />
                
                {/* Overlay elements - only on desktop */}
                {!isMobile && (
                  <>
                    {/* Connection lines */}
                    <svg className="absolute inset-0 w-full h-full z-20 opacity-70" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <line x1="30" y1="25" x2="70" y2="35" stroke="rgba(167, 139, 250, 0.5)" strokeWidth="0.2" />
                      <line x1="25" y1="60" x2="50" y2="75" stroke="rgba(167, 139, 250, 0.5)" strokeWidth="0.2" />
                      <line x1="70" y1="35" x2="75" y2="70" stroke="rgba(167, 139, 250, 0.5)" strokeWidth="0.2" />
                      <line x1="50" y1="75" x2="75" y2="70" stroke="rgba(167, 139, 250, 0.5)" strokeWidth="0.2" />
                      <line x1="30" y1="25" x2="25" y2="60" stroke="rgba(167, 139, 250, 0.5)" strokeWidth="0.2" />
                    </svg>
                    
                    {/* Data points */}
                    <div className="absolute top-1/4 left-[30%] w-2 h-2 sm:w-3 sm:h-3 z-20">
                      <div className="absolute inset-0 rounded-full bg-indigo-500 animate-ping opacity-75"></div>
                      <div className="absolute inset-0 rounded-full bg-indigo-500"></div>
                    </div>
                    <div className="absolute top-[35%] right-[30%] w-2 h-2 sm:w-3 sm:h-3 z-20">
                      <div className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-75 animation-delay-500"></div>
                      <div className="absolute inset-0 rounded-full bg-purple-500"></div>
                    </div>
                    <div className="absolute bottom-1/4 left-1/4 w-2 h-2 sm:w-3 sm:h-3 z-20">
                      <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75 animation-delay-1000"></div>
                      <div className="absolute inset-0 rounded-full bg-blue-500"></div>
                    </div>
                    <div className="absolute bottom-[30%] right-1/4 w-2 h-2 sm:w-3 sm:h-3 z-20">
                      <div className="absolute inset-0 rounded-full bg-indigo-500 animate-ping opacity-75 animation-delay-1500"></div>
                      <div className="absolute inset-0 rounded-full bg-indigo-500"></div>
                    </div>
                  </>
                )}
                
                {/* Mobile-friendly data visualization overlay */}
                {isMobile && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-2 sm:p-3 z-20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-indigo-500 mr-1.5 sm:mr-2"></div>
                        <span className="text-white text-[10px] sm:text-xs">8 Units Connected</span>
                      </div>
                      <div className="text-indigo-400 text-[10px] sm:text-xs">Swarm Active</div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Stats for desktop */}
              {!isMobile && (
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-gray-900/90 backdrop-blur-sm border border-gray-800 rounded-lg p-4 shadow-xl hidden lg:block">
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-gray-400">Swarm Efficiency</div>
                      <div className="text-lg font-semibold text-white">97.4%</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Connected Units</div>
                      <div className="text-lg font-semibold text-white">8</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Data Transfer</div>
                      <div className="text-lg font-semibold text-white">1.2 GB/s</div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
          
          {/* Additional features - mobile optimized grid */}
          <motion.div 
            variants={itemVariants} 
            className="mt-10 sm:mt-12 md:mt-16 lg:mt-24"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6 text-center md:text-left">
              Key Benefits
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {[
                {
                  title: "Enhanced Efficiency",
                  value: "+85%",
                  color: "from-indigo-500/20"
                },
                {
                  title: "Error Reduction",
                  value: "-37%",
                  color: "from-purple-500/20"
                },
                {
                  title: "Processing Power",
                  value: "12 TFLOPS",
                  color: "from-blue-500/20"
                },
                {
                  title: "Deployment Time",
                  value: "-42%",
                  color: "from-cyan-500/20"
                }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-3 sm:p-4 relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} to-transparent`}></div>
                  <div className="relative z-10">
                    <div className="text-base sm:text-lg md:text-xl font-bold text-white mb-0.5 sm:mb-1">{stat.value}</div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-gray-400">{stat.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 
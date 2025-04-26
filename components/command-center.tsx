"use client"

import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { ChevronRight, Activity, Cpu, Database, Shield } from 'lucide-react'
import Image from 'next/image'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export function CommandCenter() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [activeFeature, setActiveFeature] = useState(0)
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

  // Auto rotate features on desktop
  useEffect(() => {
    if (isMobile) return // Don't auto-rotate on mobile
    
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [isMobile])

  const features = [
    {
      title: "Real-time Monitoring",
      description: "Monitor your robot fleet's performance, health, and status in real-time with comprehensive analytics.",
      icon: <Activity className="w-5 h-5 text-cyan-400" />,
      color: "from-cyan-500/20 to-transparent"
    },
    {
      title: "Fleet Management",
      description: "Deploy, update, and manage your entire robot fleet from anywhere with our secure cloud platform.",
      icon: <Cpu className="w-5 h-5 text-blue-400" />,
      color: "from-blue-500/20 to-transparent"
    },
    {
      title: "Predictive Maintenance",
      description: "Prevent downtime with AI-driven predictive maintenance that identifies issues before they occur.",
      icon: <Database className="w-5 h-5 text-indigo-400" />,
      color: "from-indigo-500/20 to-transparent"
    },
    {
      title: "Secure Data Transmission",
      description: "End-to-end encrypted data transmission ensures your sensitive information stays protected.",
      icon: <Shield className="w-5 h-5 text-purple-400" />,
      color: "from-purple-500/20 to-transparent"
    }
  ]

  return (
    <section 
      id="command-center" 
      ref={ref} 
      className="relative py-16 md:py-20 lg:py-32 bg-black overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-black to-black" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.2] opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-6xl mx-auto"
        >
          {/* Section heading */}
          <motion.div variants={itemVariants} className="text-center mb-8 md:mb-12 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
              Command <span className="text-cyan-400">Center</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
              Take full control of your robot fleet with our advanced command center, 
              providing real-time insights and management capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-center">
            {/* Left side - Interface visualization */}
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <div className="relative rounded-xl overflow-hidden border border-gray-800 shadow-2xl shadow-blue-900/10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-950 to-black"></div>
                
                {/* Interface header */}
                <div className="relative p-3 sm:p-4 border-b border-gray-800 bg-gray-900/50">
                  <div className="flex items-center">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="ml-3 sm:ml-4 text-xs sm:text-sm font-mono text-gray-400">Melon Command Interface v3.2</div>
                  </div>
                </div>
                
                {/* Interface body */}
                <div className="relative p-3 sm:p-4 md:p-6">
                  {/* Main interface content */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {/* Map area */}
                    <div className="relative aspect-square sm:aspect-auto sm:h-64 rounded-lg overflow-hidden border border-gray-800 bg-gray-900/50">
                      <div className="absolute inset-0">
                        <Image
                          src="/command-map.jpg"
                          alt="Command map interface"
                          fill
                          className="object-cover opacity-70"
                        />
                      </div>
                      
                      {/* Map overlays */}
                      <div className="absolute inset-0">
                        <div className="absolute top-1/4 left-1/3 w-2 h-2 sm:w-3 sm:h-3">
                          <div className="absolute inset-0 rounded-full bg-cyan-500 animate-ping opacity-75"></div>
                          <div className="absolute inset-0 rounded-full bg-cyan-500"></div>
                        </div>
                        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 sm:w-3 sm:h-3">
                          <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75 animation-delay-500"></div>
                          <div className="absolute inset-0 rounded-full bg-blue-500"></div>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-2 left-2 text-[10px] sm:text-xs text-white bg-black/70 rounded px-1.5 sm:px-2 py-0.5 sm:py-1">
                        Location: Grid A-7
                      </div>
                    </div>
                    
                    {/* Stats area */}
                    <div className="space-y-3 sm:space-y-4">
                      {/* Stat cards */}
                      <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-2 sm:p-3 flex items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-cyan-500/20 flex items-center justify-center mr-2 sm:mr-3">
                          <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                        </div>
                        <div>
                          <div className="text-[10px] sm:text-xs text-gray-400">System Status</div>
                          <div className="text-xs sm:text-sm text-white font-medium">Operational (98.7%)</div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-2 sm:p-3 flex items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-2 sm:mr-3">
                          <Database className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                        </div>
                        <div>
                          <div className="text-[10px] sm:text-xs text-gray-400">Data Processing</div>
                          <div className="text-xs sm:text-sm text-white font-medium">12.4 TB / Hour</div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-2 sm:p-3 flex items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-500/20 flex items-center justify-center mr-2 sm:mr-3">
                          <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />
                        </div>
                        <div>
                          <div className="text-[10px] sm:text-xs text-gray-400">Security Level</div>
                          <div className="text-xs sm:text-sm text-white font-medium">Maximum (Level 5)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Terminal output */}
                  <div className="mt-3 sm:mt-4 bg-black/50 border border-gray-800 rounded-lg p-2 sm:p-3 h-20 sm:h-24 overflow-hidden font-mono text-[10px] sm:text-xs">
                    <div className="text-green-400">> System initialized</div>
                    <div className="text-gray-400">> Connecting to fleet...</div>
                    <div className="text-gray-400">> Connection established</div>
                    <div className="text-gray-400">> Running diagnostics...</div>
                    <div className="text-cyan-400">> All systems operational</div>
                    <div className="text-gray-400 animate-pulse">> _</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Right side - Features */}
            <motion.div variants={itemVariants} className="order-1 lg:order-2">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6">Key Features</h3>
              
              {/* Mobile view: Features carousel */}
              {isMobile && (
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 sm:p-5 relative overflow-hidden">
                    {/* Feature gradient bg */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${features[activeFeature].color}`}></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center mb-3 sm:mb-4">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center mr-2 sm:mr-3">
                          {features[activeFeature].icon}
                        </div>
                        <h4 className="text-base sm:text-lg font-semibold text-white">{features[activeFeature].title}</h4>
                      </div>
                      <p className="text-sm text-gray-300 mb-3 sm:mb-4">{features[activeFeature].description}</p>
                      
                      {/* Carousel indicators */}
                      <div className="flex justify-center space-x-2 mt-3 sm:mt-4">
                        {features.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveFeature(index)}
                            className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                              index === activeFeature ? 'bg-cyan-400 w-6' : 'bg-gray-600'
                            }`}
                            aria-label={`View feature ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Desktop view: Features list */}
              {!isMobile && (
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      onClick={() => setActiveFeature(index)}
                      variants={itemVariants}
                      className={`bg-gray-900/50 border ${
                        index === activeFeature ? 'border-cyan-500/50' : 'border-gray-800'
                      } rounded-xl p-5 cursor-pointer hover:bg-gray-800/50 transition-all relative overflow-hidden`}
                    >
                      {/* Feature gradient bg */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} ${
                        index === activeFeature ? 'opacity-100' : 'opacity-0'
                      } transition-opacity duration-300`}></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                            {feature.icon}
                          </div>
                          <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
                          
                          <ChevronRight className={`w-5 h-5 ml-auto text-cyan-400 transform transition-transform ${
                            index === activeFeature ? 'rotate-90' : 'rotate-0'
                          }`} />
                        </div>
                        
                        <div className={`overflow-hidden transition-all duration-300 ${
                          index === activeFeature ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          <p className="text-gray-300 mb-2">{feature.description}</p>
                          <button className="text-sm font-medium text-cyan-400 hover:text-cyan-300 mt-2 flex items-center cursor-pointer">
                            Learn more <ChevronRight className="w-4 h-4 ml-1" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
              
              <motion.div variants={itemVariants} className="mt-6 sm:mt-8">
                <button className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm sm:text-base font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all flex items-center justify-center sm:justify-start cursor-pointer">
                  <span>Schedule Demo</span>
                  <ChevronRight className="w-4 h-4 ml-2" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
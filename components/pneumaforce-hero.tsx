"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PneumaForceHero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#0a0e1a] via-[#0f1625] to-[#0a0e1a] overflow-hidden flex items-center justify-center">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(245,158,11,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,158,11,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* DARPA Terminal Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Technical corner markers */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-amber-500/20" />
        <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-amber-500/20" />
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-amber-500/20" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-amber-500/20" />
        
        {/* Top frame */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        
        {/* System Reference - Top Left */}
        <div className="absolute top-4 left-4 text-[10px] sm:text-xs font-mono text-amber-500/80">
          <div className="inline-block border border-amber-500/30 bg-black/60 backdrop-blur-sm px-2 py-1">
            MR-PNEUMAFORCE | REF: 001-P
          </div>
          <div className="mt-1 text-[8px] text-gray-600 font-mono">
            REV: A.1 | CLASS: UNCLASSIFIED
          </div>
        </div>
        
        {/* System Status - Top Right */}
        <div className="absolute top-4 right-4 text-[10px] sm:text-xs font-mono text-amber-500/80 hidden xs:block">
          <div className="inline-block border border-amber-500/30 bg-black/60 backdrop-blur-sm px-2 py-1">
            SYS_STATUS: <span className="text-green-400">OPERATIONAL</span>
          </div>
          <div className="mt-1 text-[8px] text-gray-600 font-mono text-right">
            DEPTH_RATING: <span className="text-amber-500/80">1000FT</span>
          </div>
        </div>
        
        {/* Power Indicators - Bottom Left */}
        <div className="absolute bottom-4 left-4 flex flex-col gap-2 text-[10px] sm:text-xs font-mono">
          <div className="flex items-center">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 mr-1.5 animate-pulse" />
            <span className="text-green-400">PNEUMATIC</span>
            <span className="text-gray-600 ml-2 hidden sm:inline">| ACTIVE</span>
          </div>
          <div className="flex items-center hidden xs:flex">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-500 mr-1.5 animate-pulse" />
            <span className="text-amber-500">ASSIST</span>
            <span className="text-gray-600 ml-2">| 100LBS</span>
          </div>
        </div>
        
        {/* Operating Parameters - Bottom Right */}
        <div className="absolute bottom-4 right-4 text-[10px] sm:text-xs font-mono text-amber-500/80">
          <div className="inline-block border border-amber-500/30 bg-black/60 backdrop-blur-sm px-2 py-1">
            <span className="hidden xs:inline">POWER: </span>
            <span>87% | RUNTIME: 9H</span>
          </div>
          <div className="mt-1 text-[8px] text-gray-600 font-mono text-right">
            ASSIST: 100LBS | DEPTH: 305M
          </div>
        </div>
      </div>

      <div className="container-responsive max-w-7xl relative z-10 pt-20 pb-16 md:pb-32 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Technical Status Bar */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : -20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-8"
            >
              <div className="flex items-center gap-2 font-mono text-[10px] text-amber-500/80 tracking-[0.25em] uppercase">
                <div className="relative">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  <div className="absolute inset-0 w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping opacity-75" />
                </div>
                <span>EXOSKELETON SYSTEM</span>
              </div>
              <div className="h-px w-12 bg-amber-500/20" />
              <div className="font-mono text-[10px] text-gray-600">
                MODULE: MR-HW-PNF | REV: A.1
              </div>
            </motion.div>
            
            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 0.95 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block bg-black/60 border border-gray-700/50 px-4 py-2 mb-8"
            >
              <div className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">
                HARDWARE
              </div>
            </motion.div>

            {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-4 md:mb-6 tracking-tight leading-[0.95]"
            >
              <span className="block text-white/90">PneumaForce</span>
        </motion.h1>
            <div className="h-px w-16 md:w-24 bg-amber-500/30 mb-4 md:mb-6" />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: loaded ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-400 mb-6 md:mb-8 leading-snug"
            >
              Revolutionary Upper-Body<br className="hidden sm:block" />Exoskeleton for Commercial Diving
            </motion.p>

            {/* Description */}
        <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: loaded ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-gray-500 mb-8 md:mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light px-4 sm:px-0"
            >
              Advanced pneumatic exoskeleton augmenting diver strength up to 100 lbs while maintaining precise control. Engineered for extreme depths and demanding commercial operations.
        </motion.p>

            {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/contact">
                <Button 
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-black px-8 py-6 text-base font-medium rounded-full transition-all duration-300 shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20"
                >
                  Request Demo
          </Button>
              </Link>
              <Link href="/products">
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-gray-700 text-gray-300 hover:bg-gray-900 hover:text-white px-8 py-6 text-base font-medium rounded-full transition-all duration-300"
                >
                  View Specifications
          </Button>
              </Link>
        </motion.div>

            {/* Technical Specs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-6 font-mono text-[8px] sm:text-[9px] text-gray-600 mb-6 md:mb-8"
            >
              <div className="flex items-center gap-2">
                <span className="text-gray-700">ASSIST:</span>
                <span className="text-amber-500/80">100LBS</span>
              </div>
              <div className="w-px h-3 bg-gray-800 hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="text-gray-700">DEPTH:</span>
                <span className="text-amber-500/80">1000FT</span>
              </div>
              <div className="w-px h-3 bg-gray-800 hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="text-gray-700">RUNTIME:</span>
                <span className="text-green-400/80">9H</span>
      </div>
            </motion.div>
            
            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-8 md:mt-16 grid grid-cols-3 gap-3 md:gap-6 lg:gap-8 text-center lg:text-left"
            >
              <div className="border border-gray-800/50 bg-black/40 p-3 md:p-4">
                <div className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-1 md:mb-2 font-mono">100</div>
                <div className="text-[10px] sm:text-xs text-gray-500 font-mono">LBS ASSIST</div>
              </div>
              <div className="border border-gray-800/50 bg-black/40 p-3 md:p-4">
                <div className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-1 md:mb-2 font-mono">1000</div>
                <div className="text-[10px] sm:text-xs text-gray-500 font-mono">FT DEPTH</div>
              </div>
              <div className="border border-gray-800/50 bg-black/40 p-3 md:p-4">
                <div className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-1 md:mb-2 font-mono">9H</div>
                <div className="text-[10px] sm:text-xs text-gray-500 font-mono">RUNTIME</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Product Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 0.95 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            {/* Exoskeleton Visualization */}
            <div className="relative mx-auto max-w-lg">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-amber-500/20 blur-3xl rounded-full" />
              
              {/* Product frame */}
              <div className="relative bg-gradient-to-b from-gray-900 to-black rounded-3xl p-8 shadow-2xl border border-gray-800/50">
                {/* Exoskeleton illustration */}
                <div className="relative aspect-square bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden">
                  {/* Diver silhouette with exoskeleton */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Torso */}
          <motion.div
                      className="w-32 h-48 border-2 border-amber-500/40 rounded-lg relative"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1, delay: 0.8 }}
                    >
                      {/* Shoulder joints */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 border-2 border-amber-500/60 rounded-full bg-black" />
                      
                      {/* Arm actuators */}
                      <div className="absolute top-8 -left-4 w-16 h-2 bg-amber-500/30 rounded-full" />
                      <div className="absolute top-8 -right-4 w-16 h-2 bg-amber-500/30 rounded-full" />
                      
                      {/* Pneumatic lines */}
                      {Array.from({length: 4}).map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute left-0 w-1 bg-amber-500/40"
                          style={{ top: `${20 + i * 15}%`, height: '8%' }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0.3, 0.7, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        />
                      ))}
                      
                      {/* Status indicator */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-amber-500 font-mono">
                        ACTIVE
                      </div>
                    </motion.div>
                  </div>

                  {/* Depth indicator */}
                  <div className="absolute top-4 left-4 bg-black/80 border border-amber-500/30 rounded-lg px-3 py-2">
                    <div className="flex items-center justify-between mb-1">
                      <div className="text-[10px] text-gray-500 font-mono">DEPTH</div>
                      <div className="text-[8px] text-gray-600 font-mono">REF: DPT-001</div>
                    </div>
                    <div className="text-lg text-amber-500 font-mono">305m</div>
                    <div className="text-[8px] text-gray-600 font-mono mt-1">PRESSURE: 3.1MPa</div>
                  </div>

                  {/* Power indicator */}
                  <div className="absolute top-4 right-4 bg-black/80 border border-amber-500/30 rounded-lg px-3 py-2">
                    <div className="flex items-center justify-between mb-1">
                      <div className="text-[10px] text-gray-500 font-mono">POWER</div>
                      <div className="text-[8px] text-gray-600 font-mono">REF: PWR-001</div>
                    </div>
                    <div className="text-lg text-green-400 font-mono">87%</div>
                    <div className="text-[8px] text-gray-600 font-mono mt-1">RUNTIME: 7.8H</div>
                  </div>
                  
                  {/* System Status */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 border border-amber-500/30 rounded-lg px-3 py-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                      <div className="text-[10px] text-green-400 font-mono">SYSTEM: ACTIVE</div>
                    </div>
              </div>
              </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

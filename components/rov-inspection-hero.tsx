"use client"

import { motion } from "framer-motion"

export function ROVInspectionHero() {
  return (
    <section className="relative min-h-[85vh] bg-[#0a0e1a] overflow-hidden flex items-center justify-center pt-20">
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

      {/* Depth Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0f1625] to-[#1a2332]" />

      {/* Depth Indicators - Left Side */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col gap-8 font-mono text-xs text-amber-500/40 tracking-widest">
          {[0, 10, 20, 30, 50, 100].map((depth) => (
            <motion.div
              key={depth}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: depth / 50 }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-px bg-amber-500/20" />
              <span>{depth}m</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sonar Display - Right Side */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative w-32 h-32"
        >
          <div className="absolute inset-0 border-2 border-amber-500/20 rounded-full" />
          <motion.div
            className="absolute inset-0 border-2 border-amber-500/40 rounded-full border-t-transparent"
            style={{ clipPath: 'polygon(50% 50%, 100% 0%, 100% 50%)' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-xs font-mono text-amber-500/60">SONAR</div>
              <div className="text-lg font-mono text-amber-500 font-bold">ACTIVE</div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container-responsive relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Technical Status Bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="flex items-center gap-2 font-mono text-[10px] text-amber-500/80 tracking-[0.25em] uppercase">
              <div className="relative">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                <div className="absolute inset-0 w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping opacity-75" />
              </div>
              <span>ROV INSPECTION MODULE</span>
            </div>
            <div className="h-px w-12 bg-amber-500/20" />
            <div className="font-mono text-[10px] text-gray-600">
              MODULE: MR-SVC-ROV | REV: B.2
            </div>
          </motion.div>

          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-block bg-black/60 border border-gray-700/50 px-4 py-2 mb-8"
          >
            <div className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">
              INSPECTION
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight leading-[0.95]"
          >
            <span className="block text-white/90">Precision Subsea</span>
            <span className="block text-amber-500/90 font-normal">Inspection</span>
          </motion.h1>
          <div className="h-px w-24 bg-amber-500/30 mx-auto mb-6" />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-amber-500/80 mb-6 font-light leading-snug"
          >
            Professional ROV inspection services for vessels, docks, pipelines, and critical infrastructure
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto font-light mb-8"
          >
            HD video documentation, sonar mapping, and structural assessment delivered with operational speed and scientific rigor. Our LBV-150 ROV systems provide real-time inspection capabilities for maintenance planning, damage assessment, and compliance verification.
          </motion.p>

          {/* Technical Specs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center justify-center gap-6 font-mono text-[9px] text-gray-600"
          >
            <div className="flex items-center gap-2">
              <span className="text-gray-700">DEPTH RATING:</span>
              <span className="text-amber-500/80">150m</span>
            </div>
            <div className="w-px h-3 bg-gray-800" />
            <div className="flex items-center gap-2">
              <span className="text-gray-700">VIDEO:</span>
              <span className="text-amber-500/80">4K HD</span>
            </div>
            <div className="w-px h-3 bg-gray-800" />
            <div className="flex items-center gap-2">
              <span className="text-gray-700">RESPONSE:</span>
              <span className="text-amber-500/80">&lt;24h</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Technical Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
    </section>
  )
}








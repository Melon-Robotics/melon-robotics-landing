"use client"

import { motion } from "framer-motion"

export function OceanDataHero() {
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

      {/* Data Stream Visualization - Left Side */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block w-48">
        <div className="border border-gray-800/50 bg-black/60 p-4">
          <div className="font-mono text-[8px] text-amber-500/60 mb-3">DATA STREAM</div>
          <div className="space-y-2">
            {Array.from({length:5}).map((_,i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 bg-amber-500/60 rounded-full" />
                <div className="flex-1 h-px bg-amber-500/20" />
                <div className="font-mono text-[8px] text-gray-600">LIVE</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Live Data Chart - Right Side */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block w-80">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="border border-gray-800/50 bg-black/60 p-4"
        >
          <div className="font-mono text-[9px] text-amber-500/60 mb-3 flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
            CURR/WAVE MODEL
          </div>
          <svg viewBox="0 0 300 100" className="w-full h-28">
            <path
              d="M0,60 C40,40 60,40 100,60 C140,80 160,80 200,60 C240,40 260,40 300,60"
              stroke="#f59e0b"
              strokeWidth="2"
              fill="none"
              opacity="0.6"
            />
            <motion.circle
              cx="0"
              cy="60"
              r="3"
              fill="#f59e0b"
              animate={{ cx: [0, 300], cy: [60, 60] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
          </svg>
          <div className="mt-2 font-mono text-[8px] text-gray-600">
            UPDATE: 5s | STATION: MELON_BUOY_A7
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
              <span>OCEAN DATA MODULE</span>
            </div>
            <div className="h-px w-12 bg-amber-500/20" />
            <div className="font-mono text-[10px] text-gray-600">
              MODULE: MR-SVC-DATA | REV: C.1
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
              DATA
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight leading-[0.95]"
          >
            <span className="block text-white/90">Operational Ocean</span>
            <span className="block text-amber-500/90 font-normal">Intelligence</span>
          </motion.h1>
          <div className="h-px w-24 bg-amber-500/30 mx-auto mb-6" />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-amber-500/80 mb-6 font-light leading-snug"
          >
            Real-time and historical oceanographic data with APIs, dashboards, and predictive models
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto font-light mb-8"
          >
            Comprehensive maritime environmental intelligence services covering currents, waves, temperature, salinity, and water quality. Live data feeds from sensor networks, historical archives, AI-powered forecasting, and RESTful APIs for seamless integration with your operational systems.
          </motion.p>

          {/* Technical Specs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center justify-center gap-6 font-mono text-[9px] text-gray-600"
          >
            <div className="flex items-center gap-2">
              <span className="text-gray-700">UPDATE RATE:</span>
              <span className="text-amber-500/80">5-15min</span>
            </div>
            <div className="w-px h-3 bg-gray-800" />
            <div className="flex items-center gap-2">
              <span className="text-gray-700">API:</span>
              <span className="text-amber-500/80">REST</span>
            </div>
            <div className="w-px h-3 bg-gray-800" />
            <div className="flex items-center gap-2">
              <span className="text-gray-700">HISTORY:</span>
              <span className="text-amber-500/80">10+ YRS</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Technical Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
    </section>
  )
}



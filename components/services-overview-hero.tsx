"use client"

import { motion } from "framer-motion"

export function ServicesOverviewHero() {
  return (
    <section className="relative h-[70vh] bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-amber-500/30" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-amber-500/30" />
      </div>

      <div className="container mx-auto h-full flex flex-col items-center justify-center text-center px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-block px-2 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] sm:text-xs tracking-widest uppercase mb-4 font-mono">Services</div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Professional Subsea Solutions</h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl">From precision ROV inspections to millimeter-accurate photogrammetry, operational ocean data, and human–ocean safety standards.</p>
        </motion.div>

        {/* Animated accent lines */}
        <motion.div className="mt-8 h-px w-40 bg-amber-500/60" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.3 }} />
      </div>
    </section>
  )
}


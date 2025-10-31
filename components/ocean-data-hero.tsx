"use client"

import { motion } from "framer-motion"

export function OceanDataHero() {
  return (
    <section className="relative h-[70vh] bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-amber-500/30" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-amber-500/30" />
      </div>

      <div className="container mx-auto h-full flex flex-col justify-center px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block px-2 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] sm:text-xs tracking-widest uppercase mb-4 font-mono">Ocean Data Services</div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Operational Ocean Intelligence</h1>
          <p className="text-gray-300 text-lg md:text-xl">Real-time and historical oceanographic data—currents, waves, temperature, salinity—with APIs, dashboards, and predictive models.</p>
        </div>
      </div>

      {/* Chart motif */}
      <div className="absolute right-6 bottom-8 w-72">
        <div className="h-40 bg-black/50 border border-amber-500/30 p-2">
          <div className="text-[10px] text-amber-500 font-mono mb-1">CURR/WAVE MODEL</div>
          <svg viewBox="0 0 300 100" className="w-full h-28">
            <path d="M0,60 C40,40 60,40 100,60 C140,80 160,80 200,60 C240,40 260,40 300,60" stroke="#f59e0b" strokeWidth="2" fill="none" />
            <motion.circle cx="0" cy="60" r="3" fill="#f59e0b" animate={{ cx: [0,300], cy: [60,60] }} transition={{ duration: 6, repeat: Infinity }} />
          </svg>
        </div>
      </div>
    </section>
  )
}



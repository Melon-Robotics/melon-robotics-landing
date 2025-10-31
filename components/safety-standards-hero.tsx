"use client"

import { motion } from "framer-motion"

export function SafetyStandardsHero() {
  return (
    <section className="relative h-[70vh] bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-amber-500/30" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-amber-500/30" />
      </div>

      <div className="container mx-auto h-full flex flex-col justify-center px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block px-2 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] sm:text-xs tracking-widest uppercase mb-4 font-mono">Human–Ocean Interface Standards</div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Safety Protocols & Technical Documentation</h1>
          <p className="text-gray-300 text-lg md:text-xl">Research-backed procedures, curricula, and compliance consulting for commercial diving, ROV ops, and subsea construction.</p>
        </div>
      </div>

      {/* Document motif */}
      <div className="absolute right-6 bottom-8 w-80 border border-amber-500/30 bg-black/60 p-3">
        <div className="text-[10px] text-amber-500 font-mono mb-2">EXCERPT • SOP_DIVE_ENTRY_V4</div>
        <div className="space-y-1 text-xs text-gray-300">
          <div>1. Pre-Entry Checklist — COMPLETE</div>
          <div>2. Gas Supply Verification — COMPLETE</div>
          <div>3. Communications Check — COMPLETE</div>
          <div>4. Redundancy Systems — ACTIVE</div>
        </div>
      </div>
    </section>
  )
}



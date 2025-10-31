"use client"

import { motion } from "framer-motion"

export function ROVInspectionHero() {
  return (
    <section className="relative h-[70vh] bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-amber-500/30" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-amber-500/30" />
      </div>

      <div className="container mx-auto h-full flex flex-col justify-center px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block px-2 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] sm:text-xs tracking-widest uppercase mb-4 font-mono">ROV Inspection & Survey</div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Precision Subsea Inspection</h1>
          <p className="text-gray-300 text-lg md:text-xl">HD video, sonar mapping, and structural assessment for vessels, docks, pipelines, and critical infrastructure—delivered with operational speed and scientific rigor.</p>
        </div>
      </div>

      {/* Sonar sweep */}
      <motion.div className="absolute right-10 bottom-10 w-56 h-56 rounded-full border border-amber-500/30" initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at center, rgba(245, 158, 11, 0.08) 10%, transparent 60%)" }} />
          <motion.div className="absolute left-1/2 top-1/2 h-[1px] w-full bg-amber-500/50 origin-left" style={{ transform: "translateY(-50%)" }} />
        </div>
      </motion.div>
    </section>
  )
}



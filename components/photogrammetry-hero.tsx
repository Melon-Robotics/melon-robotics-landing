"use client"

import { motion } from "framer-motion"

export function PhotogrammetryHero() {
  return (
    <section className="relative h-[70vh] bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-amber-500/30" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-amber-500/30" />
      </div>

      <div className="container mx-auto h-full flex flex-col justify-center px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block px-2 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] sm:text-xs tracking-widest uppercase mb-4 font-mono">3D Photogrammetry</div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Millimeter-Accurate 3D Mapping</h1>
          <p className="text-gray-300 text-lg md:text-xl">High-resolution reconstructions, orthomosaics, and point clouds for structures, wrecks, habitats, and engineering projects.</p>
        </div>
      </div>

      {/* Point cloud motif */}
      <div className="absolute right-6 bottom-10 left-auto top-auto w-64 h-64">
        {Array.from({length:120}).map((_,i)=> (
          <motion.div key={i} className="absolute w-1 h-1 bg-amber-500/70" style={{ left: `${Math.random()*100}%`, top: `${Math.random()*100}%` }} initial={{ opacity: 0 }} animate={{ opacity: [0.2,0.8,0.2] }} transition={{ duration: 2, repeat: Infinity, delay: Math.random()*1.5 }} />
        ))}
      </div>
    </section>
  )
}



"use client"

import { motion } from "framer-motion"

export function PhotogrammetryDemos() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(#f59e0b20 1px, transparent 1px), linear-gradient(90deg, #f59e0b20 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-block px-2 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] sm:text-xs tracking-widest uppercase mb-4 font-mono">Processing Demo</div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter">Capture • Reconstruct • Measure</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {/* Capture grid */}
            <div className="relative border border-amber-500/30 bg-black/70 p-4">
              <div className="text-[10px] sm:text-xs font-mono text-amber-500 mb-2">CAPTURED IMAGES</div>
              <div className="grid grid-cols-4 gap-1">
                {Array.from({length:16}).map((_,i)=> (
                  <div key={i} className="h-12 bg-gray-800" />
                ))}
              </div>
            </div>

            {/* Reconstruction steps */}
            <div className="relative border border-amber-500/30 bg-black/70 p-4">
              <div className="text-[10px] sm:text-xs font-mono text-amber-500 mb-2">RECONSTRUCTION</div>
              <div className="space-y-2">
                {["Feature Matching","Sparse Cloud","Dense Cloud","Mesh","Texture"].map((s,i)=> (
                  <div key={i} className="border border-amber-500/20 p-2">
                    <div className="flex items-center justify-between text-xs text-gray-300">
                      <span>{s}</span>
                      <span className="text-amber-500">OK</span>
                    </div>
                    <div className="h-1 bg-gray-800 mt-2">
                      <motion.div className="h-1 bg-amber-500" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.2, delay: i*0.2 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Measurement & change detection */}
            <div className="relative border border-amber-500/30 bg-black/70 p-4">
              <div className="text-[10px] sm:text-xs font-mono text-amber-500 mb-2">MEASUREMENT / CHANGE</div>
              <div className="h-56 relative overflow-hidden">
                {/* Ruler */}
                <div className="absolute left-6 right-6 top-10 h-0.5 bg-amber-500/60" />
                <div className="absolute left-6 top-10 w-px h-6 bg-amber-500/60" />
                <div className="absolute right-6 top-10 w-px h-6 bg-amber-500/60" />
                <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] text-amber-500 font-mono">2.34 m</div>
                {/* Change bars */}
                <div className="absolute bottom-6 left-6 right-6 grid grid-cols-6 gap-1">
                  {Array.from({length:6}).map((_,i)=> (
                    <motion.div key={i} className="bg-amber-500/70" initial={{ height: 4 }} animate={{ height: [8, 20, 12, 18, 10, 24] }} transition={{ duration: 3, repeat: Infinity, delay: i*0.15 }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}



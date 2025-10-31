"use client"

import { motion } from "framer-motion"

export function PneumaForceDemos() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(#f59e0b20 1px, transparent 1px), linear-gradient(90deg, #f59e0b20 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-block px-2 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] sm:text-xs tracking-widest uppercase mb-4 font-mono">
              Feature Demos
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter">
              AirMatrix • PneumaPower • SyncMotion
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* AirMatrix */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="border border-amber-500/30 bg-black/70 p-4">
              <div className="text-xs text-amber-500 font-mono mb-2">AIRMATRIX BUOYANCY</div>
              <div className="h-56 relative overflow-hidden">
                {/* Buoyancy bars */}
                <div className="absolute left-4 top-4 space-y-2">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <motion.div key={i} className="w-2 bg-amber-500/70" initial={{ height: 4 }} animate={{ height: [8, 24, 12, 18, 10, 22] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }} />
                  ))}
                </div>
                {/* Diver silhouette */}
                <motion.div className="absolute right-6 bottom-4 w-20 h-32 border border-amber-500/30" animate={{ y: [0, -6, 0, 4, 0] }} transition={{ duration: 4, repeat: Infinity }} />
                <div className="absolute bottom-2 left-2 text-[10px] text-amber-500 font-mono bg-black/70 px-2 py-1 border border-amber-500/30">NEUTRAL • -0.2lb</div>
              </div>
            </motion.div>

            {/* PneumaPower */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="border border-amber-500/30 bg-black/70 p-4">
              <div className="text-xs text-amber-500 font-mono mb-2">PNEUMAPOWER ASSIST</div>
              <div className="h-56 relative overflow-hidden">
                {/* Load bar */}
                <div className="absolute left-4 right-4 top-6 h-2 bg-gray-800">
                  <motion.div className="h-2 bg-amber-500" initial={{ width: "10%" }} animate={{ width: ["10%", "60%", "100%", "40%", "70%", "90%"] }} transition={{ duration: 6, repeat: Infinity }} />
                </div>
                {/* Weight visual */}
                <motion.div className="absolute left-1/2 -translate-x-1/2 bottom-8 w-16 h-16 border border-amber-500/30" animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }} />
                <div className="absolute bottom-2 left-2 text-[10px] text-amber-500 font-mono bg-black/70 px-2 py-1 border border-amber-500/30">ASSIST +100lb</div>
              </div>
            </motion.div>

            {/* SyncMotion */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="border border-amber-500/30 bg-black/70 p-4">
              <div className="text-xs text-amber-500 font-mono mb-2">SYNCMOTION INTERFACE</div>
              <div className="h-56 relative overflow-hidden">
                {/* Motion tracks */}
                <div className="absolute inset-0">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div key={i} className="absolute left-6 right-6 h-0.5 bg-amber-500/40" style={{ top: `${15 + i * 12}%` }} initial={{ x: "-10%", opacity: 0.4 }} animate={{ x: ["-10%", "40%", "80%"], opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 3 + i * 0.3, repeat: Infinity }} />
                  ))}
                </div>
                {/* Status */}
                <div className="absolute bottom-2 left-2 text-[10px] text-amber-500 font-mono bg-black/70 px-2 py-1 border border-amber-500/30">INTENT MATCH 97%</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


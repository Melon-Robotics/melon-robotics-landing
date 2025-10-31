"use client"

import { motion } from "framer-motion"

export function SafetyStandardsDemos() {
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
            <div className="inline-block px-2 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] sm:text-xs tracking-widest uppercase mb-4 font-mono">Program Demo</div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter">SOP • Training • Compliance</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {/* SOP viewer */}
            <div className="relative border border-amber-500/30 bg-black/70 p-4">
              <div className="text-[10px] sm:text-xs font-mono text-amber-500 mb-2">SOP VIEWER</div>
              <div className="space-y-2 text-xs text-gray-300">
                {["Dive Site Risk Assessment","Equipment Pre-Check","Buddy Protocol","Emergency Aborts"].map((s,i)=> (
                  <div key={i} className="border border-amber-500/20 p-2 flex items-center justify-between">
                    <span>{s}</span>
                    <span className="text-amber-500">VIEW</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Training modules */}
            <div className="relative border border-amber-500/30 bg-black/70 p-4">
              <div className="text-[10px] sm:text-xs font-mono text-amber-500 mb-2">TRAINING MODULES</div>
              <div className="space-y-2">
                {["Level 1: Core Safety","Level 2: ROV Ops","Level 3: Rescue"].map((s,i)=> (
                  <div key={i} className="border border-amber-500/20 p-2">
                    <div className="flex items-center justify-between text-xs text-gray-300">
                      <span>{s}</span>
                      <span className="text-amber-500">IN PROGRESS</span>
                    </div>
                    <div className="h-1 bg-gray-800 mt-2">
                      <motion.div className="h-1 bg-amber-500" initial={{ width: "10%" }} animate={{ width: ["10%","60%","90%"] }} transition={{ duration: 2, repeat: Infinity }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance status */}
            <div className="relative border border-amber-500/30 bg-black/70 p-4">
              <div className="text-[10px] sm:text-xs font-mono text-amber-500 mb-2">COMPLIANCE STATUS</div>
              <div className="grid grid-cols-2 gap-2">
                {[{k:"Docs",v:"100%"},{k:"Training",v:"87%"},{k:"Audits",v:"Pass"},{k:"Incidents",v:"0"}].map((m,i)=> (
                  <div key={i} className="border border-amber-500/20 p-2">
                    <div className="text-amber-500/80 text-[10px] font-mono">{m.k}</div>
                    <div className="text-amber-100">{m.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}



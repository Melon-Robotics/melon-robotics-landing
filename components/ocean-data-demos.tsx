"use client"

import { motion } from "framer-motion"

export function OceanDataDemos() {
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
            <div className="inline-block px-2 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] sm:text-xs tracking-widest uppercase mb-4 font-mono">Dashboard Demo</div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter">Map • Metrics • API</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {/* Map */}
            <div className="relative border border-amber-500/30 bg-black/70 p-4 lg:col-span-2">
              <div className="text-[10px] sm:text-xs font-mono text-amber-500 mb-2">REGIONAL OVERVIEW</div>
              <div className="relative h-72 bg-gray-900/60 overflow-hidden">
                <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(245, 158, 11, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 158, 11, 0.08) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                {Array.from({length:7}).map((_,i)=> (
                  <motion.div key={i} className="absolute w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.7)]" style={{ left: `${10+i*12}%`, top: `${25 + (i%3)*18}%` }} animate={{ opacity: [0.5,1,0.5] }} transition={{ duration: 2, repeat: Infinity, delay: i*0.15 }} />
                ))}
                <motion.div className="absolute left-0 top-1/2 h-px w-full bg-amber-500/40" animate={{ opacity: [0.2,0.6,0.2] }} transition={{ duration: 3, repeat: Infinity }} />
                <div className="absolute bottom-2 left-2 text-[10px] text-amber-500 font-mono bg-black/70 px-2 py-1 border border-amber-500/30">CUR: 1.2 kt • Hs: 2.3 m • SST: 21.6 °C</div>
              </div>
            </div>

            {/* Metrics */}
            <div className="relative border border-amber-500/30 bg-black/70 p-4">
              <div className="text-[10px] sm:text-xs font-mono text-amber-500 mb-2">KEY METRICS</div>
              <div className="grid grid-cols-2 gap-2">
                {[{k:"Waves Hs",v:"2.3 m"},{k:"Waves Tp",v:"8.1 s"},{k:"Currents",v:"1.2 kt"},{k:"Wind",v:"14 kt"},{k:"SST",v:"21.6 °C"},{k:"Salinity",v:"34.8 PSU"}].map((m,i)=> (
                  <div key={i} className="border border-amber-500/20 p-2">
                    <div className="text-amber-500/80 text-[10px] font-mono">{m.k}</div>
                    <div className="text-amber-100">{m.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* API snippet */}
          <div className="mt-8 border border-amber-500/30 bg-black/70 p-4">
            <div className="text-[10px] sm:text-xs font-mono text-amber-500 mb-2">API RESPONSE</div>
            <pre className="text-xs text-gray-300 overflow-x-auto">{`{
  "station": "MELON_BUOY_A7",
  "timestamp": "2025-10-30T14:12:05Z",
  "waves": { "hs": 2.3, "tp": 8.1 },
  "currents": { "speed": 1.2, "dir": 215 },
  "sst": 21.6,
  "salinity": 34.8
}`}</pre>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"

export function ROVInspectionDemos() {
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
            <div className="inline-block px-2 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] sm:text-xs tracking-widest uppercase mb-4 font-mono">Operational Demo</div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter">Video • Sonar • Defect Tags</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
            {/* HD video panel mock */}
            <div className="relative border border-amber-500/30 bg-black/70 p-4">
              <div className="text-[10px] sm:text-xs font-mono text-amber-500 mb-2">HD VIDEO PANEL</div>
              <div className="relative h-72 bg-gray-900/60 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/40 to-black" />
                {/* Defect tags */}
                {[{x:"20%",y:"45%",t:"CORROSION"},{x:"65%",y:"30%",t:"CRACK"},{x:"50%",y:"70%",t:"MARINE GROWTH"}].map((d,i)=> (
                  <div key={i} className="absolute" style={{ left: d.x, top: d.y }}>
                    <div className="px-2 py-1 bg-black/70 border border-amber-500/40 text-[10px] text-amber-500 font-mono">{d.t}</div>
                    <div className="w-px h-6 bg-amber-500/40 mx-auto" />
                  </div>
                ))}
              </div>
            </div>

            {/* Sonar/Path mock */}
            <div className="relative border border-amber-500/30 bg-black/70 p-4">
              <div className="text-[10px] sm:text-xs font-mono text-amber-500 mb-2">SONAR / PATH</div>
              <div className="relative h-72 bg-gray-900/60 overflow-hidden">
                {/* Path */}
                <svg className="absolute inset-0 w-full h-full opacity-70">
                  <path d="M10,180 C90,150 140,180 210,150 C280,120 350,150 430,120" stroke="#f59e0b" strokeWidth="2" fill="none" />
                </svg>
                {/* Beacons */}
                {Array.from({length:5}).map((_,i)=> (
                  <motion.div key={i} className="absolute w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.7)]" style={{ left: `${10 + i*20}%`, top: `${70 - (i%2)*15}%` }} animate={{ opacity: [0.5,1,0.5] }} transition={{ duration: 2, repeat: Infinity, delay: i*0.2 }} />
                ))}
                {/* Readouts */}
                <div className="absolute bottom-2 left-2 text-[10px] text-amber-500 font-mono bg-black/70 px-2 py-1 border border-amber-500/30">DVL LOCK • 0.3m/s • 12.2m</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}



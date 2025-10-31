"use client"

import { motion } from "framer-motion"

export function BlackBoxDemo() {
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
              Operational Demo
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter">
              Transcription • Flagging • Minimap
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
            {/* Minimap */}
            <div className="relative border border-amber-500/30 bg-black/70 p-4">
              <div className="text-[10px] sm:text-xs font-mono text-amber-500 mb-2">MINIMAP</div>
              <div className="relative h-72 bg-gray-900/60 overflow-hidden">
                {/* Grid */}
                <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(245,158,11,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.08) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                {/* Track */}
                <svg className="absolute inset-0 w-full h-full opacity-70">
                  <path d="M10,180 C80,140 140,170 220,140 C300,110 360,140 430,120" stroke="#f59e0b" strokeWidth="2" fill="none" />
                </svg>
                {/* Marker */}
                <motion.div
                  className="absolute w-3 h-3 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.7)]"
                  initial={{ left: "2%", top: "75%" }}
                  animate={{ left: ["2%", "25%", "48%", "70%", "92%"], top: ["75%", "68%", "70%", "62%", "58%"] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="absolute bottom-2 left-2 text-[10px] sm:text-xs text-amber-500 font-mono bg-black/70 px-2 py-1 border border-amber-500/30">LAT: 29.75 | LON: -95.36 | SPD: 14kt</div>
              </div>
            </div>

            {/* Flagging / transcript */}
            <div className="relative border border-amber-500/30 bg-black/70 p-4 flex flex-col">
              <div className="text-[10px] sm:text-xs font-mono text-amber-500 mb-2">FLAGGED TRANSMISSIONS</div>
              <div className="grow overflow-hidden">
                <div className="space-y-2 text-xs sm:text-sm font-mono">
                  {[{t:"[14:35] PILOT: Crosswind 17kt, runway 27.", f:true},{t:"[14:36] COASTGUARD: Proceed to sector B.", f:true},{t:"[14:36] SCOUT_07: Battery at 62%.", f:false},{t:"[14:37] BRIDGE: Depth 120m, vis low.", f:true}].map((row, i) => (
                    <div key={i} className={`flex items-start gap-2 border border-amber-500/20 p-2 ${row.f? 'bg-amber-500/5' : 'bg-black/30'}`}>
                      <span className={`text-[10px] mt-0.5 ${row.f? 'text-amber-400' : 'text-gray-600'}`}>{row.f? '★' : '•'}</span>
                      <span className="text-gray-200">{row.t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2">
                <button className="text-[10px] sm:text-xs font-mono border border-amber-500/30 text-amber-500 py-1 hover:bg-amber-500/10">FLAG</button>
                <button className="text-[10px] sm:text-xs font-mono border border-amber-500/30 text-amber-500 py-1 hover:bg-amber-500/10">EXPORT</button>
                <button className="text-[10px] sm:text-xs font-mono border border-amber-500/30 text-amber-500 py-1 hover:bg-amber-500/10">SEARCH</button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


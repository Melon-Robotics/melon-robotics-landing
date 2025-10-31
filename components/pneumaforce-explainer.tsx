"use client"

import { motion } from "framer-motion"

export function PneumaForceExplainer() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(#f59e0b20 1px, transparent 1px), linear-gradient(90deg, #f59e0b20 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-6xl mx-auto">
          {/* What it is */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <div className="inline-block px-2 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] sm:text-xs tracking-widest uppercase mb-3 font-mono">What is PneumaForce?</div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter mb-4">Pneumatic exoskeleton for subsea strength and control</h2>
              <p className="text-gray-300 text-lg">PneumaForce is an upper-body exoskeleton that augments a diver's strength, endurance, and buoyancy control. AirMatrix provides precise buoyancy trimming, PneumaPower delivers up to +100 lb assist, and SyncMotion anticipates intent for natural movement.</p>
            </div>
            <div className="border border-amber-500/30 bg-black/60 p-4">
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[{k:"Assist", v:"+100 lb"},{k:"Depth", v:"1000 ft"},{k:"Runtime", v:"Up to 9h"},{k:"Weight", v:"46 lb"},{k:"Control", v:"Predictive"},{k:"Materials", v:"CF/Al/HDPE"}].map((s,i)=> (
                  <div key={i} className="flex items-center justify-between border border-amber-500/20 p-2">
                    <span className="text-amber-500/90 font-mono text-xs">{s.k}</span>
                    <span className="text-amber-100">{s.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why it's necessary */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="border border-amber-500/20 bg-black/40 p-6">
              <h3 className="text-xl font-bold text-amber-100 mb-3">The problem PneumaForce solves</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Physical strain and injury risk in heavy, repetitive subsea tasks.</li>
                <li>• Inconsistent buoyancy causing fatigue and imprecise station-keeping.</li>
                <li>• Limited productivity windows due to diver fatigue and cold.</li>
                <li>• Safety risks when handling heavy tools and salvage loads.</li>
              </ul>
            </div>
            <div className="border border-amber-500/20 bg-black/40 p-6">
              <h3 className="text-xl font-bold text-amber-100 mb-3">How PneumaForce addresses it</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• AirMatrix dynamically trims buoyancy for neutral/positive/negative control.</li>
                <li>• PneumaPower offloads heavy lifts and sustained force tasks.</li>
                <li>• SyncMotion predicts intent for smooth, precise movement under load.</li>
                <li>• Modular design enables mission-specific payloads and quick repairs.</li>
              </ul>
            </div>
          </div>

          {/* Use cases */}
          <div className="mb-12">
            <div className="inline-block px-2 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] sm:text-xs tracking-widest uppercase mb-3 font-mono">Use Cases</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { t:"Underwater Construction", d:"Heavy tool operation, torque tasks, and precise positioning for fasteners and fittings." },
                { t:"Salvage & Recovery", d:"Lift assist and fatigue reduction for repetitive lift-and-secure operations." },
                { t:"Scientific Diving", d:"Fine buoyancy and motion control for sampling, transects, and photogrammetry." },
              ].map((u,i)=> (
                <div key={i} className="border border-amber-500/20 bg-black/40 p-6">
                  <h4 className="text-lg font-semibold text-amber-100 mb-2">{u.t}</h4>
                  <p className="text-gray-300 text-sm">{u.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Operational flow */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="border border-amber-500/20 bg-black/40 p-6">
              <h3 className="text-xl font-bold text-amber-100 mb-3">Operational Flow</h3>
              <ol className="list-decimal ml-5 space-y-2 text-gray-300">
                <li>Don exoskeleton; connect air and sensor harness.</li>
                <li>Set buoyancy profile (neutral/positive/negative) via AirMatrix.</li>
                <li>Enable PneumaPower assist per task; adjust assistance level.</li>
                <li>SyncMotion learns movement patterns, enhancing precision.</li>
                <li>Monitor battery/air status; swap modules as needed.</li>
              </ol>
            </div>
            <div className="border border-amber-500/20 bg-black/40 p-6">
              <h3 className="text-xl font-bold text-amber-100 mb-3">Safety & Integration</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Quick-release disconnects and manual override valves.</li>
                <li>• Standard SCUBA compatibility and redundant failsafes.</li>
                <li>• Compatible with commercial dive comms and tools.</li>
                <li>• Field-repairable modules with sealed connectors.</li>
              </ul>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <div className="inline-block px-2 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] sm:text-xs tracking-widest uppercase mb-3 font-mono">FAQ</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {q:"How quickly can a diver learn PneumaForce?", a:"Typical familiarization is under 1 hour; proficiency within 1-2 working days."},
                {q:"Can it be used for deep dives?", a:"Operational up to 1000 ft (305 m) with appropriate gas and thermal protection."},
                {q:"What about maintenance?", a:"Modular components allow easy field replacement; periodic checks align with dive gear schedules."},
                {q:"Is the assist adjustable?", a:"Yes—assistance levels are task-adjustable, including fine control for delicate work."},
              ].map((f,i)=> (
                <div key={i} className="border border-amber-500/20 bg-black/40 p-6">
                  <h4 className="text-amber-100 font-semibold mb-2">{f.q}</h4>
                  <p className="text-gray-300 text-sm">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


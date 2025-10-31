"use client"

import { motion } from "framer-motion"

export function BlackBoxExplainer() {
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
              <div className="inline-block px-2 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] sm:text-xs tracking-widest uppercase mb-3 font-mono">What is BlackBox?</div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter mb-4">Offline-first speech intelligence for mission comms</h2>
              <p className="text-gray-300 text-lg">BlackBox is a local, privacy-preserving app that transcribes radio/voice communications in real-time, lets operators flag critical messages, and overlays a situational minimap—without requiring the cloud. Designed for aviation, maritime, and subsea operations where connectivity is unreliable or restricted.</p>
            </div>
            <div className="border border-amber-500/30 bg-black/60 p-4">
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[{k:"Privacy", v:"100% On-Device"},{k:"Latency", v:"< 100ms"},{k:"Power", v:"All-Day"},{k:"Flagging", v:"1-Tap"},{k:"Search", v:"Natural Language"},{k:"Minimap", v:"Inline"}].map((s,i)=> (
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
              <h3 className="text-xl font-bold text-amber-100 mb-3">The problem BlackBox solves</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Critical transmissions get missed in noisy or high-tempo environments.</li>
                <li>• Operators need hands-free logging and instant recall of key instructions.</li>
                <li>• Connectivity constraints make cloud transcription infeasible or insecure.</li>
                <li>• Compliance and debriefs require accurate, time-aligned records.</li>
              </ul>
            </div>
            <div className="border border-amber-500/20 bg-black/40 p-6">
              <h3 className="text-xl font-bold text-amber-100 mb-3">How BlackBox addresses it</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• On-device ASR optimized for aviation/maritime jargon.</li>
                <li>• 1-tap flagging with priority tags and auto-context capture.</li>
                <li>• Local, encrypted store with natural-language search.</li>
                <li>• Inline minimap for coordinates, heading, altitude/speed.</li>
              </ul>
            </div>
          </div>

          {/* Use cases */}
          <div className="mb-12">
            <div className="inline-block px-2 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] sm:text-xs tracking-widest uppercase mb-3 font-mono">Use Cases</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { t:"Commercial Diving & ROV", d:"Auto-log topside/dive chatter. Flag hazards and waypoints while hands are occupied." },
                { t:"General Aviation", d:"Maintain sterile cockpit. Flag ATC instructions, frequencies, and clearances." },
                { t:"Maritime Ops", d:"Record bridge-to-bridge, VHF CH16 events, and SAR coordination." },
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
                <li>Connect headset/radio (wired or wireless).</li>
                <li>Tap to start transcription; everything remains on-device.</li>
                <li>Flag critical messages; add quick context labels if needed.</li>
                <li>Review log by time, speaker, flag, or search.</li>
                <li>Export encrypted report for compliance or debrief.</li>
              </ol>
            </div>
            <div className="border border-amber-500/20 bg-black/40 p-6">
              <h3 className="text-xl font-bold text-amber-100 mb-3">Security & Compliance</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Local encryption at rest; optional passcode lock.</li>
                <li>• Air-gapped workflows supported; no internet required.</li>
                <li>• Export with redaction and chain-of-custody metadata.</li>
                <li>• Configurable retention policies per organization.</li>
              </ul>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <div className="inline-block px-2 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] sm:text-xs tracking-widest uppercase mb-3 font-mono">FAQ</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {q:"Does BlackBox work without internet?", a:"Yes. All transcription, flagging, and storage is on-device by default."},
                {q:"Can I use it with existing radios?", a:"Yes. Works with standard wired/wireless audio interfaces and PTT adapters."},
                {q:"Is my data private?", a:"Yes. No cloud dependency. Optional exports are user-initiated and encrypted."},
                {q:"Can it recognize ATC/maritime phrasing?", a:"Yes. Models are tuned for domain-specific vocabulary and abbreviations."},
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


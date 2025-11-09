"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function BlackBoxExplainer() {
  return (
    <section className="relative py-32 md:py-40 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] overflow-hidden border-b border-amber-500/10">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(245,158,11,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,158,11,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-responsive max-w-6xl relative z-10">
        {/* What it is */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
              <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">SYSTEM OVERVIEW</div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            </div>
            <div className="mb-6">
              <div className="font-mono text-[9px] text-gray-600 mb-2">REF: MR-BBX-OVW | REV: A.2</div>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 tracking-tight text-white/90">
              Offline-first speech intelligence<br />for mission communications
            </h2>
            <div className="h-px w-24 bg-amber-500/30 mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light">
              BlackBox is a local, privacy-preserving app that transcribes radio and voice communications in real-time, lets operators flag critical messages, and overlays a situational minimap—without requiring the cloud.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {[
              { label: "Privacy", value: "100%", sub: "On-Device", ref: "STAT-001" },
              { label: "Latency", value: "< 100ms", sub: "Real-Time", ref: "STAT-002" },
              { label: "Power", value: "All-Day", sub: "Battery Life", ref: "STAT-003" },
              { label: "Flagging", value: "1-Tap", sub: "Instant", ref: "STAT-004" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 relative group"
              >
                <div className="absolute top-3 right-3">
                  <div className="font-mono text-[8px] text-gray-700">{stat.ref}</div>
                </div>
                <div className="text-4xl md:text-5xl font-light text-white mb-2 font-mono">{stat.value}</div>
                <div className="text-sm text-gray-500 mb-1 font-mono">{stat.label.toUpperCase()}</div>
                <div className="text-xs text-gray-600 font-mono">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Problem & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] rounded-3xl p-10 border border-gray-800/50 relative group"
          >
            <div className="absolute top-0 right-0">
              <div className="font-mono text-[8px] text-gray-700">REF: 01</div>
            </div>
            <div className="mb-4">
              <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-2">PROBLEM STATEMENT</div>
              <div className="h-px w-8 bg-amber-500/30 mb-4" />
            </div>
            <h3 className="text-3xl font-light text-white/90 mb-6 tracking-tight">The Problem</h3>
            <ul className="space-y-4 text-gray-400">
              {[
                "Critical transmissions get missed in noisy or high-tempo environments",
                "Operators need hands-free logging and instant recall of key instructions",
                "Connectivity constraints make cloud transcription infeasible or insecure",
                "Compliance and debriefs require accurate, time-aligned records"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 bg-gray-600 rounded-full" />
                  <span className="leading-relaxed font-light">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] rounded-3xl p-10 border border-gray-800/50 relative group"
          >
            <div className="absolute top-0 right-0">
              <div className="font-mono text-[8px] text-gray-700">REF: 02</div>
            </div>
            <div className="mb-4">
              <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-2">SOLUTION ARCHITECTURE</div>
              <div className="h-px w-8 bg-amber-500/30 mb-4" />
            </div>
            <h3 className="text-3xl font-light text-white/90 mb-6 tracking-tight">The Solution</h3>
            <ul className="space-y-4 text-gray-400">
              {[
                "On-device ASR optimized for aviation and maritime jargon",
                "One-tap flagging with priority tags and auto-context capture",
                "Local, encrypted store with natural-language search",
                "Inline minimap for coordinates, heading, altitude, and speed"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 bg-amber-500/60 rounded-full" />
                  <span className="leading-relaxed font-light">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
              <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">USE CASES</div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            </div>
            <div className="mb-6">
              <div className="font-mono text-[9px] text-gray-600 mb-2">REF: MR-BBX-USE | REV: A.2</div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight text-white/90">
              Built for professionals
            </h2>
            <div className="h-px w-24 bg-amber-500/30 mx-auto mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { title: "Commercial Diving & ROV", description: "Auto-log topside and dive chatter. Flag hazards and waypoints while hands are occupied." },
                { title: "General Aviation", description: "Maintain sterile cockpit. Flag ATC instructions, frequencies, and clearances." },
                { title: "Maritime Operations", description: "Record bridge-to-bridge, VHF CH16 events, and SAR coordination." },
              ].map((useCase, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] rounded-3xl p-8 border border-gray-800/50 relative group"
                >
                  <div className="absolute top-3 right-3">
                    <div className="font-mono text-[8px] text-gray-700">REF: {String(idx + 1).padStart(2, '0')}</div>
                  </div>
                  <h4 className="text-xl font-light text-white/90 mb-4 tracking-tight pr-8">{useCase.title}</h4>
                  <div className="h-px w-8 bg-amber-500/30 mb-4" />
                  <p className="text-gray-500 leading-relaxed font-light">{useCase.description}</p>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Security & Privacy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] rounded-3xl p-12 border border-gray-800/50 relative group">
            <div className="absolute top-4 right-4">
              <div className="font-mono text-[8px] text-gray-700">REF: SEC-001</div>
            </div>
            <div className="text-center mb-8">
              <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-2">SECURITY & PRIVACY</div>
              <div className="h-px w-12 bg-amber-500/30 mx-auto mb-4" />
            </div>
            <h3 className="text-4xl font-light text-white/90 mb-8 tracking-tight text-center">Security & Privacy</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-light text-white mb-4">Local Encryption</h4>
                <p className="text-gray-500 leading-relaxed font-light">
                  All data encrypted at rest with optional passcode lock. Air-gapped workflows supported—no internet required.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-light text-white mb-4">Export & Compliance</h4>
                <p className="text-gray-500 leading-relaxed font-light">
                  Export with redaction and chain-of-custody metadata. Configurable retention policies per organization.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
              <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">FAQ</div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            </div>
            <div className="mb-6">
              <div className="font-mono text-[9px] text-gray-600 mb-2">REF: MR-BBX-FAQ | REV: A.2</div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight text-white/90">
              Common questions
            </h2>
            <div className="h-px w-24 bg-amber-500/30 mx-auto mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
                { q: "Does BlackBox work without internet?", a: "Yes. All transcription, flagging, and storage is on-device by default. No cloud dependency." },
                { q: "Can I use it with existing radios?", a: "Yes. Works with standard wired and wireless audio interfaces and PTT adapters." },
                { q: "Is my data private?", a: "Yes. No cloud dependency. Optional exports are user-initiated and encrypted." },
                { q: "Can it recognize ATC/maritime phrasing?", a: "Yes. Models are tuned for domain-specific vocabulary and abbreviations." },
              ].map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] rounded-3xl p-8 border border-gray-800/50 relative group"
                >
                  <div className="absolute top-3 right-3">
                    <div className="font-mono text-[8px] text-gray-700">Q: {String(idx + 1).padStart(2, '0')}</div>
                  </div>
                  <h4 className="text-xl font-light text-white/90 mb-4 tracking-tight pr-8">{faq.q}</h4>
                  <div className="h-px w-8 bg-amber-500/30 mb-4" />
                  <p className="text-gray-500 leading-relaxed font-light">{faq.a}</p>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-24"
        >
          <Link href="/contact">
            <Button 
              size="lg"
              className="bg-white hover:bg-gray-100 text-black px-12 py-8 text-lg font-medium rounded-full transition-all duration-300 shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20"
            >
              Download on App Store
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

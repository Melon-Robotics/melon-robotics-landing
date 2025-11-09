"use client"

import { motion } from "framer-motion"

export function SafetyStandardsDemos() {
  return (
    <section className="relative py-32 md:py-40 px-4 border-b border-amber-500/10 bg-gradient-to-b from-[#0a0e1a] to-black overflow-hidden">
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

      <div className="container-responsive max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-28"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">PROGRAM INTERFACE</div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 text-white/90">
            Safety Management<br />Platform
          </h2>
          <p className="text-base md:text-lg text-gray-500 font-light max-w-xl leading-relaxed">
            Comprehensive SOP library, training modules, and compliance tracking with real-time status monitoring and audit-ready documentation.
          </p>
        </motion.div>

        {/* Demo Panels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* SOP Viewer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="group relative"
          >
            <div className="relative border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 transition-all duration-500 hover:border-amber-500/30 hover:shadow-[0_0_40px_rgba(245,158,11,0.1)]">
              {/* Technical Drawing Corners */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Panel Header */}
              <div className="mb-4 flex items-center justify-between">
                <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider">SOP VIEWER</div>
                <div className="font-mono text-[8px] text-gray-700">REF: SOP-001</div>
              </div>

              {/* SOP List */}
              <div className="space-y-2">
                {[
                  { name: "Dive Site Risk Assessment", version: "V4.2", status: "ACTIVE" },
                  { name: "Equipment Pre-Check", version: "V3.1", status: "ACTIVE" },
                  { name: "Buddy Protocol", version: "V2.5", status: "ACTIVE" },
                  { name: "Emergency Aborts", version: "V5.0", status: "ACTIVE" },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="border border-gray-800/50 bg-black/40 p-3 flex items-center justify-between group/item hover:border-amber-500/30 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="text-xs text-gray-300 font-light mb-1">{s.name}</div>
                      <div className="font-mono text-[8px] text-gray-600">{s.version}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500/60 rounded-full" />
                      <span className="text-[9px] text-amber-500/80 font-mono">{s.status}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Description */}
              <div className="mt-6">
                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  Comprehensive Standard Operating Procedures library with version control and status tracking. Role-specific, scenario-based checklists for all operational phases.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Training Modules */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="group relative"
          >
            <div className="relative border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 transition-all duration-500 hover:border-amber-500/30 hover:shadow-[0_0_40px_rgba(245,158,11,0.1)]">
              {/* Technical Drawing Corners */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Panel Header */}
              <div className="mb-4 flex items-center justify-between">
                <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider">TRAINING MODULES</div>
                <div className="font-mono text-[8px] text-gray-700">REF: TRN-001</div>
              </div>

              {/* Training Progress */}
              <div className="space-y-3">
                {[
                  { name: "Level 1: Core Safety", progress: 90 },
                  { name: "Level 2: ROV Ops", progress: 60 },
                  { name: "Level 3: Rescue", progress: 10 },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="border border-gray-800/50 bg-black/40 p-3"
                  >
                    <div className="flex items-center justify-between text-xs text-gray-300 mb-2">
                      <span className="font-light">{s.name}</span>
                      <span className="text-amber-500/80 font-mono text-[9px]">{s.progress}%</span>
                    </div>
                    <div className="h-1 bg-gray-800">
                      <motion.div
                        className="h-1 bg-amber-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Description */}
              <div className="mt-6">
                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  Progressive training modules with assessments and certification paths. Track completion status and schedule refresher courses for continuous compliance.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Compliance Status */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative"
          >
            <div className="relative border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 transition-all duration-500 hover:border-amber-500/30 hover:shadow-[0_0_40px_rgba(245,158,11,0.1)]">
              {/* Technical Drawing Corners */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Panel Header */}
              <div className="mb-4 flex items-center justify-between">
                <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider">COMPLIANCE STATUS</div>
                <div className="font-mono text-[8px] text-gray-700">REF: CMP-001</div>
              </div>

              {/* Compliance Metrics */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { k: "Docs", v: "100%", status: "COMPLETE" },
                  { k: "Training", v: "87%", status: "IN PROGRESS" },
                  { k: "Audits", v: "Pass", status: "CURRENT" },
                  { k: "Incidents", v: "0", status: "CLEAR" },
                ].map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                    className="border border-gray-800/50 bg-black/40 p-3"
                  >
                    <div className="font-mono text-[8px] text-amber-500/70 mb-1">{m.k}</div>
                    <div className="text-lg text-amber-100 font-light mb-1">{m.v}</div>
                    <div className="font-mono text-[8px] text-gray-600">{m.status}</div>
                  </motion.div>
                ))}
              </div>

              {/* Description */}
              <div className="mt-6">
                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  Real-time compliance dashboard with documentation status, training completion, audit results, and incident tracking. Audit-ready reporting for regulatory inspections.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}



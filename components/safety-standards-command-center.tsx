"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function SafetyStandardsCommandCenter() {
  const [selectedSOP, setSelectedSOP] = useState(0)
  const [timestamp, setTimestamp] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const sops = [
    {
      id: "SOP-DIVE-ENTRY-001",
      name: "Commercial Dive Entry Protocol",
      version: "V4.2",
      status: "ACTIVE",
      lastReview: "2024-12-15",
      nextReview: "2025-03-15",
      compliance: 100,
      usage: 847,
      ref: "SOP-001"
    },
    {
      id: "SOP-ROV-DEPLOY-002",
      name: "ROV Deployment & Recovery",
      version: "V3.8",
      status: "ACTIVE",
      lastReview: "2024-11-20",
      nextReview: "2025-02-20",
      compliance: 98,
      usage: 523,
      ref: "SOP-002"
    },
    {
      id: "SOP-EMERGENCY-ABORT-003",
      name: "Emergency Abort Procedures",
      version: "V5.0",
      status: "ACTIVE",
      lastReview: "2025-01-10",
      nextReview: "2025-04-10",
      compliance: 100,
      usage: 12,
      ref: "SOP-003"
    },
    {
      id: "SOP-EQUIPMENT-CHECK-004",
      name: "Pre-Dive Equipment Verification",
      version: "V3.1",
      status: "ACTIVE",
      lastReview: "2024-10-05",
      nextReview: "2025-01-05",
      compliance: 95,
      usage: 1243,
      ref: "SOP-004"
    },
    {
      id: "SOP-BUDDY-PROTOCOL-005",
      name: "Buddy System & Communication",
      version: "V2.5",
      status: "ACTIVE",
      lastReview: "2024-09-18",
      nextReview: "2024-12-18",
      compliance: 100,
      usage: 2156,
      ref: "SOP-005"
    },
  ]

  const activeOps = [
    { location: "Platform Alpha", team: "Dive Team 1", status: "ACTIVE", sop: "SOP-DIVE-ENTRY-001", time: "2h 15m" },
    { location: "Platform Beta", team: "ROV Team 2", status: "ACTIVE", sop: "SOP-ROV-DEPLOY-002", time: "1h 42m" },
    { location: "Platform Gamma", team: "Dive Team 3", status: "STANDBY", sop: "SOP-EQUIPMENT-CHECK-004", time: "0h 00m" },
  ]

  const complianceMetrics = [
    { category: "Documentation", value: 100, status: "COMPLIANT", ref: "CMP-001" },
    { category: "Training", value: 87, status: "IN PROGRESS", ref: "CMP-002" },
    { category: "Certification", value: 94, status: "CURRENT", ref: "CMP-003" },
    { category: "Audit Readiness", value: 100, status: "READY", ref: "CMP-004" },
  ]

  const trainingModules = [
    { name: "Level 1: Core Safety Awareness", completed: 45, total: 50, progress: 90, ref: "TRN-001" },
    { name: "Level 2: ROV Operations", completed: 30, total: 50, progress: 60, ref: "TRN-002" },
    { name: "Level 3: Emergency Response", completed: 5, total: 50, progress: 10, ref: "TRN-003" },
    { name: "Level 4: Advanced Rescue", completed: 0, total: 50, progress: 0, ref: "TRN-004" },
  ]

  return (
    <section className="relative min-h-screen bg-[#0a0e1a] overflow-hidden">
      {/* Technical Grid Background - Denser */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(245,158,11,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,158,11,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }} />
      </div>

      {/* Depth Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0f1625] to-[#1a2332]" />

      {/* Command Center Frame - Top Bar */}
      <div className="absolute top-0 left-0 right-0 h-14 md:h-16 border-b border-amber-500/20 bg-black/40 backdrop-blur-sm z-20">
        <div className="container-responsive h-full flex items-center justify-between px-4">
          <div className="flex items-center gap-2 md:gap-6 flex-1 min-w-0">
            <div className="font-mono text-[8px] md:text-[10px] text-amber-500/80 tracking-[0.2em] md:tracking-[0.3em] uppercase truncate">
              SAFETY STANDARDS COMMAND CENTER
            </div>
            <div className="h-4 w-px bg-amber-500/20 hidden md:block" />
            <div className="font-mono text-[8px] md:text-[9px] text-gray-600 hidden md:block">
              SYS: OPERATIONAL | SOPs: {sops.length} ACTIVE | COMPLIANCE: {complianceMetrics[0].value}%
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
            <div className="font-mono text-[8px] md:text-[9px] text-gray-600 hidden sm:block">
              {timestamp.toISOString().replace('T', ' ').substring(0, 19)}Z
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-responsive pt-20 md:pt-24 pb-12 relative z-10 px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 md:mb-12"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6 md:mb-8">
            <div className="flex-1">
              <div className="font-mono text-[8px] md:text-[9px] text-gray-600 mb-2">REF: MR-SAFETY-CC-001 | REV: 2.0 | CLASS: OPERATIONAL</div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white/90 mb-2">
                Safety Operations<br />Command Center
              </h1>
              <div className="h-px w-12 md:w-16 bg-amber-500/30 mb-4" />
              <p className="text-sm md:text-base text-gray-400 font-light max-w-2xl">
                Real-time monitoring and control interface for standardized safety protocols, compliance tracking, and operational oversight. Enterprise-grade safety management as a service.
              </p>
            </div>
            <div className="w-full lg:w-auto lg:min-w-[200px]">
              <div className="border border-amber-500/30 bg-black/60 p-4 md:p-6 backdrop-blur-sm">
                <div className="font-mono text-[8px] md:text-[9px] text-amber-500/70 uppercase tracking-wider mb-3 md:mb-4">SYSTEM STATUS</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 font-mono">ACTIVE OPS</span>
                    <span className="text-base md:text-lg text-green-400 font-mono">{activeOps.filter(o => o.status === "ACTIVE").length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 font-mono">STANDBY</span>
                    <span className="text-base md:text-lg text-amber-500 font-mono">{activeOps.filter(o => o.status === "STANDBY").length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 font-mono">COMPLIANCE</span>
                    <span className="text-base md:text-lg text-amber-500/90 font-mono">{complianceMetrics[0].value}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bloomberg Terminal Style Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-6 md:mb-8">
          {/* SOP Library - Large Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8 border border-amber-500/20 bg-black/60 backdrop-blur-sm p-4 md:p-6 relative group overflow-x-auto"
          >
            {/* Technical Corner Markers */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-amber-500/30" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-amber-500/30" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-amber-500/30" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-amber-500/30" />

            {/* Panel Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider">STANDARD OPERATING PROCEDURES LIBRARY</div>
              <div className="font-mono text-[8px] text-gray-700">REF: SOP-LIB-001</div>
            </div>

            {/* SOP Table Header */}
            <div className="grid grid-cols-6 gap-2 md:gap-4 pb-2 border-b border-gray-800/50 mb-3 font-mono text-[7px] md:text-[8px] text-amber-500/70 uppercase tracking-wider min-w-[600px]">
              <div>SOP ID</div>
              <div>NAME</div>
              <div className="hidden sm:block">VERSION</div>
              <div>COMPLIANCE</div>
              <div className="hidden md:block">USAGE</div>
              <div>REF</div>
            </div>

            {/* SOP Rows */}
            <div className="space-y-2 mb-4 md:mb-6">
              {sops.map((sop, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className={`grid grid-cols-6 gap-2 md:gap-4 py-2 border-b border-gray-800/30 font-mono text-[10px] md:text-xs hover:bg-amber-500/5 transition-colors cursor-pointer min-w-[600px] ${
                    selectedSOP === idx ? "bg-amber-500/10 border-l-2 border-l-amber-500" : ""
                  }`}
                  onClick={() => setSelectedSOP(idx)}
                >
                  <div className="text-amber-500/90 text-[9px] md:text-[10px] truncate">{sop.id}</div>
                  <div className="text-white/90 font-light truncate">{sop.name}</div>
                  <div className="text-gray-400 hidden sm:block">{sop.version}</div>
                  <div className={`${sop.compliance === 100 ? "text-green-400" : sop.compliance >= 95 ? "text-amber-500" : "text-red-400"} truncate`}>
                    {sop.compliance}%
                  </div>
                  <div className="text-gray-400 hidden md:block">{sop.usage}</div>
                  <div className="text-gray-700 text-[9px] md:text-[10px]">{sop.ref}</div>
                </motion.div>
              ))}
            </div>

            {/* Selected SOP Details */}
            {sops[selectedSOP] && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-gray-800/50 bg-black/40 p-4"
              >
                <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-3">ACTIVE SOP DETAILS</div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="font-mono text-[8px] text-gray-600 mb-1">LAST REVIEW</div>
                    <div className="text-sm text-white font-mono">{sops[selectedSOP].lastReview}</div>
                  </div>
                  <div>
                    <div className="font-mono text-[8px] text-gray-600 mb-1">NEXT REVIEW</div>
                    <div className="text-sm text-white font-mono">{sops[selectedSOP].nextReview}</div>
                  </div>
                  <div>
                    <div className="font-mono text-[8px] text-gray-600 mb-1">STATUS</div>
                    <div className="text-sm text-green-400 font-mono">{sops[selectedSOP].status}</div>
                  </div>
                  <div>
                    <div className="font-mono text-[8px] text-gray-600 mb-1">TOTAL USAGE</div>
                    <div className="text-sm text-amber-500/90 font-mono">{sops[selectedSOP].usage} executions</div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Right Column - Compliance & Training */}
          <div className="lg:col-span-4 space-y-4">
            {/* Compliance Status */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="border border-amber-500/20 bg-black/60 backdrop-blur-sm p-3 md:p-4 relative group"
            >
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber-500/30" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber-500/30" />
              
              <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-3">COMPLIANCE STATUS</div>
              <div className="space-y-3">
                {complianceMetrics.map((metric, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="border-b border-gray-800/50 pb-3 last:border-0"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-mono text-[8px] text-gray-600">{metric.category}</div>
                      <div className={`font-mono text-xs ${
                        metric.status === "COMPLIANT" || metric.status === "READY" ? "text-green-400" :
                        metric.status === "CURRENT" ? "text-amber-500" :
                        "text-amber-500/70"
                      }`}>
                        {metric.value}%
                      </div>
                    </div>
                    <div className="h-1.5 bg-gray-900 border border-gray-800">
                      <motion.div
                        className={`h-full ${
                          metric.value === 100 ? "bg-green-500/60" :
                          metric.value >= 90 ? "bg-amber-500/60" :
                          "bg-red-500/60"
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${metric.value}%` }}
                        transition={{ duration: 1, delay: 0.7 + idx * 0.1 }}
                      />
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <div className="font-mono text-[7px] text-gray-700">{metric.ref}</div>
                      <div className={`font-mono text-[7px] ${
                        metric.status === "COMPLIANT" || metric.status === "READY" ? "text-green-400" :
                        "text-gray-600"
                      }`}>
                        {metric.status}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Active Operations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="border border-amber-500/20 bg-black/60 backdrop-blur-sm p-3 md:p-4 relative group"
            >
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber-500/30" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber-500/30" />
              
              <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-3">ACTIVE OPERATIONS</div>
              <div className="space-y-2">
                {activeOps.map((op, idx) => (
                  <div key={idx} className="border border-gray-800/50 bg-black/40 p-3">
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-mono text-[8px] text-gray-400">{op.location}</div>
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        op.status === "ACTIVE" ? "bg-green-400 animate-pulse" : "bg-amber-500"
                      }`} />
                    </div>
                    <div className="text-xs text-white font-light mb-1">{op.team}</div>
                    <div className="flex items-center justify-between">
                      <div className="font-mono text-[8px] text-gray-600">{op.sop}</div>
                      <div className={`font-mono text-[8px] ${
                        op.status === "ACTIVE" ? "text-green-400" : "text-amber-500"
                      }`}>
                        {op.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Training Progress & Audit Readiness */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6 md:mb-8">
          {/* Training Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="border border-amber-500/20 bg-black/60 backdrop-blur-sm p-4 md:p-6 relative group"
          >
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-amber-500/30" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-amber-500/30" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-amber-500/30" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-amber-500/30" />

            <div className="flex items-center justify-between mb-4">
              <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider">TRAINING PROGRESS</div>
              <div className="font-mono text-[8px] text-gray-700">REF: TRN-DASH-001</div>
            </div>

            <div className="space-y-4">
              {trainingModules.map((module, idx) => (
                <div key={idx} className="border border-gray-800/50 bg-black/40 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-mono text-[8px] text-gray-600">{module.ref}</div>
                    <div className="text-xs text-amber-500/90 font-mono">{module.progress}%</div>
                  </div>
                  <div className="text-sm text-white font-light mb-2">{module.name}</div>
                  <div className="h-2 bg-gray-900 border border-gray-800 mb-1">
                    <motion.div
                      className="h-full bg-amber-500/60"
                      initial={{ width: 0 }}
                      animate={{ width: `${module.progress}%` }}
                      transition={{ duration: 1, delay: 0.7 + idx * 0.1 }}
                    />
                  </div>
                  <div className="flex items-center justify-between font-mono text-[8px] text-gray-600">
                    <span>{module.completed}/{module.total} completed</span>
                    <span>{module.total - module.completed} remaining</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Audit Readiness */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="border border-amber-500/20 bg-black/60 backdrop-blur-sm p-4 md:p-6 relative group"
          >
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-amber-500/30" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-amber-500/30" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-amber-500/30" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-amber-500/30" />

            <div className="flex items-center justify-between mb-4">
              <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider">AUDIT READINESS</div>
              <div className="font-mono text-[8px] text-gray-700">REF: AUD-DASH-001</div>
            </div>

            <div className="space-y-4">
              {[
                { category: "Documentation", status: "READY", lastAudit: "2024-12-01", nextAudit: "2025-03-01", ref: "AUD-001" },
                { category: "Training Records", status: "READY", lastAudit: "2024-11-15", nextAudit: "2025-02-15", ref: "AUD-002" },
                { category: "Incident Reports", status: "READY", lastAudit: "2025-01-10", nextAudit: "2025-04-10", ref: "AUD-003" },
                { category: "Compliance Certificates", status: "READY", lastAudit: "2024-10-20", nextAudit: "2025-01-20", ref: "AUD-004" },
              ].map((audit, idx) => (
                <div key={idx} className="border border-gray-800/50 bg-black/40 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-mono text-[8px] text-gray-600">{audit.ref}</div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                      <div className="text-xs text-green-400 font-mono">{audit.status}</div>
                    </div>
                  </div>
                  <div className="text-sm text-white font-light mb-3">{audit.category}</div>
                  <div className="grid grid-cols-2 gap-3 font-mono text-[8px]">
                    <div>
                      <div className="text-gray-600 mb-1">LAST AUDIT</div>
                      <div className="text-gray-400">{audit.lastAudit}</div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">NEXT AUDIT</div>
                      <div className="text-amber-500/90">{audit.nextAudit}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Live Safety Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="border border-amber-500/20 bg-black/60 backdrop-blur-sm p-4 md:p-6 relative group"
        >
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-amber-500/30" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-amber-500/30" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-amber-500/30" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-amber-500/30" />

          <div className="flex items-center justify-between mb-4">
            <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider">LIVE SAFETY METRICS</div>
            <div className="font-mono text-[8px] text-gray-700">REF: MET-DASH-001</div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { label: "DAYS SINCE INCIDENT", value: "847", unit: "days", status: "EXCELLENT", ref: "MET-001" },
              { label: "SOP COMPLIANCE", value: "98.5", unit: "%", status: "GOOD", ref: "MET-002" },
              { label: "TRAINING COMPLETION", value: "87", unit: "%", status: "ON TRACK", ref: "MET-003" },
              { label: "AUDIT READINESS", value: "100", unit: "%", status: "READY", ref: "MET-004" },
            ].map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + idx * 0.1 }}
                className="border border-gray-800/50 bg-black/40 p-3 md:p-4 text-center"
              >
                <div className="font-mono text-[7px] md:text-[8px] text-gray-600 mb-2">{metric.label}</div>
                <div className="text-2xl md:text-3xl font-light text-amber-500/90 mb-1 font-mono">{metric.value}</div>
                <div className="font-mono text-[7px] md:text-[8px] text-gray-600 mb-2">{metric.unit}</div>
                <div className={`font-mono text-[7px] md:text-[8px] ${
                  metric.status === "EXCELLENT" || metric.status === "READY" ? "text-green-400" :
                  metric.status === "GOOD" || metric.status === "ON TRACK" ? "text-amber-500" :
                  "text-red-400"
                }`}>
                  {metric.status}
                </div>
                <div className="font-mono text-[6px] md:text-[7px] text-gray-700 mt-1">{metric.ref}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}



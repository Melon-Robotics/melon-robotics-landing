"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SubscribeButton } from "@/components/payments/subscribe-button"

export function ROVInspectionDemos() {
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
            <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">OPERATIONAL INTERFACE</div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 text-white/90">
            Real-Time<br />Inspection Data
          </h2>
          <p className="text-base md:text-lg text-gray-500 font-light max-w-xl leading-relaxed">
            Live video feeds, sonar mapping, and automated defect detection with precise geo-referencing and measurement capabilities.
          </p>
        </motion.div>

        {/* Demo Panels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16">
          {/* HD Video Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="group relative"
          >
            <div className="relative border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 transition-all duration-500 hover:border-amber-500/30 hover:shadow-[0_0_40px_rgba(245,158,11,0.1)]">
              {/* Technical Drawing Corners */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Panel Header */}
              <div className="mb-4 flex items-center justify-between">
                <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider">HD VIDEO PANEL</div>
                <div className="font-mono text-[8px] text-gray-700">REF: VID-001</div>
              </div>

              {/* Video Display */}
              <div className="relative h-80 bg-black/60 overflow-hidden border border-gray-800/50">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/40 to-black" />
                
                {/* Defect Tags with Animation */}
                {[
                  {x:"20%",y:"45%",t:"CORROSION",severity:"HIGH"},
                  {x:"65%",y:"30%",t:"CRACK",severity:"MED"},
                  {x:"50%",y:"70%",t:"MARINE GROWTH",severity:"LOW"}
                ].map((d,i)=> (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{ left: d.x, top: d.y }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
                  >
                    <div className="bg-black/90 border border-amber-500/50 px-3 py-1.5 backdrop-blur-sm">
                      <div className="text-[9px] text-amber-500/90 font-mono mb-0.5">{d.t}</div>
                      <div className="text-[8px] text-gray-600 font-mono">{d.severity}</div>
                    </div>
                    <motion.div
                      className="w-px h-8 bg-amber-500/40 mx-auto"
                      initial={{ height: 0 }}
                      animate={{ height: 32 }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.2 }}
                    />
                  </motion.div>
                ))}

                {/* Video Stats Overlay */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-black/90 border border-gray-700/50 px-3 py-1.5 backdrop-blur-sm">
                    <div className="font-mono text-[8px] text-gray-600 space-y-0.5">
                      <div>RES: 4K UHD</div>
                      <div>FPS: 30</div>
                      <div>DEPTH: 12.2m</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6">
                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  Real-time 4K video documentation with automated defect detection and annotation. AI-powered analysis identifies corrosion, cracks, and marine growth with severity ratings for immediate action prioritization.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Sonar/Path Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative"
          >
            <div className="relative border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 transition-all duration-500 hover:border-amber-500/30 hover:shadow-[0_0_40px_rgba(245,158,11,0.1)]">
              {/* Technical Drawing Corners */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Panel Header */}
              <div className="mb-4 flex items-center justify-between">
                <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider">SONAR / NAVIGATION</div>
                <div className="font-mono text-[8px] text-gray-700">REF: SON-001</div>
              </div>

              {/* Sonar Display */}
              <div className="relative h-80 bg-black/60 overflow-hidden border border-gray-800/50">
                {/* Path with Animation */}
                <svg className="absolute inset-0 w-full h-full opacity-60">
                  <motion.path
                    d="M10,180 C90,150 140,180 210,150 C280,120 350,150 430,120"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </svg>

                {/* Sonar Beacons */}
                {Array.from({length:5}).map((_,i)=> (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.7)]"
                    style={{ left: `${10 + i*20}%`, top: `${70 - (i%2)*15}%` }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: [0.5,1,0.5], scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i*0.2 }}
                  />
                ))}

                {/* Navigation Readouts */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-black/90 border border-gray-700/50 px-3 py-1.5 backdrop-blur-sm">
                    <div className="font-mono text-[8px] text-amber-500/80 space-y-0.5">
                      <div>DVL LOCK • 0.3m/s</div>
                      <div>DEPTH: 12.2m</div>
                      <div>GPS: ACTIVE</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6">
                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  Doppler Velocity Log (DVL) navigation with GPS overlay provides precise positioning and path tracking. Real-time sonar mapping creates detailed bathymetric data for comprehensive site documentation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Service Capabilities Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-8 md:p-10"
        >
          <div className="mb-6">
            <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-4">CAPABILITIES OVERVIEW</div>
            <div className="h-px w-12 bg-amber-500/30 mb-6" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "HD Video Documentation",
                description: "4K underwater videography with optimized lighting for deep-sea conditions. Real-time streaming and post-mission analysis with frame-by-frame annotation capabilities.",
                spec: "4K UHD • 30 FPS • HDR"
              },
              {
                title: "Structural Assessment",
                description: "Ultrasonic testing, thickness gauging, and defect detection for infrastructure integrity analysis. Automated reporting with condition ratings and maintenance recommendations.",
                spec: "UT • Thickness • AI Analysis"
              },
              {
                title: "Environmental Survey",
                description: "Current profiling, turbidity measurement, and sediment analysis for comprehensive environmental assessment. Multi-parameter sensor integration for complete site characterization.",
                spec: "Multi-Param • Real-Time • Archive"
              },
            ].map((cap, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                <div className="absolute top-0 right-0">
                  <div className="font-mono text-[8px] text-gray-700">REF: {String(idx + 1).padStart(2, '0')}</div>
                </div>
                <h3 className="text-lg md:text-xl font-light text-white/90 mb-3 tracking-tight pr-8">{cap.title}</h3>
                <div className="h-px w-8 bg-amber-500/30 mb-4" />
                <p className="text-sm text-gray-400 leading-relaxed font-light mb-4">{cap.description}</p>
                <div className="font-mono text-[9px] text-amber-500/70">{cap.spec}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ROV Services - Detailed Service Modules */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-28"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">SERVICE MODULES</div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 text-white/90">
            ROV Inspection<br />Services
          </h2>
          <p className="text-base md:text-lg text-gray-500 font-light max-w-xl leading-relaxed mb-12">
            Comprehensive underwater inspection capabilities using LBV-150 ROV systems. Each service module includes detailed documentation, technical specifications, and actionable recommendations.
          </p>

          {/* Services Grid */}
          <div className="space-y-6">
            {[
              {
                name: "Hull Inspection",
                description: "Detailed visual survey of vessel hulls for corrosion, fouling, cracks, or damage.",
                deliverables: [
                  "HD 4K video footage",
                  "Annotated photo set",
                  "Summary inspection report",
                  "Depth & GPS overlay (if available)"
                ],
                equipment: [
                  "LBV-150 ROV with HD camera",
                  "Laser scaler",
                  "Floodlights",
                  "GPS overlay module",
                  "Topside control station"
                ],
                ref: "SVC-001"
              },
              {
                name: "Dock & Piling Survey",
                description: "Inspections of marina structures, docks, and pilings for marine growth, structural wear, or scouring.",
                deliverables: [
                  "Photo/video documentation",
                  "Structural condition rating",
                  "Recommendations for maintenance"
                ],
                equipment: [
                  "LBV-150 ROV",
                  "Lighting array",
                  "Altimeter",
                  "Imaging sonar (optional)",
                  "Measuring stick tool"
                ],
                ref: "SVC-002"
              },
              {
                name: "Pipeline & Cable Inspection",
                description: "Linear survey of submerged utility lines to detect exposure, movement, or damage.",
                deliverables: [
                  "Geo-referenced video",
                  "Path deviation log",
                  "Anomaly report with still frames"
                ],
                equipment: [
                  "LBV-150 ROV",
                  "DVL (Doppler Velocity Log)",
                  "GPS transponder",
                  "HD camera",
                  "Side-scan sonar (optional)"
                ],
                ref: "SVC-003"
              },
              {
                name: "Environmental Monitoring",
                description: "Data collection for water clarity, temperature, sedimentation, and marine growth.",
                deliverables: [
                  "Sensor data (temp, turbidity)",
                  "HD site imagery",
                  "Environmental summary report"
                ],
                equipment: [
                  "LBV-150 ROV with sensor payload",
                  "Temp, turbidity, pH sensors",
                  "Environmental sampling attachment"
                ],
                ref: "SVC-004"
              },
              {
                name: "Emergency Recovery / Search",
                description: "Rapid deployment for lost objects, sunken assets, or accident scenes.",
                deliverables: [
                  "Real-time feed for client",
                  "Recovery report",
                  "Object imagery or video"
                ],
                equipment: [
                  "LBV-150 ROV",
                  "Grabber arm attachment",
                  "HD camera",
                  "High-intensity lights"
                ],
                ref: "SVC-005"
              },
              {
                name: "Pre-Dive Safety Survey",
                description: "Quick situational assessment before human dive operations.",
                deliverables: [
                  "Live visual confirmation",
                  "Safety condition checklist"
                ],
                equipment: [
                  "LBV-150 ROV",
                  "Topside video link",
                  "Floodlights"
                ],
                ref: "SVC-006"
              },
              {
                name: "Structure & Bridge Footing Inspection",
                description: "High-precision imaging of submerged bridge structures for DOT or engineering firms.",
                deliverables: [
                  "HD imagery and 3D model (if equipped)",
                  "Structural condition grading report"
                ],
                equipment: [
                  "LBV-150 ROV",
                  "Laser scaler",
                  "3D photogrammetry kit",
                  "Altimeter",
                  "Sonar (optional)"
                ],
                ref: "SVC-007"
              },
              {
                name: "AI Predictive Maintenance Analysis",
                description: "Data-driven corrosion detection and predictive model for recurring clients.",
                deliverables: [
                  "AI-driven condition score",
                  "Predictive maintenance report",
                  "Change-over-time graph"
                ],
                equipment: [
                  "LBV-150 ROV",
                  "HD camera",
                  "Edge-compute AI node",
                  "Melon cloud analytics platform"
                ],
                ref: "SVC-008"
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="group relative"
              >
                <div className="border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-8 transition-all duration-500 hover:border-amber-500/30 hover:shadow-[0_0_40px_rgba(245,158,11,0.1)]">
                  {/* Technical Drawing Corners */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Service Reference */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="font-mono text-[9px] text-gray-600">
                      MODULE: {service.ref} | REV: A.1
                    </div>
                    <div className="font-mono text-[8px] text-gray-700">
                      REF: {String(idx + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Service Name */}
                  <h3 className="text-2xl md:text-3xl font-light text-white/90 mb-4 tracking-tight">
                    {service.name}
                  </h3>
                  <div className="h-px w-12 bg-amber-500/30 mb-6" />

                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-400 mb-8 leading-relaxed font-light">
                    {service.description}
                  </p>

                  {/* Deliverables & Equipment Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Deliverables */}
                    <div>
                      <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-3">
                        DELIVERABLES
                      </div>
                      <ul className="space-y-2">
                        {service.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="mt-2">
                              <div className="w-1 h-1 bg-amber-500/60" />
                            </div>
                            <span className="text-xs md:text-sm text-gray-400 leading-relaxed font-light">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Equipment */}
                    <div>
                      <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-3">
                        EQUIPMENT
                      </div>
                      <ul className="space-y-2">
                        {service.equipment.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="mt-2">
                              <div className="w-1 h-1 bg-amber-500/40" />
                            </div>
                            <span className="text-xs md:text-sm text-gray-500 leading-relaxed font-mono">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Melon Shield Subscription Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-28"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">MELON SHIELD</div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 text-white/90">
            Subscription<br />Packages
          </h2>
          <p className="text-base md:text-lg text-gray-500 font-light max-w-xl leading-relaxed mb-12">
            Annual inspection programs designed for predictable maintenance schedules and cost optimization. Choose the tier that matches your operational requirements.
          </p>

          {/* Subscription Tiers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
            {[
              {
                name: "Bronze",
                price: "$2,400/yr",
                includedServices: [
                  "Hull Inspection (x2)",
                  "Dock & Piling Survey (x1)",
                  "1 Emergency Callout"
                ],
                deliverablesPerYear: [
                  "3 HD video reports",
                  "1 emergency response report",
                  "Annual condition summary"
                ],
                equipment: [
                  "LBV-150 ROV",
                  "HD camera",
                  "Floodlights",
                  "Laser scaler"
                ],
                ref: "SUB-001",
                recommended: false
              },
              {
                name: "Silver",
                price: "$4,800/yr",
                includedServices: [
                  "Hull Inspection (x4)",
                  "Dock & Piling Survey (x2)",
                  "Environmental Monitoring (x2)",
                  "2 Emergency Callouts"
                ],
                deliverablesPerYear: [
                  "8 full video reports",
                  "2 emergency reports",
                  "Annual analytics dashboard"
                ],
                equipment: [
                  "LBV-150 ROV",
                  "DVL",
                  "Sensor payload",
                  "HD camera",
                  "Laser scaler"
                ],
                ref: "SUB-002",
                recommended: false
              },
              {
                name: "Gold",
                price: "$9,000/yr",
                includedServices: [
                  "Hull Inspection (x4)",
                  "Dock & Piling Survey (x2)",
                  "Pipeline & Cable Inspection (x1)",
                  "Structure/Bridge Inspection (x1)",
                  "AI Predictive Maintenance Analysis",
                  "4 Emergency Callouts"
                ],
                deliverablesPerYear: [
                  "10+ video reports",
                  "4 emergency dispatches",
                  "Predictive maintenance trend analysis",
                  "Client dashboard access"
                ],
                equipment: [
                  "LBV-150 ROV with full payload kit",
                  "DVL, sonar, sensors",
                  "Laser scaler",
                  "Grabber arm",
                  "Onboard compute node"
                ],
                ref: "SUB-003",
                recommended: true
              },
              {
                name: "Enterprise / Municipal",
                price: "Custom",
                includedServices: [
                  "Tailored packages for ports, municipalities, or industrial clients"
                ],
                deliverablesPerYear: [
                  "Custom inspection schedule",
                  "AI maintenance tracking",
                  "Cloud portal access"
                ],
                equipment: [
                  "Multiple LBV-150 units",
                  "AI node",
                  "Sonar package",
                  "Mobile base station"
                ],
                ref: "SUB-004",
                recommended: false
              },
            ].map((tier, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`group relative border flex flex-col h-full ${
                  tier.recommended
                    ? 'border-amber-500/40 bg-amber-500/5'
                    : 'border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625]'
                } p-6 md:p-8 transition-all duration-500 hover:border-amber-500/40 hover:shadow-[0_0_40px_rgba(245,158,11,0.1)]`}
              >
                {/* Technical Drawing Corners */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Recommended Badge */}
                {tier.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-500 text-black text-[10px] font-mono tracking-wider uppercase">
                    RECOMMENDED
                  </div>
                )}

                {/* Tier Reference */}
                <div className="mb-6">
                  <div className="font-mono text-[9px] text-gray-600 mb-2">
                    TIER: {tier.name.toUpperCase()} | REF: {tier.ref}
                  </div>
                </div>

                {/* Title & Price */}
                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white/90 mb-3 tracking-tight">{tier.name}</h3>
                  <div className="h-px w-12 bg-amber-500/30 mb-4" />
                  <div className="text-2xl md:text-3xl lg:text-4xl font-light text-amber-500/90 mb-2 font-mono">{tier.price}</div>
                  {tier.name !== 'Enterprise / Municipal' && (
                    <div className="font-mono text-[9px] text-gray-600">ANNUAL SUBSCRIPTION</div>
                  )}
                </div>

                {/* Content Section - Flex Grow */}
                <div className="flex-grow space-y-6">
                  {/* Included Services */}
                  <div>
                    <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-3">
                      INCLUDED SERVICES
                    </div>
                    <ul className="space-y-2">
                      {tier.includedServices.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-2 flex-shrink-0">
                            <div className="w-1 h-1 bg-amber-500/60" />
                          </div>
                          <span className="text-xs md:text-sm text-gray-400 leading-relaxed font-light">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-3">
                      DELIVERABLES
                    </div>
                    <ul className="space-y-2">
                      {tier.deliverablesPerYear.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-2 flex-shrink-0">
                            <div className="w-1 h-1 bg-amber-500/40" />
                          </div>
                          <span className="text-xs text-gray-500 leading-relaxed font-light">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Equipment */}
                  <div>
                    <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-3">
                      EQUIPMENT PACKAGE
                    </div>
                    <ul className="space-y-2">
                      {tier.equipment.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-2 flex-shrink-0">
                            <div className="w-1 h-1 bg-amber-500/30" />
                          </div>
                          <span className="text-xs text-gray-600 leading-relaxed font-mono">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                  <SubscribeButton
                    serviceId="rov-inspection"
                    tierName={tier.name}
                    tierPrice={tier.price}
                    className={`w-full ${
                      tier.recommended
                        ? 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:border-amber-500/50'
                        : 'border border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-600 bg-black/20'
                    } py-6 md:py-7 text-xs md:text-sm font-mono tracking-wider uppercase transition-all duration-300 backdrop-blur-sm`}
                    variant="outline"
                    isRecommended={tier.recommended}
                    isEnterprise={tier.name === 'Enterprise / Municipal'}
                  />
                </div>
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
          className="text-center mt-16"
        >
          <Link href="/contact">
            <Button className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 px-12 py-8 text-sm font-mono tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] backdrop-blur-sm">
              Request Inspection Quote
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}








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
                description: "Comprehensive visual survey of vessel hulls for corrosion, fouling, cracks, or structural damage. Ideal for pre-purchase surveys, insurance assessments, and routine maintenance planning. Our systematic approach ensures complete coverage of all hull surfaces with precise documentation.",
                depthRange: "0-150m",
                typicalDuration: "2-6 hours (varies by vessel size)",
                useCases: [
                  "Pre-purchase vessel surveys",
                  "Insurance damage assessment",
                  "Routine maintenance inspections",
                  "Regulatory compliance verification",
                  "Post-repair validation"
                ],
                technicalSpecs: [
                  "4K UHD video at 30fps",
                  "Laser scaling for accurate measurements",
                  "GPS-referenced positioning",
                  "Automated defect detection AI",
                  "Frame-by-frame annotation capability"
                ],
                deliverables: [
                  "HD 4K video footage (full mission)",
                  "Annotated photo set (key findings)",
                  "Comprehensive inspection report with severity ratings",
                  "Depth & GPS overlay data",
                  "3D hull condition map (if equipped)",
                  "Maintenance priority recommendations",
                  "Before/after comparison (for recurring clients)"
                ],
                equipment: [
                  "LBV-150 ROV with HD camera",
                  "Laser scaler (precision measurement)",
                  "High-intensity LED floodlights (10,000+ lumens)",
                  "GPS overlay module with DVL integration",
                  "Topside control station with dual monitors",
                  "Real-time video recording system"
                ],
                ref: "SVC-001"
              },
              {
                name: "Dock & Piling Survey",
                description: "Detailed inspections of marina structures, docks, and pilings for marine growth, structural wear, scouring, or foundation issues. Critical for port authorities, marina operators, and engineering firms requiring structural integrity assessments.",
                depthRange: "0-50m (typical), up to 150m",
                typicalDuration: "3-8 hours (depends on structure size)",
                useCases: [
                  "Marina facility condition assessment",
                  "Port infrastructure maintenance",
                  "Pre-renovation structural evaluation",
                  "Insurance documentation",
                  "Environmental impact studies",
                  "DOT bridge inspection support"
                ],
                technicalSpecs: [
                  "360° piling coverage capability",
                  "Marine growth thickness measurement",
                  "Scour depth analysis",
                  "Structural crack detection (0.1mm resolution)",
                  "Concrete spalling assessment"
                ],
                deliverables: [
                  "Photo/video documentation (geo-tagged)",
                  "Structural condition rating (1-5 scale)",
                  "Detailed recommendations for maintenance",
                  "Marine growth coverage analysis",
                  "Scour depth measurements",
                  "3D structural model (optional)",
                  "Priority repair schedule"
                ],
                equipment: [
                  "LBV-150 ROV with pan-tilt camera",
                  "High-output lighting array (adjustable intensity)",
                  "Precision altimeter (depth measurement)",
                  "Imaging sonar (for low-visibility conditions)",
                  "Measuring stick tool (calibrated reference)",
                  "Grabber arm (for sample collection)"
                ],
                ref: "SVC-002"
              },
              {
                name: "Pipeline & Cable Inspection",
                description: "Linear survey of submerged utility lines, pipelines, and communication cables to detect exposure, movement, damage, or anchor drag marks. Essential for utility companies, oil & gas operators, and telecommunications providers.",
                depthRange: "0-150m",
                typicalDuration: "4-12 hours per km (varies by complexity)",
                useCases: [
                  "Pipeline integrity monitoring",
                  "Subsea cable route verification",
                  "Post-storm damage assessment",
                  "Pre-construction route survey",
                  "Anchoring impact evaluation",
                  "Regulatory compliance documentation"
                ],
                technicalSpecs: [
                  "GPS-referenced path tracking",
                  "DVL-based velocity measurement",
                  "Side-scan sonar imaging",
                  "Real-time deviation alerting",
                  "Automated anomaly detection"
                ],
                deliverables: [
                  "Geo-referenced video (full route)",
                  "Path deviation log with coordinates",
                  "Anomaly report with still frames",
                  "Burial depth measurements",
                  "Exposure length calculations",
                  "Risk assessment matrix",
                  "Recommended intervention points"
                ],
                equipment: [
                  "LBV-150 ROV with forward-looking camera",
                  "DVL (Doppler Velocity Log) for precise navigation",
                  "GPS transponder (surface positioning)",
                  "HD camera with zoom capability",
                  "Side-scan sonar (optional, for buried detection)",
                  "Magnetometer (for metallic pipeline detection)"
                ],
                ref: "SVC-003"
              },
              {
                name: "Environmental Monitoring",
                description: "Comprehensive data collection for water quality, temperature profiles, sedimentation patterns, and marine growth. Supports environmental compliance, research projects, and baseline studies for construction projects.",
                depthRange: "0-150m",
                typicalDuration: "2-4 hours per site",
                useCases: [
                  "Environmental impact assessments",
                  "Water quality baseline studies",
                  "Sediment transport analysis",
                  "Marine growth monitoring",
                  "Pre/post-construction monitoring",
                  "Research data collection"
                ],
                technicalSpecs: [
                  "Multi-parameter sensor suite",
                  "Real-time data logging",
                  "Temperature profiling (0.01°C resolution)",
                  "Turbidity measurement (NTU)",
                  "pH monitoring (0.01 pH units)"
                ],
                deliverables: [
                  "Sensor data logs (temp, turbidity, pH, DO)",
                  "HD site imagery with annotations",
                  "Environmental summary report",
                  "Data visualization charts",
                  "Comparison with regulatory standards",
                  "Recommendations for remediation (if needed)"
                ],
                equipment: [
                  "LBV-150 ROV with sensor payload",
                  "Temperature sensor (high-precision)",
                  "Turbidity sensor (NTU measurement)",
                  "pH sensor (submersible)",
                  "Dissolved oxygen sensor (optional)",
                  "Environmental sampling attachment",
                  "Data logger with real-time telemetry"
                ],
                ref: "SVC-004"
              },
              {
                name: "Emergency Recovery / Search",
                description: "Rapid deployment capability for lost objects, sunken assets, or accident scene documentation. Available 24/7 for emergency response with <24 hour deployment window. Critical for salvage operations, accident investigation, and asset recovery.",
                depthRange: "0-150m",
                typicalDuration: "Variable (typically 2-8 hours)",
                useCases: [
                  "Lost equipment recovery",
                  "Accident scene documentation",
                  "Sunken vessel location",
                  "Evidence collection",
                  "Salvage operation support",
                  "Search and recovery missions"
                ],
                technicalSpecs: [
                  "Rapid deployment capability (<24h)",
                  "High-visibility search patterns",
                  "Object identification AI",
                  "Real-time client feed",
                  "Precise recovery positioning"
                ],
                deliverables: [
                  "Real-time feed for client (live streaming)",
                  "Recovery report with coordinates",
                  "Object imagery or video (high-resolution)",
                  "Site condition assessment",
                  "Recovery feasibility analysis",
                  "Recommended recovery approach"
                ],
                equipment: [
                  "LBV-150 ROV (rapid deployment kit)",
                  "Grabber arm attachment (7-DOF manipulator)",
                  "HD camera with zoom",
                  "High-intensity lights (search mode)",
                  "Sonar (for low-visibility search)",
                  "Recovery basket (optional)"
                ],
                ref: "SVC-005"
              },
              {
                name: "Pre-Dive Safety Survey",
                description: "Quick situational assessment before human dive operations to identify hazards, verify conditions, and ensure diver safety. Reduces dive risk and improves operational efficiency for commercial diving operations.",
                depthRange: "0-150m",
                typicalDuration: "30 minutes - 2 hours",
                useCases: [
                  "Commercial diving safety",
                  "Hazard identification",
                  "Visibility assessment",
                  "Current condition verification",
                  "Entry/exit point evaluation",
                  "Emergency egress route planning"
                ],
                technicalSpecs: [
                  "Rapid deployment (<1 hour)",
                  "Real-time video feed",
                  "Current velocity measurement",
                  "Visibility assessment",
                  "Hazard mapping"
                ],
                deliverables: [
                  "Live visual confirmation (real-time)",
                  "Safety condition checklist",
                  "Hazard identification report",
                  "Recommended dive parameters",
                  "Emergency procedures review"
                ],
                equipment: [
                  "LBV-150 ROV (lightweight configuration)",
                  "Topside video link (real-time streaming)",
                  "High-intensity floodlights",
                  "Current meter (optional)",
                  "Portable topside station"
                ],
                ref: "SVC-006"
              },
              {
                name: "Structure & Bridge Footing Inspection",
                description: "High-precision imaging of submerged bridge structures, foundations, and support elements for DOT compliance, engineering assessments, and structural integrity evaluation. Meets or exceeds DOT inspection standards.",
                depthRange: "0-150m",
                typicalDuration: "4-10 hours per structure",
                useCases: [
                  "DOT bridge inspection compliance",
                  "Engineering firm structural assessment",
                  "Pre-renovation evaluation",
                  "Post-earthquake damage assessment",
                  "Foundation stability analysis",
                  "Scour monitoring"
                ],
                technicalSpecs: [
                  "Sub-millimeter measurement accuracy",
                  "3D photogrammetry capability",
                  "Laser scanning for precise dimensions",
                  "Structural condition grading (NBI standards)",
                  "Automated defect cataloging"
                ],
                deliverables: [
                  "HD imagery (comprehensive coverage)",
                  "3D photogrammetry model (if equipped)",
                  "Structural condition grading report (NBI format)",
                  "Defect inventory with measurements",
                  "Scour depth analysis",
                  "Foundation stability assessment",
                  "Priority repair recommendations"
                ],
                equipment: [
                  "LBV-150 ROV with precision camera",
                  "Laser scaler (measurement accuracy)",
                  "3D photogrammetry kit (multi-camera array)",
                  "Precision altimeter",
                  "Sonar (for foundation mapping)",
                  "Calibrated measurement tools"
                ],
                ref: "SVC-007"
              },
              {
                name: "AI Predictive Maintenance Analysis",
                description: "Advanced data-driven corrosion detection and predictive maintenance modeling for recurring clients. Combines historical inspection data with AI analysis to forecast maintenance needs and optimize inspection schedules.",
                depthRange: "0-150m",
                typicalDuration: "2-4 hours (inspection) + analysis",
                useCases: [
                  "Predictive maintenance planning",
                  "Corrosion rate analysis",
                  "Maintenance cost optimization",
                  "Inspection schedule optimization",
                  "Asset lifecycle management",
                  "Risk-based maintenance strategies"
                ],
                technicalSpecs: [
                  "AI-powered defect detection",
                  "Historical data comparison",
                  "Corrosion rate calculation",
                  "Predictive modeling algorithms",
                  "Cloud-based analytics platform"
                ],
                deliverables: [
                  "AI-driven condition score (0-100)",
                  "Predictive maintenance report",
                  "Change-over-time graph (trend analysis)",
                  "Corrosion rate projections",
                  "Recommended inspection intervals",
                  "Cost-benefit analysis",
                  "Risk assessment matrix"
                ],
                equipment: [
                  "LBV-150 ROV with HD camera",
                  "Edge-compute AI node (onboard processing)",
                  "Melon cloud analytics platform",
                  "Historical data integration",
                  "Machine learning models",
                  "Real-time data synchronization"
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
                  <p className="text-sm md:text-base text-gray-400 mb-6 leading-relaxed font-light">
                    {service.description}
                  </p>

                  {/* Technical Specs Bar */}
                  <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-800/50">
                    <div>
                      <div className="font-mono text-[8px] text-gray-600 mb-1">DEPTH RANGE</div>
                      <div className="text-xs text-amber-500/80 font-mono">{service.depthRange}</div>
                    </div>
                    <div>
                      <div className="font-mono text-[8px] text-gray-600 mb-1">TYPICAL DURATION</div>
                      <div className="text-xs text-amber-500/80 font-mono">{service.typicalDuration}</div>
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div className="mb-6">
                    <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-3">
                      USE CASES
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, i) => (
                        <span key={i} className="text-[10px] px-2 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-500/80 font-mono">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technical Specs */}
                  <div className="mb-6">
                    <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-3">
                      TECHNICAL SPECIFICATIONS
                    </div>
                    <ul className="space-y-1.5">
                      {service.technicalSpecs.map((spec, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="mt-1.5 flex-shrink-0">
                            <div className="w-1 h-1 bg-amber-500/50" />
                          </div>
                          <span className="text-[10px] text-gray-500 leading-relaxed font-mono">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables & Equipment Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Deliverables */}
                    <div>
                      <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-3">
                        DELIVERABLES
                      </div>
                      <ul className="space-y-2">
                        {service.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="mt-2 flex-shrink-0">
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
                            <div className="mt-2 flex-shrink-0">
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

          {/* Pricing CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 md:mt-20 text-center"
          >
            <a
              href="#subscription-packages"
              className="inline-block"
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('subscription-packages')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
            >
              <Button className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 px-12 py-8 text-sm md:text-base font-mono tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] backdrop-blur-sm group">
                <span className="flex items-center gap-3">
                  View Subscription Options
                  <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </Button>
            </a>
            <p className="mt-4 text-xs text-gray-500 font-mono">
              Annual packages available • Priority scheduling • Preferred pricing
            </p>
          </motion.div>
        </motion.div>

        {/* Melon Shield Subscription Tiers */}
        <motion.div
          id="subscription-packages"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-28 scroll-mt-20"
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
                        : 'border border-gray-700/50 text-white/60 hover:text-white hover:border-gray-600 bg-black/20'
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








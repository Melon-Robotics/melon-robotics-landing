"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Database, Activity, Scan, Camera, Radio } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
}

export default function Home() {
  const heroRef = useRef(null)
  const capabilitiesRef = useRef(null)
  const whoWeServeRef = useRef(null)
  const technologyRef = useRef(null)
  const blackboxRef = useRef(null)

  const isHeroInView = useInView(heroRef, { once: true })
  const isCapabilitiesInView = useInView(capabilitiesRef, { once: true, margin: "-100px" })
  const isWhoWeServeInView = useInView(whoWeServeRef, { once: true, margin: "-100px" })
  const isTechnologyInView = useInView(technologyRef, { once: true, margin: "-100px" })
  const isBlackboxInView = useInView(blackboxRef, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      {/* Hero Section - Operations-Forward */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 md:pt-0"
        aria-label="Operations overview"
      >
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

        {/* Depth Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0f1625] to-[#1a2332]" />

        {/* Glowing Orbs */}
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/[0.02] rounded-full blur-3xl" />

        {/* HUD Overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {/* Corner markers */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-amber-500/20" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-amber-500/20" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-amber-500/20" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-amber-500/20" />

          {/* Frame lines */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
          <div className="absolute top-0 left-0 h-20 w-px bg-gradient-to-b from-amber-500/30 to-transparent" />
          <div className="absolute top-0 right-0 h-20 w-px bg-gradient-to-b from-amber-500/30 to-transparent" />

          {/* System Reference - Top Left */}
          <div className="absolute top-4 left-4 text-[10px] sm:text-xs font-mono text-amber-500/80">
            <div className="inline-block border border-amber-500/30 bg-black/60 backdrop-blur-sm px-2 py-1">
              <span className="hidden xs:inline">MR-OPERATIONS | </span>REF: 001-H
            </div>
            <div className="mt-1 text-[8px] text-gray-600 font-mono">
              REV: B.1 | CLASS: UNCLASSIFIED
            </div>
          </div>

          {/* Operations Status - Top Right */}
          <div className="absolute top-4 right-4 text-[10px] sm:text-xs font-mono text-amber-500/80 hidden sm:block">
            <div className="inline-block border border-amber-500/30 bg-black/60 backdrop-blur-sm px-2 py-1">
              OPS: <span className="text-green-400">ACTIVE</span>
            </div>
            <div className="mt-1 text-[8px] text-gray-600 font-mono text-right">
              SERVICES: <span className="text-green-400">4 ONLINE</span>
            </div>
          </div>

          {/* System Health - Bottom Left */}
          <div className="absolute bottom-4 left-4 flex flex-col gap-2 text-[10px] sm:text-xs font-mono">
            <div className="flex items-center">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 mr-1.5 animate-pulse" />
              <span className="text-green-400">ROV FLEET</span>
              <span className="text-gray-600 ml-2 hidden sm:inline">| READY</span>
            </div>
            <div className="flex items-center hidden sm:flex">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-500 mr-1.5 animate-pulse" />
              <span className="text-amber-500">DATA</span>
              <span className="text-gray-600 ml-2">| STREAMING</span>
            </div>
          </div>

          {/* Telemetry - Bottom Right */}
          <div className="absolute bottom-4 right-4 text-[10px] sm:text-xs font-mono text-amber-500/80">
            <div className="inline-block border border-amber-500/30 bg-black/60 backdrop-blur-sm px-2 py-1">
              <span className="hidden sm:inline">REGION: </span>
              <span>EAST COAST</span>
            </div>
            <div className="mt-1 text-[8px] text-gray-600 font-mono text-right">
              UPTIME: 99.7% | MISSIONS: 147
            </div>
          </div>
        </div>

        {/* Animated Scan Line */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
          <motion.div
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/15 to-transparent"
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isHeroInView ? "visible" : "hidden"}
          className="relative z-10 container-responsive max-w-6xl"
        >
          {/* System Status Indicator */}
          <motion.div variants={itemVariants} className="mb-6 md:mb-8 px-4">
            <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-[10px] md:text-xs text-amber-500/80 tracking-[0.2em] uppercase">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  <div className="absolute inset-0 w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping opacity-75" />
                </div>
                <span>SYSTEM ONLINE</span>
              </div>
              <div className="h-px w-8 md:w-12 bg-amber-500/20" />
              <div className="text-gray-600">
                SUBSEA OPERATIONS & AUTONOMOUS SYSTEMS
              </div>
            </div>
          </motion.div>

          {/* Primary Headline */}
          <motion.h1 variants={itemVariants} className="text-center mb-6 md:mb-8 px-4">
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[-0.02em] leading-[0.95] mb-6">
              <span className="block text-white">MELON</span>
              <span className="block text-amber-500">ROBOTICS</span>
            </div>
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent mx-auto" />
          </motion.h1>

          {/* Capability Line */}
          <motion.p
            variants={itemVariants}
            className="text-center text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12 md:mb-16 px-4 font-mono tracking-wide"
          >
            ROV fleet operations. Autonomous platforms. Ocean intelligence.
          </motion.p>

          {/* Primary CTA */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          >
            <Link href="/services" className="w-full sm:w-auto">
              <Button
                className="w-full sm:w-auto bg-amber-500/12 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 px-8 md:px-10 py-5 md:py-6 text-base md:text-lg font-normal tracking-wide transition-all duration-200 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] backdrop-blur-sm min-h-[52px]"
                aria-label="View services"
              >
                Our Services
              </Button>
            </Link>
            <Link href="/products" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto border border-gray-700/50 text-white/80 hover:text-white hover:border-gray-600 px-8 md:px-10 py-5 md:py-6 text-base md:text-lg font-normal tracking-wide transition-all duration-200 bg-black/20 hover:bg-black/30 backdrop-blur-sm min-h-[52px]"
                aria-label="View technology"
              >
                Our Technology
              </Button>
            </Link>
          </motion.div>

          {/* Technical Specs Bar */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-6 font-mono text-[9px] sm:text-[10px] text-gray-600 mt-12 md:mt-16"
          >
            <div className="flex items-center gap-2">
              <span className="text-gray-700">SERVICES:</span>
              <span className="text-amber-500/80">4 OPERATIONAL</span>
            </div>
            <div className="w-px h-3 bg-gray-800 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-gray-700">COVERAGE:</span>
              <span className="text-amber-500/80">EAST COAST US</span>
            </div>
            <div className="w-px h-3 bg-gray-800 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-gray-700">STATUS:</span>
              <span className="text-green-400/80">ALL SYSTEMS ONLINE</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Technical Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/25 to-transparent" />
      </section>

      {/* Operational Capabilities */}
      <section
        ref={capabilitiesRef}
        className="relative py-20 md:py-32 px-4 border-t border-amber-500/15 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625]"
        aria-labelledby="capabilities-heading"
      >
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(245,158,11,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245,158,11,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Glowing Orb */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />

        <div className="container-responsive max-w-7xl relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isCapabilitiesInView ? "visible" : "hidden"}
            className="mb-12 md:mb-16"
          >
            <motion.div variants={itemVariants} className="inline-block border border-amber-500/20 bg-black/30 px-4 py-2 mb-6">
              <div className="text-meta text-amber-500/70">
                OPERATIONAL CAPABILITIES
              </div>
            </motion.div>

            <motion.h2 variants={itemVariants} id="capabilities-heading" className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.01em] leading-[1.05] mb-6 text-white max-w-4xl">
              What We Deliver
            </motion.h2>
            <motion.div variants={itemVariants} className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-amber-500/35 to-transparent mb-6" />
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 max-w-3xl leading-[1.6] font-light">
              Professional subsea services powered by remotely operated vehicles and proprietary data platforms.
            </motion.p>
          </motion.div>

          {/* Capabilities Grid - 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                name: "ROV Inspection & Survey",
                description: "Professional-grade subsea inspection for infrastructure assessment, hull surveys, pipeline monitoring, and emergency recovery operations.",
                href: "/services/rov-inspection",
                icon: Scan,
                spec: "HD video & sonar mapping"
              },
              {
                name: "3D Photogrammetry",
                description: "Centimeter-accurate 3D modeling of underwater structures and terrain for engineering analysis, change detection, and documentation.",
                href: "/services/photogrammetry",
                icon: Camera,
                spec: "Millimeter-level precision"
              },
              {
                name: "Ocean Data Services",
                description: "Real-time and historical oceanographic data including currents, temperature, salinity, and water quality with API access and custom analytics.",
                href: "/services/ocean-data",
                icon: Database,
                spec: "Real-time sensor feeds"
              },
              {
                name: "Safety & Standards",
                description: "Safety protocols, technical documentation, and compliance consulting for commercial diving and subsea operations.",
                href: "/services/safety-standards",
                icon: Shield,
                spec: "Regulatory compliance"
              }
            ].map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isCapabilitiesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <Link href={service.href} className="block h-full">
                  <div className="relative h-full border border-gray-800/40 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 md:p-8 transition-all duration-200 hover:border-amber-500/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] flex flex-col overflow-hidden">
                    {/* Card scan line */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <motion.div
                        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"
                        animate={{ top: ['0%', '100%', '0%'] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                      />
                    </div>

                    {/* Card corner markers */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-amber-500/0 group-hover:border-amber-500/40 transition-colors duration-300" />
                    <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-amber-500/0 group-hover:border-amber-500/40 transition-colors duration-300" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-amber-500/0 group-hover:border-amber-500/40 transition-colors duration-300" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-amber-500/0 group-hover:border-amber-500/40 transition-colors duration-300" />

                    <div className="mb-6 relative z-10">
                      <div className="w-12 h-12 border border-gray-700/40 bg-black/30 flex items-center justify-center mb-4 group-hover:border-amber-500/40 group-hover:bg-amber-500/5 transition-all duration-200">
                        <service.icon className="w-6 h-6 text-amber-500/70 group-hover:text-amber-500 transition-colors" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-light mb-3 text-white tracking-tight">
                        {service.name}
                      </h3>
                      <div className="h-px w-12 md:w-16 bg-gradient-to-r from-amber-500/35 to-transparent mb-4" />
                    </div>

                    <p className="text-base md:text-lg text-gray-300 mb-6 flex-grow leading-[1.6] font-light relative z-10">
                      {service.description}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-gray-800/40 group-hover:border-amber-500/25 transition-colors relative z-10">
                      <div className="text-sm text-gray-500 font-mono uppercase tracking-wider">
                        {service.spec}
                      </div>
                      <div className="text-amber-500/60 group-hover:text-amber-500 transition-all text-xl group-hover:translate-x-1">
                        →
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section
        ref={whoWeServeRef}
        className="relative py-20 md:py-32 px-4 border-t border-amber-500/15 bg-[#0a0e1a]"
        aria-labelledby="who-we-serve-heading"
      >
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(245,158,11,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245,158,11,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Glowing Orb */}
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />

        <div className="container-responsive max-w-7xl relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isWhoWeServeInView ? "visible" : "hidden"}
            className="mb-12 md:mb-16"
          >
            <motion.div variants={itemVariants} className="inline-block border border-amber-500/20 bg-black/30 px-4 py-2 mb-6">
              <div className="text-meta text-amber-500/70">
                SERVICE DELIVERY
              </div>
            </motion.div>

            <motion.h2 variants={itemVariants} id="who-we-serve-heading" className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.01em] leading-[1.05] mb-6 text-white max-w-4xl">
              Who We Serve
            </motion.h2>
            <motion.div variants={itemVariants} className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-amber-500/35 to-transparent mb-6" />
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 max-w-3xl leading-[1.6] font-light">
              Operational subsea services for organizations requiring precision inspection, environmental data, and mission-critical documentation.
            </motion.p>
          </motion.div>

          {/* Applications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Defense & Security",
                description: "Subsea inspection, surveillance support, and infrastructure assessment for naval and coastal security operations.",
                icon: Shield,
                applications: ["Hull & pier inspection", "Port security surveys", "Underwater threat assessment"]
              },
              {
                title: "Research & Government",
                description: "Oceanographic data collection, environmental monitoring, and subsea documentation for research institutions and government agencies.",
                icon: Database,
                applications: ["Environmental baseline surveys", "Habitat monitoring", "Regulatory compliance data"]
              },
              {
                title: "Industrial & Commercial",
                description: "Infrastructure inspection, pipeline monitoring, and structural assessment for commercial and energy sector operations.",
                icon: Activity,
                applications: ["Pipeline & cable inspection", "Dock & piling surveys", "Pre/post-construction documentation"]
              }
            ].map((application, index) => (
              <motion.div
                key={application.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isWhoWeServeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="relative border border-gray-800/40 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 md:p-8"
              >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-amber-500/20" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-amber-500/20" />

                <div className="mb-6">
                  <div className="w-12 h-12 border border-gray-700/40 bg-black/30 flex items-center justify-center mb-4">
                    <application.icon className="w-6 h-6 text-amber-500/70" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light mb-3 text-white tracking-tight">
                    {application.title}
                  </h3>
                  <div className="h-px w-12 md:w-16 bg-gradient-to-r from-amber-500/35 to-transparent mb-4" />
                </div>

                <p className="text-base text-gray-300 mb-6 leading-[1.6] font-light">
                  {application.description}
                </p>

                <ul className="space-y-2">
                  {application.applications.map((app, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-amber-500/60 mt-2 flex-shrink-0 rounded-full" />
                      <span className="text-sm text-gray-400 font-light">{app}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Platform */}
      <section
        ref={technologyRef}
        className="relative py-20 md:py-32 px-4 border-t border-amber-500/15 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625]"
        aria-labelledby="technology-heading"
      >
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
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isTechnologyInView ? "visible" : "hidden"}
            className="mb-12 md:mb-16"
          >
            <motion.div variants={itemVariants} className="inline-block border border-amber-500/20 bg-black/30 px-4 py-2 mb-6">
              <div className="text-meta text-amber-500/70">
                TECHNOLOGY
              </div>
            </motion.div>

            <motion.h2 variants={itemVariants} id="technology-heading" className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.01em] leading-[1.05] mb-6 text-white max-w-4xl">
              Proprietary Platforms
            </motion.h2>
            <motion.div variants={itemVariants} className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-amber-500/35 to-transparent mb-6" />
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 max-w-3xl leading-[1.6] font-light">
              Our field operations are powered by internally developed autonomous systems. These platforms are not currently available for external sale.
            </motion.p>
          </motion.div>

          {/* Technology Grid - Terminal Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTechnologyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625]"
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-6 py-3 border-b border-amber-500/15">
              <div className="w-2 h-2 rounded-full bg-red-500/60" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
              <div className="w-2 h-2 rounded-full bg-green-500/60" />
              <span className="ml-3 text-[10px] font-mono text-gray-600 uppercase tracking-wider">internal systems registry</span>
            </div>

            {/* Corner markers */}
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-amber-500/30" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-amber-500/30" />

            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {[
                  {
                    title: "Scout AUV",
                    description: "Autonomous underwater vehicle. Currently in development.",
                    status: "DEV"
                  },
                  {
                    title: "Orbit",
                    description: "Mission planning and data delivery platform. Used internally.",
                    status: "INTERNAL"
                  },
                  {
                    title: "Swarm Architecture",
                    description: "Multi-vehicle coordination system. Internal research program.",
                    status: "R&D"
                  }
                ].map((item) => (
                  <div key={item.title}>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-xl md:text-2xl font-light text-white/90 tracking-tight">
                        {item.title}
                      </h3>
                      <span className="text-[9px] font-mono text-amber-500/60 border border-amber-500/20 px-1.5 py-0.5 tracking-wider">
                        {item.status}
                      </span>
                    </div>
                    <p className="text-base text-gray-400 leading-[1.6] font-light">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isTechnologyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            <p className="text-base text-gray-400 mb-4 font-light">
              Our ROV operations inform the design of our autonomous platforms.
            </p>
            <Link href="/products" className="text-sm text-amber-500/70 hover:text-amber-500 transition-colors font-light">
              Learn more about our technology →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Blackbox Callout */}
      <section
        ref={blackboxRef}
        className="relative py-20 md:py-32 px-4 border-t border-amber-500/15 bg-[#0a0e1a]"
        aria-labelledby="blackbox-heading"
      >
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(245,158,11,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245,158,11,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Glowing Orb */}
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />

        <div className="container-responsive max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isBlackboxInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block border border-amber-500/20 bg-black/30 px-4 py-2 mb-6">
              <div className="text-meta text-amber-500/70">
                FIELD EQUIPMENT
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* Content */}
              <div>
                <h2 id="blackbox-heading" className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.01em] leading-[1.05] mb-6 text-white max-w-4xl">
                  BlackBox
                </h2>
                <div className="h-px w-16 md:w-24 bg-gradient-to-r from-amber-500/35 to-transparent mb-6" />
                <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-[1.6] font-light mb-8">
                  Real-time speech-to-text transcription for maritime communications. Offline-first. Zero cloud dependency.
                </p>

                {/* Key Specs */}
                <div className="space-y-4 mb-8">
                  {[
                    { label: "Platform", value: "iOS 17+" },
                    { label: "Connectivity", value: "Hardware & wireless" },
                    { label: "Privacy", value: "100% local processing" }
                  ].map((spec) => (
                    <div key={spec.label} className="flex items-center gap-4">
                      <div className="text-sm font-mono text-amber-500/60 uppercase tracking-wider w-28 flex-shrink-0">
                        {spec.label}
                      </div>
                      <div className="text-sm text-gray-300 font-light">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/products/blackbox">
                    <Button className="bg-amber-500/12 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 px-8 py-5 text-base font-normal tracking-wide transition-all duration-200 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] min-h-[52px]">
                      View Blackbox
                    </Button>
                  </Link>
                  <Link href="/products/blackbox">
                    <Button
                      variant="outline"
                      className="border border-gray-700/40 text-white/70 hover:text-white hover:border-gray-500 px-8 py-5 text-base font-normal tracking-wide transition-all duration-200 min-h-[52px]"
                    >
                      Download on App Store
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Visual - Terminal Style */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="relative w-full h-full min-h-[300px] border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] flex items-center justify-center overflow-hidden">
                  {/* Corner markers */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-amber-500/40" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-amber-500/40" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-amber-500/40" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-amber-500/40" />

                  {/* Scan line */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                      className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"
                      animate={{ top: ['0%', '100%', '0%'] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                    />
                  </div>

                  <div className="text-center relative z-10">
                    <Radio className="w-12 h-12 text-amber-500/30 mx-auto mb-4" />
                    <div className="text-sm font-mono text-gray-600 uppercase tracking-wider mb-2">
                      Maritime Communications
                    </div>
                    <div className="flex items-center justify-center gap-2 text-[10px] font-mono">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-green-400/80">TRANSCRIBE ACTIVE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA - Operations Engagement */}
      <section className="relative py-20 md:py-32 px-4 border-t border-amber-500/10 bg-[#0a0e1a]" aria-labelledby="cta-heading">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(245,158,11,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245,158,11,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container-responsive max-w-5xl relative z-10"
        >
          <div className="relative border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-8 md:p-12 lg:p-16">
            {/* Corner markers */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber-500/40" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-amber-500/40" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-amber-500/40" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber-500/40" />

            {/* Scan line */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/15 to-transparent"
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            <div className="text-center relative z-10">
              <h2 id="cta-heading" className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[-0.01em] leading-[1.05] mb-6 md:mb-8 text-white/95">
                Contact Our Operations Team
              </h2>

              <p className="text-base md:text-lg text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto leading-[1.6] font-light">
                Discuss mission requirements, service capabilities, and deployment timelines.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-amber-500/12 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 px-8 md:px-10 py-5 md:py-6 text-base md:text-lg font-normal tracking-wide transition-all duration-200 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] min-h-[52px]">
                    Request Operations Brief
                  </Button>
                </Link>
                <Link href="/services" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto border border-gray-700/40 text-white/70 hover:text-white hover:border-gray-500 px-8 md:px-10 py-5 md:py-6 text-base md:text-lg font-normal tracking-wide transition-all duration-200 min-h-[52px]"
                  >
                    View All Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Cpu, Network, Database, Activity, Navigation } from "lucide-react"

export default function Home() {
  const heroRef = useRef(null)
  const systemsRef = useRef(null)
  const howItWorksRef = useRef(null)
  const whoItsForRef = useRef(null)
  const proofRef = useRef(null)
  
  const isHeroInView = useInView(heroRef, { once: true })
  const isSystemsInView = useInView(systemsRef, { once: true, margin: "-100px" })
  const isHowItWorksInView = useInView(howItWorksRef, { once: true, margin: "-100px" })
  const isWhoItsForInView = useInView(whoItsForRef, { once: true, margin: "-100px" })
  const isProofInView = useInView(proofRef, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      {/* Hero Section - Mission-Level Value Proposition */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 md:pt-0"
        aria-label="Mission statement"
      >
        {/* Technical Grid Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-100" />
        
        {/* Depth Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0f1625] to-[#1a2332]" />
        
        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container-responsive max-w-6xl"
        >
          {/* System Status Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 md:mb-12 px-4"
          >
            <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-[10px] md:text-xs text-amber-500/80 tracking-[0.2em] uppercase">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  <div className="absolute inset-0 w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping opacity-75" />
                </div>
                <span>SYSTEM OPERATIONAL</span>
              </div>
              <div className="h-px w-8 md:w-12 bg-amber-500/20" />
              <div className="text-gray-600">
                REF: MR-2024-001
              </div>
            </div>
          </motion.div>

          {/* Primary Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center mb-8 md:mb-12 px-4"
          >
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[-0.02em] leading-[0.95] mb-6">
              <span className="block text-white">MELON</span>
              <span className="block text-amber-500">ROBOTICS</span>
            </div>
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent mx-auto mb-6" />
            <div className="text-xl md:text-2xl lg:text-3xl font-light text-gray-300 max-w-4xl mx-auto leading-[1.4]">
              Systems for autonomous operations in extreme marine environments
            </div>
          </motion.h1>

          {/* Supporting Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-base md:text-lg text-gray-400 max-w-3xl mx-auto mb-12 md:mb-16 px-4 leading-[1.6] font-light"
          >
            Autonomous underwater vehicles, swarm intelligence, and command platforms engineered for defense, research, and industrial applications where failure is not an option.
          </motion.p>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <Button 
                className="w-full sm:w-auto bg-amber-500/12 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 px-8 md:px-10 py-5 md:py-6 text-base md:text-lg font-normal tracking-wide transition-all duration-200 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] backdrop-blur-sm min-h-[52px]"
                aria-label="Request mission brief"
              >
                Request Mission Brief
              </Button>
            </Link>
            <Link href="/products" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto border border-gray-700/50 text-gray-300 hover:text-white hover:border-gray-600 px-8 md:px-10 py-5 md:py-6 text-base md:text-lg font-normal tracking-wide transition-all duration-200 bg-black/20 hover:bg-black/30 backdrop-blur-sm min-h-[52px]"
                aria-label="Explore platforms"
              >
                Explore Platforms
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom Technical Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/25 to-transparent" />
      </section>

      {/* What Melon Builds - Systems Overview */}
      <section 
        ref={systemsRef}
        className="relative py-20 md:py-32 px-4 border-t border-amber-500/15 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625]"
        aria-labelledby="systems-heading"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-100" />
        
        <div className="container-responsive max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isSystemsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-16"
          >
            <div className="inline-block border border-amber-500/20 bg-black/30 px-4 py-2 mb-6">
              <div className="text-meta text-amber-500/70">
                SYSTEMS & PLATFORMS
              </div>
            </div>
            
            <h2 id="systems-heading" className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.01em] leading-[1.05] mb-6 text-white max-w-4xl">
              What Melon Builds
            </h2>
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-amber-500/35 to-transparent mb-6" />
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-[1.6] font-light">
              Integrated systems for autonomous underwater operations: Scout AUV, Orbit command platform, and swarm coordination capabilities.
            </p>
          </motion.div>

          {/* Systems Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Scout AUV",
                description: "Autonomous underwater vehicle with modular payloads, extreme depth capability, and swarm intelligence.",
                href: "/products/scout",
                icon: Navigation,
                spec: "Up to 1,000m depth"
              },
              {
                name: "Orbit Cloud",
                description: "Command, control, and intelligence platform for fleet operations, mission planning, and data delivery.",
                href: "/orbit",
                icon: Network,
                spec: "Multi-tenant architecture"
              },
              {
                name: "Fever Swarm",
                description: "Distributed coordination system enabling multi-vehicle missions with autonomous decision-making.",
                href: "/products",
                icon: Cpu,
                spec: "Unlimited scale"
              }
            ].map((system, index) => (
              <motion.div
                key={system.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isSystemsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={system.href} className="block h-full">
                  <div className="relative h-full border border-gray-800/40 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 md:p-8 transition-all duration-200 hover:border-amber-500/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] flex flex-col">
                    <div className="mb-6">
                      <div className="w-12 h-12 border border-gray-700/40 bg-black/30 flex items-center justify-center mb-4 group-hover:border-amber-500/40 group-hover:bg-amber-500/5 transition-all duration-200">
                        <system.icon className="w-6 h-6 text-amber-500/70 group-hover:text-amber-500 transition-colors" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-light mb-3 text-white tracking-tight">
                        {system.name}
                      </h3>
                      <div className="h-px w-12 md:w-16 bg-gradient-to-r from-amber-500/35 to-transparent mb-4" />
                    </div>
                    
                    <p className="text-base md:text-lg text-gray-300 mb-6 flex-grow leading-[1.6] font-light">
                      {system.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-gray-800/40 group-hover:border-amber-500/25 transition-colors">
                      <div className="text-sm text-gray-500 font-mono uppercase tracking-wider">
                        {system.spec}
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

      {/* How It Works - System Flow */}
      <section 
        ref={howItWorksRef}
        className="relative py-20 md:py-32 px-4 border-t border-amber-500/15 bg-[#0a0e1a]"
        aria-labelledby="how-it-works-heading"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-100" />
        
        <div className="container-responsive max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHowItWorksInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-16"
          >
            <div className="inline-block border border-amber-500/20 bg-black/30 px-4 py-2 mb-6">
              <div className="text-meta text-amber-500/70">
                SYSTEM ARCHITECTURE
              </div>
            </div>
            
            <h2 id="how-it-works-heading" className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.01em] leading-[1.05] mb-6 text-white max-w-4xl">
              How It Works
            </h2>
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-amber-500/35 to-transparent mb-6" />
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-[1.6] font-light">
              Integrated platform architecture enabling autonomous operations, real-time coordination, and mission-critical data delivery.
            </p>
          </motion.div>

          {/* System Flow */}
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHowItWorksInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-8 md:p-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {[
                  {
                    step: "01",
                    title: "Mission Planning",
                    description: "Define autonomous mission profiles, waypoints, and operational parameters through Orbit Cloud or onboard systems."
                  },
                  {
                    step: "02",
                    title: "Autonomous Execution",
                    description: "Scout AUVs execute missions independently with real-time sensor fusion, obstacle avoidance, and adaptive navigation."
                  },
                  {
                    step: "03",
                    title: "Data Delivery",
                    description: "Mission data streams to Orbit Cloud for processing, analysis, and delivery via secure APIs and pipelines."
                  }
                ].map((item, index) => (
                  <div key={item.step} className="relative">
                    {index < 2 && (
                      <div className="hidden md:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-transparent" style={{ width: 'calc(100% - 2rem)' }} />
                    )}
                    <div className="font-mono text-amber-500/60 text-sm mb-3 tracking-wider">
                      {item.step}
                    </div>
                    <h3 className="text-xl md:text-2xl font-light text-white/90 mb-4 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-base text-gray-400 leading-[1.6] font-light">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who It's For - Mission Applications */}
      <section 
        ref={whoItsForRef}
        className="relative py-20 md:py-32 px-4 border-t border-amber-500/15 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625]"
        aria-labelledby="who-its-for-heading"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-100" />
        
        <div className="container-responsive max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isWhoItsForInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-16"
          >
            <div className="inline-block border border-amber-500/20 bg-black/30 px-4 py-2 mb-6">
              <div className="text-meta text-amber-500/70">
                MISSION APPLICATIONS
              </div>
            </div>
            
            <h2 id="who-its-for-heading" className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.01em] leading-[1.05] mb-6 text-white max-w-4xl">
              Who It's For
            </h2>
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-amber-500/35 to-transparent mb-6" />
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-[1.6] font-light">
              Systems engineered for organizations operating in extreme environments where precision, reliability, and autonomy are mission-critical.
            </p>
          </motion.div>

          {/* Applications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Defense & Security",
                description: "Autonomous surveillance, mine countermeasures, and intelligence gathering operations in contested maritime environments.",
                icon: Shield,
                applications: ["Naval operations", "Coastal security", "Intelligence gathering"]
              },
              {
                title: "Scientific Research",
                description: "Oceanographic data collection, environmental monitoring, and deep-sea exploration for research institutions and agencies.",
                icon: Database,
                applications: ["Oceanography", "Marine biology", "Climate research"]
              },
              {
                title: "Industrial Operations",
                description: "Infrastructure inspection, pipeline monitoring, and subsea construction support for commercial and energy sectors.",
                icon: Activity,
                applications: ["Offshore energy", "Infrastructure", "Marine construction"]
              }
            ].map((application, index) => (
              <motion.div
                key={application.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isWhoItsForInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-gray-800/40 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 md:p-8"
              >
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

      {/* Proof of Seriousness - Architecture & Constraints */}
      <section 
        ref={proofRef}
        className="relative py-20 md:py-32 px-4 border-t border-amber-500/15 bg-[#0a0e1a]"
        aria-labelledby="proof-heading"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-100" />
        
        <div className="container-responsive max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isProofInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-16"
          >
            <div className="inline-block border border-amber-500/20 bg-black/30 px-4 py-2 mb-6">
              <div className="text-meta text-amber-500/70">
                SYSTEM SPECIFICATIONS
              </div>
            </div>
            
            <h2 id="proof-heading" className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.01em] leading-[1.05] mb-6 text-white max-w-4xl">
              Engineering Constraints
            </h2>
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-amber-500/35 to-transparent mb-6" />
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-[1.6] font-light">
              Systems designed to operate reliably in the world's most demanding environments with mission-critical performance requirements.
            </p>
          </motion.div>

          {/* Specifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                metric: "1,000m",
                label: "Maximum Operating Depth",
                description: "Pressure-rated for extreme depth operations"
              },
              {
                metric: "8-12h",
                label: "Autonomous Endurance",
                description: "Extended mission duration with intelligent power management"
              },
              {
                metric: "Unlimited",
                label: "Swarm Scale",
                description: "Tested coordination of 50+ vehicles, scalable architecture"
              },
              {
                metric: "MIL-SPEC",
                label: "Environmental Rating",
                description: "Designed for defense and industrial applications"
              }
            ].map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isProofInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-gray-800/40 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 md:p-8 text-center"
              >
                <div className="text-3xl md:text-4xl font-light text-amber-500/90 mb-3 font-mono">
                  {spec.metric}
                </div>
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-amber-500/35 to-transparent mx-auto mb-4" />
                <h3 className="text-sm font-mono text-amber-500/80 uppercase tracking-wider mb-3">
                  {spec.label}
                </h3>
                <p className="text-sm text-gray-400 leading-[1.6] font-light">
                  {spec.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clear Next Action - CTA Section */}
      <section className="relative py-20 md:py-32 px-4 border-t border-amber-500/10 bg-[#0a0e1a]" aria-labelledby="cta-heading">
        <div className="absolute inset-0 bg-grid-pattern opacity-100" />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container-responsive max-w-5xl relative z-10"
        >
          <div className="relative border border-gray-800/30 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-8 md:p-12 lg:p-16">
            <div className="text-center relative z-10">
              <h2 id="cta-heading" className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[-0.01em] leading-[1.05] mb-6 md:mb-8 text-white/95">
                Ready to Deploy?
              </h2>
              
              <p className="text-base md:text-lg text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto leading-[1.6] font-light">
                Contact our systems team to discuss mission requirements, platform capabilities, and deployment options.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-amber-500/12 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 px-8 md:px-10 py-5 md:py-6 text-base md:text-lg font-normal tracking-wide transition-all duration-200 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] min-h-[52px]">
                    Contact Systems Team
                  </Button>
                </Link>
                <Link href="/products" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto border border-gray-700/40 text-gray-400 hover:text-white hover:border-gray-500 px-8 md:px-10 py-5 md:py-6 text-base md:text-lg font-normal tracking-wide transition-all duration-200 min-h-[52px]"
                  >
                    Explore Scout Platform
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

"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { services } from "@/lib/data/services"
import { Button } from "@/components/ui/button"
import { Video, Box as Cube, Scan, Waves as WavesIcon, Activity, Database, Brain, Code, Shield, FileText, GraduationCap as Graduation, Scale, Award, Clock, Users, CheckCircle2 } from "lucide-react"
import { ServicesOverviewHero } from "@/components/services-overview-hero"

export default function ServicesPage() {
  const iconMap: { [key: string]: React.ReactNode } = {
    Video: <Video className="w-6 h-6 text-amber-500" />,
    Cube: <Cube className="w-6 h-6 text-amber-500" />,
    Scan: <Scan className="w-6 h-6 text-amber-500" />,
    Waves: <WavesIcon className="w-6 h-6 text-amber-500" />,
    Activity: <Activity className="w-6 h-6 text-amber-500" />,
    Database: <Database className="w-6 h-6 text-amber-500" />,
    Brain: <Brain className="w-6 h-6 text-amber-500" />,
    Code: <Code className="w-6 h-6 text-amber-500" />,
    Shield: <Shield className="w-6 h-6 text-amber-500" />,
    FileText: <FileText className="w-6 h-6 text-amber-500" />,
    Graduation: <Graduation className="w-6 h-6 text-amber-500" />,
    Scale: <Scale className="w-6 h-6 text-amber-500" />,
  }

  const capabilities = [
    { icon: Clock, label: "24/7 Operations", value: "Global support" },
    { icon: Shield, label: "ITAR Compliant", value: "Defense ready" },
    { icon: Award, label: "ISO Certified", value: "Quality assured" },
    { icon: Users, label: "Expert Teams", value: "15+ years experience" },
  ]

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      {/* Hero Section - Industrial Service Catalog */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
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
        
        <div className="container-responsive relative z-10 max-w-7xl">
          {/* Technical Status Bar - DARPA Style */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-16"
          >
            <div className="flex flex-col items-center gap-4">
              {/* Primary Status */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 font-mono text-[10px] text-amber-500/80 tracking-[0.25em] uppercase">
                  <div className="relative">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                    <div className="absolute inset-0 w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping opacity-75" />
                  </div>
                  <span>SERVICE MODULES</span>
                </div>
                <div className="h-px w-12 bg-amber-500/20" />
                <div className="font-mono text-[10px] text-gray-600">
                  REF: MR-SVC-2024 | REV: B.2
                </div>
              </div>
              
              {/* Technical Readout */}
              <div className="flex items-center gap-6 font-mono text-[9px] text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-gray-700">STATUS:</span>
                  <span className="text-amber-500/80">OPERATIONAL</span>
                </div>
                <div className="w-px h-3 bg-gray-800" />
                <div className="flex items-center gap-2">
                  <span className="text-gray-700">AVAILABILITY:</span>
                  <span className="text-amber-500/80">24/7</span>
                </div>
                <div className="w-px h-3 bg-gray-800" />
                <div className="flex items-center gap-2">
                  <span className="text-gray-700">CLASS:</span>
                  <span className="text-amber-500/80">MIL-SPEC</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center mb-8 md:mb-12"
          >
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.95] mb-4">
              <span className="block text-white/90">Professional</span>
              <span className="block text-amber-500/90 font-normal">Subsea Operations</span>
            </div>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="font-mono text-[10px] text-gray-600 tracking-[0.2em] uppercase">
                ENGINEERED FOR MARINE ENVIRONMENTS
              </div>
              <div className="h-px w-8 bg-gray-800" />
              <div className="font-mono text-[10px] text-gray-600">
                MAX DEPTH: 6000m | CERT: ISO 9001
              </div>
            </div>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-center text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light mb-16 md:mb-20"
          >
            Comprehensive inspection, mapping, data intelligence, and safety standards services for <span className="text-amber-500/80 font-normal">defense, government, and commercial sectors</span> operating in marine environments.
          </motion.p>

          {/* Capability Indicators - Technical Specs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto"
          >
            {capabilities.map((cap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="relative border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 md:p-8 text-center"
              >
                {/* Technical Drawing Corner */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-amber-500/10" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-amber-500/10" />
                
                <cap.icon className="w-8 h-8 md:w-10 md:h-10 text-amber-500/60 mx-auto mb-4" />
                <div className="text-sm font-light text-white/90 mb-2">{cap.label}</div>
                <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider font-mono">{cap.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Technical Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      </section>

      {/* Services Grid - Industrial Service Modules */}
      <section className="py-32 md:py-40 px-4">
        <div className="container-responsive max-w-7xl">
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
              <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">SERVICE PORTFOLIO</div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 text-white/90">
              Operational<br />Capabilities
            </h2>
            <p className="text-base md:text-lg text-gray-500 font-light max-w-xl leading-relaxed">
              End-to-end subsea services delivered with precision, reliability, and actionable intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/services/${service.id}`} className="block h-full">
                  <div className="relative h-full border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-8 transition-all duration-500 hover:border-amber-500/30 hover:shadow-[0_0_40px_rgba(245,158,11,0.1)]">
                    {/* Technical Drawing Corners */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Service Module Number - DARPA Style */}
                    <div className="mb-6 flex items-center justify-between">
                      <div className="font-mono text-[9px] text-gray-600">
                        MODULE: MR-SVC-{service.id.toUpperCase().replace('-', '')}
                </div>
                      <div className="font-mono text-[9px] text-amber-500/60">
                        REV: B.1
                </div>
                </div>

                    {/* Icon - Industrial Style */}
                    <div className="mb-8">
                      <div className="w-16 h-16 border border-gray-700/50 bg-black/40 flex items-center justify-center group-hover:border-amber-500/30 transition-colors duration-500">
                      {iconMap[service.capabilities[0]?.icon || 'Shield']}
                    </div>
                  </div>

                    {/* Category Badge */}
                    <div className="mb-6">
                      <div className="inline-block bg-black/60 border border-gray-700/50 px-3 py-1">
                        <div className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">
                          {service.category}
                        </div>
                      </div>
                  </div>

                  {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-light mb-4 text-white/90 tracking-tight">
                    {service.name}
                  </h3>
                    <div className="h-px w-12 bg-amber-500/30 mb-6" />

                    {/* Description */}
                    <p className="text-sm md:text-base text-gray-400 mb-8 leading-relaxed font-light">
                    {service.tagline}
                  </p>

                    {/* Key Capabilities Preview - DARPA Style */}
                    <div className="space-y-2.5 mb-8">
                    {service.capabilities.slice(0, 3).map((cap, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3"
                        >
                          <div className="mt-2">
                            <div className="w-1 h-1 bg-amber-500/60" />
                          </div>
                          <div className="flex-1">
                            <span className="text-xs md:text-sm text-gray-500 leading-relaxed font-mono">{cap.title}</span>
                          </div>
                          <div className="font-mono text-[8px] text-gray-700">
                            {String(idx + 1).padStart(2, '0')}
                          </div>
                      </div>
                    ))}
                  </div>

                    {/* Technical Readout - DARPA Style */}
                    <div className="pt-6 border-t border-gray-800/50">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-mono text-[9px] text-gray-600 uppercase tracking-wider">
                          View Technical Details
                        </div>
                        <div className="text-amber-500/60 group-hover:text-amber-500 transition-colors font-mono text-xs">
                          →
                        </div>
                      </div>
                      <div className="font-mono text-[8px] text-gray-700 mt-1">
                        DOC: MR-SVC-{service.id.toUpperCase().replace('-', '')}-TS | PAGES: 18
                      </div>
                    </div>
                  </div>
                  </Link>
              </motion.div>
            ))}
          </div>

          {/* View All - Industrial Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-16 md:mt-20"
          >
            <Link href="/services">
              <Button
                variant="outline"
                className="border border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-600 px-12 py-8 text-sm font-mono tracking-wider uppercase transition-all duration-300 bg-black/20 backdrop-blur-sm"
                aria-label="Explore all services"
              >
                Explore All Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition - Industrial Specs */}
      <section className="py-32 md:py-40 px-4 border-t border-amber-500/10 bg-gradient-to-b from-[#0a0e1a] to-black">
        <div className="container-responsive max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16"
          >
            {[
              { icon: Shield, title: "Mission-Critical Reliability", desc: "Proven track record supporting defense and government operations with 99.9% uptime and rapid response capabilities.", spec: "UPTIME: 99.9% | MTBF: 8760h" },
              { icon: Award, title: "Industry-Leading Expertise", desc: "Teams with 15+ years of operational experience in subsea inspection, mapping, and marine technology.", spec: "EXP: 15+ YRS | CERT: ISO 9001" },
              { icon: Activity, title: "Scalable Solutions", desc: "From single inspections to enterprise subscriptions, we scale to meet operational requirements at any level.", spec: "SCALE: 1-1000+ | RESPONSE: <24h" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                {/* Reference Number */}
                <div className="mb-6">
                  <div className="font-mono text-[9px] text-gray-700">
                    SPEC: {String(index + 1).padStart(2, '0')} | REF: MR-VP-{String(index + 1).padStart(3, '0')}
              </div>
            </div>

                <div className="inline-flex items-center justify-center w-16 h-16 border border-gray-700/50 bg-black/40 mb-8">
                  <item.icon className="w-8 h-8 text-amber-500/60" />
              </div>
                <h3 className="text-xl md:text-2xl font-light mb-4 text-white/90 tracking-tight">{item.title}</h3>
                <div className="h-px w-12 bg-amber-500/30 mx-auto mb-4" />
                
                {/* Technical Spec */}
                <div className="mb-6">
                  <div className="font-mono text-[9px] text-amber-500/70">
                    {item.spec}
            </div>
              </div>
                
                <p className="text-sm md:text-base text-gray-500 leading-relaxed font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enterprise CTA - Industrial Contact Module */}
      <section className="py-32 md:py-40 px-4 border-t border-amber-500/10 bg-gradient-to-b from-[#0a0e1a] to-black">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="container-responsive max-w-5xl"
        >
          <div className="relative border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-12 md:p-16 lg:p-20">
            {/* Technical Drawing Corners */}
            <div className="absolute top-0 left-0 w-24 h-24 border-t border-l border-amber-500/20" />
            <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-amber-500/20" />
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-amber-500/20" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b border-r border-amber-500/20" />

            <div className="text-center relative z-10">
              <div className="mb-8">
                <Database className="w-12 h-12 md:w-14 md:h-14 text-amber-500/60 mx-auto mb-6" />
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="font-mono text-[10px] text-gray-700">
                    REF: MR-CS-002
                  </div>
                  <div className="h-px w-8 bg-gray-800" />
                  <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">
                    CUSTOM SOLUTIONS
                  </div>
                  <div className="h-px w-8 bg-gray-800" />
                  <div className="font-mono text-[10px] text-gray-700">
                    REV: B.1
                  </div>
                </div>
                <div className="h-px w-24 mx-auto bg-amber-500/20" />
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8 text-white/90 leading-tight">
                Complex Subsea<br />Challenges
            </h2>
              
              <p className="text-base md:text-lg text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed font-light">
              We design and execute tailored service packages combining inspection, mapping, environmental data, and safety standards for your specific operational requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                  <Button className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 px-12 py-8 text-sm font-mono tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] backdrop-blur-sm">
                  Consult with Experts
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  variant="outline"
                    className="border border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-600 px-12 py-8 text-sm font-mono tracking-wider uppercase transition-all duration-300 bg-black/20 backdrop-blur-sm"
                >
                  View Technology
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

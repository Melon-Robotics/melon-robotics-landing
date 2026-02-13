"use client"

import { motion } from "framer-motion"
import { notFound } from "next/navigation"
import { getService } from "@/lib/data/services"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { use } from "react"
import { SubscribeButton } from "@/components/payments/subscribe-button"

// Bespoke heroes & demos per service
import { ROVInspectionHero } from "@/components/rov-inspection-hero"
import { ROVInspectionDemos } from "@/components/rov-inspection-demos"
import { PhotogrammetryHero } from "@/components/photogrammetry-hero"
import { PhotogrammetryDemos } from "@/components/photogrammetry-demos"
import { PhotogrammetryExplainer } from "@/components/photogrammetry-explainer"
import { OceanDataCommandCenter } from "@/components/ocean-data-command-center"
import { OceanDataAPIDocs } from "@/components/ocean-data-api-docs"
import { OceanDataPricing } from "@/components/ocean-data-pricing"
import { SafetyStandardsHero } from "@/components/safety-standards-hero"
import { SafetyStandardsCommandCenter } from "@/components/safety-standards-command-center"
import { SafetyStandardsExplainer } from "@/components/safety-standards-explainer"

interface PageProps {
  params: Promise<{ id: string }>
}

export default function ServicePage({ params }: PageProps) {
  const { id } = use(params)
  const service = getService(id)

  if (!service) {
    notFound()
  }

  // Bespoke experiences
  if (id === 'rov-inspection') {
    return (
      <div className="min-h-screen bg-[#0a0e1a] text-white overflow-hidden">
        <main>
          <ROVInspectionHero />
          <ROVInspectionDemos />
        </main>
      </div>
    )
  }

  if (id === 'photogrammetry') {
    return (
      <div className="min-h-screen bg-[#0a0e1a] text-white overflow-hidden">
        <main>
          <PhotogrammetryHero />
          <PhotogrammetryDemos />
          <PhotogrammetryExplainer />
        </main>
      </div>
    )
  }

  if (id === 'ocean-data') {
    return (
      <div className="min-h-screen bg-[#0a0e1a] text-white overflow-hidden">
        <main>
          <OceanDataCommandCenter />
          <OceanDataAPIDocs />
          <OceanDataPricing />
        </main>
      </div>
    )
  }

  if (id === 'safety-standards') {
    return (
      <div className="min-h-screen bg-[#0a0e1a] text-white overflow-hidden">
        <main>
          <SafetyStandardsHero />
          <SafetyStandardsCommandCenter />
          <SafetyStandardsExplainer />
        </main>
      </div>
    )
  }

  // Fallback to existing generic layout if any other service appears
  const iconMap: { [key: string]: React.ReactNode } = {
    Video: <div className="w-8 h-8 border border-amber-500/30 flex items-center justify-center text-xs font-mono text-amber-500">VID</div>,
    Cube: <div className="w-8 h-8 border border-amber-500/30 flex items-center justify-center text-xs font-mono text-amber-500">3D</div>,
    Scan: <div className="w-8 h-8 border border-amber-500/30 flex items-center justify-center text-xs font-mono text-amber-500">SCN</div>,
    Waves: <div className="w-8 h-8 border border-amber-500/30 flex items-center justify-center text-xs font-mono text-amber-500">WVS</div>,
    Activity: <div className="w-8 h-8 border border-amber-500/30 flex items-center justify-center text-xs font-mono text-amber-500">MON</div>,
    Database: <div className="w-8 h-8 border border-amber-500/30 flex items-center justify-center text-xs font-mono text-amber-500">DB</div>,
    Brain: <div className="w-8 h-8 border border-amber-500/30 flex items-center justify-center text-xs font-mono text-amber-500">AI</div>,
    Code: <div className="w-8 h-8 border border-amber-500/30 flex items-center justify-center text-xs font-mono text-amber-500">API</div>,
    Shield: <div className="w-8 h-8 border border-amber-500/30 flex items-center justify-center text-xs font-mono text-amber-500">SHD</div>,
    FileText: <div className="w-8 h-8 border border-amber-500/30 flex items-center justify-center text-xs font-mono text-amber-500">DOC</div>,
    Graduation: <div className="w-8 h-8 border border-amber-500/30 flex items-center justify-center text-xs font-mono text-amber-500">EDU</div>,
    Scale: <div className="w-8 h-8 border border-amber-500/30 flex items-center justify-center text-xs font-mono text-amber-500">CMP</div>,
  }

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white pt-20">
      {/* Hero Section - DARPA Style */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden border-b border-amber-500/10" aria-labelledby="service-heading">
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
        
        <div className="container-responsive relative z-10 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Technical Status Bar */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center gap-3 mb-8"
            >
              <div className="flex items-center gap-2 font-mono text-[10px] text-amber-500/80 tracking-[0.25em] uppercase">
                <div className="relative">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  <div className="absolute inset-0 w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping opacity-75" />
                </div>
                <span>SERVICE MODULE</span>
              </div>
              <div className="h-px w-12 bg-amber-500/20" />
              <div className="font-mono text-[10px] text-gray-600">
                MODULE: MR-SVC-{service.id.toUpperCase().replace('-', '')} | REV: B.1
              </div>
            </motion.div>

            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block bg-black/60 border border-gray-700/50 px-4 py-2 mb-8"
            >
              <div className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">
                {service.category}
            </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              id="service-heading"
              className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight leading-[0.95]"
            >
              <span className="block text-white/90">{service.name}</span>
            </motion.h1>
            <div className="h-px w-24 bg-amber-500/30 mx-auto mb-6" />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-amber-500/80 mb-6 font-light leading-snug"
            >
              {service.tagline}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto font-light"
            >
              {service.description}
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom Technical Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      </section>

      {/* Capabilities - DARPA Technical Specs */}
      <section className="py-32 md:py-40 px-4 border-b border-amber-500/10" aria-labelledby="capabilities-heading">
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
              <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">CAPABILITIES</div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            </div>
            <h2 id="capabilities-heading" className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 text-white/90">
              Core<br />Capabilities
            </h2>
            <p className="text-base md:text-lg text-gray-500 font-light max-w-xl leading-relaxed">
              Technical specifications and operational parameters for service delivery.
            </p>
          </motion.div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {service.capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-8 transition-all duration-500 hover:border-amber-500/30 hover:shadow-[0_0_40px_rgba(245,158,11,0.1)]">
                  {/* Technical Drawing Corners */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Reference Number */}
                  <div className="absolute top-4 right-4">
                    <div className="font-mono text-[8px] text-gray-700">
                      REF: {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 border border-gray-700/50 bg-black/40 flex items-center justify-center group-hover:border-amber-500/30 transition-colors duration-500">
                      {iconMap[capability.icon]}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-light text-white/90 mb-4 tracking-tight pr-12">
                    {capability.title}
                  </h3>
                  <div className="h-px w-12 bg-amber-500/30 mb-6" />

                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed font-light">
                    {capability.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases & Industries - DARPA Technical Lists */}
      <section className="py-32 md:py-40 px-4 border-b border-amber-500/10 bg-gradient-to-b from-[#0a0e1a] to-black" aria-labelledby="use-cases-heading">
        <div className="container-responsive max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            {/* Use Cases */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
                  <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">USE CASES</div>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
                </div>
                <h3 id="use-cases-heading" className="text-3xl md:text-4xl font-light mb-8 tracking-tight text-white/90">
                  Applications
                </h3>
              </div>
              <ul className="space-y-4">
                {service.useCases.map((useCase, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 mt-2">
                      <div className="w-1.5 h-1.5 bg-amber-500/60" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <span className="text-base md:text-lg text-gray-300 leading-relaxed font-light">{useCase}</span>
                        <div className="font-mono text-[8px] text-gray-700 flex-shrink-0">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Industries */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
                  <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">INDUSTRIES</div>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
                </div>
                <h3 className="text-3xl md:text-4xl font-light mb-8 tracking-tight text-white/90">
                  Industries Served
                </h3>
              </div>
              <ul className="space-y-4">
                {service.industries.map((industry, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.25 + index * 0.05 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 mt-2">
                      <div className="w-1.5 h-1.5 bg-amber-500/60" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <span className="text-base md:text-lg text-gray-300 leading-relaxed font-light">{industry}</span>
                        <div className="font-mono text-[8px] text-gray-700 flex-shrink-0">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deliverables - DARPA Technical Grid */}
      <section className="py-32 md:py-40 px-4 border-b border-amber-500/10" aria-labelledby="deliverables-heading">
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
              <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">DELIVERABLES</div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            </div>
            <h2 id="deliverables-heading" className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 text-white/90">
              Deliverables
            </h2>
            <p className="text-base md:text-lg text-gray-500 font-light max-w-xl leading-relaxed">
              Technical documentation and data packages included with service delivery.
            </p>
          </motion.div>

          {/* Deliverables Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {service.deliverables.map((deliverable, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative"
              >
                <div className="relative border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 transition-all duration-500 hover:border-amber-500/30 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)]">
                  {/* Technical Drawing Corner */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Reference Number */}
                  <div className="absolute top-3 right-3">
                    <div className="font-mono text-[8px] text-gray-700">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pr-8">
                    <div className="text-sm md:text-base text-white/90 font-light leading-relaxed">
                      {deliverable}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROV Services - DARPA Technical Modules */}
      {service.rovServices && service.rovServices.length > 0 && (
        <section className="py-32 md:py-40 px-4 border-b border-amber-500/10 bg-gradient-to-b from-[#0a0e1a] to-black">
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
                <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">SERVICE MODULES</div>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 text-white/90">
                ROV Inspection<br />Services
              </h2>
              <p className="text-base md:text-lg text-gray-500 font-light max-w-xl leading-relaxed">
                Comprehensive underwater inspection capabilities using LBV-150 ROV systems.
              </p>
            </motion.div>

            {/* ROV Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {service.rovServices.map((rovService, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-8 transition-all duration-500 hover:border-amber-500/30 hover:shadow-[0_0_40px_rgba(245,158,11,0.1)]">
                    {/* Technical Drawing Corners */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Service Reference */}
                    <div className="mb-6 flex items-center justify-between">
                      <div className="font-mono text-[9px] text-gray-600">
                        MODULE: {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="font-mono text-[9px] text-amber-500/60">
                        REV: A.1
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-light text-white/90 mb-4 tracking-tight">
                      {rovService.name}
                    </h3>
                    <div className="h-px w-12 bg-amber-500/30 mb-6" />

                    {/* Description */}
                    <p className="text-sm md:text-base text-gray-400 mb-8 leading-relaxed font-light">
                      {rovService.description}
                    </p>
                    
                    {/* Deliverables */}
                    <div className="mb-6">
                      <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-3">
                        DELIVERABLES
                      </div>
                      <ul className="space-y-2">
                        {rovService.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
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
                        {rovService.equipment.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="mt-2">
                              <div className="w-1 h-1 bg-amber-500/40" />
                            </div>
                            <span className="text-xs md:text-sm text-gray-500 leading-relaxed font-mono">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Subscription Tiers - DARPA Technical Packages */}
      {service.subscriptionTiers && service.subscriptionTiers.length > 0 && (
        <section className="py-32 md:py-40 px-4 border-b border-amber-500/10">
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
                <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">MELON SHIELD</div>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 text-white/90">
                Subscription<br />Packages
              </h2>
              <p className="text-base md:text-lg text-gray-500 font-light max-w-xl leading-relaxed">
                Annual service programs designed for predictable maintenance schedules and cost optimization. <span className="text-amber-500/90 font-medium">Subscribe to secure priority scheduling and preferred pricing.</span>
              </p>
            </motion.div>

            {/* Subscription Tiers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {service.subscriptionTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group relative border ${
                    tier.name === 'Gold'
                      ? 'border-amber-500/40 bg-amber-500/5'
                      : tier.name === 'Enterprise / Municipal'
                        ? 'border-amber-500/30 bg-black/60'
                        : 'border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625]'
                  } p-8 transition-all duration-500 hover:border-amber-500/40 hover:shadow-[0_0_40px_rgba(245,158,11,0.1)]`}
                >
                  {/* Technical Drawing Corners */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Recommended Badge */}
                  {tier.name === 'Gold' && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-500 text-black text-[10px] font-mono tracking-wider uppercase">
                      RECOMMENDED
                    </div>
                  )}
                  
                  {/* Tier Reference */}
                  <div className="mb-6">
                    <div className="font-mono text-[9px] text-gray-600 mb-2">
                      TIER: {tier.name.toUpperCase()} | REF: MR-SUB-{String(index + 1).padStart(3, '0')}
                    </div>
                  </div>
                  
                  {/* Title & Price */}
                  <div className="mb-8">
                    <h3 className="text-2xl md:text-3xl font-light text-white/90 mb-3 tracking-tight">{tier.name}</h3>
                    <div className="h-px w-12 bg-amber-500/30 mb-4" />
                    <div className="text-3xl md:text-4xl font-light text-amber-500/90 mb-2 font-mono">{tier.price}</div>
                    {tier.name !== 'Enterprise / Municipal' && (
                      <div className="font-mono text-[9px] text-gray-600">ANNUAL SUBSCRIPTION</div>
                    )}
                  </div>

                  {/* Included Services */}
                  <div className="mb-6">
                    <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-3">
                      INCLUDED SERVICES
                    </div>
                      <ul className="space-y-2">
                        {tier.includedServices.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="mt-2">
                            <div className="w-1 h-1 bg-amber-500/60" />
                          </div>
                          <span className="text-xs md:text-sm text-gray-400 leading-relaxed font-light">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  {/* Deliverables */}
                  <div className="mb-6">
                    <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-3">
                      DELIVERABLES
                    </div>
                    <ul className="space-y-2">
                        {tier.deliverablesPerYear.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="mt-2">
                            <div className="w-1 h-1 bg-amber-500/40" />
                          </div>
                          <span className="text-xs text-gray-500 leading-relaxed font-light">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  {/* Equipment */}
                  <div className="mb-8">
                    <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-3">
                      EQUIPMENT PACKAGE
                    </div>
                    <ul className="space-y-2">
                        {tier.equipment.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="mt-2">
                            <div className="w-1 h-1 bg-amber-500/30" />
                          </div>
                          <span className="text-xs text-gray-600 leading-relaxed font-mono">{item}</span>
                          </li>
                        ))}
                      </ul>
                  </div>

                  {/* CTA Button */}
                  <SubscribeButton
                    serviceId={service.id}
                    tierName={tier.name}
                    tierPrice={tier.price}
                    className={`w-full ${
                      tier.name === 'Gold'
                        ? 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:border-amber-500/50'
                        : 'border border-gray-700/50 text-white/60 hover:text-white hover:border-gray-600 bg-black/20'
                    } py-7 text-sm font-mono tracking-wider uppercase transition-all duration-300 backdrop-blur-sm`}
                    variant="outline"
                    isRecommended={tier.name === 'Gold'}
                    isEnterprise={tier.name === 'Enterprise / Municipal'}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA - DARPA Contact Module */}
      <section className="py-32 md:py-40 px-4 border-t border-amber-500/10" aria-labelledby="service-cta-heading">
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
              {/* Section Label */}
              <div className="mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="font-mono text-[10px] text-gray-700">
                    REF: MR-CT-{service.id.toUpperCase().replace('-', '').slice(0, 3)}
                  </div>
                  <div className="h-px w-8 bg-gray-800" />
                  <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">
                    INITIATE CONTACT
                  </div>
                  <div className="h-px w-8 bg-gray-800" />
                  <div className="font-mono text-[10px] text-gray-700">
                    REV: A.1
                  </div>
                </div>
                <div className="h-px w-24 mx-auto bg-amber-500/20" />
              </div>

              <h2 id="service-cta-heading" className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8 text-white/90 leading-tight">
                Ready to Get<br />Started?
              </h2>
              <p className="text-base md:text-lg text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed font-light">
              Contact our team to discuss your project requirements and scope of work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 px-12 py-8 text-sm font-mono tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] backdrop-blur-sm">
                  Request Quote
                </Button>
              </Link>
                <Link href="/services" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                    className="w-full sm:w-auto border border-gray-700/50 text-white/60 hover:text-white hover:border-gray-600 px-12 py-8 text-sm font-mono tracking-wider uppercase transition-all duration-300 bg-black/20 backdrop-blur-sm"
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



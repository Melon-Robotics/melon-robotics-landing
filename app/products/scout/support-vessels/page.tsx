"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Radio, Satellite, Zap, Navigation } from 'lucide-react'
import Link from 'next/link'

export default function SupportVesselsPage() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 px-4 border-b border-amber-500/10">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(245,158,11,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245,158,11,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Technical Frame Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
          <div className="absolute top-0 left-0 h-16 w-px bg-gradient-to-b from-amber-500/30 to-transparent" />
          <div className="absolute top-0 right-0 h-16 w-px bg-gradient-to-b from-amber-500/30 to-transparent" />
          <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-amber-500/20" />
          <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-amber-500/20" />
        </div>

        <div className="container-responsive max-w-7xl relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <Link href="/products/scout">
              <Button
                variant="outline"
                className="border-amber-500/30 text-amber-500/80 hover:text-amber-500 hover:border-amber-500/50 font-mono text-[10px] sm:text-xs tracking-wider uppercase py-2 px-3 sm:py-2 sm:px-4"
              >
                <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                Back to Scout
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
              <div className="font-mono text-[10px] sm:text-xs text-amber-500/60 tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                SUPPORT PLATFORM
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 text-white/90 tracking-tight">
              Scout Support Vessels
            </h1>
            <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-amber-500/40 to-transparent mb-4 sm:mb-6" />
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 md:mb-12 leading-relaxed font-light max-w-3xl">
              Mobile surface platforms that deploy, recover, recharge, and relay data for Scout AUV operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="relative py-4 sm:py-6 md:py-8 px-4 border-b border-amber-500/10 bg-[#0f1625]/50">
        <div className="container-responsive max-w-7xl relative z-10">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            <a href="#overview" className="text-[10px] sm:text-xs font-mono text-amber-500/70 hover:text-amber-500 active:text-amber-500 px-2 sm:px-3 py-1.5 sm:py-2 border border-amber-500/20 hover:border-amber-500/40 active:border-amber-500/50 transition-colors uppercase tracking-wider touch-manipulation">
              Overview
            </a>
            <a href="#capabilities" className="text-[10px] sm:text-xs font-mono text-amber-500/70 hover:text-amber-500 active:text-amber-500 px-2 sm:px-3 py-1.5 sm:py-2 border border-amber-500/20 hover:border-amber-500/40 active:border-amber-500/50 transition-colors uppercase tracking-wider touch-manipulation">
              Capabilities
            </a>
            <a href="#integration" className="text-[10px] sm:text-xs font-mono text-amber-500/70 hover:text-amber-500 active:text-amber-500 px-2 sm:px-3 py-1.5 sm:py-2 border border-amber-500/20 hover:border-amber-500/40 active:border-amber-500/50 transition-colors uppercase tracking-wider touch-manipulation">
              Integration
            </a>
            <a href="#communication" className="text-[10px] sm:text-xs font-mono text-amber-500/70 hover:text-amber-500 active:text-amber-500 px-2 sm:px-3 py-1.5 sm:py-2 border border-amber-500/20 hover:border-amber-500/40 active:border-amber-500/50 transition-colors uppercase tracking-wider touch-manipulation">
              Communication
            </a>
            <a href="#deployment" className="text-[10px] sm:text-xs font-mono text-amber-500/70 hover:text-amber-500 active:text-amber-500 px-2 sm:px-3 py-1.5 sm:py-2 border border-amber-500/20 hover:border-amber-500/40 active:border-amber-500/50 transition-colors uppercase tracking-wider touch-manipulation">
              Deployment
            </a>
            <a href="#value" className="text-[10px] sm:text-xs font-mono text-amber-500/70 hover:text-amber-500 active:text-amber-500 px-2 sm:px-3 py-1.5 sm:py-2 border border-amber-500/20 hover:border-amber-500/40 active:border-amber-500/50 transition-colors uppercase tracking-wider touch-manipulation">
              Value
            </a>
          </div>
        </div>
      </section>

      {/* System Overview */}
      <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 px-4 border-b border-amber-500/10">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-10 md:mb-12"
          >
            <div className="inline-block border border-amber-500/30 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] px-2.5 sm:px-3 py-1 sm:py-1.5 mb-4 sm:mb-6 text-[10px] sm:text-xs md:text-sm font-mono text-amber-500 tracking-widest uppercase">
              SYSTEM OVERVIEW
            </div>
            <h2 id="overview" className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 sm:mb-8 text-white/90 tracking-tight scroll-mt-16 sm:scroll-mt-20">
              Platform Architecture
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-4 sm:p-5 md:p-6"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-light text-white/90 mb-3 sm:mb-4 font-mono uppercase tracking-wider text-xs sm:text-sm">
                What It Is
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                Support vessels are crewed or autonomous surface platforms designed to extend Scout operational range and endurance. They serve as mobile bases for launch, recovery, charging, and data relay operations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-4 sm:p-5 md:p-6"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-light text-white/90 mb-3 sm:mb-4 font-mono uppercase tracking-wider text-xs sm:text-sm">
                Operational Role
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                Support vessels solve the problem of limited Scout range and communication windows. They enable persistent operations in areas where direct shore-based control is impractical or where multiple Scout vehicles require coordinated support.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 px-4 border-b border-amber-500/10">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-block border border-amber-500/30 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] px-2.5 sm:px-3 py-1 sm:py-1.5 mb-4 sm:mb-6 text-[10px] sm:text-xs md:text-sm font-mono text-amber-500 tracking-widest uppercase">
              CORE CAPABILITIES
            </div>
            <h2 id="capabilities" className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 sm:mb-8 text-white/90 tracking-tight scroll-mt-16 sm:scroll-mt-20">
              Platform Functions
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {[
              'Mobile launch and recovery operations',
              'Scout docking and securement systems',
              'Onboard charging infrastructure',
              'Data relay to Orbit Cloud',
              'Human-in-the-loop supervision',
              'Multi-Scout coordination support',
              'Acoustic communication gateway',
              'RF and satellite connectivity',
              'Mission planning and execution oversight',
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-4 sm:p-5 md:p-6 hover:border-amber-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-500/60 mt-1.5 sm:mt-2 flex-shrink-0 rounded-full" />
                  <span className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                    {capability}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scout Integration */}
      <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 px-4 border-b border-amber-500/10">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-block border border-amber-500/30 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] px-2.5 sm:px-3 py-1 sm:py-1.5 mb-4 sm:mb-6 text-[10px] sm:text-xs md:text-sm font-mono text-amber-500 tracking-widest uppercase">
              SCOUT INTEGRATION
            </div>
            <h2 id="integration" className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 sm:mb-8 text-white/90 tracking-tight scroll-mt-16 sm:scroll-mt-20">
              Physical and Mission Interface
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 sm:space-y-6"
            >
              <div className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-4 sm:p-5 md:p-6">
                <h3 className="text-base sm:text-lg font-light text-white/90 mb-3 sm:mb-4 font-mono uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2">
                  <Navigation className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500/70" />
                  Physical Interface
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light mb-3 sm:mb-4">
                  Support vessels provide standardized docking interfaces compatible with all Scout tiers. Docking systems include secure capture mechanisms, power transfer connectors, and data link ports.
                </p>
                <ul className="space-y-1.5 sm:space-y-2">
                  <li className="flex items-start gap-1.5 sm:gap-2">
                    <div className="w-1 h-1 bg-amber-500/60 mt-1.5 sm:mt-2 flex-shrink-0 rounded-full" />
                    <span className="text-xs sm:text-sm text-gray-400 font-mono">Standardized docking collar</span>
                  </li>
                  <li className="flex items-start gap-1.5 sm:gap-2">
                    <div className="w-1 h-1 bg-amber-500/60 mt-1.5 sm:mt-2 flex-shrink-0 rounded-full" />
                    <span className="text-xs sm:text-sm text-gray-400 font-mono">Automated capture and release</span>
                  </li>
                  <li className="flex items-start gap-1.5 sm:gap-2">
                    <div className="w-1 h-1 bg-amber-500/60 mt-1.5 sm:mt-2 flex-shrink-0 rounded-full" />
                    <span className="text-xs sm:text-sm text-gray-400 font-mono">High-speed data offload</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 sm:space-y-6"
            >
              <div className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-4 sm:p-5 md:p-6">
                <h3 className="text-base sm:text-lg font-light text-white/90 mb-3 sm:mb-4 font-mono uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500/70" />
                  Mission Coordination
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light mb-3 sm:mb-4">
                  Vessels coordinate Scout missions through Orbit Cloud, managing launch sequences, recovery windows, and charging schedules. Human operators can supervise operations in real-time or delegate to autonomous coordination.
                </p>
                <ul className="space-y-1.5 sm:space-y-2">
                  <li className="flex items-start gap-1.5 sm:gap-2">
                    <div className="w-1 h-1 bg-amber-500/60 mt-1.5 sm:mt-2 flex-shrink-0 rounded-full" />
                    <span className="text-xs sm:text-sm text-gray-400 font-mono">Mission planning integration</span>
                  </li>
                  <li className="flex items-start gap-1.5 sm:gap-2">
                    <div className="w-1 h-1 bg-amber-500/60 mt-1.5 sm:mt-2 flex-shrink-0 rounded-full" />
                    <span className="text-xs sm:text-sm text-gray-400 font-mono">Recovery and charging automation</span>
                  </li>
                  <li className="flex items-start gap-1.5 sm:gap-2">
                    <div className="w-1 h-1 bg-amber-500/60 mt-1.5 sm:mt-2 flex-shrink-0 rounded-full" />
                    <span className="text-xs sm:text-sm text-gray-400 font-mono">Multi-Scout queue management</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Orbit Cloud Integration */}
      <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 px-4 border-b border-amber-500/10">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-block border border-amber-500/30 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] px-2.5 sm:px-3 py-1 sm:py-1.5 mb-4 sm:mb-6 text-[10px] sm:text-xs md:text-sm font-mono text-amber-500 tracking-widest uppercase">
              ORBIT CLOUD INTEGRATION
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 sm:mb-8 text-white/90 tracking-tight">
              Cloud Connectivity
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 max-w-5xl">
            {[
              {
                title: 'Telemetry',
                description: 'Continuous vessel position, status, and Scout inventory reporting to Orbit Cloud.',
              },
              {
                title: 'Command & Control',
                description: 'Remote mission directives, docking commands, and operational mode changes executed through Orbit Cloud interface.',
              },
              {
                title: 'Data Offload',
                description: 'High-bandwidth transfer of Scout mission data from vessel storage to Orbit Cloud via satellite or RF links.',
              },
              {
                title: 'Fleet Awareness',
                description: 'Real-time visibility into all Scout vehicles operating within vessel support radius, with coordinated mission planning.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-4 sm:p-5 md:p-6"
              >
                <h3 className="text-base sm:text-lg font-light text-white/90 mb-2 sm:mb-3 font-mono uppercase tracking-wider text-xs sm:text-sm">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Communication Architecture */}
      <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 px-4 border-b border-amber-500/10">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-block border border-amber-500/30 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] px-2.5 sm:px-3 py-1 sm:py-1.5 mb-4 sm:mb-6 text-[10px] sm:text-xs md:text-sm font-mono text-amber-500 tracking-widest uppercase">
              COMMUNICATION ARCHITECTURE
            </div>
            <h2 id="communication" className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 sm:mb-8 text-white/90 tracking-tight scroll-mt-16 sm:scroll-mt-20">
              Multi-Modal Connectivity
            </h2>
          </motion.div>

          <div className="space-y-4 sm:space-y-5 md:space-y-6 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-4 sm:p-5 md:p-6"
            >
              <h3 className="text-base sm:text-lg font-light text-white/90 mb-3 sm:mb-4 font-mono uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2">
                <Radio className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500/70" />
                Acoustic
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                Support vessels operate as BlueMesh acoustic gateways, relaying commands and telemetry between submerged Scout vehicles and surface communications. Vessels maintain acoustic positioning references for Scout navigation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-4 sm:p-5 md:p-6"
            >
              <h3 className="text-base sm:text-lg font-light text-white/90 mb-3 sm:mb-4 font-mono uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2">
                <Satellite className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500/70" />
                RF and Satellite
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                Vessels maintain persistent RF links to Orbit Cloud for real-time command and data transfer. Satellite connectivity enables operations beyond line-of-sight range, with automatic failover between communication modes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-4 sm:p-5 md:p-6"
            >
              <h3 className="text-base sm:text-lg font-light text-white/90 mb-3 sm:mb-4 font-mono uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2">
                <Radio className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500/70" />
                BlueMesh Role
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                Vessels function as surface nodes in the BlueMesh network, providing routing and gateway services between underwater Scout vehicles and terrestrial or satellite infrastructure. They maintain network topology awareness and optimize routing paths.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deployment & Operational Modes */}
      <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 px-4 border-b border-amber-500/10">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-block border border-amber-500/30 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] px-2.5 sm:px-3 py-1 sm:py-1.5 mb-4 sm:mb-6 text-[10px] sm:text-xs md:text-sm font-mono text-amber-500 tracking-widest uppercase">
              DEPLOYMENT & OPERATIONAL MODES
            </div>
            <h2 id="deployment" className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 sm:mb-8 text-white/90 tracking-tight scroll-mt-16 sm:scroll-mt-20">
              Mission Profiles
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-4 sm:p-5 md:p-6"
            >
              <h3 className="text-base sm:text-lg font-light text-white/90 mb-3 sm:mb-4 font-mono uppercase tracking-wider text-xs sm:text-sm">
                Mission Modes
              </h3>
              <ul className="space-y-2.5 sm:space-y-3">
                <li className="flex items-start gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-500/60 mt-1.5 sm:mt-2 flex-shrink-0 rounded-full" />
                  <div>
                    <div className="text-xs sm:text-sm text-gray-300 font-mono mb-0.5 sm:mb-1">Persistent Patrol</div>
                    <div className="text-[10px] sm:text-xs text-gray-500 font-light">Extended-duration operations with scheduled Scout recovery and recharge cycles</div>
                  </div>
                </li>
                <li className="flex items-start gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-500/60 mt-1.5 sm:mt-2 flex-shrink-0 rounded-full" />
                  <div>
                    <div className="text-xs sm:text-sm text-gray-300 font-mono mb-0.5 sm:mb-1">Area Survey</div>
                    <div className="text-[10px] sm:text-xs text-gray-500 font-light">Coordinated multi-Scout operations with centralized data collection</div>
                  </div>
                </li>
                <li className="flex items-start gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-500/60 mt-1.5 sm:mt-2 flex-shrink-0 rounded-full" />
                  <div>
                    <div className="text-xs sm:text-sm text-gray-300 font-mono mb-0.5 sm:mb-1">Rapid Response</div>
                    <div className="text-[10px] sm:text-xs text-gray-500 font-light">Mobile deployment to support time-sensitive Scout missions</div>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-4 sm:p-5 md:p-6"
            >
              <h3 className="text-base sm:text-lg font-light text-white/90 mb-3 sm:mb-4 font-mono uppercase tracking-wider text-xs sm:text-sm">
                Environmental Assumptions
              </h3>
              <ul className="space-y-2.5 sm:space-y-3">
                <li className="flex items-start gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-500/60 mt-1.5 sm:mt-2 flex-shrink-0 rounded-full" />
                  <div>
                    <div className="text-xs sm:text-sm text-gray-300 font-mono mb-0.5 sm:mb-1">Coastal Operations</div>
                    <div className="text-[10px] sm:text-xs text-gray-500 font-light">Near-shore deployments with RF connectivity to shore infrastructure</div>
                  </div>
                </li>
                <li className="flex items-start gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-500/60 mt-1.5 sm:mt-2 flex-shrink-0 rounded-full" />
                  <div>
                    <div className="text-xs sm:text-sm text-gray-300 font-mono mb-0.5 sm:mb-1">Offshore Operations</div>
                    <div className="text-[10px] sm:text-xs text-gray-500 font-light">Extended-range missions relying on satellite communications</div>
                  </div>
                </li>
                <li className="flex items-start gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-500/60 mt-1.5 sm:mt-2 flex-shrink-0 rounded-full" />
                  <div>
                    <div className="text-xs sm:text-sm text-gray-300 font-mono mb-0.5 sm:mb-1">Persistent Presence</div>
                    <div className="text-[10px] sm:text-xs text-gray-500 font-light">Long-duration station-keeping with periodic resupply</div>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 px-4">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-block border border-amber-500/30 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] px-2.5 sm:px-3 py-1 sm:py-1.5 mb-4 sm:mb-6 text-[10px] sm:text-xs md:text-sm font-mono text-amber-500 tracking-widest uppercase">
              OPERATIONAL VALUE
            </div>
            <h2 id="value" className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 sm:mb-8 text-white/90 tracking-tight scroll-mt-16 sm:scroll-mt-20">
              Why It Matters
            </h2>
            <div className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-5 sm:p-6 md:p-8">
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed font-light mb-4 sm:mb-6">
                Support vessels eliminate the range and endurance limitations that constrain Scout operations. Without mobile support platforms, Scout missions are limited by battery capacity, communication range, and the need for shore-based recovery operations.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed font-light">
                With support vessels, Scout fleets can operate continuously in remote areas, maintain persistent surveillance, and execute complex multi-vehicle missions. The vessel serves as a force multiplier, enabling Scout operations that would otherwise require multiple shore-based deployments or prohibitively long transit times.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Platforms */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 border-t border-amber-500/10">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <div className="inline-block border border-amber-500/30 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] px-2.5 sm:px-3 py-1 sm:py-1.5 mb-3 sm:mb-4 text-[10px] sm:text-xs md:text-sm font-mono text-amber-500 tracking-widest uppercase">
              RELATED PLATFORMS
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light mb-4 sm:mb-6 text-white/90 tracking-tight">
              Other Scout Support Platforms
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-4xl">
            <Link href="/products/scout/support/buoy">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-4 sm:p-5 md:p-6 hover:border-amber-500/40 active:border-amber-500/50 transition-all duration-300 cursor-pointer touch-manipulation"
              >
                <h4 className="text-base sm:text-lg font-light text-white/90 mb-1.5 sm:mb-2 font-mono uppercase tracking-wider">
                  Support Buoys
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 font-light">
                  Persistent surface nodes for extended range and communication
                </p>
              </motion.div>
            </Link>
            <Link href="/products/scout/support/semisub">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-4 sm:p-5 md:p-6 hover:border-amber-500/40 active:border-amber-500/50 transition-all duration-300 cursor-pointer touch-manipulation"
              >
                <h4 className="text-base sm:text-lg font-light text-white/90 mb-1.5 sm:mb-2 font-mono uppercase tracking-wider">
                  Semi-Submersibles
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 font-light">
                  Low-profile platforms for covert, long-duration operations
                </p>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 border-t border-amber-500/10">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(245,158,11,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245,158,11,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container-responsive max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-amber-500/30 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 sm:p-8 md:p-12 lg:p-16"
          >
            <div className="absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-t border-l border-amber-500/20" />
            <div className="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-t border-r border-amber-500/20" />
            <div className="absolute bottom-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-b border-l border-amber-500/20" />
            <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-b border-r border-amber-500/20" />

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6 text-white/90 relative z-10">
              Interested in Support Vessels?
            </h2>
            <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 max-w-xl mx-auto relative z-10">
              Contact our team to discuss support vessel configurations and integration with your Scout operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center relative z-10">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-amber-500/10 hover:bg-amber-500/20 active:bg-amber-500/25 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 active:border-amber-500/60 px-8 sm:px-12 py-4 sm:py-6 text-xs sm:text-sm font-mono tracking-wider uppercase touch-manipulation">
                  Contact Sales
                </Button>
              </Link>
              <Link href="/products/scout" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border border-amber-500/30 text-amber-500/80 hover:text-amber-500 active:text-amber-500 hover:border-amber-500/50 active:border-amber-500/60 px-8 sm:px-12 py-4 sm:py-6 text-xs sm:text-sm font-mono tracking-wider uppercase touch-manipulation"
                >
                  Back to Scout
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


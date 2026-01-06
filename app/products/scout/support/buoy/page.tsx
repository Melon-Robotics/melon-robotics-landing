"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Radio, Satellite, Zap, Sun } from 'lucide-react'
import Link from 'next/link'
import { SupportPlatformVisualization } from '@/components/support-platform-visualization'

export default function SupportBuoyPage() {
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

        {/* Technical Status Indicators */}
        <div className="absolute top-4 left-4 text-[10px] sm:text-xs font-mono text-amber-500/80 z-10 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block border border-amber-500/30 bg-black/60 backdrop-blur-sm px-2 py-1"
          >
            <span className="hidden xs:inline">MR-SUP-BUOY | </span>REF: 001-BUOY
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-1 text-[8px] text-gray-600 font-mono"
          >
            REV: A.1 | CLASS: UNCLASSIFIED
          </motion.div>
        </div>

        {/* Status Indicators - Top Right */}
        <div className="absolute top-4 right-4 text-[10px] sm:text-xs font-mono text-amber-500/80 z-10 pointer-events-none hidden xs:block">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block border border-amber-500/30 bg-black/60 backdrop-blur-sm px-2 py-1"
          >
            STATUS: <span className="text-green-400">PERSISTENT</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-1 text-[8px] text-gray-600 font-mono text-right"
          >
            POWER: <span className="text-green-400">SOLAR</span> | RANGE: EXTENDED
          </motion.div>
        </div>

        {/* Bottom Left Indicators */}
        <div className="absolute bottom-4 left-4 flex flex-col gap-2 text-[10px] sm:text-xs font-mono z-10 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center"
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 mr-1.5 animate-pulse" />
            <span className="text-green-400">ONLINE</span>
            <span className="text-gray-600 ml-2 hidden sm:inline">| ACOUSTIC: ACTIVE</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center hidden xs:flex"
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-500 mr-1.5 animate-pulse" />
            <span className="text-amber-500">RELAY</span>
            <span className="text-gray-600 ml-2">| BRIDGE: ACTIVE</span>
          </motion.div>
        </div>

        <div className="container-responsive max-w-7xl relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <Link href="/products/scout/support">
              <Button
                variant="outline"
                className="border-amber-500/30 text-amber-500/80 hover:text-amber-500 hover:border-amber-500/50 font-mono text-[10px] sm:text-xs tracking-wider uppercase py-2 px-3 sm:py-2 sm:px-4"
              >
                <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                Back to Support Platforms
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-12">
            {/* Platform Visualization */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="order-2 lg:order-1"
            >
              <SupportPlatformVisualization platformType="buoy" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-4xl order-1 lg:order-2"
            >
            {/* Technical Status Bar */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center justify-center gap-3 mb-6 sm:mb-8"
            >
              <div className="flex items-center gap-2 font-mono text-[10px] text-amber-500/80 tracking-[0.25em] uppercase">
                <div className="relative">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  <div className="absolute inset-0 w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping opacity-75" />
                </div>
                <span>SUPPORT PLATFORM</span>
              </div>
              <div className="h-px w-12 bg-amber-500/20" />
              <div className="font-mono text-[10px] text-gray-600">
                MODULE: MR-SUP-BUOY | REV: A.1
              </div>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6 md:mb-8"
            >
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="font-mono text-[10px] sm:text-xs text-amber-500/60 tracking-[0.2em] sm:tracking-[0.3em] uppercase"
              >
                SUPPORT PLATFORM
              </motion.div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 text-white/90 tracking-tight"
            >
              Scout Support Buoy
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="h-px w-12 sm:w-16 bg-gradient-to-r from-amber-500/40 to-transparent mb-4 sm:mb-6"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 md:mb-12 leading-relaxed font-light max-w-3xl"
            >
              Persistent surface nodes that extend Scout range, communications, and operational endurance through acoustic, RF, and satellite bridging.
            </motion.p>
          </motion.div>
          </div>
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
            className="mb-12"
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
              className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6"
            >
              <h3 className="text-xl font-light text-white/90 mb-4 font-mono uppercase tracking-wider text-sm">
                What It Is
              </h3>
              <p className="text-gray-300 leading-relaxed font-light">
                Support buoys are persistent surface or near-surface platforms that function as fixed communication and navigation nodes in the Scout operational network. They provide continuous acoustic, RF, and satellite connectivity without requiring crewed presence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6"
            >
              <h3 className="text-xl font-light text-white/90 mb-4 font-mono uppercase tracking-wider text-sm">
                Operational Role
              </h3>
              <p className="text-gray-300 leading-relaxed font-light">
                Buoys solve the problem of communication range and network coverage gaps in Scout operations. They extend the effective range of Scout missions by providing persistent relay nodes that bridge underwater acoustic networks with surface and satellite communications.
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
              'Acoustic to RF communication bridging',
              'Acoustic to satellite connectivity',
              'Solar power generation and storage',
              'GPS-referenced network anchor points',
              'Data caching and buffering',
              'Swarm coordination support',
              'BlueMesh routing and gateway services',
              'Persistent station-keeping',
              'Low-maintenance autonomous operation',
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-4 sm:p-5 md:p-6 hover:border-amber-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500/60 mt-1.5 sm:mt-2 flex-shrink-0 rounded-full" />
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
              Network and Communication Interface
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6">
                <h3 className="text-base sm:text-lg font-light text-white/90 mb-3 sm:mb-4 font-mono uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2">
                  <Radio className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500/70" />
                  Acoustic Interface
                </h3>
                <p className="text-gray-300 leading-relaxed font-light mb-4">
                  Buoys maintain continuous acoustic links with Scout vehicles operating within range. They relay commands from Orbit Cloud, forward Scout telemetry, and provide acoustic positioning references for EchoNav navigation.
                </p>
                <ul className="space-y-1.5 sm:space-y-2">
                  <li className="flex items-start gap-1.5 sm:gap-2">
                    <div className="w-1 h-1 bg-amber-500/60 mt-1.5 sm:mt-2 flex-shrink-0 rounded-full" />
                    <span className="text-sm text-gray-400 font-mono">Multi-Scout acoustic routing</span>
                  </li>
                  <li className="flex items-start gap-1.5 sm:gap-2">
                    <div className="w-1 h-1 bg-amber-500/60 mt-1.5 sm:mt-2 flex-shrink-0 rounded-full" />
                    <span className="text-sm text-gray-400 font-mono">EchoNav reference positioning</span>
                  </li>
                  <li className="flex items-start gap-1.5 sm:gap-2">
                    <div className="w-1 h-1 bg-amber-500/60 mt-1.5 sm:mt-2 flex-shrink-0 rounded-full" />
                    <span className="text-sm text-gray-400 font-mono">Command and telemetry relay</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6">
                <h3 className="text-base sm:text-lg font-light text-white/90 mb-3 sm:mb-4 font-mono uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500/70" />
                  Mission Coordination
                </h3>
                <p className="text-gray-300 leading-relaxed font-light mb-4">
                  Buoys coordinate with Scout vehicles through BlueMesh, managing communication routing, data caching, and network topology. They enable swarm operations by maintaining awareness of all Scouts within acoustic range.
                </p>
                <ul className="space-y-1.5 sm:space-y-2">
                  <li className="flex items-start gap-1.5 sm:gap-2">
                    <div className="w-1 h-1 bg-amber-500/60 mt-1.5 sm:mt-2 flex-shrink-0 rounded-full" />
                    <span className="text-sm text-gray-400 font-mono">Swarm coordination support</span>
                  </li>
                  <li className="flex items-start gap-1.5 sm:gap-2">
                    <div className="w-1 h-1 bg-amber-500/60 mt-1.5 sm:mt-2 flex-shrink-0 rounded-full" />
                    <span className="text-sm text-gray-400 font-mono">Data caching and buffering</span>
                  </li>
                  <li className="flex items-start gap-1.5 sm:gap-2">
                    <div className="w-1 h-1 bg-amber-500/60 mt-1.5 sm:mt-2 flex-shrink-0 rounded-full" />
                    <span className="text-sm text-gray-400 font-mono">Network topology management</span>
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
                description: 'Continuous buoy status, position, power levels, and network connectivity reporting to Orbit Cloud via satellite or RF links.',
              },
              {
                title: 'Command & Control',
                description: 'Remote configuration changes, network routing updates, and operational mode adjustments executed through Orbit Cloud interface.',
              },
              {
                title: 'Data Offload',
                description: 'Forwarding of cached Scout mission data from buoy storage to Orbit Cloud, with automatic retry and bandwidth optimization.',
              },
              {
                title: 'Fleet Awareness',
                description: 'Real-time visibility into all Scout vehicles communicating through the buoy, with network topology and communication health metrics.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6"
              >
                <h3 className="text-lg font-light text-white/90 mb-3 font-mono uppercase tracking-wider text-sm">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed font-light text-sm">
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
              className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6"
            >
              <h3 className="text-base sm:text-lg font-light text-white/90 mb-3 sm:mb-4 font-mono uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2">
                <Radio className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500/70" />
                Acoustic
              </h3>
              <p className="text-gray-300 leading-relaxed font-light">
                Buoys maintain acoustic links with Scout vehicles using BlueMesh protocols. They function as acoustic routers, forwarding messages between Scouts and providing gateway services to surface communications. Acoustic positioning beacons support EchoNav navigation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6"
            >
              <h3 className="text-base sm:text-lg font-light text-white/90 mb-3 sm:mb-4 font-mono uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2">
                <Satellite className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500/70" />
                RF and Satellite
              </h3>
              <p className="text-gray-300 leading-relaxed font-light">
                Buoys maintain RF links for near-shore operations and satellite connectivity for offshore deployments. They bridge acoustic Scout communications with terrestrial or satellite infrastructure, enabling real-time command and data transfer to Orbit Cloud.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6"
            >
              <h3 className="text-base sm:text-lg font-light text-white/90 mb-3 sm:mb-4 font-mono uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2">
                <Radio className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500/70" />
                BlueMesh Role
              </h3>
              <p className="text-gray-300 leading-relaxed font-light">
                Buoys serve as fixed anchor points in the BlueMesh network, providing GPS-referenced positions for network topology. They optimize routing paths between Scout vehicles and surface infrastructure, maintain network health metrics, and enable multi-hop acoustic communication.
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
              className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6"
            >
              <h3 className="text-base sm:text-lg font-light text-white/90 mb-3 sm:mb-4 font-mono uppercase tracking-wider text-sm">
                Mission Modes
              </h3>
              <ul className="space-y-2.5 sm:space-y-3">
                <li className="flex items-start gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-500/60 mt-1.5 sm:mt-2 flex-shrink-0 rounded-full" />
                  <div>
                    <div className="text-xs sm:text-sm text-gray-300 font-mono mb-0.5 sm:mb-1">Persistent Relay</div>
                    <div className="text-xs text-gray-500 font-light">Long-duration station-keeping with continuous communication services</div>
                  </div>
                </li>
                <li className="flex items-start gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-500/60 mt-1.5 sm:mt-2 flex-shrink-0 rounded-full" />
                  <div>
                    <div className="text-xs sm:text-sm text-gray-300 font-mono mb-0.5 sm:mb-1">Network Extension</div>
                    <div className="text-xs text-gray-500 font-light">Extending Scout communication range beyond direct acoustic limits</div>
                  </div>
                </li>
                <li className="flex items-start gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-500/60 mt-1.5 sm:mt-2 flex-shrink-0 rounded-full" />
                  <div>
                    <div className="text-xs sm:text-sm text-gray-300 font-mono mb-0.5 sm:mb-1">Swarm Support</div>
                    <div className="text-xs text-gray-500 font-light">Coordinating multiple Scout vehicles operating in the same area</div>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6"
            >
              <h3 className="text-base sm:text-lg font-light text-white/90 mb-3 sm:mb-4 font-mono uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2">
                <Sun className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500/70" />
                Persistence & Maintenance
              </h3>
              <ul className="space-y-2.5 sm:space-y-3">
                <li className="flex items-start gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-500/60 mt-1.5 sm:mt-2 flex-shrink-0 rounded-full" />
                  <div>
                    <div className="text-xs sm:text-sm text-gray-300 font-mono mb-0.5 sm:mb-1">Solar Power</div>
                    <div className="text-xs text-gray-500 font-light">Autonomous operation with solar generation and battery storage</div>
                  </div>
                </li>
                <li className="flex items-start gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-500/60 mt-1.5 sm:mt-2 flex-shrink-0 rounded-full" />
                  <div>
                    <div className="text-xs sm:text-sm text-gray-300 font-mono mb-0.5 sm:mb-1">Low Maintenance</div>
                    <div className="text-xs text-gray-500 font-light">Designed for extended deployments with minimal intervention</div>
                  </div>
                </li>
                <li className="flex items-start gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-500/60 mt-1.5 sm:mt-2 flex-shrink-0 rounded-full" />
                  <div>
                    <div className="text-xs sm:text-sm text-gray-300 font-mono mb-0.5 sm:mb-1">Environmental Resilience</div>
                    <div className="text-xs text-gray-500 font-light">Operational in coastal and offshore conditions with station-keeping capability</div>
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
                Support buoys eliminate communication range limitations that constrain Scout operations. Without persistent relay nodes, Scout missions are limited by acoustic range, requiring vehicles to surface frequently or operate within narrow communication windows.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed font-light">
                With support buoys, Scout fleets can operate continuously in extended areas, maintain persistent communication links, and execute coordinated swarm missions. Buoys provide the network infrastructure that enables scalable Scout operations, functioning as fixed nodes that extend both communication range and operational endurance without requiring crewed support.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Platforms */}
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

        <div className="container-responsive max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-block border border-amber-500/30 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] px-3 py-1.5 mb-4 text-xs md:text-sm font-mono text-amber-500 tracking-widest uppercase">
              RELATED PLATFORMS
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light mb-6 text-white/90 tracking-tight">
              Other Scout Support Platforms
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-4xl">
            <Link href="/products/scout/support#vessels">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-4 sm:p-5 md:p-6 hover:border-amber-500/40 transition-all duration-300 cursor-pointer"
              >
                <h4 className="text-base sm:text-lg font-light text-white/90 mb-1.5 sm:mb-2 font-mono uppercase tracking-wider">
                  Support Vessels
                </h4>
                <p className="text-sm text-gray-400 font-light">
                  Mobile surface platforms for deployment and recovery
                </p>
              </motion.div>
            </Link>
            <Link href="/products/scout/support/semisub">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-4 sm:p-5 md:p-6 hover:border-amber-500/40 transition-all duration-300 cursor-pointer"
              >
                <h4 className="text-base sm:text-lg font-light text-white/90 mb-1.5 sm:mb-2 font-mono uppercase tracking-wider">
                  Semi-Submersibles
                </h4>
                <p className="text-sm text-gray-400 font-light">
                  Low-profile platforms for covert, long-duration operations
                </p>
              </motion.div>
            </Link>
          </div>
          <div className="mt-6 text-center">
            <Link href="/products/scout/support">
              <Button
                variant="outline"
                className="border-amber-500/30 text-amber-500/80 hover:text-amber-500 hover:border-amber-500/50 text-xs sm:text-sm font-mono tracking-wider uppercase"
              >
                View All Support Platforms
              </Button>
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
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-amber-500/20" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-amber-500/20" />

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 text-white/90 relative z-10">
              Interested in Support Buoys?
            </h2>
            <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 max-w-xl mx-auto relative z-10">
              Contact our team to discuss support buoy deployments and network integration with your Scout operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link href="/contact">
                <Button className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 px-8 sm:px-12 py-4 sm:py-6 text-xs sm:text-sm font-mono tracking-wider uppercase">
                  Contact Sales
                </Button>
              </Link>
              <Link href="/products/scout">
                <Button
                  variant="outline"
                  className="border border-amber-500/30 text-amber-500/80 hover:text-amber-500 hover:border-amber-500/50 px-8 sm:px-12 py-4 sm:py-6 text-xs sm:text-sm font-mono tracking-wider uppercase"
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


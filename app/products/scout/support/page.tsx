"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Radio, Satellite, Zap, Navigation, Anchor } from 'lucide-react'
import Link from 'next/link'
import { SupportPlatformVisualization } from '@/components/support-platform-visualization'

export default function ScoutSupportPage() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  const supportPlatforms = [
    {
      id: 'vessels',
      title: 'Support Vessels',
      description: 'Mobile surface platforms that deploy, recover, recharge, and relay data for Scout AUV operations.',
      href: '#vessels',
      icon: Navigation,
      features: [
        'Mobile deployment and recovery',
        'Onboard charging and maintenance',
        'Real-time data relay',
        'Extended mission support',
        'Human-in-the-loop supervision',
        'Multi-Scout coordination'
      ],
      useCase: 'Mobile operations requiring crewed support, rapid deployment/recovery, and real-time mission oversight.',
      bestFor: ['Mobile missions', 'Rapid deployment needs', 'Crewed operations', 'Multi-vehicle coordination']
    },
    {
      id: 'buoy',
      title: 'Support Buoys',
      description: 'Persistent surface nodes that extend Scout range, communications, and operational endurance through acoustic, RF, and satellite bridging.',
      href: '/products/scout/support/buoy',
      icon: Anchor,
      features: [
        'Persistent station-keeping',
        'Acoustic to RF/satellite bridging',
        'Solar-powered autonomous operation',
        'Network extension and routing'
      ],
      useCase: 'Fixed-position operations requiring persistent communication nodes and extended range without crewed presence.',
      bestFor: ['Persistent operations', 'Fixed-area surveillance', 'Autonomous networks', 'Extended range missions']
    },
    {
      id: 'semisub',
      title: 'Semi-Submersibles',
      description: 'Low-profile, semi-submersible support platforms for covert, long-duration Scout operations with autonomous docking and energy replenishment.',
      href: '/products/scout/support/semisub',
      icon: Radio,
      features: [
        'Low-profile covert operations',
        'Autonomous docking and charging',
        'Extended endurance',
        'Reduced visual signature'
      ],
      useCase: 'Covert operations requiring reduced visual signature, autonomous operation, and long-duration presence.',
      bestFor: ['Covert missions', 'Low-visibility operations', 'Autonomous endurance', 'Stealth requirements']
    }
  ]

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
            animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : -20 }}
            transition={{ duration: 0.6 }}
            className="inline-block border border-amber-500/30 bg-black/60 backdrop-blur-sm px-2 py-1"
          >
            <span className="hidden xs:inline">MR-SCOUT-SUP | </span>REF: 001-SUP
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : -20 }}
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
            animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="inline-block border border-amber-500/30 bg-black/60 backdrop-blur-sm px-2 py-1"
          >
            STATUS: <span className="text-green-400">OPERATIONAL</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-1 text-[8px] text-gray-600 font-mono text-right"
          >
            PLATFORMS: <span className="text-green-400">3 ACTIVE</span>
          </motion.div>
        </div>

        {/* Bottom Left Indicators */}
        <div className="absolute bottom-4 left-4 flex flex-col gap-2 text-[10px] sm:text-xs font-mono z-10 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center"
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 mr-1.5 animate-pulse" />
            <span className="text-green-400">ONLINE</span>
            <span className="text-gray-600 ml-2 hidden sm:inline">| NETWORK: STABLE</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center hidden xs:flex"
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-500 mr-1.5 animate-pulse" />
            <span className="text-amber-500">SUPPORT</span>
            <span className="text-gray-600 ml-2">| RANGE: EXTENDED</span>
          </motion.div>
        </div>

        <div className="container-responsive max-w-7xl relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : -20 }}
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-12">
            {/* Platform Visualization */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : -30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="order-2 lg:order-1"
            >
              <SupportPlatformVisualization platformType="vessels" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-4xl order-1 lg:order-2"
            >
            {/* Technical Status Bar */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : -20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center justify-center gap-3 mb-6 sm:mb-8"
            >
              <div className="flex items-center gap-2 font-mono text-[10px] text-amber-500/80 tracking-[0.25em] uppercase">
                <div className="relative">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  <div className="absolute inset-0 w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping opacity-75" />
                </div>
                <span>SUPPORT PLATFORMS</span>
              </div>
              <div className="h-px w-12 bg-amber-500/20" />
              <div className="font-mono text-[10px] text-gray-600">
                MODULE: MR-SUP-PLT | REV: A.1
              </div>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: loaded ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6 md:mb-8"
            >
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: loaded ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="font-mono text-[10px] sm:text-xs text-amber-500/60 tracking-[0.2em] sm:tracking-[0.3em] uppercase"
              >
                SUPPORT PLATFORMS
              </motion.div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 text-white/90 tracking-tight"
            >
              Scout Support Platforms
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: loaded ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="h-px w-12 sm:w-16 bg-gradient-to-r from-amber-500/40 to-transparent mb-4 sm:mb-6"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 md:mb-12 leading-relaxed font-light max-w-3xl"
            >
              Infrastructure platforms that extend Scout operational range, enable persistent missions, and provide communication bridging between underwater operations and surface or satellite networks.
            </motion.p>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 sm:mb-8 text-white/90 tracking-tight">
              Support Platform Architecture
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
                What They Are
              </h3>
              <p className="text-gray-300 leading-relaxed font-light">
                Support platforms are surface or near-surface infrastructure that extends Scout operational capabilities beyond direct acoustic range. They provide communication bridging, energy replenishment, data relay, and persistent presence for extended missions.
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
                Support platforms solve communication range limitations, enable persistent operations, and provide infrastructure for extended Scout missions. They bridge underwater acoustic networks with surface RF and satellite communications, extending operational range and endurance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Selection Guide */}
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
              PLATFORM SELECTION
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 sm:mb-8 text-white/90 tracking-tight">
              Choose Your Support Platform
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl leading-relaxed font-light">
              Select the support platform that best matches your operational requirements. Each platform is optimized for different mission profiles and operational constraints.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {supportPlatforms.map((platform, index) => {
              const Icon = platform.icon
              const isVessels = platform.id === 'vessels'
              return (
                <motion.div
                  key={platform.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 hover:border-amber-500/40 transition-all duration-300 h-full flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 border border-amber-500/30 bg-black/40 flex items-center justify-center">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500/80" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-light text-white/90 font-mono uppercase tracking-wider">
                      {platform.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light mb-4 flex-grow">
                    {platform.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-xs sm:text-sm text-amber-500/80 font-mono uppercase tracking-wider mb-2">
                      Use Case
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400 font-light">
                      {platform.useCase}
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="text-xs sm:text-sm text-amber-500/80 font-mono uppercase tracking-wider mb-2">
                      Best For
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {platform.bestFor.map((item, itemIndex) => (
                        <span key={itemIndex} className="text-[10px] sm:text-xs text-gray-500 font-mono border border-gray-700/50 px-2 py-1">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {platform.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-amber-500/60 mt-1.5 flex-shrink-0 rounded-full" />
                        <span className="text-xs sm:text-sm text-gray-400 font-light">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    {isVessels ? (
                      <a href={platform.href}>
                        <Button
                          variant="outline"
                          className="w-full border-amber-500/30 text-amber-500/80 hover:text-amber-500 hover:border-amber-500/50 text-xs sm:text-sm font-mono tracking-wider uppercase"
                        >
                          View Details Below
                          <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 ml-2 rotate-180" />
                        </Button>
                      </a>
                    ) : (
                      <Link href={platform.href}>
                        <Button
                          variant="outline"
                          className="w-full border-amber-500/30 text-amber-500/80 hover:text-amber-500 hover:border-amber-500/50 text-xs sm:text-sm font-mono tracking-wider uppercase"
                        >
                          View Details
                          <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 ml-2 rotate-180" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Support Vessels Detailed Section */}
      <section id="vessels" className="relative py-12 sm:py-16 md:py-24 lg:py-32 px-4 border-b border-amber-500/10 scroll-mt-20">
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
              SUPPORT VESSELS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 sm:mb-8 text-white/90 tracking-tight">
              Mobile Surface Platforms
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mb-12">
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
                Support vessels are crewed or autonomous surface platforms designed to extend Scout operational range and endurance. They serve as mobile bases for launch, recovery, charging, and data relay operations.
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
                Support vessels solve the problem of limited Scout range and communication windows. They enable persistent operations in areas where direct shore-based control is impractical or where multiple Scout vehicles require coordinated support.
              </p>
            </motion.div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-light text-white/90 mb-6 font-mono uppercase tracking-wider text-sm sm:text-base">
              Core Capabilities
            </h3>
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
                'Mission planning and execution oversight'
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
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-500/60 mt-1.5 sm:mt-2 flex-shrink-0 rounded-full" />
                    <span className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                      {capability}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-light text-white/90 mb-4 font-mono uppercase tracking-wider text-sm sm:text-base">
              Operational Value
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed font-light mb-4">
              With support vessels, Scout fleets can operate continuously in remote areas, maintain persistent surveillance, and execute complex multi-vehicle missions. The vessel serves as a force multiplier, enabling Scout operations that would otherwise require multiple shore-based deployments or prohibitively long transit times.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed font-light">
              Support vessels provide the mobile infrastructure needed for extended Scout missions, combining human oversight with autonomous capabilities to maximize operational effectiveness and mission success rates.
            </p>
          </div>
        </div>
      </section>

      {/* Common Capabilities */}
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 sm:mb-8 text-white/90 tracking-tight">
              Shared Platform Functions
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {[
              'Acoustic communication with Scout vehicles',
              'RF and satellite connectivity to Orbit Cloud',
              'Data caching and relay services',
              'Network routing and topology management',
              'GPS-referenced positioning',
              'Extended operational endurance',
              'BlueMesh protocol support',
              'Mission coordination and swarm support',
              'Autonomous operation capabilities'
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

      {/* CTA */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4">
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
              Interested in Support Platforms?
            </h2>
            <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 max-w-xl mx-auto relative z-10">
              Contact our team to discuss support platform configurations and integration with your Scout operations.
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


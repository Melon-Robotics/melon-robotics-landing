"use client"

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { RealTimeOps } from '@/components/real-time-ops'
import { BlackBoxControlCenter } from '@/components/blackbox-control-center'
import { 
  Network, 
  Database, 
  Shield, 
  Radio, 
  Navigation, 
  Activity, 
  Zap,
  Cpu,
  Cloud,
  Satellite,
  Lock,
  Server
} from 'lucide-react'

export default function OrbitPage() {
  // Better animation system - content stays visible once shown
  const sectionRefs = {
    overview: useRef(null),
    capabilities: useRef(null),
    hardware: useRef(null),
    security: useRef(null),
    dashboard: useRef(null),
  }

  const [hasBeenVisible, setHasBeenVisible] = useState({
    overview: false,
    capabilities: false,
    hardware: false,
    security: false,
    dashboard: false,
  })

  const isOverviewInView = useInView(sectionRefs.overview, { once: false, amount: 0.1 })
  const isCapabilitiesInView = useInView(sectionRefs.capabilities, { once: false, amount: 0.1 })
  const isHardwareInView = useInView(sectionRefs.hardware, { once: false, amount: 0.1 })
  const isSecurityInView = useInView(sectionRefs.security, { once: false, amount: 0.1 })
  const isDashboardInView = useInView(sectionRefs.dashboard, { once: false, amount: 0.1 })

  // Track visibility state - once shown, stay visible
  useEffect(() => {
    if (isOverviewInView && !hasBeenVisible.overview) {
      setHasBeenVisible(prev => ({ ...prev, overview: true }))
    }
  }, [isOverviewInView, hasBeenVisible.overview])

  useEffect(() => {
    if (isCapabilitiesInView && !hasBeenVisible.capabilities) {
      setHasBeenVisible(prev => ({ ...prev, capabilities: true }))
    }
  }, [isCapabilitiesInView, hasBeenVisible.capabilities])

  useEffect(() => {
    if (isHardwareInView && !hasBeenVisible.hardware) {
      setHasBeenVisible(prev => ({ ...prev, hardware: true }))
    }
  }, [isHardwareInView, hasBeenVisible.hardware])

  useEffect(() => {
    if (isSecurityInView && !hasBeenVisible.security) {
      setHasBeenVisible(prev => ({ ...prev, security: true }))
    }
  }, [isSecurityInView, hasBeenVisible.security])

  useEffect(() => {
    if (isDashboardInView && !hasBeenVisible.dashboard) {
      setHasBeenVisible(prev => ({ ...prev, dashboard: true }))
    }
  }, [isDashboardInView, hasBeenVisible.dashboard])

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 border-b border-amber-500/10">
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
              <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">
                PLATFORM
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-white/90 tracking-tight">
              ORBIT Cloud
            </h1>
            <div className="h-px w-16 bg-gradient-to-r from-amber-500/40 to-transparent mb-6" />
            <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed font-light max-w-3xl">
              Unified Command, Control, and Intelligence for Autonomous Ocean Systems
            </p>
            <p className="text-base md:text-lg text-gray-400 mb-12 leading-relaxed font-light max-w-3xl">
              ORBIT is the cloud brain behind Scout AUVs, swarms, and data products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Full Command Center Dashboard */}
      <section ref={sectionRefs.dashboard} className="relative">
        <RealTimeOps />
      </section>

      {/* BlackBox Master Control Center */}
      <section className="relative">
        <BlackBoxControlCenter />
      </section>

      {/* What ORBIT Is */}
      <section className="relative py-20 md:py-32 px-4 border-b border-amber-500/10">
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
            ref={sectionRefs.overview}
            initial={{ opacity: 0, y: 20 }}
            animate={hasBeenVisible.overview || isOverviewInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-block border border-amber-500/30 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] px-3 py-1.5 mb-6 text-xs md:text-sm font-mono text-amber-500 tracking-widest uppercase">
              PLATFORM OVERVIEW
            </div>
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-white/90 tracking-tight">
              What ORBIT Is
            </h2>
          </motion.div>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={hasBeenVisible.overview || isOverviewInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-8 md:p-10"
            >
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light mb-8">
                ORBIT Cloud is Melon's secure fleet orchestration, data ingestion, and mission control platform.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Activity className="w-5 h-5 text-amber-500/70 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-sm font-mono text-amber-500/80 uppercase tracking-wider mb-2">Real-time Telemetry</h3>
                      <p className="text-sm text-gray-400 leading-relaxed font-light">
                        Live vehicle status, sensor data, and mission parameters streamed from deployed systems.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Navigation className="w-5 h-5 text-amber-500/70 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-sm font-mono text-amber-500/80 uppercase tracking-wider mb-2">Mission Planning</h3>
                      <p className="text-sm text-gray-400 leading-relaxed font-light">
                        Define, deploy, and monitor autonomous mission profiles across fleet assets.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Network className="w-5 h-5 text-amber-500/70 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-sm font-mono text-amber-500/80 uppercase tracking-wider mb-2">Autonomous Coordination</h3>
                      <p className="text-sm text-gray-400 leading-relaxed font-light">
                        Multi-vehicle swarm orchestration with distributed decision-making and resource allocation.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Database className="w-5 h-5 text-amber-500/70 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-sm font-mono text-amber-500/80 uppercase tracking-wider mb-2">Data Fusion & Delivery</h3>
                      <p className="text-sm text-gray-400 leading-relaxed font-light">
                        Process, aggregate, and deliver mission data through secure APIs and pipelines.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section ref={sectionRefs.capabilities} className="relative py-20 md:py-32 px-4 border-b border-amber-500/10">
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
            animate={hasBeenVisible.capabilities || isCapabilitiesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-block border border-amber-500/30 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] px-3 py-1.5 mb-6 text-xs md:text-sm font-mono text-amber-500 tracking-widest uppercase">
              CORE CAPABILITIES
            </div>
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-white/90 tracking-tight">
              Platform Functions
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Fleet Management',
                description: 'Unified control for Scout AUVs and Fever swarm systems. Monitor status, coordinate missions, and manage resources across deployed assets.',
                icon: Network
              },
              {
                title: 'Mission Planning & Replay',
                description: 'Design mission profiles, deploy to vehicles, and replay historical operations for analysis and optimization.',
                icon: Navigation
              },
              {
                title: 'Telemetry & Health Monitoring',
                description: 'Real-time vehicle health, sensor readings, and system diagnostics with alerting and predictive maintenance.',
                icon: Activity
              },
              {
                title: 'Data Pipelines',
                description: 'EchoNav navigation data, CODAS acoustic processing, and custom data ingestion pipelines for mission intelligence.',
                icon: Database
              },
              {
                title: 'Secure APIs',
                description: 'Government and enterprise-grade APIs for programmatic access to fleet data, mission control, and analytics.',
                icon: Lock
              },
              {
                title: 'Simulation Parity',
                description: 'ScoutSim integration enables simulation-to-real-world deployment with validated mission profiles.',
                icon: Cpu
              }
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={hasBeenVisible.capabilities || isCapabilitiesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 hover:border-amber-500/30 transition-all duration-300"
              >
                <div className="mb-4">
                  <capability.icon className="w-6 h-6 text-amber-500/70 mb-3" />
                  <h3 className="text-lg font-light text-white/90 mb-3 font-mono uppercase tracking-wider text-sm">
                    {capability.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Relationship to Hardware */}
      <section ref={sectionRefs.hardware} className="relative py-20 md:py-32 px-4 border-b border-amber-500/10">
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
            animate={hasBeenVisible.hardware || isHardwareInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-block border border-amber-500/30 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] px-3 py-1.5 mb-6 text-xs md:text-sm font-mono text-amber-500 tracking-widest uppercase">
              SYSTEM ARCHITECTURE
            </div>
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-white/90 tracking-tight">
              Relationship to Hardware
            </h2>
          </motion.div>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={hasBeenVisible.hardware || isHardwareInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-8 md:p-10"
            >
              <div className="mb-8">
                <p className="text-xl md:text-2xl text-white/90 mb-6 font-light leading-relaxed">
                  Scout is the vehicle. ORBIT is the command layer.
                </p>
                <div className="h-px w-16 bg-gradient-to-r from-amber-500/40 to-transparent mb-6" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-mono text-amber-500/80 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Standalone Operation
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-light mb-4">
                    Scout AUVs can operate independently with onboard autonomy. They execute pre-programmed missions and return data without cloud connectivity.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-amber-500/60 mt-2 flex-shrink-0 rounded-full" />
                      <span className="text-sm text-gray-400 font-light">Onboard mission execution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-amber-500/60 mt-2 flex-shrink-0 rounded-full" />
                      <span className="text-sm text-gray-400 font-light">Local data storage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-amber-500/60 mt-2 flex-shrink-0 rounded-full" />
                      <span className="text-sm text-gray-400 font-light">Autonomous decision-making</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-mono text-amber-500/80 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Cloud className="w-4 h-4" />
                    ORBIT-Enabled Operations
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-light mb-4">
                    ORBIT Cloud unlocks fleet-scale intelligence, real-time coordination, and data-as-a-service capabilities. Connect vehicles to enable distributed missions and centralized command.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-amber-500/60 mt-2 flex-shrink-0 rounded-full" />
                      <span className="text-sm text-gray-400 font-light">Multi-vehicle coordination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-amber-500/60 mt-2 flex-shrink-0 rounded-full" />
                      <span className="text-sm text-gray-400 font-light">Real-time mission updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-amber-500/60 mt-2 flex-shrink-0 rounded-full" />
                      <span className="text-sm text-gray-400 font-light">Data-as-a-Service delivery</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Built for Scale & Security */}
      <section ref={sectionRefs.security} className="relative py-20 md:py-32 px-4 border-b border-amber-500/10">
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
            animate={hasBeenVisible.security || isSecurityInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-block border border-amber-500/30 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] px-3 py-1.5 mb-6 text-xs md:text-sm font-mono text-amber-500 tracking-widest uppercase">
              ENTERPRISE READINESS
            </div>
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-white/90 tracking-tight">
              Built for Scale & Security
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
            {[
              {
                title: 'Defense & Research Grade',
                description: 'Designed for mission-critical operations in defense, research, and industrial environments. Built to meet stringent security and reliability requirements.',
                icon: Shield
              },
              {
                title: 'Multi-Tenant Architecture',
                description: 'Isolated tenant environments with role-based access control. Support multiple organizations, projects, and operational domains on a single platform.',
                icon: Server
              },
              {
                title: 'Secure Communications',
                description: 'BlueMesh mesh networking and RelayNode gateway services provide encrypted, resilient communication paths for degraded and intermittent connectivity.',
                icon: Radio
              },
              {
                title: 'Degraded Connectivity',
                description: 'Operates effectively in low-bandwidth, high-latency, and intermittent network conditions. Queue and sync operations when connectivity is restored.',
                icon: Satellite
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={hasBeenVisible.security || isSecurityInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 hover:border-amber-500/30 transition-all duration-300"
              >
                <div className="mb-4">
                  <feature.icon className="w-6 h-6 text-amber-500/70 mb-3" />
                  <h3 className="text-lg font-light text-white/90 mb-3 font-mono uppercase tracking-wider text-sm">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 md:py-32 px-4">
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
            animate={hasBeenVisible.security || isSecurityInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-light mb-6 text-white/90 tracking-tight">
                Ready to Deploy?
              </h2>
              <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed font-light">
                Explore Scout AUV hardware or request access to ORBIT Cloud for your organization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products/scout">
                  <Button className="w-full sm:w-auto bg-amber-500/12 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 px-6 md:px-8 py-4 md:py-5 text-base font-normal tracking-wide transition-all duration-200 min-h-[52px]">
                    Explore Scout AUV
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto border border-gray-700/40 text-white/80 hover:text-white hover:border-gray-500 px-6 md:px-8 py-4 md:py-5 text-base font-normal tracking-wide transition-all duration-200 min-h-[52px]"
                  >
                    Request ORBIT Access
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}



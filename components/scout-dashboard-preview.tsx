"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { TerminalSquare, Activity, BarChart3, Navigation, Shield, ArrowRight, Cloud, Zap, Network, Database } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ScoutDashboardPreview() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const [hasBeenVisible, setHasBeenVisible] = useState(false)

  useEffect(() => {
    if (isInView && !hasBeenVisible) {
      setHasBeenVisible(true)
    }
  }, [isInView, hasBeenVisible])

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 md:py-32 bg-[#0a0e1a] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: "linear-gradient(#f59e0b20 1px, transparent 1px), linear-gradient(90deg, #f59e0b20 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        
        {/* Subtle glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={hasBeenVisible || isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header with ORBIT Integration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={hasBeenVisible || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent max-w-24" />
              <Cloud className="w-5 h-5 text-amber-500/60" />
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent max-w-24" />
            </div>
            <div className="text-xs uppercase tracking-widest text-amber-500 font-mono mb-2">
              Platform Integration
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter mb-4 sm:mb-6">
              Scout + <span className="text-amber-500">ORBIT Cloud</span>
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-300/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Scout operates autonomously. ORBIT Cloud unlocks fleet-scale intelligence, real-time coordination, and mission control.
            </p>
          </motion.div>

          {/* Connection Flow Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={hasBeenVisible || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          >
            {/* Scout Standalone */}
            <div className="border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 text-center">
              <div className="w-12 h-12 border border-amber-500/30 bg-black/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-mono">Scout Standalone</h3>
              <p className="text-sm text-gray-400 font-light">
                Autonomous operation with onboard intelligence. No cloud required.
              </p>
            </div>

            {/* Connection Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <motion.div
                animate={{
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-amber-500"
              >
                <ArrowRight className="w-8 h-8" />
              </motion.div>
            </div>

            {/* ORBIT Enhanced */}
            <Link href="/orbit" className="group">
              <div className="border border-amber-500/40 bg-gradient-to-b from-amber-500/10 to-[#0f1625] p-6 text-center transition-all duration-300 group-hover:border-amber-500/60 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] relative overflow-hidden">
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 border border-amber-500/50 bg-amber-500/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500/20 transition-colors">
                    <Cloud className="w-6 h-6 text-amber-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-amber-500 mb-2 font-mono group-hover:text-amber-400 transition-colors">
                    ORBIT Enhanced
                  </h3>
                  <p className="text-sm text-gray-300 font-light">
                    Fleet coordination, real-time control, and data intelligence.
                  </p>
                  <div className="mt-4 flex items-center justify-center gap-2 text-xs text-amber-500/70 font-mono group-hover:text-amber-500 transition-colors">
                    <span>Explore Platform</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Feature Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={hasBeenVisible || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
          >
            {[
              { icon: <Network className="w-5 h-5 text-amber-500" />, title: "Fleet Management", desc: "Coordinate multiple Scout units" },
              { icon: <BarChart3 className="w-5 h-5 text-amber-500" />, title: "Real-Time Analytics", desc: "Live telemetry and mission data" },
              { icon: <Database className="w-5 h-5 text-amber-500" />, title: "Data Pipelines", desc: "EchoNav, CODAS, and custom APIs" },
            ].map((feature, i) => (
              <div key={i} className="border border-amber-500/20 bg-black/30 p-4 hover:border-amber-500/40 transition-all">
                <div className="mb-3">{feature.icon}</div>
                <h4 className="text-sm font-semibold text-white mb-1 font-mono">{feature.title}</h4>
                <p className="text-xs text-gray-400 font-light">{feature.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={hasBeenVisible || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <Link href="/orbit">
              <Button className="bg-amber-500/12 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 px-8 py-4 text-base font-normal transition-all duration-200 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] group">
                <span className="flex items-center gap-2">
                  <Cloud className="w-5 h-5" />
                  Explore ORBIT Cloud Platform
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
            <p className="text-xs text-gray-500 mt-4 font-mono">
              Unified command, control, and intelligence for autonomous ocean systems
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}



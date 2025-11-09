"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function BlackBoxHero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#0a0e1a] via-[#0f1625] to-[#0a0e1a] overflow-hidden flex items-center justify-center">
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

      {/* DARPA Terminal Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Technical corner markers */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-amber-500/20" />
        <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-amber-500/20" />
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-amber-500/20" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-amber-500/20" />
        
        {/* Top frame */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        
        {/* System Reference - Top Left */}
        <div className="absolute top-4 left-4 text-[10px] sm:text-xs font-mono text-amber-500/80">
          <div className="inline-block border border-amber-500/30 bg-black/60 backdrop-blur-sm px-2 py-1">
            MR-BLACKBOX | REF: 001-B
          </div>
          <div className="mt-1 text-[8px] text-gray-600 font-mono">
            REV: A.2 | CLASS: UNCLASSIFIED
          </div>
        </div>
        
        {/* Communication Status - Top Right */}
        <div className="absolute top-4 right-4 text-[10px] sm:text-xs font-mono text-amber-500/80 hidden xs:block">
          <div className="inline-block border border-amber-500/30 bg-black/60 backdrop-blur-sm px-2 py-1">
            COMMS: <span className="text-green-400">OFFLINE-FIRST</span>
          </div>
          <div className="mt-1 text-[8px] text-gray-600 font-mono text-right">
            PRIVACY: <span className="text-green-400">LOCAL ONLY</span>
          </div>
        </div>
        
        {/* Signal Indicators - Bottom Left */}
        <div className="absolute bottom-4 left-4 flex flex-col gap-2 text-[10px] sm:text-xs font-mono">
          <div className="flex items-center">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 mr-1.5 animate-pulse" />
            <span className="text-green-400">TRANSCRIBE</span>
            <span className="text-gray-600 ml-2 hidden sm:inline">| ASR: ACTIVE</span>
          </div>
          <div className="flex items-center hidden xs:flex">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-500 mr-1.5 animate-pulse" />
            <span className="text-amber-500">AUDIO</span>
            <span className="text-gray-600 ml-2">| INPUT: STABLE</span>
          </div>
        </div>
        
        {/* Protocol Status - Bottom Right */}
        <div className="absolute bottom-4 right-4 text-[10px] sm:text-xs font-mono text-amber-500/80">
          <div className="inline-block border border-amber-500/30 bg-black/60 backdrop-blur-sm px-2 py-1">
            <span className="hidden xs:inline">PROTOCOLS: </span>
            <span>VHF/UHF/HF</span>
          </div>
          <div className="mt-1 text-[8px] text-gray-600 font-mono text-right">
            LATENCY: &lt;100ms | STORAGE: LOCAL
          </div>
        </div>
      </div>

      <div className="container-responsive max-w-7xl relative z-10 pt-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Technical Status Bar */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : -20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-8"
            >
              <div className="flex items-center gap-2 font-mono text-[10px] text-amber-500/80 tracking-[0.25em] uppercase">
                <div className="relative">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  <div className="absolute inset-0 w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping opacity-75" />
                </div>
                <span>COMMUNICATION PLATFORM</span>
              </div>
              <div className="h-px w-12 bg-amber-500/20" />
              <div className="font-mono text-[10px] text-gray-600">
                MODULE: MR-SW-BBX | REV: A.2
              </div>
            </motion.div>
            
            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 0.95 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block bg-black/60 border border-gray-700/50 px-4 py-2 mb-8"
            >
              <div className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">
                SOFTWARE
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-6xl md:text-7xl lg:text-8xl font-light mb-6 tracking-tight leading-[0.95]"
            >
              <span className="block text-white/90">BlackBox</span>
            </motion.h1>
            <div className="h-px w-24 bg-amber-500/30 mb-6" />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: loaded ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-400 mb-8 leading-snug"
            >
              Intelligent Communication<br />Platform for the Ocean
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: loaded ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-500 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Advanced speech-to-text software for maritime and subsea operations. Real-time transcription, intelligent flagging, and offline-first architecture.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/contact">
                <Button 
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-black px-8 py-6 text-base font-medium rounded-full transition-all duration-300 shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20"
                >
                  Download on App Store
              </Button>
              </Link>
              <Link href="/products">
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-gray-700 text-gray-300 hover:bg-gray-900 hover:text-white px-8 py-6 text-base font-medium rounded-full transition-all duration-300"
                >
                  View Documentation
                </Button>
              </Link>
            </motion.div>

            {/* Technical Specs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center justify-center lg:justify-start gap-6 font-mono text-[9px] text-gray-600 mb-8"
            >
              <div className="flex items-center gap-2">
                <span className="text-gray-700">STORAGE:</span>
                <span className="text-amber-500/80">100% LOCAL</span>
              </div>
              <div className="w-px h-3 bg-gray-800" />
              <div className="flex items-center gap-2">
                <span className="text-gray-700">LATENCY:</span>
                <span className="text-amber-500/80">&lt;100ms</span>
              </div>
              <div className="w-px h-3 bg-gray-800" />
              <div className="flex items-center gap-2">
                <span className="text-gray-700">PRIVACY:</span>
                <span className="text-green-400/80">AIR-GAPPED</span>
              </div>
            </motion.div>
            
            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-16 grid grid-cols-3 gap-8 text-center lg:text-left"
            >
              <div className="border border-gray-800/50 bg-black/40 p-4">
                <div className="text-3xl font-light text-white mb-2 font-mono">100%</div>
                <div className="text-xs text-gray-500 font-mono">LOCAL STORAGE</div>
              </div>
              <div className="border border-gray-800/50 bg-black/40 p-4">
                <div className="text-3xl font-light text-white mb-2 font-mono">REAL-TIME</div>
                <div className="text-xs text-gray-500 font-mono">TRANSCRIBE</div>
              </div>
              <div className="border border-gray-800/50 bg-black/40 p-4">
                <div className="text-3xl font-light text-white mb-2 font-mono">OFFLINE</div>
                <div className="text-xs text-gray-500 font-mono">FIRST ARCH</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Product Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 0.95 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            {/* Phone Mockup */}
            <div className="relative mx-auto max-w-sm">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-amber-500/20 blur-3xl rounded-[3rem]" />
              
              {/* Phone frame */}
              <div className="relative bg-gradient-to-b from-gray-900 to-black rounded-[3rem] p-2 shadow-2xl">
                <div className="relative bg-black rounded-[2.5rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/80 to-transparent z-10 flex items-center justify-between px-6 pt-2">
                    <div className="text-white text-xs font-medium">9:41</div>
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 bg-white rounded-full" />
                      <div className="w-1 h-1 bg-white rounded-full" />
                      <div className="w-1 h-1 bg-white rounded-full" />
                    </div>
                  </div>

                  {/* App Interface */}
                  <div className="aspect-[9/19.5] bg-gradient-to-b from-[#0a0a0a] to-black pt-12 relative">
                    {/* DARPA Overlay on Phone */}
                    <div className="absolute top-12 left-2 right-2 z-20 pointer-events-none">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-mono text-[8px] text-amber-500/60">REF: APP-001</div>
                        <div className="font-mono text-[8px] text-gray-600">AUDIO: ACTIVE</div>
                      </div>
                    </div>
                    
                    {/* Waveform visualization */}
                    <div className="p-6 pt-16">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-xs text-gray-500 font-medium uppercase tracking-wider font-mono">LIVE AUDIO</div>
                        <div className="font-mono text-[8px] text-amber-500/60">SIG: -12dB</div>
                      </div>
                      <div className="h-24 flex items-end gap-1 mb-6">
                        {Array.from({length: 60}).map((_, i) => (
                          <motion.div
                            key={i}
                            className="bg-amber-500/60 rounded-full"
                            style={{ width: 3 }}
                            initial={{ height: 4 }}
                            animate={{ 
                              height: [4, Math.random() * 60 + 20, 4],
                            }}
                            transition={{ 
                              duration: 1 + Math.random(),
                              repeat: Infinity,
                              delay: i * 0.05
                            }}
                          />
                        ))}
                      </div>

                      {/* Transcription feed */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-xs text-gray-500 font-medium uppercase tracking-wider font-mono">TRANSCRIPTION</div>
                          <div className="font-mono text-[8px] text-green-400/80">ASR: ACTIVE</div>
                        </div>
                        {[
                          { time: "14:32", speaker: "COASTGUARD", text: "Maintain heading 120. Report at marker Bravo.", flagged: true },
                          { time: "14:33", speaker: "SCOUT_03", text: "Copy. Heading one-two-zero. ETA 3 minutes.", flagged: false },
                          { time: "14:34", speaker: "PILOT_12", text: "Winds 14kt cross. Switching to channel 3.", flagged: true },
                        ].map((msg, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1 + i * 0.3 }}
                            className={`bg-gray-900/50 rounded-lg p-3 border ${msg.flagged ? 'border-amber-500/30 bg-amber-500/5' : 'border-gray-800/50'}`}
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-[10px] text-amber-500 font-mono">{msg.time}</span>
                              <span className="text-[10px] text-gray-400 font-mono">{msg.speaker}</span>
                              {msg.flagged && (
                                <span className="text-[8px] text-amber-500 font-mono ml-auto">★ FLAGGED</span>
                              )}
                            </div>
                            <p className="text-sm text-gray-200 leading-relaxed">{msg.text}</p>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Protocol Status Footer */}
                      <div className="mt-4 pt-3 border-t border-gray-800/50">
                        <div className="flex items-center justify-between font-mono text-[8px] text-gray-600">
                          <span>PROTOCOL: VHF/UHF/HF</span>
                          <span>STORAGE: LOCAL</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

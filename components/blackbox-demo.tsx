"use client"

import { motion } from "framer-motion"

export function BlackBoxDemo() {
  return (
    <section className="relative py-32 md:py-40 bg-gradient-to-b from-[#0a0e1a] via-[#0f1625] to-[#0a0e1a] overflow-hidden border-b border-amber-500/10">
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

      <div className="container-responsive max-w-7xl relative z-10 px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20 px-4"
        >
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-6 md:mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            <div className="font-mono text-[10px] sm:text-xs text-amber-500/60 tracking-[0.2em] sm:tracking-[0.3em] uppercase">FEATURE MODULES</div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            </div>
          <div className="mb-4 md:mb-6">
            <div className="font-mono text-[8px] sm:text-[9px] text-gray-600 mb-2">REF: MR-BBX-FEAT | REV: A.2</div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-4 md:mb-6 tracking-tight text-white/90">
            Everything you need.<br />Nothing you don't.
          </h2>
          <div className="h-px w-16 md:w-24 bg-amber-500/30 mx-auto mb-4 md:mb-6" />
          <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
            Powerful features designed for mission-critical operations.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
          {[
            {
              title: "Real-Time Transcription",
              description: "Advanced speech recognition optimized for aviation and maritime terminology. Transcribes in real-time with industry-leading accuracy.",
              visual: (
                <div className="h-32 bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 flex items-end gap-1">
                  {Array.from({length: 40}).map((_, i) => (
                    <motion.div
                      key={i}
                      className="bg-amber-500/60 rounded-full"
                      style={{ width: 4 }}
                      initial={{ height: 8 }}
                      animate={{ 
                        height: [8, Math.random() * 50 + 20, 8],
                      }}
                      transition={{ 
                        duration: 1 + Math.random(),
                        repeat: Infinity,
                        delay: i * 0.05
                      }}
                    />
                  ))}
                </div>
              )
            },
            {
              title: "Intelligent Flagging",
              description: "One-tap flagging for critical communications. Smart context awareness understands mission priorities and automatically tags important messages.",
              visual: (
                <div className="h-32 bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                    <div className="h-3 bg-gray-700 rounded flex-1" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                    <div className="h-3 bg-gray-700 rounded flex-1" />
                  </div>
                  <div className="h-3 bg-gray-800 rounded flex-1" />
                </div>
              )
            },
            {
              title: "Situational Awareness",
              description: "Real-time location, altitude, speed over ground, and coordinate tracking with inline minimap visualization for complete situational awareness.",
              visual: (
                <div className="h-32 bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `
                      linear-gradient(rgba(245,158,11,0.2) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(245,158,11,0.2) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }} />
                <motion.div
                    className="absolute w-3 h-3 bg-amber-500 rounded-full shadow-[0_0_12px_rgba(245,158,11,0.8)]"
                    initial={{ left: "10%", top: "30%" }}
                    animate={{ left: ["10%", "50%", "80%", "50%", "10%"], top: ["30%", "50%", "70%", "50%", "30%"] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                </div>
              )
            },
            {
              title: "Offline-First Architecture",
              description: "All data stored locally on device. No cloud dependency, complete privacy, zero latency. Works perfectly in connectivity-constrained environments.",
              visual: (
                <div className="h-32 bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 border-2 border-gray-700 rounded-full flex items-center justify-center mb-2">
                      <div className="w-8 h-8 bg-gray-800 rounded-full" />
                    </div>
                    <div className="text-xs text-gray-600 font-medium">100% Local</div>
              </div>
            </div>
              )
            },
            {
              title: "Advanced Search",
              description: "Search entire communication history with natural language queries. Intelligent date indexing and speaker identification for instant recall.",
              visual: (
                <div className="h-32 bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 flex items-center">
                  <div className="w-full">
                    <div className="h-8 bg-gray-800 rounded-lg mb-3 flex items-center px-3">
                      <div className="w-4 h-4 border border-gray-600 rounded mr-2" />
                      <div className="h-2 bg-gray-700 rounded flex-1" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-800 rounded w-3/4" />
                      <div className="h-2 bg-gray-800 rounded w-1/2" />
                    </div>
                  </div>
                </div>
              )
            },
            {
              title: "Multi-Protocol Support",
              description: "Hardwired and wireless connections. VHF, UHF, HF, and satellite communication compatibility. Works with standard audio interfaces.",
              visual: (
                <div className="h-32 bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 flex items-center justify-center gap-4">
                  {['VHF', 'UHF', 'HF'].map((label, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="w-16 h-16 border border-gray-700 rounded-lg flex items-center justify-center"
                    >
                      <span className="text-xs text-gray-500 font-mono">{label}</span>
                    </motion.div>
                  ))}
                </div>
              )
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] rounded-3xl p-6 md:p-8 border border-gray-800/50 hover:border-amber-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(245,158,11,0.1)] flex flex-col h-full">
                {/* Technical Drawing Corners */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Feature Reference */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider">{feature.title.toUpperCase().replace(/\s+/g, '_')}</div>
                  <div className="font-mono text-[8px] text-gray-700">REF: {String(idx + 1).padStart(3, '0')}</div>
                </div>
                
                {/* Visual */}
                <div className="mb-6">
                  {feature.visual}
              </div>
                
                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl md:text-2xl font-light text-white/90 mb-3 tracking-tight">{feature.title}</h3>
                  <div className="h-px w-8 bg-amber-500/30 mb-4" />
                  <p className="text-gray-500 leading-relaxed font-light">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
          </div>
      </div>
    </section>
  )
}

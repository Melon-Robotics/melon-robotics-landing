"use client"

import { motion } from "framer-motion"

function AirMatrixVisual() {
  return (
    <div className="h-64 bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 relative overflow-hidden">
      <div className="absolute left-8 top-8 space-y-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-3 bg-amber-500/60 rounded-full"
            initial={{ height: 8 }}
            animate={{ 
              height: [8, 32, 16, 24, 12, 28],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        ))}
      </div>
      <motion.div
        className="absolute right-12 bottom-12 w-24 h-32 border-2 border-amber-500/40 rounded-lg bg-black/20"
        animate={{ y: [0, -8, 0, 6, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <div className="absolute bottom-6 left-8 text-xs text-amber-500 font-mono">
        NEUTRAL • -0.2lb
      </div>
    </div>
  )
}

function PneumaPowerVisual() {
  return (
    <div className="h-64 bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-32 h-32">
          {[1, 2, 3].map((ring, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 border-2 border-amber-500/30 rounded-full"
              style={{ scale: 1 - i * 0.2 }}
              animate={{ 
                opacity: [0.3, 0.7, 0.3],
                scale: [1 - i * 0.2, 1.1 - i * 0.2, 1 - i * 0.2]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          ))}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-light text-amber-500 mb-1">100</div>
              <div className="text-xs text-gray-500 font-mono">lbs</div>
            </div>
          </div>
        </div>
      </div>
      {Array.from({length: 4}).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 bg-amber-500/40"
          style={{ 
            left: `${20 + i * 20}%`,
            top: '20%',
            height: '60%'
          }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  )
}

function SyncMotionVisual() {
  return (
    <div className="h-64 bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full opacity-40">
          <motion.path
            d="M 50 150 Q 100 50, 150 100 T 250 80"
            stroke="#f59e0b"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>
        <motion.div
          className="absolute w-4 h-4 bg-amber-500 rounded-full shadow-[0_0_16px_rgba(245,158,11,0.8)]"
          animate={{
            x: [50, 150, 250, 150, 50],
            y: [150, 50, 100, 80, 150],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-amber-500 font-mono">
        &lt; 10ms Response
      </div>
    </div>
  )
}

export function PneumaForceDemos() {
  const features = [
    {
      title: "AirMatrix Buoyancy",
      description: "A distributed network of micro-pneumatic bladders automatically adjusts buoyancy in real-time as you change depth. Replaces traditional dive belts entirely—set your profile once and dive all day without manual adjustments. Continuously monitors depth, pressure, and equipment weight to maintain perfect trim, reducing fatigue and extending dive time by up to 3x.",
      VisualComponent: AirMatrixVisual
    },
    {
      title: "PneumaPower Assist",
      description: "100 lb (45 kg) strength augmentation powered by adaptive pneumatic actuators. Seamless integration with natural movement. The system detects when you're lifting or applying force and automatically provides proportional assistance, making heavy tools feel weightless while maintaining precise control for delicate tasks.",
      VisualComponent: PneumaPowerVisual
    },
    {
      title: "SyncMotion Interface",
      description: "Predictive AI algorithms read your muscle activation patterns through a neural sensor network to anticipate your intended movement before you fully execute it. Provides automatic leveling to maintain perfect trim in any orientation, even with heavy loads or in strong currents. Learns your movement patterns over time for increasingly intuitive control.",
      VisualComponent: SyncMotionVisual
    },
  ]

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

      <div className="container-responsive max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">TECHNOLOGY MODULES</div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
          </div>
          <div className="mb-6">
            <div className="font-mono text-[9px] text-gray-600 mb-2">REF: MR-PNF-TECH | REV: A.1</div>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight text-white/90">
            Three systems.<br />One purpose.
          </h2>
          <div className="h-px w-24 bg-amber-500/30 mx-auto mb-6" />
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
            Advanced technologies working in harmony to enhance diver performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {features.map((feature, idx) => {
            const VisualComponent = feature.VisualComponent
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] rounded-3xl p-8 border border-gray-800/50 hover:border-amber-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(245,158,11,0.1)] relative group">
                  {/* Technical Drawing Corners */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Feature Reference */}
                  <div className="mb-4 flex items-center justify-between">
                    <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider">{feature.title.toUpperCase().replace(/\s+/g, '_')}</div>
                    <div className="font-mono text-[8px] text-gray-700">REF: {String(idx + 1).padStart(3, '0')}</div>
                  </div>
                  
                  <div className="mb-6">
                    <VisualComponent />
                  </div>
                  <h3 className="text-2xl font-light text-white/90 mb-3 tracking-tight">{feature.title}</h3>
                  <div className="h-px w-8 bg-amber-500/30 mb-4" />
                  <p className="text-gray-500 leading-relaxed font-light">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

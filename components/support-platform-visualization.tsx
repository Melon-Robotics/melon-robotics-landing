"use client"

import { motion } from 'framer-motion'

interface SupportPlatformVisualizationProps {
  platformType: 'vessels' | 'buoy' | 'semisub'
}

export function SupportPlatformVisualization({ platformType }: SupportPlatformVisualizationProps) {
  if (platformType === 'buoy') {
    return <SupportBuoyVisual />
  }
  if (platformType === 'semisub') {
    return <SemiSubmersibleVisual />
  }
  if (platformType === 'vessels') {
    return <SupportVesselsVisual />
  }
  return null
}

// Support Buoy Visualization
function SupportBuoyVisual() {
  return (
    <div className="relative h-96 bg-gradient-to-br from-[#0a0e1a] to-[#0f1625] border border-amber-500/20 rounded-lg overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(245,158,11,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(245,158,11,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }} />
      
      {/* Water surface line */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
      
      {/* Buoy body */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="w-20 h-24 bg-gradient-to-b from-amber-500/50 to-amber-500/30 border-2 border-amber-500/60 rounded-t-lg relative"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Solar panels */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-1">
            {Array.from({length: 3}).map((_, i) => (
              <motion.div
                key={i}
                className="w-4 h-6 bg-gradient-to-br from-amber-500/60 to-amber-500/40 border border-amber-500/60"
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(245,158,11,0.4)',
                    '0 0 10px 3px rgba(245,158,11,0.2)',
                    '0 0 0 0 rgba(245,158,11,0.4)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
          
          {/* Antenna */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-1 h-6 bg-amber-500/60" />
        </motion.div>
      </div>
      
      {/* RF/Satellite waves above surface */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/4 -translate-x-1/2 w-32 h-32 border border-amber-500/40 rounded-full"
          animate={{
            scale: [1, 3, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
      
      {/* Acoustic waves below surface */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 bottom-1/4 -translate-x-1/2 w-40 h-40 border border-amber-500/30 rounded-full"
          animate={{
            scale: [1, 4, 1],
            opacity: [0.4, 0, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.6,
          }}
        />
      ))}
      
      {/* Scout vehicles communicating */}
      {Array.from({length: 3}).map((_, i) => {
        const angle = (i / 3) * 360
        const radius = 120
        const x = Math.cos((angle * Math.PI) / 180) * radius
        const y = Math.sin((angle * Math.PI) / 180) * radius
        
        return (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-amber-500 rounded-full"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        )
      })}
      
      {/* Connection lines to Scout vehicles */}
      {Array.from({length: 3}).map((_, i) => {
        const angle = (i / 3) * 360
        const radius = 120
        const x = Math.cos((angle * Math.PI) / 180) * radius
        const y = Math.sin((angle * Math.PI) / 180) * radius
        
        return (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: `${radius * 2}px`,
              height: `${radius * 2}px`,
            }}
          >
            <svg className="w-full h-full">
              <motion.line
                x1="50%"
                y1="50%"
                x2={`${50 + (x / radius) * 50}%`}
                y2={`${50 + (y / radius) * 50}%`}
                stroke="#f59e0b"
                strokeWidth="0.5"
                strokeDasharray="5,5"
                strokeOpacity="0.3"
                animate={{
                  strokeOpacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            </svg>
          </motion.div>
        )
      })}
      
      {/* Status readout */}
      <div className="absolute bottom-4 left-4 bg-black/80 border border-amber-500/30 rounded px-3 py-2 backdrop-blur-sm">
        <div className="font-mono text-[10px] text-amber-500/80 space-y-1">
          <div>POWER: SOLAR</div>
          <div>RF: ACTIVE</div>
          <div>SCOUTS: 3 LINKED</div>
          <div>BRIDGE: ACOUSTIC→RF</div>
        </div>
      </div>
    </div>
  )
}

// Semi-Submersible Visualization
function SemiSubmersibleVisual() {
  return (
    <div className="relative h-96 bg-gradient-to-br from-[#0a0e1a] to-[#0f1625] border border-amber-500/20 rounded-lg overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(245,158,11,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(245,158,11,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }} />
      
      {/* Water surface */}
      <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
      
      {/* Semi-submersible platform */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Main hull (mostly submerged) */}
        <motion.div
          className="w-32 h-16 bg-gradient-to-b from-amber-500/40 to-amber-500/20 border-2 border-amber-500/60 rounded-lg relative"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Low-profile superstructure */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-amber-500/30 border border-amber-500/50 rounded-t" />
          
          {/* Docking interface */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-2 bg-amber-500/50 rounded-b"
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(245,158,11,0.6)',
                '0 0 15px 5px rgba(245,158,11,0.3)',
                '0 0 0 0 rgba(245,158,11,0.6)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>
      
      {/* Approaching Scout vehicle */}
      <motion.div
        className="absolute w-8 h-4 bg-amber-500/40 border border-amber-500/60 rounded"
        animate={{
          x: [-80, 0, -80],
          y: [20, 0, 20],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 5, repeat: Infinity }}
        style={{
          left: '50%',
          top: '50%',
          marginLeft: '-16px',
          marginTop: '-8px',
        }}
      />
      
      {/* Acoustic communication waves */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-amber-500/30 rounded-full"
          animate={{
            scale: [1, 3, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.8,
          }}
        />
      ))}
      
      {/* RF/Satellite link (above surface) */}
      {[0, 1].map((i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/6 -translate-x-1/2 w-24 h-24 border border-amber-500/40 rounded-full"
          animate={{
            scale: [1, 2.5, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.8,
          }}
        />
      ))}
      
      {/* Status readout */}
      <div className="absolute bottom-4 left-4 bg-black/80 border border-amber-500/30 rounded px-3 py-2 backdrop-blur-sm">
        <div className="font-mono text-[10px] text-amber-500/80 space-y-1">
          <div>PROFILE: LOW</div>
          <div>DOCKING: READY</div>
          <div>STEALTH: ACTIVE</div>
          <div>ENDURANCE: EXTENDED</div>
        </div>
      </div>
    </div>
  )
}

// Support Vessels Visualization
function SupportVesselsVisual() {
  return (
    <div className="relative h-96 bg-gradient-to-br from-[#0a0e1a] to-[#0f1625] border border-amber-500/20 rounded-lg overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(245,158,11,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(245,158,11,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }} />
      
      {/* Water surface */}
      <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
      
      {/* Vessel hull */}
      <div className="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="w-40 h-12 bg-gradient-to-b from-amber-500/40 to-amber-500/20 border-2 border-amber-500/60 rounded-lg relative"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Superstructure */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-amber-500/30 border border-amber-500/50 rounded-t-lg" />
          
          {/* Crane/hoist */}
          <motion.div
            className="absolute top-0 right-4 w-1 h-16 bg-amber-500/40 origin-top"
            animate={{ rotate: [-15, 15, -15] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            {/* Cable */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-12 bg-amber-500/40"
              animate={{ height: [48, 24, 48] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {/* Scout being recovered */}
              <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-3 bg-amber-500/60 rounded"
                animate={{ y: [0, 24, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scout vehicles in water */}
      {Array.from({length: 2}).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-2 bg-amber-500/50 border border-amber-500/60 rounded"
          style={{
            left: `${30 + i * 40}%`,
            top: '75%',
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
      
      {/* Communication links */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {Array.from({length: 2}).map((_, i) => (
          <motion.line
            key={i}
            x1={`${30 + i * 40}%`}
            y1="75%"
            x2="50%"
            y2="66%"
            stroke="#f59e0b"
            strokeWidth="0.5"
            strokeDasharray="5,5"
            strokeOpacity="0.3"
            animate={{
              strokeOpacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </svg>
      
      {/* RF/Satellite link */}
      {[0, 1].map((i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/4 -translate-x-1/2 w-32 h-32 border border-amber-500/40 rounded-full"
          animate={{
            scale: [1, 2.5, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.8,
          }}
        />
      ))}
      
      {/* Status readout */}
      <div className="absolute bottom-4 left-4 bg-black/80 border border-amber-500/30 rounded px-3 py-2 backdrop-blur-sm">
        <div className="font-mono text-[10px] text-amber-500/80 space-y-1">
          <div>STATUS: OPERATIONAL</div>
          <div>SCOUTS: 2 ACTIVE</div>
          <div>MODE: RECOVERY</div>
          <div>COMMS: RF/SAT</div>
        </div>
      </div>
    </div>
  )
}


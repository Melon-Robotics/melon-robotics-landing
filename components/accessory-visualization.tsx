"use client"

import { motion } from 'framer-motion'
import type { ScoutAccessory } from '@/lib/data/scout-accessories'

interface AccessoryVisualizationProps {
  accessory: ScoutAccessory
}

export function AccessoryVisualization({ accessory }: AccessoryVisualizationProps) {
  // Sonar visualizations
  if (accessory.id === 'sensor-multibeam-sonar') {
    return <MultiBeamSonarVisual />
  }
  if (accessory.id === 'sensor-sidescan-sonar') {
    return <SideScanSonarVisual />
  }
  
  // Laser scanner
  if (accessory.id === 'sensor-laser-scanner') {
    return <LaserScannerVisual />
  }
  
  // Chemical sampler
  if (accessory.id === 'sensor-chemical-sampler') {
    return <ChemicalSamplerVisual />
  }
  
  // Magnetometer
  if (accessory.id === 'sensor-magnetometer') {
    return <MagnetometerVisual />
  }
  
  // CTD Profiler
  if (accessory.id === 'sensor-ctd-probe') {
    return <CTDProfilerVisual />
  }
  
  // Communication devices
  if (accessory.id === 'comm-satellite-modem') {
    return <SatelliteModemVisual />
  }
  if (accessory.id === 'comm-acoustic-modem') {
    return <AcousticModemVisual />
  }
  
  // Power systems
  if (accessory.id === 'power-extended-battery') {
    return <BatteryPackVisual />
  }
  if (accessory.id === 'power-solar-charger') {
    return <SolarChargerVisual />
  }
  
  // Payload systems
  if (accessory.id === 'payload-manipulator-arm') {
    return <ManipulatorArmVisual />
  }
  if (accessory.id === 'payload-sampling-basket') {
    return <SamplingBasketVisual />
  }
  if (accessory.id === 'payload-tool-deployment') {
    return <ToolDeploymentVisual />
  }
  
  // Peripherals
  if (accessory.id === 'peripheral-docking-station') {
    return <DockingStationVisual />
  }
  if (accessory.id === 'peripheral-launch-recovery') {
    return <LaunchRecoveryVisual />
  }
  
  // Default fallback
  return <DefaultAccessoryVisual category={accessory.category} />
}

// Multi-Beam Sonar Visualization
function MultiBeamSonarVisual() {
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
      
      {/* Sonar sweep */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-32 bg-gradient-to-t from-amber-500/60 via-amber-500/40 to-transparent origin-bottom"
            style={{
              transform: `rotate(${angle}deg)`,
              left: '50%',
              bottom: '50%',
              marginLeft: '-2px',
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scaleY: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.25,
            }}
          />
        ))}
      </div>
      
      {/* Center point */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="w-4 h-4 bg-amber-500 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.div
          className="absolute inset-0 w-4 h-4 border-2 border-amber-500/50 rounded-full"
          animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>
      
      {/* Range indicators */}
      <div className="absolute bottom-4 left-4 bg-black/80 border border-amber-500/30 rounded px-3 py-2">
        <div className="font-mono text-[10px] text-amber-500/80 space-y-1">
          <div>RANGE: 200M</div>
          <div>BEAMS: 360°</div>
          <div>RES: 2CM</div>
        </div>
      </div>
    </div>
  )
}

// Side-Scan Sonar Visualization
function SideScanSonarVisual() {
  return (
    <div className="relative h-96 bg-gradient-to-br from-[#0a0e1a] to-[#0f1625] border border-amber-500/20 rounded-lg overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(245,158,11,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(245,158,11,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }} />
      
      {/* Side-scan beams */}
      <div className="absolute inset-0">
        {/* Left side scan */}
        <motion.div
          className="absolute left-0 top-1/2 w-1/2 h-32 bg-gradient-to-r from-amber-500/40 to-transparent origin-left"
          style={{ transform: 'rotate(-30deg)' }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scaleX: [0.5, 1, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Right side scan */}
        <motion.div
          className="absolute right-0 top-1/2 w-1/2 h-32 bg-gradient-to-l from-amber-500/40 to-transparent origin-right"
          style={{ transform: 'rotate(30deg)' }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scaleX: [0.5, 1, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
      </div>
      
      {/* Center vehicle */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-8 h-4 bg-amber-500/60 rounded" />
      </div>
      
      {/* Bottom readout */}
      <div className="absolute bottom-4 left-4 bg-black/80 border border-amber-500/30 rounded px-3 py-2">
        <div className="font-mono text-[10px] text-amber-500/80 space-y-1">
          <div>SWATH: 300M</div>
          <div>RANGE: 150M/SIDE</div>
        </div>
      </div>
    </div>
  )
}

// Laser Scanner Visualization
function LaserScannerVisual() {
  return (
    <div className="relative h-96 bg-gradient-to-br from-[#0a0e1a] to-[#0f1625] border border-amber-500/20 rounded-lg overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(245,158,11,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(245,158,11,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }} />
      
      {/* Scanning laser lines */}
      {Array.from({length: 12}).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent"
          style={{ top: `${(i * 8) + 5}%` }}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.15,
          }}
        />
      ))}
      
      {/* Point cloud effect */}
      <div className="absolute inset-0">
        {Array.from({length: 50}).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Status */}
      <div className="absolute bottom-4 left-4 bg-black/80 border border-amber-500/30 rounded px-3 py-2">
        <div className="font-mono text-[10px] text-amber-500/80 space-y-1">
          <div>SCANNING: ACTIVE</div>
          <div>POINTS: 1M/sec</div>
          <div>ACCURACY: ±2MM</div>
        </div>
      </div>
    </div>
  )
}

// Chemical Sampler Visualization
function ChemicalSamplerVisual() {
  return (
    <div className="relative h-96 bg-gradient-to-br from-[#0a0e1a] to-[#0f1625] border border-amber-500/20 rounded-lg overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(245,158,11,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(245,158,11,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }} />
      
      {/* Sample chambers */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-4 gap-3">
          {Array.from({length: 12}).map((_, i) => (
            <motion.div
              key={i}
              className="w-12 h-16 border border-amber-500/30 bg-black/40 rounded relative overflow-hidden"
              animate={{
                borderColor: ['rgba(245,158,11,0.3)', 'rgba(245,158,11,0.8)', 'rgba(245,158,11,0.3)'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            >
              {/* Liquid level animation */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-amber-500/40"
                animate={{
                  height: ['0%', '60%', '0%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Status */}
      <div className="absolute bottom-4 left-4 bg-black/80 border border-amber-500/30 rounded px-3 py-2">
        <div className="font-mono text-[10px] text-amber-500/80 space-y-1">
          <div>CHAMBERS: 12</div>
          <div>ANALYZING: ACTIVE</div>
        </div>
      </div>
    </div>
  )
}

// Magnetometer Visualization
function MagnetometerVisual() {
  return (
    <div className="relative h-96 bg-gradient-to-br from-[#0a0e1a] to-[#0f1625] border border-amber-500/20 rounded-lg overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(245,158,11,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(245,158,11,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }} />
      
      {/* Magnetic field lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        {Array.from({length: 8}).map((_, i) => {
          const angle = (i / 8) * 360
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-24 bg-gradient-to-t from-amber-500/60 via-amber-500/40 to-transparent origin-bottom"
              style={{
                transform: `rotate(${angle}deg)`,
                left: '50%',
                top: '50%',
                marginLeft: '-2px',
                marginTop: '-48px',
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scaleY: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          )
        })}
      </div>
      
      {/* Center sensor */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="w-6 h-6 border-2 border-amber-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      
      {/* Readout */}
      <div className="absolute bottom-4 left-4 bg-black/80 border border-amber-500/30 rounded px-3 py-2">
        <div className="font-mono text-[10px] text-amber-500/80 space-y-1">
          <div>SENSITIVITY: 0.01 nT</div>
          <div>FIELD: STABLE</div>
        </div>
      </div>
    </div>
  )
}

// CTD Profiler Visualization
function CTDProfilerVisual() {
  return (
    <div className="relative h-96 bg-gradient-to-br from-[#0a0e1a] to-[#0f1625] border border-amber-500/20 rounded-lg overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(245,158,11,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(245,158,11,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }} />
      
      {/* Depth scale */}
      <div className="absolute left-4 top-4 bottom-4 w-12 flex flex-col justify-between">
        {[0, 1000, 2000, 3000, 4000, 5000, 6000].map((depth) => (
          <div key={depth} className="flex items-center gap-2">
            <div className="w-8 h-px bg-amber-500/30" />
            <span className="font-mono text-[10px] text-amber-500/60">{depth}m</span>
          </div>
        ))}
      </div>
      
      {/* Profiling line */}
      <div className="absolute left-20 right-4 top-4 bottom-4">
        <motion.div
          className="absolute w-full h-1 bg-gradient-to-r from-amber-500/60 to-amber-500/20"
          animate={{
            top: ['0%', '100%', '0%'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Data points */}
        {Array.from({length: 20}).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-amber-500 rounded-full"
            style={{ left: `${(i / 19) * 100}%` }}
            animate={{
              top: ['0%', '100%', '0%'],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: (i / 19) * 0.1,
            }}
          />
        ))}
      </div>
      
      {/* Readout */}
      <div className="absolute bottom-4 right-4 bg-black/80 border border-amber-500/30 rounded px-3 py-2">
        <div className="font-mono text-[10px] text-amber-500/80 space-y-1">
          <div>DEPTH: 0-6000M</div>
          <div>RATE: 24 Hz</div>
        </div>
      </div>
    </div>
  )
}

// Satellite Modem Visualization
function SatelliteModemVisual() {
  return (
    <div className="relative h-96 bg-gradient-to-br from-[#0a0e1a] to-[#0f1625] border border-amber-500/20 rounded-lg overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(245,158,11,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(245,158,11,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }} />
      
      {/* Satellite */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2">
        <motion.div
          className="w-8 h-8 border-2 border-amber-500/60 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-amber-500 rounded-full" />
          </div>
        </motion.div>
      </div>
      
      {/* Signal waves */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-8 -translate-x-1/2 w-16 h-16 border border-amber-500/40 rounded-full"
          animate={{
            scale: [1, 3, 1],
            opacity: [0.8, 0, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.6,
          }}
        />
      ))}
      
      {/* Ground station */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-12 h-8 bg-amber-500/40 rounded-t-lg border border-amber-500/60" />
        <div className="w-16 h-1 bg-amber-500/60 mx-auto mt-1" />
      </div>
      
      {/* Status */}
      <div className="absolute bottom-4 left-4 bg-black/80 border border-amber-500/30 rounded px-3 py-2">
        <div className="font-mono text-[10px] text-amber-500/80 space-y-1">
          <div>NETWORK: IRIDIUM</div>
          <div>RATE: 2.4 kbps</div>
          <div>STATUS: CONNECTED</div>
        </div>
      </div>
    </div>
  )
}

// Acoustic Modem Visualization
function AcousticModemVisual() {
  return (
    <div className="relative h-96 bg-gradient-to-br from-[#0a0e1a] to-[#0f1625] border border-amber-500/20 rounded-lg overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(245,158,11,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(245,158,11,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }} />
      
      {/* Acoustic waves */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border border-amber-500/40 rounded-full"
            animate={{
              scale: [1, 4, 1],
              opacity: [0.8, 0, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </div>
      
      {/* Center modem */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="w-12 h-12 bg-amber-500/40 border-2 border-amber-500/60 rounded-lg"
          animate={{
            boxShadow: [
              '0 0 0 0 rgba(245,158,11,0.7)',
              '0 0 0 10px rgba(245,158,11,0)',
              '0 0 0 0 rgba(245,158,11,0.7)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
      
      {/* Status */}
      <div className="absolute bottom-4 left-4 bg-black/80 border border-amber-500/30 rounded px-3 py-2">
        <div className="font-mono text-[10px] text-amber-500/80 space-y-1">
          <div>RANGE: 5-10 KM</div>
          <div>RATE: 10-20 kbps</div>
          <div>MESH: ACTIVE</div>
        </div>
      </div>
    </div>
  )
}

// Battery Pack Visualization
function BatteryPackVisual() {
  return (
    <div className="relative h-96 bg-gradient-to-br from-[#0a0e1a] to-[#0f1625] border border-amber-500/20 rounded-lg overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(245,158,11,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(245,158,11,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }} />
      
      {/* Battery cells */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-4">
          {Array.from({length: 4}).map((_, i) => (
            <motion.div
              key={i}
              className="w-20 h-32 border-2 border-amber-500/40 bg-black/40 rounded relative overflow-hidden"
            >
              {/* Charge level */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-500/60 to-amber-500/40"
                animate={{
                  height: ['20%', '85%', '20%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
              {/* Terminal */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-2 bg-amber-500/60 rounded-t" />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Status */}
      <div className="absolute bottom-4 left-4 bg-black/80 border border-amber-500/30 rounded px-3 py-2">
        <div className="font-mono text-[10px] text-amber-500/80 space-y-1">
          <div>CAPACITY: 8 kWh</div>
          <div>STATUS: CHARGING</div>
        </div>
      </div>
    </div>
  )
}

// Solar Charger Visualization
function SolarChargerVisual() {
  return (
    <div className="relative h-96 bg-gradient-to-br from-[#0a0e1a] to-[#0f1625] border border-amber-500/20 rounded-lg overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(245,158,11,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(245,158,11,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }} />
      
      {/* Solar panels */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2">
        <div className="grid grid-cols-3 gap-2">
          {Array.from({length: 6}).map((_, i) => (
            <motion.div
              key={i}
              className="w-16 h-20 bg-gradient-to-br from-amber-500/40 to-amber-500/20 border border-amber-500/60"
              animate={{
                boxShadow: [
                  '0 0 0 0 rgba(245,158,11,0.4)',
                  '0 0 20px 5px rgba(245,158,11,0.2)',
                  '0 0 0 0 rgba(245,158,11,0.4)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Energy flow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          className="w-24 h-16 border-2 border-amber-500/40 bg-black/40 rounded"
          animate={{
            borderColor: ['rgba(245,158,11,0.4)', 'rgba(245,158,11,0.8)', 'rgba(245,158,11,0.4)'],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        {/* Energy flow lines */}
        {Array.from({length: 3}).map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-amber-500/60 to-transparent"
            style={{ bottom: `${16 + i * 12}px` }}
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
      
      {/* Status */}
      <div className="absolute bottom-4 left-4 bg-black/80 border border-amber-500/30 rounded px-3 py-2">
        <div className="font-mono text-[10px] text-amber-500/80 space-y-1">
          <div>ARRAY: 2 kW</div>
          <div>OUTPUT: ACTIVE</div>
        </div>
      </div>
    </div>
  )
}

// Manipulator Arm Visualization
function ManipulatorArmVisual() {
  return (
    <div className="relative h-96 bg-gradient-to-br from-[#0a0e1a] to-[#0f1625] border border-amber-500/20 rounded-lg overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(245,158,11,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(245,158,11,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }} />
      
      {/* Arm segments */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        {/* Base */}
        <div className="w-12 h-12 bg-amber-500/40 border border-amber-500/60 rounded-full mx-auto mb-2" />
        
        {/* Segment 1 */}
        <motion.div
          className="w-1 h-24 bg-gradient-to-t from-amber-500/60 to-amber-500/40 mx-auto origin-bottom"
          animate={{ rotate: [-30, 30, -30] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          {/* Segment 2 */}
          <motion.div
            className="w-1 h-20 bg-gradient-to-t from-amber-500/60 to-amber-500/40 origin-bottom"
            animate={{ rotate: [20, -20, 20] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            {/* Gripper */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-1"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-2 h-4 bg-amber-500/60 rounded-t" />
              <div className="w-2 h-4 bg-amber-500/60 rounded-t" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Status */}
      <div className="absolute bottom-4 left-4 bg-black/80 border border-amber-500/30 rounded px-3 py-2">
        <div className="font-mono text-[10px] text-amber-500/80 space-y-1">
          <div>DOF: 6</div>
          <div>REACH: 1.2M</div>
          <div>STATUS: ACTIVE</div>
        </div>
      </div>
    </div>
  )
}

// Sampling Basket Visualization
function SamplingBasketVisual() {
  return (
    <div className="relative h-96 bg-gradient-to-br from-[#0a0e1a] to-[#0f1625] border border-amber-500/20 rounded-lg overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(245,158,11,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(245,158,11,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }} />
      
      {/* Basket */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-4 gap-2">
          {Array.from({length: 8}).map((_, i) => (
            <motion.div
              key={i}
              className="w-14 h-16 border-2 border-amber-500/40 bg-black/40 rounded relative overflow-hidden"
              animate={{
                borderColor: ['rgba(245,158,11,0.4)', 'rgba(245,158,11,0.8)', 'rgba(245,158,11,0.4)'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            >
              {/* Sample indicator */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1/2 bg-amber-500/30 rounded-b"
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Status */}
      <div className="absolute bottom-4 left-4 bg-black/80 border border-amber-500/30 rounded px-3 py-2">
        <div className="font-mono text-[10px] text-amber-500/80 space-y-1">
          <div>CHAMBERS: 8</div>
          <div>CAPACITY: 2L/CH</div>
        </div>
      </div>
    </div>
  )
}

// Tool Deployment Visualization
function ToolDeploymentVisual() {
  return (
    <div className="relative h-96 bg-gradient-to-br from-[#0a0e1a] to-[#0f1625] border border-amber-500/20 rounded-lg overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(245,158,11,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(245,158,11,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }} />
      
      {/* Tool slots */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex gap-4">
          {Array.from({length: 3}).map((_, i) => (
            <motion.div
              key={i}
              className="w-16 h-20 border-2 border-amber-500/40 bg-black/40 rounded relative"
              animate={{
                y: [0, -10, 0],
                borderColor: ['rgba(245,158,11,0.4)', 'rgba(245,158,11,0.8)', 'rgba(245,158,11,0.4)'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            >
              {/* Tool indicator */}
              <div className="absolute inset-2 border border-amber-500/30 rounded" />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Status */}
      <div className="absolute bottom-4 left-4 bg-black/80 border border-amber-500/30 rounded px-3 py-2">
        <div className="font-mono text-[10px] text-amber-500/80 space-y-1">
          <div>SLOTS: 3</div>
          <div>CAPACITY: 10 kg</div>
        </div>
      </div>
    </div>
  )
}

// Docking Station Visualization
function DockingStationVisual() {
  return (
    <div className="relative h-96 bg-gradient-to-br from-[#0a0e1a] to-[#0f1625] border border-amber-500/20 rounded-lg overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(245,158,11,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(245,158,11,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }} />
      
      {/* Docking station */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Station base */}
        <div className="w-32 h-32 border-2 border-amber-500/40 bg-black/40 rounded-lg relative">
          {/* Charging pad */}
          <motion.div
            className="absolute inset-4 border-2 border-amber-500/60 rounded"
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(245,158,11,0.6)',
                '0 0 20px 10px rgba(245,158,11,0.3)',
                '0 0 0 0 rgba(245,158,11,0.6)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        
        {/* Approaching vehicle */}
        <motion.div
          className="absolute w-12 h-6 bg-amber-500/40 border border-amber-500/60 rounded"
          animate={{
            x: [-100, 0, -100],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>
      
      {/* Status */}
      <div className="absolute bottom-4 left-4 bg-black/80 border border-amber-500/30 rounded px-3 py-2">
        <div className="font-mono text-[10px] text-amber-500/80 space-y-1">
          <div>STATUS: STANDBY</div>
          <div>CHARGING: READY</div>
        </div>
      </div>
    </div>
  )
}

// Launch & Recovery Visualization
function LaunchRecoveryVisual() {
  return (
    <div className="relative h-96 bg-gradient-to-br from-[#0a0e1a] to-[#0f1625] border border-amber-500/20 rounded-lg overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(245,158,11,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(245,158,11,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }} />
      
      {/* Crane/hoist */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Base */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-24 h-2 bg-amber-500/40" />
        
        {/* Mast */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-1 h-32 bg-amber-500/40" />
        
        {/* Boom */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-1 h-24 bg-amber-500/40 origin-top"
          animate={{ rotate: [-20, 20, -20] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {/* Cable */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-amber-500/40"
            animate={{ height: [64, 32, 64] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {/* Vehicle */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-4 bg-amber-500/60 rounded"
              animate={{ y: [0, 32, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Status */}
      <div className="absolute bottom-4 left-4 bg-black/80 border border-amber-500/30 rounded px-3 py-2">
        <div className="font-mono text-[10px] text-amber-500/80 space-y-1">
          <div>MODE: RECOVERY</div>
          <div>CAPACITY: 200 kg</div>
        </div>
      </div>
    </div>
  )
}

// Default fallback visualization
function DefaultAccessoryVisual({ category }: { category: string }) {
  return (
    <div className="relative h-96 bg-gradient-to-br from-[#0a0e1a] to-[#0f1625] border border-amber-500/20 rounded-lg overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(245,158,11,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(245,158,11,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }} />
      
      <motion.div
        className="w-32 h-32 border-2 border-amber-500/40 rounded-lg"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          scale: { duration: 2, repeat: Infinity },
        }}
      />
      
      <div className="absolute bottom-4 left-4 bg-black/80 border border-amber-500/30 rounded px-3 py-2">
        <div className="font-mono text-[10px] text-amber-500/80">
          CATEGORY: {category.toUpperCase()}
        </div>
      </div>
    </div>
  )
}


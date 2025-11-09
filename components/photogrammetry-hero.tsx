"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function PhotogrammetryHero() {
  const [pointCloudPositions, setPointCloudPositions] = useState<Array<{ left: number; top: number; delay: number }>>([])

  useEffect(() => {
    // Generate positions only on client to avoid hydration mismatch
    setPointCloudPositions(
      Array.from({ length: 80 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 1.5,
      }))
    )
  }, [])

  return (
    <section className="relative min-h-[85vh] bg-[#0a0e1a] overflow-hidden flex items-center justify-center pt-20">
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

      {/* Depth Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0f1625] to-[#1a2332]" />

      {/* Point Cloud Visualization - Left Side */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block w-48 h-48">
        <div className="relative w-full h-full border border-amber-500/20 bg-black/40 p-4">
          <div className="font-mono text-[8px] text-amber-500/60 mb-2">POINT CLOUD</div>
          {pointCloudPositions.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 bg-amber-500/70"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: 2, repeat: Infinity, delay: pos.delay }}
            />
          ))}
        </div>
      </div>

      {/* 3D Model Stats - Right Side */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="border border-gray-800/50 bg-black/60 p-4">
          <div className="font-mono text-[9px] text-gray-600 mb-3">MODEL STATS</div>
          <div className="space-y-2">
            {[
              { label: "POINTS", value: "2.4M" },
              { label: "ACCURACY", value: "±2mm" },
              { label: "RESOLUTION", value: "0.5mm" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                className="flex items-center justify-between"
              >
                <span className="text-[8px] text-gray-600 font-mono">{stat.label}</span>
                <span className="text-xs text-amber-500/80 font-mono">{stat.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-responsive relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Technical Status Bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="flex items-center gap-2 font-mono text-[10px] text-amber-500/80 tracking-[0.25em] uppercase">
              <div className="relative">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                <div className="absolute inset-0 w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping opacity-75" />
              </div>
              <span>3D PHOTOGRAMMETRY MODULE</span>
            </div>
            <div className="h-px w-12 bg-amber-500/20" />
            <div className="font-mono text-[10px] text-gray-600">
              MODULE: MR-SVC-PHOTO | REV: A.3
            </div>
          </motion.div>

          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-block bg-black/60 border border-gray-700/50 px-4 py-2 mb-8"
          >
            <div className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">
              INSPECTION
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight leading-[0.95]"
          >
            <span className="block text-white/90">Millimeter-Accurate</span>
            <span className="block text-amber-500/90 font-normal">3D Mapping</span>
          </motion.h1>
          <div className="h-px w-24 bg-amber-500/30 mx-auto mb-6" />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-amber-500/80 mb-6 font-light leading-snug"
          >
            High-resolution 3D reconstructions for structures, wrecks, habitats, and engineering projects
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto font-light mb-8"
          >
            Professional photogrammetric survey services producing centimeter-accurate 3D models with photorealistic textures. Advanced processing workflows deliver orthomosaics, point clouds, and CAD-ready files for engineering analysis, change detection, and virtual documentation.
          </motion.p>

          {/* Technical Specs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center justify-center gap-6 font-mono text-[9px] text-gray-600"
          >
            <div className="flex items-center gap-2">
              <span className="text-gray-700">ACCURACY:</span>
              <span className="text-amber-500/80">±2mm</span>
            </div>
            <div className="w-px h-3 bg-gray-800" />
            <div className="flex items-center gap-2">
              <span className="text-gray-700">RESOLUTION:</span>
              <span className="text-amber-500/80">0.5mm</span>
            </div>
            <div className="w-px h-3 bg-gray-800" />
            <div className="flex items-center gap-2">
              <span className="text-gray-700">FORMAT:</span>
              <span className="text-amber-500/80">OBJ/PLY/LAS</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Technical Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
    </section>
  )
}



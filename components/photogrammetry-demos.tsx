"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function PhotogrammetryDemos() {
  return (
    <section className="relative py-32 md:py-40 px-4 border-b border-amber-500/10 bg-gradient-to-b from-[#0a0e1a] to-black overflow-hidden">
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-28"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">PROCESSING WORKFLOW</div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 text-white/90">
            Capture •<br />Reconstruct • Measure
          </h2>
          <p className="text-base md:text-lg text-gray-500 font-light max-w-xl leading-relaxed">
            Advanced photogrammetric processing pipeline transforming thousands of images into millimeter-accurate 3D models with photorealistic textures and precise measurements.
          </p>
        </motion.div>

        {/* Demo Panels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-16">
          {/* Image Capture */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="group relative"
          >
            <div className="relative border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 transition-all duration-500 hover:border-amber-500/30 hover:shadow-[0_0_40px_rgba(245,158,11,0.1)]">
              {/* Technical Drawing Corners */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Panel Header */}
              <div className="mb-4 flex items-center justify-between">
                <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider">IMAGE CAPTURE</div>
                <div className="font-mono text-[8px] text-gray-700">REF: CAP-001</div>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-4 gap-1 mb-6">
                {Array.from({length:16}).map((_,i)=> (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.02 }}
                    className="h-12 bg-gray-800/60 border border-gray-700/30"
                  />
                ))}
              </div>

              {/* Stats */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500 font-mono text-[9px]">TOTAL IMAGES</span>
                  <span className="text-amber-500/80 font-mono">2,847</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500 font-mono text-[9px]">OVERLAP</span>
                  <span className="text-amber-500/80 font-mono">80%</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500 font-mono text-[9px]">RESOLUTION</span>
                  <span className="text-amber-500/80 font-mono">4K</span>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6">
                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  Systematic image capture with precise overlap and positioning. High-resolution photography ensures optimal feature matching and texture quality for accurate reconstruction.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Reconstruction Pipeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="group relative"
          >
            <div className="relative border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 transition-all duration-500 hover:border-amber-500/30 hover:shadow-[0_0_40px_rgba(245,158,11,0.1)]">
              {/* Technical Drawing Corners */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Panel Header */}
              <div className="mb-4 flex items-center justify-between">
                <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider">RECONSTRUCTION</div>
                <div className="font-mono text-[8px] text-gray-700">REF: REC-001</div>
              </div>

              {/* Processing Steps */}
              <div className="space-y-2">
                {[
                  { name: "Feature Matching", status: "COMPLETE", progress: 100 },
                  { name: "Sparse Cloud", status: "COMPLETE", progress: 100 },
                  { name: "Dense Cloud", status: "PROCESSING", progress: 85 },
                  { name: "Mesh Generation", status: "PENDING", progress: 0 },
                  { name: "Texture Mapping", status: "PENDING", progress: 0 },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="border border-gray-800/50 bg-black/40 p-3"
                  >
                    <div className="flex items-center justify-between text-xs text-gray-300 mb-2">
                      <span className="font-light">{s.name}</span>
                      <span className="text-amber-500/80 font-mono text-[9px]">{s.status}</span>
                    </div>
                    <div className="h-1 bg-gray-800">
                      <motion.div
                        className="h-1 bg-amber-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Description */}
              <div className="mt-6">
                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  Multi-stage reconstruction pipeline from feature detection through dense point cloud generation to final textured mesh. Each stage validated for accuracy and quality before proceeding.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Measurement & Analysis */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative"
          >
            <div className="relative border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 transition-all duration-500 hover:border-amber-500/30 hover:shadow-[0_0_40px_rgba(245,158,11,0.1)]">
              {/* Technical Drawing Corners */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Panel Header */}
              <div className="mb-4 flex items-center justify-between">
                <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider">MEASUREMENT</div>
                <div className="font-mono text-[8px] text-gray-700">REF: MSR-001</div>
              </div>

              {/* Measurement Display */}
              <div className="h-56 relative overflow-hidden border border-gray-800/50 bg-black/40 mb-6">
                {/* Ruler */}
                <div className="absolute left-6 right-6 top-10 h-0.5 bg-amber-500/60" />
                <div className="absolute left-6 top-10 w-px h-6 bg-amber-500/60" />
                <div className="absolute right-6 top-10 w-px h-6 bg-amber-500/60" />
                <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] text-amber-500 font-mono">2.34 m</div>
                
                {/* Change Detection Bars */}
                <div className="absolute bottom-6 left-6 right-6 grid grid-cols-6 gap-1">
                  {Array.from({length:6}).map((_,i)=> (
                    <motion.div
                      key={i}
                      className="bg-amber-500/70"
                      initial={{ height: 4 }}
                      animate={{ height: [8, 20, 12, 18, 10, 24][i] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i*0.15 }}
                    />
                  ))}
                </div>
              </div>

              {/* Measurement Stats */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500 font-mono text-[9px]">ACCURACY</span>
                  <span className="text-amber-500/80 font-mono">±2mm</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500 font-mono text-[9px]">POINTS</span>
                  <span className="text-amber-500/80 font-mono">2.4M</span>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6">
                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  Precise dimensional analysis with millimeter accuracy. Volume calculations, deformation monitoring, and temporal change detection for structural integrity assessment.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Capabilities Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-8 md:p-10"
        >
          <div className="mb-6">
            <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-4">CAPABILITIES OVERVIEW</div>
            <div className="h-px w-12 bg-amber-500/30 mb-6" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Multi-View Reconstruction",
                description: "Thousands of precisely positioned images stitched into seamless 3D models with photorealistic textures. Advanced algorithms ensure optimal feature matching and minimal distortion across all viewing angles.",
                spec: "2.4M Points • ±2mm Accuracy • 0.5mm Resolution"
              },
              {
                title: "Measurements & Volume Analysis",
                description: "Precise dimensional analysis, volume calculations, and deformation monitoring from 3D data. Export measurements directly to CAD systems for engineering analysis and documentation.",
                spec: "Volume Calc • Deformation Tracking • CAD Export"
              },
              {
                title: "Change Detection",
                description: "Temporal comparison of structures to identify degradation, corrosion, or movement over time. Quantitative analysis of changes between survey periods with detailed reporting.",
                spec: "Temporal Analysis • Quantitative Reports • Trend Tracking"
              },
            ].map((cap, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                <div className="absolute top-0 right-0">
                  <div className="font-mono text-[8px] text-gray-700">REF: {String(idx + 1).padStart(2, '0')}</div>
                </div>
                <h3 className="text-lg md:text-xl font-light text-white/90 mb-3 tracking-tight pr-8">{cap.title}</h3>
                <div className="h-px w-8 bg-amber-500/30 mb-4" />
                <p className="text-sm text-gray-400 leading-relaxed font-light mb-4">{cap.description}</p>
                <div className="font-mono text-[9px] text-amber-500/70">{cap.spec}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <Link href="/contact">
            <Button className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 px-12 py-8 text-sm font-mono tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] backdrop-blur-sm">
              Request Photogrammetry Quote
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}



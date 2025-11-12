"use client"

import { motion } from "framer-motion"

export function PhotogrammetryExplainer() {
  return (
    <section className="relative py-32 md:py-40 px-4 border-b border-amber-500/10 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] overflow-hidden">
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
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-8 relative group"
            >
              <div className="absolute top-0 right-0">
                <div className="font-mono text-[8px] text-gray-700">REF: 01</div>
              </div>
              <div className="mb-4">
                <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-2">WHAT IT IS</div>
                <div className="h-px w-8 bg-amber-500/30 mb-4" />
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-white/90 mb-4 tracking-tight">3D Photogrammetry</h3>
              <p className="text-base text-gray-400 leading-relaxed font-light">
                Advanced photogrammetric processing transforms thousands of precisely positioned underwater images into millimeter-accurate 3D models. Multi-view stereo reconstruction algorithms analyze image overlap and feature matching to generate dense point clouds, which are then processed into high-resolution meshes with photorealistic textures.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-8 relative group"
            >
              <div className="absolute top-0 right-0">
                <div className="font-mono text-[8px] text-gray-700">REF: 02</div>
              </div>
              <div className="mb-4">
                <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-2">WHY IT MATTERS</div>
                <div className="h-px w-8 bg-amber-500/30 mb-4" />
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-white/90 mb-4 tracking-tight">Precision Documentation</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <div className="mt-2">
                    <div className="w-1 h-1 bg-amber-500/60" />
                  </div>
                  <span className="text-sm leading-relaxed font-light">Enable precise engineering analysis with millimeter-accurate 3D models that integrate directly into CAD systems.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2">
                    <div className="w-1 h-1 bg-amber-500/60" />
                  </div>
                  <span className="text-sm leading-relaxed font-light">Monitor structural changes over time with temporal comparison analysis, detecting deformation before critical failure.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2">
                    <div className="w-1 h-1 bg-amber-500/60" />
                  </div>
                  <span className="text-sm leading-relaxed font-light">Reduce inspection costs and downtime by creating comprehensive digital records.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

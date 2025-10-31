"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function PhotogrammetryExplainer() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(#f59e0b20 1px, transparent 1px), linear-gradient(90deg, #f59e0b20 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-6xl mx-auto">
          {/* What & Why */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="border border-amber-500/20 bg-black/40 p-6">
              <h3 className="text-xl font-bold text-amber-100 mb-3">What it is</h3>
              <p className="text-gray-300">Professional underwater photogrammetry that produces centimeter- to millimeter-accurate 3D models, orthomosaics, and point clouds for engineering, archaeology, and environmental monitoring.</p>
            </div>
            <div className="border border-amber-500/20 bg-black/40 p-6">
              <h3 className="text-xl font-bold text-amber-100 mb-3">Why it matters</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Quantitative measurements and change detection over time.</li>
                <li>• Document structures for design, repair, or legal records.</li>
                <li>• Enable remote expert review and digital twins.</li>
              </ul>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-12">
            <div className="inline-block px-2 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] sm:text-xs tracking-widest uppercase mb-3 font-mono">Use Cases</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { t:"Wreck Documentation", d:"Full-fidelity 3D reconstructions for conservation and research." },
                { t:"Structural Change Monitoring", d:"Track corrosion, displacement, or settlement over time." },
                { t:"Pre/Post Installation", d:"Verify as-built conditions and contractor deliverables." },
              ].map((u,i)=> (
                <div key={i} className="border border-amber-500/20 bg-black/40 p-6">
                  <h4 className="text-lg font-semibold text-amber-100 mb-2">{u.t}</h4>
                  <p className="text-gray-300 text-sm">{u.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Packages */}
          <div className="mb-12">
            <div className="inline-block px-2 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] sm:text-xs tracking-widest uppercase mb-3 font-mono">Packages</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Survey Basic", includes: ["Up to 500 images","Sparse/Dense clouds","Measurement report"], price: "Per site" },
                { name: "Survey Advanced", includes: ["Up to 2,000 images","Mesh + textured model","Orthomosaic + point cloud"], price: "Per site" },
                { name: "Monitoring", includes: ["Quarterly captures","Change detection analytics","Web 3D viewer"], price: "Annual" },
              ].map((p,i)=> (
                <div key={i} className="border border-amber-500/20 bg-black/40 p-6">
                  <h4 className="text-xl font-bold text-amber-100 mb-1">{p.name}</h4>
                  <div className="text-amber-500 text-sm mb-2">{p.price}</div>
                  <ul className="text-sm text-gray-300 space-y-1 mb-4">
                    {p.includes.map((x,idx)=> (<li key={idx}>✓ {x}</li>))}
                  </ul>
                  <Link href="/contact"><Button variant="outline" className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10 w-full">Request quote</Button></Link>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <div className="inline-block px-2 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] sm:text-xs tracking-widest uppercase mb-3 font-mono">FAQ</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {q:"What accuracy can we expect?", a:"Under controlled capture, sub-centimeter accuracy is achievable; we specify uncertainty in deliverables."},
                {q:"Do you capture or process only?", a:"Both. We can deploy capture teams or process your imagery to our standards."},
                {q:"What formats do you deliver?", a:"OBJ/PLY, LAS/LAZ, GeoTIFF, and engineering-friendly formats per client spec."},
                {q:"How large can a site be?", a:"We scale from small assets to multi-hectare surveys with tiled deliverables."},
              ].map((f,i)=> (
                <div key={i} className="border border-amber-500/20 bg-black/40 p-6">
                  <h4 className="text-amber-100 font-semibold mb-2">{f.q}</h4>
                  <p className="text-gray-300 text-sm">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}



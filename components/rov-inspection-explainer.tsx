"use client"

import { motion } from "framer-motion"
import { getService } from "@/lib/data/services"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ROVInspectionExplainer() {
  const service = getService('rov-inspection')
  if (!service) return null

  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(#f59e0b20 1px, transparent 1px), linear-gradient(90deg, #f59e0b20 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-6xl mx-auto">
          {/* What & Why */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="border border-amber-500/20 bg-black/40 p-6">
              <h3 className="text-xl font-bold text-amber-100 mb-3">What it is</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
            <div className="border border-amber-500/20 bg-black/40 p-6">
              <h3 className="text-xl font-bold text-amber-100 mb-3">Where it excels</h3>
              <ul className="space-y-2 text-gray-300">
                {service.useCases.slice(0,6).map((u,i)=> (
                  <li key={i}>• {u}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Capabilities summary */}
          <div className="mb-12">
            <div className="inline-block px-2 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] sm:text-xs tracking-widest uppercase mb-3 font-mono">Capabilities</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.capabilities.map((c,i)=> (
                <div key={i} className="border border-amber-500/20 bg-black/40 p-6">
                  <h4 className="text-lg font-semibold text-amber-100 mb-1">{c.title}</h4>
                  <p className="text-gray-300 text-sm">{c.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed offerings */}
          {service.rovServices && (
            <div className="mb-12">
              <div className="inline-block px-2 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] sm:text-xs tracking-widest uppercase mb-3 font-mono">Service Offerings</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.rovServices.map((s,i)=> (
                  <div key={i} className="border border-amber-500/20 bg-black/40 p-6">
                    <h4 className="text-lg font-semibold text-amber-100 mb-2">{s.name}</h4>
                    <p className="text-gray-300 text-sm mb-3">{s.description}</p>
                    <div className="text-xs text-amber-500/80 font-mono mb-1">Deliverables</div>
                    <ul className="text-sm text-gray-300 mb-3 space-y-1">
                      {s.deliverables.map((d,idx)=> (<li key={idx}>• {d}</li>))}
                    </ul>
                    <div className="text-xs text-amber-500/80 font-mono mb-1">Equipment</div>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {s.equipment.map((d,idx)=> (<li key={idx}>→ {d}</li>))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Packages / Subscription */}
          {service.subscriptionTiers && (
            <div className="mb-12">
              <div className="inline-block px-2 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] sm:text-xs tracking-widest uppercase mb-3 font-mono">Melon Shield Packages</div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.subscriptionTiers.map((tier,i)=> (
                  <div key={i} className={`border p-6 ${tier.name==='Gold'?'border-amber-500/50 bg-amber-500/5':'border-amber-500/20 bg-black/40'}`}>
                    {tier.name==='Gold' && (
                      <div className="mb-2 inline-block px-2 py-1 bg-amber-500 text-black text-[10px] font-bold font-mono">RECOMMENDED</div>
                    )}
                    <h4 className="text-2xl font-bold text-amber-100 mb-1">{tier.name}</h4>
                    <div className="text-3xl font-bold text-amber-500 mb-2">{tier.price}</div>
                    <div className="text-xs text-amber-500/80 font-mono mb-1">Included Services</div>
                    <ul className="text-sm text-gray-300 mb-3 space-y-1">
                      {tier.includedServices.map((d,idx)=> (<li key={idx}>✓ {d}</li>))}
                    </ul>
                    <div className="text-xs text-amber-500/80 font-mono mb-1">Deliverables</div>
                    <ul className="text-xs text-gray-400 mb-3 space-y-1">
                      {tier.deliverablesPerYear.map((d,idx)=> (<li key={idx}>• {d}</li>))}
                    </ul>
                    <div className="text-xs text-amber-500/80 font-mono mb-1">Equipment</div>
                    <ul className="text-xs text-gray-400 mb-4 space-y-1">
                      {tier.equipment.map((d,idx)=> (<li key={idx}>→ {d}</li>))}
                    </ul>
                    <Link href="/contact"><Button className="w-full bg-amber-500 hover:bg-amber-600 text-black">{tier.name==='Enterprise / Municipal'? 'Contact Sales':'Subscribe'}</Button></Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQ */}
          <div>
            <div className="inline-block px-2 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] sm:text-xs tracking-widest uppercase mb-3 font-mono">FAQ</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {q:"How fast can you mobilize?", a:"We can deploy within 24–72 hours regionally; emergency callouts available for subscribers."},
                {q:"What deliverables do we receive?", a:"HD video, annotated reports, geo-referenced data, and optional 3D models depending on scope."},
                {q:"Do you work alongside divers?", a:"Yes. We frequently provide pre-dive safety surveys and real-time visual support."},
                {q:"Can we get recurring inspections?", a:"Yes. Choose a Melon Shield package or request a custom annual program."},
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



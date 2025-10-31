"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SafetyStandardsExplainer() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(#f59e0b20 1px, transparent 1px), linear-gradient(90deg, #f59e0b20 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-6xl mx-auto">
          {/* What & Why */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="border border-amber-500/20 bg-black/40 p-6">
              <h3 className="text-xl font-bold text-amber-100 mb-3">What it is</h3>
              <p className="text-gray-300">Comprehensive safety standards, SOPs, training curricula, and compliance consulting for human–ocean interface operations including commercial diving, ROV, and subsea construction.</p>
            </div>
            <div className="border border-amber-500/20 bg-black/40 p-6">
              <h3 className="text-xl font-bold text-amber-100 mb-3">Why it matters</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Reduce incidents and insurance exposure.</li>
                <li>• Standardize operations across teams and vendors.</li>
                <li>• Meet regulatory requirements with clear documentation.</li>
              </ul>
            </div>
          </div>

          {/* Deliverables */}
          <div className="mb-12">
            <div className="inline-block px-2 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] sm:text-xs tracking-widest uppercase mb-3 font-mono">Deliverables</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { t:"Safety Manuals", d:"Role-specific, scenario-based SOPs and checklists." },
                { t:"Training Programs", d:"Modules, assessments, and certification paths." },
                { t:"Compliance Reports", d:"Audit-ready documentation and gap analysis." },
              ].map((u,i)=> (
                <div key={i} className="border border-amber-500/20 bg-black/40 p-6">
                  <h4 className="text-lg font-semibold text-amber-100 mb-2">{u.t}</h4>
                  <p className="text-gray-300 text-sm">{u.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Retainer packages */}
          <div className="mb-12">
            <div className="inline-block px-2 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] sm:text-xs tracking-widest uppercase mb-3 font-mono">Retainers</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Foundation", price: "$2,000/mo", includes: ["Baseline SOP set","Quarterly updates","Email support"] },
                { name: "Operational", price: "$5,000/mo", includes: ["Custom SOP development","Monthly audits","Training refreshers"] },
                { name: "Program", price: "Custom", includes: ["On-site workshops","Incident investigations","Regulatory liaison"] },
              ].map((p,i)=> (
                <div key={i} className={`border p-6 ${p.name==='Operational'?'border-amber-500/50 bg-amber-500/5':'border-amber-500/20 bg-black/40'}`}>
                  {p.name==='Operational' && (<div className="mb-2 inline-block px-2 py-1 bg-amber-500 text-black text-[10px] font-bold font-mono">RECOMMENDED</div>)}
                  <h4 className="text-xl font-bold text-amber-100 mb-1">{p.name}</h4>
                  <div className="text-amber-500 text-2xl mb-2">{p.price}</div>
                  <ul className="text-sm text-gray-300 space-y-1 mb-4">
                    {p.includes.map((x,idx)=> (<li key={idx}>✓ {x}</li>))}
                  </ul>
                  <Link href="/contact"><Button className="w-full bg-amber-500 hover:bg-amber-600 text-black">Contact</Button></Link>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <div className="inline-block px-2 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] sm:text-xs tracking-widest uppercase mb-3 font-mono">FAQ</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {q:"Can you adopt our existing SOPs?", a:"Yes—we evaluate and integrate current materials and fill gaps."},
                {q:"Do you provide training content?", a:"Yes—complete modules with assessments and refreshers."},
                {q:"Will you support audits?", a:"We prepare documentation and support external audits."},
                {q:"Can we run a pilot?", a:"Yes—start with Foundation and scale to Program as needed."},
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



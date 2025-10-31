"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function OceanDataExplainer() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(#f59e0b20 1px, transparent 1px), linear-gradient(90deg, #f59e0b20 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-6xl mx-auto">
          {/* What & Why */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="border border-amber-500/20 bg-black/40 p-6">
              <h3 className="text-xl font-bold text-amber-100 mb-3">What it is</h3>
              <p className="text-gray-300">Operational ocean intelligence: real-time and historical data services covering currents, waves, temperature, salinity, and water quality—with APIs, dashboards, and forecasting models.</p>
            </div>
            <div className="border border-amber-500/20 bg-black/40 p-6">
              <h3 className="text-xl font-bold text-amber-100 mb-3">Why it matters</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Plan safe windows for offshore operations.</li>
                <li>• Reduce downtime with accurate forecasts.</li>
                <li>• Support environmental compliance and reporting.</li>
              </ul>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-12">
            <div className="inline-block px-2 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] sm:text-xs tracking-widest uppercase mb-3 font-mono">Use Cases</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { t:"Offshore Planning", d:"Forecasting and thresholds for weather windows and logistics." },
                { t:"Environmental Monitoring", d:"Live dashboards and alerts for operational compliance." },
                { t:"Research & Analytics", d:"Programmatic access for modeling and analysis." },
              ].map((u,i)=> (
                <div key={i} className="border border-amber-500/20 bg-black/40 p-6">
                  <h4 className="text-lg font-semibold text-amber-100 mb-2">{u.t}</h4>
                  <p className="text-gray-300 text-sm">{u.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Subscription Plans */}
          <div className="mb-12">
            <div className="inline-block px-2 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] sm:text-xs tracking-widest uppercase mb-3 font-mono">Subscriptions</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Core", price: "$299/mo", includes: ["Live buoy feeds","Wave/Currents/SST","Web dashboard","Email alerts"] },
                { name: "Pro", price: "$799/mo", includes: ["Everything in Core","7-day forecasts","API access (100k req/mo)","Custom regions"] },
                { name: "Enterprise", price: "Custom", includes: ["Dedicated SLAs","Unlimited API","Historical archives","Custom models"] },
              ].map((p,i)=> (
                <div key={i} className={`border p-6 ${p.name==='Pro'?'border-amber-500/50 bg-amber-500/5':'border-amber-500/20 bg-black/40'}`}>
                  {p.name==='Pro' && (<div className="mb-2 inline-block px-2 py-1 bg-amber-500 text-black text-[10px] font-bold font-mono">RECOMMENDED</div>)}
                  <h4 className="text-xl font-bold text-amber-100 mb-1">{p.name}</h4>
                  <div className="text-amber-500 text-2xl mb-2">{p.price}</div>
                  <ul className="text-sm text-gray-300 space-y-1 mb-4">
                    {p.includes.map((x,idx)=> (<li key={idx}>✓ {x}</li>))}
                  </ul>
                  <Link href="/contact"><Button className="w-full bg-amber-500 hover:bg-amber-600 text-black">{p.name==='Enterprise'? 'Contact Sales':'Start'}</Button></Link>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <div className="inline-block px-2 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] sm:text-xs tracking-widest uppercase mb-3 font-mono">FAQ</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {q:"How fresh is the data?", a:"Live feeds update every 5–15 minutes depending on sensor and region."},
                {q:"Do you provide SLAs?", a:"Yes—for Enterprise plans we provide uptime and support SLAs."},
                {q:"Is the API rate-limited?", a:"Yes—see plan quotas; Enterprise can negotiate unlimited access."},
                {q:"Can you add new stations?", a:"Yes—we deploy portable stations and integrate third-party sources."},
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



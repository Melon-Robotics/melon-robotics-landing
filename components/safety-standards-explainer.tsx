"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SafetyStandardsExplainer() {
  return (
    <section className="relative py-32 md:py-40 px-4 border-b border-amber-500/10 bg-gradient-to-b from-[#0a0e1a] to-black overflow-hidden">
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
          {/* What & Why */}
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
              <h3 className="text-2xl md:text-3xl font-light text-white/90 mb-4 tracking-tight">Safety Standards & Documentation</h3>
              <p className="text-base text-gray-400 leading-relaxed font-light">
                Comprehensive safety standards, protocols, and technical documentation for human-ocean interface operations. Industry-leading Standard Operating Procedures (SOPs) for commercial diving, ROV operations, and subsea construction. Research-backed best practices developed through decades of operational experience. Training curricula and certification programs ensure consistent skill development. Expert compliance consulting provides guidance on regulatory requirements across multiple jurisdictions, including OSHA, ITAR, and international maritime standards.
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
              <h3 className="text-2xl md:text-3xl font-light text-white/90 mb-4 tracking-tight">Operational Excellence</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <div className="mt-2">
                    <div className="w-1 h-1 bg-amber-500/60" />
                  </div>
                  <span className="text-sm leading-relaxed font-light">Reduce incidents and insurance exposure through standardized procedures, comprehensive training, and continuous compliance monitoring.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2">
                    <div className="w-1 h-1 bg-amber-500/60" />
                  </div>
                  <span className="text-sm leading-relaxed font-light">Standardize operations across teams, vendors, and project sites with consistent protocols and documentation that ensure uniform safety practices.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2">
                    <div className="w-1 h-1 bg-amber-500/60" />
                  </div>
                  <span className="text-sm leading-relaxed font-light">Meet regulatory requirements with audit-ready documentation, gap analysis, and expert guidance on compliance across multiple jurisdictions.</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Deliverables */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
              <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">DELIVERABLES</div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Safety Manuals",
                  description: "Role-specific, scenario-based Standard Operating Procedures and checklists covering all operational phases. Comprehensive safety protocols for commercial diving, ROV operations, emergency response, and subsea construction. Version-controlled documentation with regular updates based on industry best practices and regulatory changes.",
                },
                {
                  title: "Training Programs",
                  description: "Progressive training modules with assessments and certification paths. Curriculum development for skill development from basic safety awareness through advanced technical operations. Interactive training materials, video content, and hands-on exercises ensure effective knowledge transfer and skill retention.",
                },
                {
                  title: "Compliance Reports",
                  description: "Audit-ready documentation and comprehensive gap analysis for regulatory compliance. Detailed reports identify areas of non-compliance, provide remediation recommendations, and support external audits. Ongoing monitoring and reporting ensure continuous compliance with OSHA, ITAR, ISO, and maritime regulations.",
                },
              ].map((u, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 relative group"
                >
                  <div className="absolute top-3 right-3">
                    <div className="font-mono text-[8px] text-gray-700">REF: {String(i + 1).padStart(2, '0')}</div>
                  </div>
                  <h4 className="text-xl md:text-2xl font-light text-white/90 mb-3 tracking-tight pr-8">{u.title}</h4>
                  <div className="h-px w-8 bg-amber-500/30 mb-4" />
                  <p className="text-sm text-gray-400 leading-relaxed font-light">{u.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Retainer Packages - DARPA Technical Packages */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
              <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">RETAINER PACKAGES</div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            </div>
            <h3 className="text-3xl md:text-4xl font-light mb-8 tracking-tight text-white/90">Service Retainers</h3>
            <p className="text-base text-gray-500 font-light mb-12 max-w-2xl leading-relaxed">
              Ongoing safety program support with regular updates, audits, and training. Choose the level of engagement that matches your operational scale and compliance requirements.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {[
                {
                  name: "Foundation",
                  price: "$2,000/mo",
                  description: "Essential safety documentation and quarterly updates for small operations.",
                  includes: [
                    "Baseline SOP set (20+ procedures)",
                    "Quarterly documentation updates",
                    "Email support & consultation",
                    "Basic training materials",
                    "Compliance checklist templates",
                    "Annual review meeting"
                  ],
                  recommended: false
                },
                {
                  name: "Operational",
                  price: "$5,000/mo",
                  description: "Comprehensive safety program with custom development and regular audits.",
                  includes: [
                    "Everything in Foundation",
                    "Custom SOP development",
                    "Monthly compliance audits",
                    "Training refresher courses",
                    "Incident investigation support",
                    "Quarterly on-site workshops",
                    "Priority support (24h response)",
                    "Regulatory update notifications"
                  ],
                  recommended: true
                },
                {
                  name: "Program",
                  price: "Custom",
                  description: "Full-service safety program with dedicated support and regulatory liaison.",
                  includes: [
                    "Everything in Operational",
                    "On-site safety workshops",
                    "Incident investigations",
                    "Regulatory liaison services",
                    "Custom training curriculum",
                    "Dedicated safety consultant",
                    "Emergency response support",
                    "White-glove documentation",
                    "Multi-site coordination"
                  ],
                  recommended: false
                },
              ].map((p,i)=> (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`group relative border ${
                    p.recommended
                      ? 'border-amber-500/40 bg-amber-500/5'
                      : 'border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625]'
                  } p-8 transition-all duration-500 hover:border-amber-500/40 hover:shadow-[0_0_40px_rgba(245,158,11,0.1)]`}
                >
                  {/* Technical Drawing Corners */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Recommended Badge */}
                  {p.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-500 text-black text-[10px] font-mono tracking-wider uppercase">
                      RECOMMENDED
                    </div>
                  )}

                  {/* Tier Reference */}
                  <div className="mb-6">
                    <div className="font-mono text-[9px] text-gray-600 mb-2">
                      TIER: {p.name.toUpperCase()} | REF: MR-SAFETY-{String(i + 1).padStart(3, '0')}
                    </div>
                  </div>

                  {/* Title & Price */}
                  <div className="mb-6">
                    <h4 className="text-2xl md:text-3xl font-light text-white/90 mb-3 tracking-tight">{p.name}</h4>
                    <div className="h-px w-12 bg-amber-500/30 mb-4" />
                    <div className="text-3xl md:text-4xl font-light text-amber-500/90 mb-2 font-mono">{p.price}</div>
                    {p.name !== 'Program' && (
                      <div className="font-mono text-[9px] text-gray-600">MONTHLY RETAINER</div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 mb-6 leading-relaxed font-light">{p.description}</p>

                  {/* Included Features */}
                  <div className="mb-8">
                    <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-3">
                      INCLUDED SERVICES
                    </div>
                    <ul className="space-y-2">
                      {p.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="mt-2">
                            <div className="w-1 h-1 bg-amber-500/60" />
                          </div>
                          <span className="text-xs md:text-sm text-gray-400 leading-relaxed font-light">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Link href="/contact">
                    <Button
                      className={`w-full ${
                        p.recommended
                          ? 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:border-amber-500/50'
                          : 'border border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-600 bg-black/20'
                      } py-7 text-sm font-mono tracking-wider uppercase transition-all duration-300 backdrop-blur-sm`}
                      variant="outline"
                    >
                      Contact Sales
                    </Button>
                  </Link>
                </motion.div>
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



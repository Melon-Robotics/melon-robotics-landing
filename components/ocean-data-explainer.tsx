"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function OceanDataExplainer() {
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
              <h3 className="text-2xl md:text-3xl font-light text-white/90 mb-4 tracking-tight">Operational Ocean Intelligence</h3>
              <p className="text-base text-gray-400 leading-relaxed font-light">
                Comprehensive maritime environmental intelligence services covering currents, waves, temperature, salinity, and water quality. Live data feeds from sensor networks update every 5-15 minutes, providing real-time situational awareness. Historical archives span 10+ years for trend analysis and research. AI-powered forecasting models predict conditions 7 days ahead with high accuracy. RESTful APIs enable seamless integration with operational systems, dashboards, and custom applications.
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
              <h3 className="text-2xl md:text-3xl font-light text-white/90 mb-4 tracking-tight">Strategic Advantages</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <div className="mt-2">
                    <div className="w-1 h-1 bg-amber-500/60" />
                  </div>
                  <span className="text-sm leading-relaxed font-light">Plan safe operational windows with accurate 7-day forecasts, reducing downtime and optimizing logistics for offshore activities.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2">
                    <div className="w-1 h-1 bg-amber-500/60" />
                  </div>
                  <span className="text-sm leading-relaxed font-light">Support environmental compliance with real-time monitoring, automated alerts, and comprehensive reporting for regulatory requirements.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2">
                    <div className="w-1 h-1 bg-amber-500/60" />
            </div>
                  <span className="text-sm leading-relaxed font-light">Enable data-driven decision making with programmatic API access, custom analytics, and integration with existing operational systems.</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
              <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">USE CASES</div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Offshore Planning",
                  description: "Weather window optimization for offshore operations, construction, and maintenance. AI-powered forecasts identify safe operational periods, reducing downtime and improving safety margins. Real-time alerts notify teams of changing conditions.",
                },
                {
                  title: "Environmental Monitoring",
                  description: "Live dashboards and automated alerts for environmental compliance and reporting. Continuous monitoring of water quality, currents, and temperature supports regulatory requirements and environmental impact assessments.",
                },
                {
                  title: "Research & Analytics",
                  description: "Programmatic API access enables custom modeling, analysis, and research applications. Historical archives support long-term trend analysis, climate research, and predictive modeling for academic and commercial applications.",
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

          {/* Ocean Data Service Modules */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
              <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">SERVICE MODULES</div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            </div>
            <h3 className="text-3xl md:text-4xl font-light mb-6 tracking-tight text-white/90">Data Services</h3>
            <div className="h-px w-24 bg-amber-500/30 mb-8" />
            <p className="text-base text-gray-500 font-light mb-12 max-w-2xl leading-relaxed">
              Comprehensive oceanographic data services covering real-time monitoring, historical archives, and predictive forecasting. Each module includes specific deliverables and equipment configurations.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  name: "Real-Time Monitoring",
                  description: "Live data feeds from sensor networks with 5-15 minute update intervals. Continuous monitoring of waves, currents, temperature, salinity, and water quality parameters.",
                  deliverables: [
                    "Live data dashboard access",
                    "Real-time API feeds",
                    "Automated alerts & notifications",
                    "Mobile app access",
                    "Data export tools"
                  ],
                  equipment: [
                    "Sensor buoy network",
                    "Data telemetry systems",
                    "Cloud processing infrastructure",
                    "API gateway",
                    "Dashboard platform"
                  ],
                  ref: "SVC-001"
                },
                {
                  name: "Historical Archives",
                  description: "Comprehensive historical data archives spanning 10+ years for trend analysis, research, and long-term planning. Multi-parameter datasets with quality-controlled records.",
                  deliverables: [
                    "Historical data access (10+ years)",
                    "Quality-controlled datasets",
                    "Trend analysis reports",
                    "Custom data exports",
                    "Research-grade documentation"
                  ],
                  equipment: [
                    "Data archive infrastructure",
                    "Quality control systems",
                    "Data processing pipelines",
                    "Export & delivery tools",
                    "Documentation systems"
                  ],
                  ref: "SVC-002"
                },
                {
                  name: "AI Forecasting",
                  description: "Advanced machine learning models predict ocean conditions 7 days ahead with high accuracy. Supports operational planning, weather window optimization, and risk assessment.",
                  deliverables: [
                    "7-day forecast models",
                    "Forecast accuracy reports",
                    "Confidence intervals",
                    "Forecast API access",
                    "Custom forecast regions"
                  ],
                  equipment: [
                    "AI/ML processing infrastructure",
                    "Forecast model servers",
                    "Historical training data",
                    "Model validation systems",
                    "Forecast delivery APIs"
                  ],
                  ref: "SVC-003"
                },
                {
                  name: "API Integration",
                  description: "RESTful API endpoints provide programmatic access to real-time and historical data. JSON responses with comprehensive metadata, quality indicators, and standardized units.",
                  deliverables: [
                    "RESTful API documentation",
                    "API access credentials",
                    "Sample code & SDKs",
                    "Integration support",
                    "Rate limit management"
                  ],
                  equipment: [
                    "API gateway infrastructure",
                    "Authentication systems",
                    "Rate limiting & monitoring",
                    "Documentation platform",
                    "Developer support tools"
                  ],
                  ref: "SVC-004"
                },
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="group relative"
                >
                  <div className="border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-8 transition-all duration-500 hover:border-amber-500/30 hover:shadow-[0_0_40px_rgba(245,158,11,0.1)]">
                    {/* Technical Drawing Corners */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Service Reference */}
                    <div className="mb-6 flex items-center justify-between">
                      <div className="font-mono text-[9px] text-gray-600">
                        MODULE: {service.ref} | REV: A.1
                      </div>
                      <div className="font-mono text-[8px] text-gray-700">
                        REF: {String(idx + 1).padStart(2, '0')}
                      </div>
                    </div>

                    {/* Service Name */}
                    <h4 className="text-2xl md:text-3xl font-light text-white/90 mb-4 tracking-tight">
                      {service.name}
                    </h4>
                    <div className="h-px w-12 bg-amber-500/30 mb-6" />

                    {/* Description */}
                    <p className="text-sm md:text-base text-gray-400 mb-8 leading-relaxed font-light">
                      {service.description}
                    </p>

                    {/* Deliverables & Equipment Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Deliverables */}
                      <div>
                        <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-3">
                          DELIVERABLES
                        </div>
                        <ul className="space-y-2">
                          {service.deliverables.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="mt-2">
                                <div className="w-1 h-1 bg-amber-500/60" />
                              </div>
                              <span className="text-xs md:text-sm text-gray-400 leading-relaxed font-light">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Equipment */}
                      <div>
                        <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-3">
                          INFRASTRUCTURE
                        </div>
                        <ul className="space-y-2">
                          {service.equipment.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="mt-2">
                                <div className="w-1 h-1 bg-amber-500/40" />
                              </div>
                              <span className="text-xs md:text-sm text-gray-500 leading-relaxed font-mono">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Subscription Plans - DARPA Technical Packages */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
              <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">SUBSCRIPTION TIERS</div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            </div>
            <h3 className="text-3xl md:text-4xl font-light mb-6 tracking-tight text-white/90">Data Access Plans</h3>
            <div className="h-px w-24 bg-amber-500/30 mb-8" />
            <p className="text-base text-gray-500 font-light mb-12 max-w-2xl leading-relaxed">
              Choose the data access level that matches your operational requirements. All plans include real-time feeds, historical archives, and web dashboard access.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {[
                {
                  name: "Core",
                  price: "$299/mo",
                  description: "Essential oceanographic data for small operations and research projects.",
                  includes: [
                    "Live buoy feeds (5-15min updates)",
                    "Wave, Current, SST data",
                    "Web dashboard access",
                    "Email alerts & notifications",
                    "Basic historical data (1 year)",
                    "Mobile app access"
                  ],
                  limits: "API: 10k req/mo",
                  recommended: false
                },
                {
                  name: "Pro",
                  price: "$799/mo",
                  description: "Advanced data access with forecasting and API integration for operational planning.",
                  includes: [
                    "Everything in Core",
                    "7-day AI-powered forecasts",
                    "API access (100k req/mo)",
                    "Custom region monitoring",
                    "Extended history (5 years)",
                    "Priority support",
                    "Custom alert thresholds",
                    "Data export tools"
                  ],
                  limits: "API: 100k req/mo",
                  recommended: true
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  description: "Unlimited access with dedicated infrastructure, custom models, and white-glove support.",
                  includes: [
                    "Everything in Pro",
                    "Dedicated SLAs (99.9% uptime)",
                    "Unlimited API requests",
                    "Full historical archives (10+ years)",
                    "Custom AI forecasting models",
                    "Dedicated account manager",
                    "On-premise deployment options",
                    "Custom sensor integration",
                    "Training & documentation"
                  ],
                  limits: "API: Unlimited",
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
                      TIER: {p.name.toUpperCase()} | REF: MR-DATA-{String(i + 1).padStart(3, '0')}
                    </div>
                  </div>

                  {/* Title & Price */}
                  <div className="mb-6">
                    <h4 className="text-2xl md:text-3xl font-light text-white/90 mb-3 tracking-tight">{p.name}</h4>
                    <div className="h-px w-12 bg-amber-500/30 mb-4" />
                    <div className="text-3xl md:text-4xl font-light text-amber-500/90 mb-2 font-mono">{p.price}</div>
                    {p.name !== 'Enterprise' && (
                      <div className="font-mono text-[9px] text-gray-600">MONTHLY SUBSCRIPTION</div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 mb-6 leading-relaxed font-light">{p.description}</p>

                  {/* Included Features */}
                  <div className="mb-6">
                    <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-3">
                      INCLUDED FEATURES
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

                  {/* Limits */}
                  <div className="mb-8 pb-6 border-b border-gray-800/50">
                    <div className="font-mono text-[9px] text-gray-600">
                      {p.limits}
                    </div>
                </div>

                  {/* CTA Button */}
                  <Link href="/contact">
                    <Button
                      className={`w-full ${
                        p.recommended
                          ? 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:border-amber-500/50'
                          : 'border border-gray-700/50 text-white/60 hover:text-white hover:border-gray-600 bg-black/20'
                      } py-7 text-sm font-mono tracking-wider uppercase transition-all duration-300 backdrop-blur-sm`}
                      variant="outline"
                    >
                      {p.name === 'Enterprise' ? 'Contact Sales' : 'Start Subscription'}
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



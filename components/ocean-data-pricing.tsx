"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SubscribeButton } from "@/components/payments/subscribe-button"

export function OceanDataPricing() {
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">SUBSCRIPTION TIERS</div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
          </div>
          <div className="mb-6">
            <div className="font-mono text-[9px] text-gray-600 mb-2">REF: MR-PRICING-001 | REV: 2.0</div>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 text-white/90">
            Data Access<br />Plans
          </h2>
          <div className="h-px w-24 bg-amber-500/30 mb-6" />
          <p className="text-base md:text-lg text-gray-500 font-light max-w-3xl leading-relaxed">
            Enterprise-grade oceanographic intelligence as a service. Choose the access level that matches your operational scale and data requirements.
          </p>
        </motion.div>

        {/* Pricing Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 mb-16">
          {[
            {
              name: "Core",
              price: "$299",
              period: "/month",
              description: "Essential oceanographic data for small operations and research projects.",
              apiLimit: "10,000",
              apiPeriod: "requests/month",
              includes: [
                "Live buoy feeds (5-15min updates)",
                "Wave, Current, SST data",
                "Web dashboard access",
                "Email alerts & notifications",
                "Basic historical data (1 year)",
                "Mobile app access"
              ],
              features: [
                "Real-time API access",
                "Standard support (48h response)",
                "Basic documentation"
              ],
              ref: "TIER-001",
              recommended: false
            },
            {
              name: "Pro",
              price: "$799",
              period: "/month",
              description: "Advanced data access with forecasting and API integration for operational planning.",
              apiLimit: "100,000",
              apiPeriod: "requests/month",
              includes: [
                "Everything in Core",
                "7-day AI-powered forecasts",
                "API access (100k req/mo)",
                "Custom region monitoring",
                "Extended history (5 years)",
                "Priority support (24h response)",
                "Custom alert thresholds",
                "Data export tools"
              ],
              features: [
                "Advanced API features",
                "Webhook support",
                "SDK access",
                "Priority support"
              ],
              ref: "TIER-002",
              recommended: true
            },
            {
              name: "Enterprise",
              price: "$2,499",
              period: "/month",
              description: "Unlimited access with dedicated infrastructure, custom models, and white-glove support.",
              apiLimit: "500,000",
              apiPeriod: "requests/month",
              includes: [
                "Everything in Pro",
                "Dedicated SLAs (99.9% uptime)",
                "Unlimited API requests (negotiable)",
                "Full historical archives (10+ years)",
                "Custom AI forecasting models",
                "Dedicated account manager",
                "On-premise deployment options",
                "Custom sensor integration",
                "Training & documentation"
              ],
              features: [
                "Custom integrations",
                "Dedicated infrastructure",
                "SLA guarantees",
                "White-glove support"
              ],
              ref: "TIER-003",
              recommended: false
            },
            {
              name: "Fleet",
              price: "Custom",
              period: "",
              description: "Multi-region deployment with dedicated sensor networks and custom infrastructure.",
              apiLimit: "Unlimited",
              apiPeriod: "",
              includes: [
                "Everything in Enterprise",
                "Dedicated sensor fleet",
                "Multi-region deployment",
                "Custom data processing",
                "24/7 operations center",
                "Custom SLAs",
                "On-site integration support"
              ],
              features: [
                "Custom fleet deployment",
                "Dedicated operations",
                "Custom SLAs",
                "Full customization"
              ],
              ref: "TIER-004",
              recommended: false
            },
          ].map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`group relative border flex flex-col h-full ${
                tier.recommended
                  ? 'border-amber-500/40 bg-amber-500/5'
                  : 'border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625]'
              } p-6 md:p-8 transition-all duration-500 hover:border-amber-500/40 hover:shadow-[0_0_40px_rgba(245,158,11,0.1)]`}
            >
              {/* Technical Drawing Corners */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Recommended Badge */}
              {tier.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-500 text-black text-[10px] font-mono tracking-wider uppercase">
                  RECOMMENDED
                </div>
              )}

              {/* Tier Reference */}
              <div className="mb-6">
                <div className="font-mono text-[9px] text-gray-600 mb-2">
                  TIER: {tier.name.toUpperCase()} | REF: {tier.ref}
                </div>
              </div>

              {/* Title & Price */}
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white/90 mb-3 tracking-tight">{tier.name}</h3>
                <div className="h-px w-12 bg-amber-500/30 mb-4" />
                <div className="flex items-baseline gap-2 mb-2">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-light text-amber-500/90 font-mono">{tier.price}</div>
                  {tier.period && (
                    <div className="font-mono text-sm text-gray-600">{tier.period}</div>
                  )}
                </div>
                {tier.name !== 'Fleet' && (
                  <div className="font-mono text-[9px] text-gray-600">MONTHLY SUBSCRIPTION</div>
                )}
              </div>

              {/* API Limit */}
              <div className="mb-6 border border-gray-800/50 bg-black/40 p-3">
                <div className="font-mono text-[8px] text-amber-500/70 mb-1">API LIMIT</div>
                <div className="font-mono text-lg text-white">{tier.apiLimit}</div>
                {tier.apiPeriod && (
                  <div className="font-mono text-[8px] text-gray-600">{tier.apiPeriod}</div>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-gray-400 mb-6 leading-relaxed font-light">{tier.description}</p>

              {/* Content Section - Flex Grow */}
              <div className="flex-grow space-y-6">
                {/* Included Features */}
                <div>
                  <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-3">
                    INCLUDED
                  </div>
                  <ul className="space-y-2">
                    {tier.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-2 flex-shrink-0">
                          <div className="w-1 h-1 bg-amber-500/60" />
                        </div>
                        <span className="text-xs md:text-sm text-gray-400 leading-relaxed font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features */}
                <div className="pb-6 border-b border-gray-800/50">
                  <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-3">
                    FEATURES
                  </div>
                  <ul className="space-y-2">
                    {tier.features.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-2 flex-shrink-0">
                          <div className="w-1 h-1 bg-amber-500/40" />
                        </div>
                        <span className="text-xs text-gray-500 leading-relaxed font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <SubscribeButton
                  serviceId="ocean-data"
                  tierName={tier.name}
                  tierPrice={`${tier.price}${tier.period}`}
                  className={`w-full ${
                    tier.recommended
                      ? 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:border-amber-500/50'
                      : 'border border-gray-700/50 text-white/60 hover:text-white hover:border-gray-600 bg-black/20'
                  } py-6 md:py-7 text-xs md:text-sm font-mono tracking-wider uppercase transition-all duration-300 backdrop-blur-sm`}
                  variant="outline"
                  isRecommended={tier.recommended}
                  isEnterprise={tier.name === 'Fleet'}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Link href="/contact">
            <Button className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 px-12 py-8 text-sm font-mono tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] backdrop-blur-sm">
              Request API Access
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}



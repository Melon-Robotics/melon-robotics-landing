"use client"

import { motion } from "framer-motion"
import { notFound } from "next/navigation"
import { getService } from "@/lib/data/services"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { use } from "react"

// Bespoke heroes & demos per service
import { ROVInspectionHero } from "@/components/rov-inspection-hero"
import { ROVInspectionDemos } from "@/components/rov-inspection-demos"
import { ROVInspectionExplainer } from "@/components/rov-inspection-explainer"
import { PhotogrammetryHero } from "@/components/photogrammetry-hero"
import { PhotogrammetryDemos } from "@/components/photogrammetry-demos"
import { PhotogrammetryExplainer } from "@/components/photogrammetry-explainer"
import { OceanDataHero } from "@/components/ocean-data-hero"
import { OceanDataDemos } from "@/components/ocean-data-demos"
import { OceanDataExplainer } from "@/components/ocean-data-explainer"
import { SafetyStandardsHero } from "@/components/safety-standards-hero"
import { SafetyStandardsDemos } from "@/components/safety-standards-demos"
import { SafetyStandardsExplainer } from "@/components/safety-standards-explainer"

interface PageProps {
  params: Promise<{ id: string }>
}

export default function ServicePage({ params }: PageProps) {
  const { id } = use(params)
  const service = getService(id)

  if (!service) {
    notFound()
  }

  // Bespoke experiences
  if (id === 'rov-inspection') {
    return (
      <div className="min-h-screen bg-black text-white overflow-hidden">
        <main>
          <ROVInspectionHero />
          <ROVInspectionDemos />
          <ROVInspectionExplainer />
        </main>
      </div>
    )
  }

  if (id === 'photogrammetry') {
    return (
      <div className="min-h-screen bg-black text-white overflow-hidden">
        <main>
          <PhotogrammetryHero />
          <PhotogrammetryDemos />
          <PhotogrammetryExplainer />
        </main>
      </div>
    )
  }

  if (id === 'ocean-data') {
    return (
      <div className="min-h-screen bg-black text-white overflow-hidden">
        <main>
          <OceanDataHero />
          <OceanDataDemos />
          <OceanDataExplainer />
        </main>
      </div>
    )
  }

  if (id === 'safety-standards') {
    return (
      <div className="min-h-screen bg-black text-white overflow-hidden">
        <main>
          <SafetyStandardsHero />
          <SafetyStandardsDemos />
          <SafetyStandardsExplainer />
        </main>
      </div>
    )
  }

  // Fallback to existing generic layout if any other service appears
  const iconMap: { [key: string]: React.ReactNode } = {
    Video: <div className="w-8 h-8 border border-amber-500/30 flex items-center justify-center text-xs font-mono text-amber-500">VID</div>,
    Cube: <div className="w-8 h-8 border border-amber-500/30 flex items-center justify-center text-xs font-mono text-amber-500">3D</div>,
    Scan: <div className="w-8 h-8 border border-amber-500/30 flex items-center justify-center text-xs font-mono text-amber-500">SCN</div>,
    Waves: <div className="w-8 h-8 border border-amber-500/30 flex items-center justify-center text-xs font-mono text-amber-500">WVS</div>,
    Activity: <div className="w-8 h-8 border border-amber-500/30 flex items-center justify-center text-xs font-mono text-amber-500">MON</div>,
    Database: <div className="w-8 h-8 border border-amber-500/30 flex items-center justify-center text-xs font-mono text-amber-500">DB</div>,
    Brain: <div className="w-8 h-8 border border-amber-500/30 flex items-center justify-center text-xs font-mono text-amber-500">AI</div>,
    Code: <div className="w-8 h-8 border border-amber-500/30 flex items-center justify-center text-xs font-mono text-amber-500">API</div>,
    Shield: <div className="w-8 h-8 border border-amber-500/30 flex items-center justify-center text-xs font-mono text-amber-500">SHD</div>,
    FileText: <div className="w-8 h-8 border border-amber-500/30 flex items-center justify-center text-xs font-mono text-amber-500">DOC</div>,
    Graduation: <div className="w-8 h-8 border border-amber-500/30 flex items-center justify-center text-xs font-mono text-amber-500">EDU</div>,
    Scale: <div className="w-8 h-8 border border-amber-500/30 flex items-center justify-center text-xs font-mono text-amber-500">CMP</div>,
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Generic fallback content (retained) */}
      <section className="py-24 px-4 border-b border-amber-500/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block border border-amber-500/30 bg-black/50 px-3 py-1 mb-6 text-sm font-mono text-amber-500">
              {service.category.toUpperCase()}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter">
              {service.name}
            </h1>
            <p className="text-2xl text-amber-500 mb-4">{service.tagline}</p>
            <p className="text-xl text-gray-300">{service.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 px-4 border-b border-amber-500/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block border border-amber-500/30 bg-black/50 px-3 py-1 mb-4 text-sm font-mono text-amber-500">
              CAPABILITIES
            </div>
            <h2 className="text-4xl font-bold">What We Provide</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-amber-500/20 bg-black/40 p-6"
              >
                <div className="mb-4">{iconMap[capability.icon]}</div>
                <h3 className="text-xl font-semibold text-amber-100 mb-2">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases & Industries */}
      <section className="py-24 px-4 border-b border-amber-500/20 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block border border-amber-500/30 bg-black/50 px-3 py-1 mb-4 text-sm font-mono text-amber-500">
                USE CASES
              </div>
              <h3 className="text-2xl font-bold mb-4">Applications</h3>
              <ul className="space-y-2">
                {service.useCases.map((useCase, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">→</span>
                    <span className="text-gray-300">{useCase}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-block border border-amber-500/30 bg-black/50 px-3 py-1 mb-4 text-sm font-mono text-amber-500">
                INDUSTRIES
              </div>
              <h3 className="text-2xl font-bold mb-4">Who We Serve</h3>
              <ul className="space-y-2">
                {service.industries.map((industry, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">→</span>
                    <span className="text-gray-300">{industry}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-24 px-4 border-b border-amber-500/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block border border-amber-500/30 bg-black/50 px-3 py-1 mb-4 text-sm font-mono text-amber-500">
              DELIVERABLES
            </div>
            <h2 className="text-4xl font-bold mb-4">What You Receive</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.deliverables.map((deliverable, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border border-amber-500/20 bg-black/40 p-4 text-center"
              >
                <div className="text-amber-100">{deliverable}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROV Services - Detailed Service Offerings */}
      {service.rovServices && service.rovServices.length > 0 && (
        <section className="py-24 px-4 border-b border-amber-500/20 bg-black/20">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-block border border-amber-500/30 bg-black/50 px-3 py-1 mb-4 text-sm font-mono text-amber-500">
                SERVICE OFFERINGS
              </div>
              <h2 className="text-4xl font-bold mb-4">ROV Inspection Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive underwater inspection capabilities using LBV-150 ROV systems.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.rovServices.map((rovService, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border border-amber-500/20 bg-black/40 p-6"
                >
                  <h3 className="text-xl font-bold text-amber-100 mb-3">{rovService.name}</h3>
                  <p className="text-gray-300 mb-4">{rovService.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs text-amber-500/80 mb-2 font-mono uppercase">Deliverables</div>
                      <ul className="space-y-1">
                        {rovService.deliverables.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                            <span className="text-amber-500 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <div className="text-xs text-amber-500/80 mb-2 font-mono uppercase">Equipment</div>
                      <ul className="space-y-1">
                        {rovService.equipment.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                            <span className="text-amber-500/50 mt-1 text-xs">→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Subscription Tiers - Melon Shield */}
      {service.subscriptionTiers && service.subscriptionTiers.length > 0 && (
        <section className="py-24 px-4 border-b border-amber-500/20">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-block border border-amber-500/30 bg-black/50 px-3 py-1 mb-4 text-sm font-mono text-amber-500">
                MELON SHIELD
              </div>
              <h2 className="text-4xl font-bold mb-4">Subscription Packages</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Annual inspection programs designed for predictable maintenance schedules and cost optimization.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.subscriptionTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`border ${
                    tier.name === 'Gold'
                      ? 'border-amber-500/50 bg-amber-500/5'
                      : tier.name === 'Enterprise / Municipal'
                        ? 'border-amber-500/40 bg-black/60'
                        : 'border-amber-500/20 bg-black/40'
                  } p-6 relative`}
                >
                  {tier.name === 'Gold' && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-500 text-black text-xs font-bold font-mono">
                      RECOMMENDED
                    </div>
                  )}
                  
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-amber-100 mb-2">{tier.name}</h3>
                    <div className="text-3xl font-bold text-amber-500 mb-1">{tier.price}</div>
                    {tier.name !== 'Enterprise / Municipal' && (
                      <div className="text-xs text-gray-400 font-mono">Annual Subscription</div>
                    )}
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="text-xs text-amber-500/80 mb-2 font-mono uppercase">Included Services</div>
                      <ul className="space-y-2">
                        {tier.includedServices.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                            <span className="text-amber-500 mt-1">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="text-xs text-amber-500/80 mb-2 font-mono uppercase">Deliverables</div>
                      <ul className="space-y-1">
                        {tier.deliverablesPerYear.map((item, idx) => (
                          <li key={idx} className="text-xs text-gray-400 flex items-start gap-2">
                            <span className="text-amber-500/50 mt-1 text-xs">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="text-xs text-amber-500/80 mb-2 font-mono uppercase">Equipment Package</div>
                      <ul className="space-y-1">
                        {tier.equipment.map((item, idx) => (
                          <li key={idx} className="text-xs text-gray-400 flex items-start gap-2">
                            <span className="text-amber-500/50 mt-1 text-xs">→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button
                      className={`w-full ${
                        tier.name === 'Gold'
                          ? 'bg-amber-500 hover:bg-amber-600 text-black'
                          : 'border-amber-500/50 text-amber-400 hover:bg-amber-500/10'
                      }`}
                      variant={tier.name === 'Gold' ? 'default' : 'outline'}
                    >
                      {tier.name === 'Enterprise / Municipal' ? 'Contact Sales' : 'Subscribe'}
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 px-4 border-t border-amber-500/20">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to discuss your project requirements and scope of work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-6 text-lg">
                  Request Quote
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10 px-8 py-6 text-lg"
                >
                  View All Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}



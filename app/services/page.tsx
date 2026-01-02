"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { services } from "@/lib/data/services"
import { Button } from "@/components/ui/button"
import { ArrowRight, Waves, Database, Shield, Scan } from "lucide-react"

export default function ServicesPage() {
  const iconMap: { [key: string]: React.ReactNode } = {
    inspection: <Waves className="w-6 h-6 text-amber-500/70" />,
    data: <Database className="w-6 h-6 text-amber-500/70" />,
    safety: <Shield className="w-6 h-6 text-amber-500/70" />,
    infrastructure: <Scan className="w-6 h-6 text-amber-500/70" />,
  }

  const journeyStages = [
    { 
      stage: "1", 
      title: "Discovery & Assessment", 
      service: "ROV Inspection", 
      description: "Understand what's below the surface",
      color: "text-amber-500/90"
    },
    { 
      stage: "2", 
      title: "Precision Mapping", 
      service: "3D Photogrammetry", 
      description: "Create accurate models and measurements",
      color: "text-amber-500/80"
    },
    { 
      stage: "3", 
      title: "Intelligence & Planning", 
      service: "Ocean Data Services", 
      description: "Make data-driven operational decisions",
      color: "text-amber-500/70"
    },
    { 
      stage: "4", 
      title: "Safety & Compliance", 
      service: "Safety Standards", 
      description: "Ensure operations meet all requirements",
      color: "text-amber-500/60"
    }
  ]

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      {/* Hero Section - Apple-Level Minimalism */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0f1625] to-[#1a2332]" />
        
        <div className="container-responsive relative z-10 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[-0.02em] leading-[0.95] mb-6 sm:mb-8 text-white">
              Complete operational<br />support.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-[1.6] font-light mb-12 sm:mb-16">
              End-to-end services that support every stage of your underwater operations. From inspection to intelligence to safety compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Journey Stages - Apple-Style */}
      <section className="py-20 sm:py-28 md:py-36 px-4 border-t border-amber-500/10">
        <div className="container-responsive max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[-0.02em] leading-[0.95] mb-6 sm:mb-8 text-white">
              Services for every<br />stage of operations.
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-[1.6] font-light">
              Our services map to your operational journey—from initial discovery through ongoing intelligence and compliance.
            </p>
          </motion.div>

          {/* Journey Grid - Clean, Minimal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {journeyStages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <div className={`text-5xl sm:text-6xl md:text-7xl font-light ${item.color} mb-4 sm:mb-6 font-mono`}>
                  {item.stage}
                </div>
                <h3 className="text-xl sm:text-2xl font-light text-white/90 mb-2 sm:mb-3 tracking-tight">
                  {item.title}
                </h3>
                <div className="text-base sm:text-lg text-amber-500/80 mb-3 sm:mb-4 font-normal">
                  {item.service}
                </div>
                <p className="text-sm sm:text-base text-gray-400 leading-[1.6] font-light">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid - Apple-Style */}
      <section className="py-20 sm:py-28 md:py-36 lg:py-48 px-4 border-t border-amber-500/10">
        <div className="container-responsive max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[-0.02em] leading-[0.95] mb-6 sm:mb-8 text-white">
              Our services.
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-[1.6] font-light">
              Each service addresses a specific operational need. Many offer annual subscriptions for predictable costs and priority scheduling.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <Link href={`/services/${service.id}`} className="block h-full touch-manipulation">
                  <div className="relative h-full border border-gray-800/30 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 sm:p-8 md:p-10 transition-all duration-200 active:scale-[0.98] hover:border-amber-500/30 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] flex flex-col">
                    {/* Icon - Minimal */}
                    <div className="mb-6 sm:mb-8">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 border border-gray-700/30 bg-black/20 flex items-center justify-center group-hover:border-amber-500/40 transition-colors duration-300">
                        {iconMap[service.category] || <Waves className="w-8 h-8 text-amber-500/70" />}
                      </div>
                    </div>

                    {/* Category */}
                    <div className="mb-4 sm:mb-6">
                      <span className="text-xs sm:text-sm text-amber-500/60 font-normal tracking-wide uppercase">
                        {service.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6 text-white/90 tracking-tight">
                      {service.name}
                    </h3>

                    {/* Tagline - Prominent */}
                    <p className="text-lg sm:text-xl text-amber-500/80 mb-6 sm:mb-8 leading-[1.4] font-light">
                      {service.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-10 flex-grow leading-[1.6] font-light">
                      {service.description}
                    </p>

                    {/* CTA - Clean */}
                    <div className="flex items-center justify-between pt-6 sm:pt-8 border-t border-gray-800/30 group-hover:border-amber-500/20 transition-colors">
                      <span className="text-base sm:text-lg text-gray-400 group-hover:text-gray-300 font-normal transition-colors">
                        {service.subscriptionTiers ? 'View subscriptions' : 'Learn more'}
                      </span>
                      <ArrowRight className="w-5 h-5 text-amber-500/60 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration CTA - Apple-Style */}
      <section className="py-20 sm:py-28 md:py-36 px-4 border-t border-amber-500/10 bg-gradient-to-b from-[#0a0e1a] to-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="container-responsive max-w-4xl text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[-0.02em] leading-[0.95] mb-6 sm:mb-8 text-white">
            Services + Products<br />= Complete capability
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-[1.6] font-light mb-10 sm:mb-12">
            Our services leverage our technology. ROV Inspection uses Scout AUVs. Ocean Data powers autonomous missions. BlackBox captures critical communications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button className="w-full sm:w-auto bg-amber-500/12 hover:bg-amber-500/20 active:bg-amber-500/25 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 active:border-amber-500/60 px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 text-base sm:text-lg font-normal tracking-wide transition-all duration-200 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] backdrop-blur-sm">
                Explore technology
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="w-full sm:w-auto border border-gray-700/40 text-gray-300 hover:text-white active:text-white hover:border-gray-500 active:border-gray-400 px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 text-base sm:text-lg font-normal tracking-wide transition-all duration-200"
              >
                Contact sales
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

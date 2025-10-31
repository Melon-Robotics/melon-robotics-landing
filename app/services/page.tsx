"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { services } from "@/lib/data/services"
import { Button } from "@/components/ui/button"
import { Video, Box as Cube, Scan, Waves as WavesIcon, Activity, Database, Brain, Code, Shield, FileText, GraduationCap as Graduation, Scale, Award, Clock, Users, CheckCircle2 } from "lucide-react"
import { ServicesOverviewHero } from "@/components/services-overview-hero"

export default function ServicesPage() {
  const iconMap: { [key: string]: React.ReactNode } = {
    Video: <Video className="w-6 h-6 text-amber-500" />,
    Cube: <Cube className="w-6 h-6 text-amber-500" />,
    Scan: <Scan className="w-6 h-6 text-amber-500" />,
    Waves: <WavesIcon className="w-6 h-6 text-amber-500" />,
    Activity: <Activity className="w-6 h-6 text-amber-500" />,
    Database: <Database className="w-6 h-6 text-amber-500" />,
    Brain: <Brain className="w-6 h-6 text-amber-500" />,
    Code: <Code className="w-6 h-6 text-amber-500" />,
    Shield: <Shield className="w-6 h-6 text-amber-500" />,
    FileText: <FileText className="w-6 h-6 text-amber-500" />,
    Graduation: <Graduation className="w-6 h-6 text-amber-500" />,
    Scale: <Scale className="w-6 h-6 text-amber-500" />,
  }

  const capabilities = [
    { icon: Clock, label: "24/7 Operations", value: "Global support" },
    { icon: Shield, label: "ITAR Compliant", value: "Defense ready" },
    { icon: Award, label: "ISO Certified", value: "Quality assured" },
    { icon: Users, label: "Expert Teams", value: "15+ years experience" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Premium Hero */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden border-b border-amber-500/30">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-black" />
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 border border-amber-500/30 bg-black/80 backdrop-blur-sm px-4 py-2 mb-8 text-xs font-mono text-amber-500 tracking-widest">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              SERVICES PORTAL // OPERATIONAL EXCELLENCE
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter leading-none">
              <span className="text-white">Professional</span>
              <br />
              <span className="text-amber-500">Subsea Operations</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Comprehensive inspection, mapping, data intelligence, and safety standards services for <span className="text-amber-400">defense, government, and commercial sectors</span> operating in marine environments.
            </p>
          </motion.div>

          {/* Capability Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-5xl mx-auto"
          >
            {capabilities.map((cap, index) => (
              <div key={index} className="text-center border border-amber-500/20 bg-black/40 backdrop-blur-sm p-6">
                <cap.icon className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                <div className="text-sm font-semibold text-amber-100 mb-1">{cap.label}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider font-mono">{cap.value}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      </section>

      {/* Services Grid - Premium Layout */}
      <section className="py-24 md:py-32 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-block border border-amber-500/30 bg-black/50 px-3 py-1 mb-6 text-xs font-mono text-amber-500 tracking-widest">
              SERVICE PORTFOLIO
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Operational Capabilities</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              End-to-end subsea services delivered with precision, reliability, and actionable intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group relative overflow-hidden border border-amber-500/20 bg-black/40 hover:border-amber-500/50 hover:bg-black/60 transition-all duration-500"
              >
                {/* Animated border glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent" />
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-12 h-12 pointer-events-none">
                  <div className="absolute top-0 left-0 w-px h-6 bg-amber-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-0 left-0 w-6 h-px bg-amber-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute bottom-0 right-0 w-12 h-12 pointer-events-none">
                  <div className="absolute bottom-0 right-0 w-px h-6 bg-amber-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 right-0 w-6 h-px bg-amber-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="relative p-8">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 border border-amber-500/30 bg-black/50 group-hover:bg-amber-500/10 transition-colors">
                      {iconMap[service.capabilities[0]?.icon || 'Shield']}
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="inline-block border border-amber-500/30 bg-black/50 px-2 py-1 mb-4 text-xs font-mono text-amber-500 tracking-wider">
                    {service.category.toUpperCase()}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-amber-100 group-hover:text-amber-50 transition-colors">
                    {service.name}
                  </h3>

                  {/* Tagline */}
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    {service.tagline}
                  </p>

                  {/* Key Capabilities Preview */}
                  <div className="space-y-3 mb-8">
                    {service.capabilities.slice(0, 3).map((cap, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-400">{cap.title}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link href={`/services/${service.id}`}>
                    <Button 
                      variant="outline" 
                      className="w-full border-amber-500/50 text-amber-400 hover:bg-amber-500/10 hover:border-amber-500/80 transition-all group-hover:text-amber-300"
                    >
                      Explore Service
                    </Button>
                  </Link>
                </div>

                {/* Scanline effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent h-1/3 pointer-events-none" 
                  animate={{ y: ["-50%", "150%"] }} 
                  transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: index * 0.5 }} 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 md:py-32 px-4 border-t border-amber-500/20 bg-black/40">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 border border-amber-500/30 bg-black/50 rounded-full mb-6">
                <Shield className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-amber-100">Mission-Critical Reliability</h3>
              <p className="text-gray-400 leading-relaxed">
                Proven track record supporting defense and government operations with 99.9% uptime and rapid response capabilities.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 border border-amber-500/30 bg-black/50 rounded-full mb-6">
                <Award className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-amber-100">Industry-Leading Expertise</h3>
              <p className="text-gray-400 leading-relaxed">
                Teams with 15+ years of operational experience in subsea inspection, mapping, and marine technology.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 border border-amber-500/30 bg-black/50 rounded-full mb-6">
                <Activity className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-amber-100">Scalable Solutions</h3>
              <p className="text-gray-400 leading-relaxed">
                From single inspections to enterprise subscriptions, we scale to meet operational requirements at any level.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-32 px-4 border-t border-amber-500/30 bg-gradient-to-b from-black to-black/50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto max-w-5xl text-center"
        >
          <div className="border border-amber-500/30 bg-black/60 backdrop-blur-sm p-12 md:p-16">
            <Database className="w-12 h-12 text-amber-500 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Complex Subsea Challenges</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              We design and execute tailored service packages combining inspection, mapping, environmental data, and safety standards for your specific operational requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-amber-500 hover:bg-amber-600 text-black px-10 py-7 text-lg font-semibold border border-amber-400">
                  Consult with Experts
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  variant="outline"
                  className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10 px-10 py-7 text-lg"
                >
                  View Technology
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import { Shield, Award, Users, Globe, Target, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Mission-Critical Reliability",
      description: "99.9% uptime with redundant systems and rapid response protocols for defense and government operations.",
    },
    {
      icon: Award,
      title: "Engineering Excellence",
      description: "Built by engineers with deep domain expertise in subsea robotics, AI, and mission-critical systems.",
    },
    {
      icon: Users,
      title: "Defense-Cleared Teams",
      description: "ITAR-compliant operations with teams cleared for classified defense and government contracts.",
    },
    {
      icon: Globe,
      title: "Global Operations",
      description: "24/7 support across time zones with deployment capabilities worldwide.",
    },
    {
      icon: Target,
      title: "Precision Engineering",
      description: "Every system designed and tested for extreme conditions—from deep ocean to arctic environments.",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Continuous R&D in AI, autonomy, and sensor fusion pushing the boundaries of what's possible.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="section-padding px-4 border-b border-amber-500/20" aria-labelledby="about-heading">
        <div className="container-responsive max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-block border border-amber-500/30 bg-black/50 px-3 py-1.5 mb-6 text-xs md:text-sm font-mono text-amber-500 tracking-widest">
              ABOUT
            </div>
            <h1 id="about-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 md:mb-7 tracking-tighter leading-tight text-balance">
              About <span className="text-amber-500">Melon Robotics</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed text-balance">
              Engineering advanced robotics and safety technology for the world's most demanding environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding px-4">
        <div className="container-responsive max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-invert max-w-none"
          >
            <div className="border border-amber-500/20 bg-black/40 backdrop-blur-sm p-8 md:p-10 lg:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-5 md:mb-6 text-amber-100 leading-tight">
                Our Mission
              </h2>
              <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-6">
                Melon Robotics delivers cutting-edge ocean intelligence technology for defense, research, and commercial operations. We combine advanced robotics, AI-powered systems, and rigorous safety standards to enable mission-critical operations in the world's most extreme environments.
              </p>
              <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                From autonomous underwater vehicles to exoskeleton systems and communication platforms, our technology is engineered for reliability, precision, and operational excellence. Every product and service is designed with the understanding that failure is not an option.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding px-4 border-t border-amber-500/20 bg-black/20" aria-labelledby="values-heading">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-block border border-amber-500/30 bg-black/50 px-3 py-1.5 mb-6 text-xs md:text-sm font-mono text-amber-500 tracking-widest">
              CORE VALUES
            </div>
            <h2 id="values-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 md:mb-7 leading-tight">
              What Drives Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-amber-500/20 bg-black/40 p-6 md:p-8 card-hover"
              >
                <div className="mb-4">
                  <value.icon className="w-8 h-8 md:w-10 md:h-10 text-amber-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-amber-100 leading-tight">
                  {value.title}
                </h3>
                <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding px-4 border-t border-amber-500/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container-responsive max-w-4xl text-center"
        >
          <div className="border border-amber-500/30 bg-black/40 backdrop-blur-sm p-8 md:p-12 lg:p-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 md:mb-7 leading-tight text-balance">
              Ready to Work Together?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed text-balance">
              Connect with our team to discuss how Melon Robotics can support your mission-critical operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-black px-8 md:px-10 py-6 md:py-7 text-base md:text-lg font-semibold border border-amber-400 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                  Get in Touch
                </Button>
              </Link>
              <Link href="/products" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-amber-500/50 text-amber-400 hover:bg-amber-500/10 px-8 md:px-10 py-6 md:py-7 text-base md:text-lg font-semibold hover:border-amber-500/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  View Products
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}



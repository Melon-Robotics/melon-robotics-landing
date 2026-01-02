"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white pt-16 sm:pt-20">
      <section className="section-padding px-4 border-b border-amber-500/20" aria-labelledby="contact-heading">
        <div className="container-responsive max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <div className="inline-block border border-amber-500/30 bg-black/50 px-3 py-1.5 mb-4 sm:mb-6 text-[10px] sm:text-xs md:text-sm font-mono text-amber-500 tracking-widest">
              CONTACT
            </div>
            <h1 id="contact-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-4 sm:mb-6 md:mb-8 tracking-[-0.02em] leading-[0.95] text-balance">
              Get in <span className="text-amber-500">Touch</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-[1.6] sm:leading-[1.7] font-light text-balance px-4">
              Discuss your requirements with our team. We're here to help you explore how Melon Robotics can support your mission.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border border-amber-500/20 bg-black/40 backdrop-blur-sm p-4 sm:p-6 md:p-8 lg:p-10"
          >
            <form className="space-y-4 sm:space-y-6 md:space-y-8" aria-label="Contact form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <Label htmlFor="name" className="text-amber-500/80 mb-2 block text-sm sm:text-base font-medium">
                    Name <span className="text-amber-500" aria-label="required">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="bg-black/50 border-amber-500/30 text-white placeholder:text-gray-500 focus:border-amber-500 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black min-h-[44px] sm:h-12 text-base touch-manipulation"
                    placeholder="John Doe"
                    aria-required="true"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-amber-500/80 mb-2 block text-sm sm:text-base font-medium">
                    Email <span className="text-amber-500" aria-label="required">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-black/50 border-amber-500/30 text-white placeholder:text-gray-500 focus:border-amber-500 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black min-h-[44px] sm:h-12 text-base touch-manipulation"
                    placeholder="john@example.com"
                    aria-required="true"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="company" className="text-amber-500/80 mb-2 block text-sm sm:text-base font-medium">
                  Company / Organization
                </Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  className="bg-black/50 border-amber-500/30 text-white placeholder:text-gray-500 focus:border-amber-500 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black min-h-[44px] sm:h-12 text-base touch-manipulation"
                  placeholder="Company Name"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-amber-500/80 mb-2 block text-sm sm:text-base font-medium">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="bg-black/50 border-amber-500/30 text-white placeholder:text-gray-500 focus:border-amber-500 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black min-h-[44px] sm:h-12 text-base touch-manipulation"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-amber-500/80 mb-2 block text-sm sm:text-base font-medium">
                  Message <span className="text-amber-500" aria-label="required">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  className="bg-black/50 border-amber-500/30 text-white placeholder:text-gray-500 focus:border-amber-500 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black min-h-[160px] sm:min-h-[200px] resize-y leading-[1.6] sm:leading-relaxed text-base touch-manipulation"
                  placeholder="Tell us about your requirements, mission scope, or how we can help..."
                  aria-required="true"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-black border border-amber-400 text-base sm:text-lg font-semibold shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 active:shadow-amber-500/40 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black touch-manipulation"
                aria-label="Submit contact form"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}



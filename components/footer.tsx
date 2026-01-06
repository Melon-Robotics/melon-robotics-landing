"use client"

import React, { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Mail, Phone, MapPin, Linkedin, Youtube, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerLinks = {
  quick: [
    { name: "Systems", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Company", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "ITAR Compliance", href: "#" },
    { name: "Accessibility", href: "#" },
  ],
}

export function Footer() {
  const [quickLinksOpen, setQuickLinksOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <footer className="bg-black border-t border-amber-500/20 text-white" role="contentinfo">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="inline-block border border-amber-500/30 bg-black/50 px-2 py-1.5 rounded text-xs font-mono text-amber-500 mb-4">
              MELON ROBOTICS
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Advanced robotics and safety technology for defense, research, and commercial operations in the world's most demanding environments.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/melon-robotics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500/80 hover:text-amber-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://youtube.com/@melonrobotics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500/80 hover:text-amber-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links - Desktop */}
          <div className="hidden lg:block">
            <h3 className="text-sm font-semibold text-amber-100 mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quick.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-amber-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal - Desktop */}
          <div className="hidden lg:block">
            <h3 className="text-sm font-semibold text-amber-100 mb-4 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-amber-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-amber-100 mb-4 uppercase tracking-wider">Stay Connected</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <a
                  href="mailto:contact@melonrobotics.com"
                  className="text-sm text-gray-400 hover:text-amber-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
                >
                  contact@melonrobotics.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <a
                  href="tel:+1-555-000-0000"
                  className="text-sm text-gray-400 hover:text-amber-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
                >
                  +1 (555) 000-0000
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-sm text-gray-400">
                  123 Ocean Drive<br />
                  San Diego, CA 92101<br />
                  United States
                </p>
              </div>
            </div>

            {/* Newsletter Signup */}
            <form onSubmit={handleSubmit} className="space-y-2">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <div className="flex gap-2">
                <Input
                  id="footer-email"
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-black/50 border-amber-500/30 text-white placeholder:text-gray-500 focus:border-amber-500 flex-1"
                  required
                  aria-label="Email address for newsletter"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="bg-amber-500 hover:bg-amber-600 text-black border border-amber-400 flex-shrink-0"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                </Button>
              </div>
            </form>
          </div>

          {/* Mobile Accordions */}
          <div className="lg:hidden space-y-4">
            {/* Quick Links Accordion */}
            <div>
              <button
                onClick={() => setQuickLinksOpen(!quickLinksOpen)}
                className="w-full flex items-center justify-between py-3 text-sm font-semibold text-amber-100 uppercase tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
                aria-expanded={quickLinksOpen}
                aria-controls="quick-links-content"
              >
                Quick Links
                <ChevronDown
                  className={`w-5 h-5 text-amber-500 transition-transform ${quickLinksOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
              <AnimatePresence>
                {quickLinksOpen && (
                  <motion.div
                    id="quick-links-content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <ul className="pt-2 pb-4 space-y-2">
                      {footerLinks.quick.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="block py-2 text-sm text-gray-400 hover:text-amber-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-inset rounded"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Legal Accordion */}
            <div>
              <button
                onClick={() => setContactOpen(!contactOpen)}
                className="w-full flex items-center justify-between py-3 text-sm font-semibold text-amber-100 uppercase tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
                aria-expanded={contactOpen}
                aria-controls="legal-content"
              >
                Legal
                <ChevronDown
                  className={`w-5 h-5 text-amber-500 transition-transform ${contactOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
              <AnimatePresence>
                {contactOpen && (
                  <motion.div
                    id="legal-content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <ul className="pt-2 pb-4 space-y-2">
                      {footerLinks.legal.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="block py-2 text-sm text-gray-400 hover:text-amber-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-inset rounded"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} Melon Robotics. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-hidden="true" />
                ITAR Compliant
              </span>
              <span>Made in USA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


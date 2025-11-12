"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { products } from "@/lib/data/products"
import { services } from "@/lib/data/services"

const mainNavLinks = [
  { name: "Products", href: "/products", hasDropdown: true },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "About", href: "/about" },
]

export function UnifiedNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const productsRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(event.target as Node)) {
        setProductsOpen(false)
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleMenuClick = () => {
    setIsOpen(false)
  }

  const toggleProducts = () => setProductsOpen(!productsOpen)
  const toggleServices = () => setServicesOpen(!servicesOpen)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-xl shadow-lg border-b border-amber-500/20" : "bg-black/80 backdrop-blur-md"
      }`}
      role="banner"
    >
      <div className="container-responsive">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="relative flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
            aria-label="Melon Robotics Home"
          >
            <div className="border border-amber-500/30 bg-black/50 px-2 py-1.5 rounded text-xs md:text-sm font-mono text-amber-500 group-hover:border-amber-500/50 transition-colors">
              MELON ROBOTICS
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
            {mainNavLinks.map((item) => (
              <div key={item.name} className="relative" ref={item.name === 'Products' ? productsRef : item.name === 'Services' ? servicesRef : null}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={item.name === 'Products' ? toggleProducts : toggleServices}
                      className="text-sm font-medium text-amber-500/80 hover:text-amber-500 transition-colors duration-300 relative group flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded px-2 py-1"
                      aria-expanded={item.name === 'Products' ? productsOpen : servicesOpen}
                      aria-haspopup="true"
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${item.name === 'Products' && productsOpen ? 'rotate-180' : item.name === 'Services' && servicesOpen ? 'rotate-180' : ''}`} />
                      <span className="absolute left-0 bottom-0 h-px w-0 group-hover:w-full bg-amber-500 transition-all duration-300" />
                    </button>
                    <AnimatePresence>
                      {(item.name === 'Products' ? productsOpen : servicesOpen) && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-xl border border-amber-500/30 shadow-xl"
                          role="menu"
                        >
                          <div className="p-2">
                            {(item.name === 'Products' ? products : services).slice(0, 4).map((subItem) => (
                              <Link
                                key={subItem.id}
                                href={`/${item.name === 'Products' ? 'products' : 'services'}/${subItem.id}`}
                                className="block px-4 py-3 text-sm text-gray-300 hover:text-amber-500 hover:bg-amber-500/10 transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-inset"
                                role="menuitem"
                                onClick={() => item.name === 'Products' ? setProductsOpen(false) : setServicesOpen(false)}
                              >
                                <div className="font-semibold text-amber-100 mb-1">{subItem.name}</div>
                                <div className="text-xs text-gray-400">{subItem.tagline}</div>
                              </Link>
                            ))}
                            <Link
                              href={`/${item.name === 'Products' ? 'products' : 'services'}`}
                              className="block px-4 py-3 mt-2 text-sm font-medium text-amber-500 hover:text-amber-400 border-t border-amber-500/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-inset rounded"
                              role="menuitem"
                              onClick={() => item.name === 'Products' ? setProductsOpen(false) : setServicesOpen(false)}
                            >
                              View All {item.name} →
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
              <Link
                href={item.href}
                    className="text-sm font-medium text-amber-500/80 hover:text-amber-500 transition-colors duration-300 relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded px-2 py-1"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 h-px w-0 group-hover:w-full bg-amber-500 transition-all duration-300" />
              </Link>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-black text-sm font-medium transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 border border-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
              aria-label="Contact us"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-12 h-12 text-amber-500 hover:text-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-amber-500/20"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="container-responsive py-6 space-y-4">
              {mainNavLinks.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item.hasDropdown ? (
                    <div>
                      <div className="text-sm font-semibold text-amber-100 mb-2 px-4 uppercase tracking-wider">
                        {item.name}
                      </div>
                      <div className="space-y-1">
                        {(item.name === 'Products' ? products : services).map((subItem) => (
                          <Link
                            key={subItem.id}
                            href={`/${item.name === 'Products' ? 'products' : 'services'}/${subItem.id}`}
                            onClick={handleMenuClick}
                            className="block py-3 px-4 rounded-lg text-base text-gray-300 hover:bg-amber-500/10 hover:text-amber-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-inset"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                        <Link
                          href={`/${item.name === 'Products' ? 'products' : 'services'}`}
                          onClick={handleMenuClick}
                          className="block py-3 px-4 rounded-lg text-base font-medium text-amber-500 hover:bg-amber-500/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-inset"
                        >
                          View All {item.name} →
                        </Link>
                      </div>
                    </div>
                  ) : (
                  <Link
                    href={item.href}
                    onClick={handleMenuClick}
                      className="block py-3 px-4 rounded-lg text-base font-medium text-amber-500/80 hover:bg-amber-500/10 hover:text-amber-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-inset"
                  >
                    {item.name}
                  </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="pt-4 mt-4 border-t border-amber-500/20"
              >
                <Link
                  href="/contact"
                  onClick={handleMenuClick}
                  className="flex items-center justify-center w-full py-4 px-4 bg-amber-500 hover:bg-amber-600 text-black font-medium transition-colors rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  Contact
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

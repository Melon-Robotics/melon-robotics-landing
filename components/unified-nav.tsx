"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const mainNavLinks = [
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
]

export function UnifiedNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMenuClick = () => {
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-lg shadow-lg" : "bg-black/80 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="relative flex items-center group">
            <div className="border border-amber-500/30 bg-black/50 px-2 py-1.5 rounded text-sm font-mono text-amber-500 group-hover:border-amber-500/50 transition-colors">
              MELON ROBOTICS
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {mainNavLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-amber-500/80 hover:text-amber-500 transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 h-px w-0 group-hover:w-full bg-amber-500 transition-all duration-300" />
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-black text-sm font-medium transition-all shadow-lg shadow-amber-500/20 border border-amber-400"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-amber-500" />
            ) : (
              <Menu className="w-6 h-6 text-amber-500" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black border-t border-amber-500/20"
          >
            <div className="space-y-1 px-4 py-6">
              {mainNavLinks.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    onClick={handleMenuClick}
                    className="block py-3 px-4 rounded text-base font-medium text-amber-500/80 hover:bg-amber-500/10 hover:text-amber-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="pt-4 mt-4 border-t border-amber-500/20"
              >
                <Link
                  href="/contact"
                  onClick={handleMenuClick}
                  className="flex items-center justify-center w-full py-3 px-4 bg-amber-500 hover:bg-amber-600 text-black font-medium transition-colors"
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



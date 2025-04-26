"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Technology", href: "#command-center" },
  { name: "Advantages", href: "#fever-swarm" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state based on scroll position
      setScrolled(window.scrollY > 20)
      
      // Update active section based on scroll position
      const sections = ['home', 'features', 'command-center', 'fever-swarm']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (!element) return false
        
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when a section is clicked
  const handleMenuClick = () => {
    setIsOpen(false)
  }

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false)
    }
  }
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-black/90 backdrop-blur-lg shadow-lg" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="relative flex items-center">
            <Image 
              src="/logo.svg" 
              alt="Melon Robotics" 
              width={40} 
              height={40} 
              className="w-8 h-8 md:w-10 md:h-10 mr-2"
            />
            <span className="text-white font-bold text-lg md:text-xl">Melon Robotics</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {[
              { name: 'Home', href: '#home', id: 'home' },
              { name: 'Features', href: '#features', id: 'features' },
              { name: 'Command Center', href: '#command-center', id: 'command-center' },
              { name: 'Fever Swarm', href: '#fever-swarm', id: 'fever-swarm' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 group relative ${
                  activeSection === item.id ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.name}
                <span 
                  className={`absolute left-0 bottom-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                    activeSection === item.id ? 'w-full bg-indigo-500' : 'w-0 bg-white'
                  }`} 
                />
              </Link>
            ))}
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-sm font-medium rounded-lg transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30"
            >
              Contact Us
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
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
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800"
            onKeyDown={handleKeyDown}
          >
            <div className="space-y-1 px-4 py-6">
              {[
                { name: 'Home', href: '#home', id: 'home' },
                { name: 'Features', href: '#features', id: 'features' },
                { name: 'Command Center', href: '#command-center', id: 'command-center' },
                { name: 'Fever Swarm', href: '#fever-swarm', id: 'fever-swarm' },
              ].map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={handleMenuClick}
                    className={`block py-3 px-4 rounded-lg text-base font-medium ${
                      activeSection === item.id 
                        ? 'bg-gray-900 text-white' 
                        : 'text-gray-400 hover:bg-gray-900/70 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile CTA Button */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="pt-4 mt-4 border-t border-gray-800"
              >
                <Link
                  href="#contact"
                  onClick={handleMenuClick}
                  className="flex items-center justify-center w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-base font-medium rounded-lg transition-all shadow-lg"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 
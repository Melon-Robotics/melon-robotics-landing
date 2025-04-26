"use client"

import { Variants, motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { MenuIcon, X } from "lucide-react"

export function MelonScoutNav() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [0, 1])
  const translateY = useTransform(scrollY, [0, 300], [-20, 0])
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  // Update scroll state
  useEffect(() => {
    const updateScrolled = () => {
      setIsScrolled(window.scrollY > 100)
    }
    
    window.addEventListener("scroll", updateScrolled)
    updateScrolled()
    
    return () => {
      window.removeEventListener("scroll", updateScrolled)
    }
  }, [])

  const navVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }
  
  const mobileMenuVariants: Variants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  const menuItemVariants: Variants = {
    closed: {
      opacity: 0,
      y: -10,
    },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.3,
      },
    }),
  }

  const navigationLinks = [
    { title: "Technology", href: "#technology" },
    { title: "Command Center", href: "#command-center" },
    { title: "Specifications", href: "#specifications" },
    { title: "Contact", href: "#contact" }
  ]

  return (
    <>
      {/* Desktop & Mobile Navigation Bar */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "backdrop-blur-md bg-black/50" : "bg-transparent"
        }`}
        initial="hidden"
        animate={isScrolled ? "visible" : "exit"}
        exit="exit"
        variants={navVariants}
        style={{ opacity, translateY }}
      >
        <div className="container mx-auto px-4 py-2 sm:py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-base">M</span>
              </div>
              <div className="text-white font-bold text-lg sm:text-xl">Melon Robotics</div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-6">
              {navigationLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  {link.title}
                </Link>
              ))}
              <a
                href="#contact"
                className="ml-2 px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium rounded-md transition-transform hover:scale-105"
              >
                Get Started
              </a>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="block md:hidden p-1.5 text-white focus:outline-none cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden overflow-hidden bg-black/95 backdrop-blur-md border-t border-gray-800"
          initial="closed"
          animate={mobileMenuOpen ? "open" : "closed"}
          variants={mobileMenuVariants}
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navigationLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  custom={i}
                  variants={menuItemVariants}
                >
                  <Link
                    href={link.href}
                    className="block py-2 text-gray-300 hover:text-white transition-colors text-base font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                  <div className="w-full h-px bg-gray-800" />
                </motion.div>
              ))}
              <motion.div
                custom={navigationLinks.length}
                variants={menuItemVariants}
                className="pt-2"
              >
                <a
                  href="#contact"
                  className="block w-full py-3 text-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-md transition-transform hover:scale-105"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </a>
              </motion.div>
            </nav>
          </div>
        </motion.div>
      </motion.header>
    </>
  )
}

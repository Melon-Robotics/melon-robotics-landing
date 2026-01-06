"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, User, ShoppingCart, Package, LogOut, Settings } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { products } from "@/lib/data/products"
import { services } from "@/lib/data/services"
import { useUser } from "@/hooks/use-user"
import { useCartCount } from "@/hooks/use-cart-count"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

const mainNavLinks = [
  { name: "Systems", href: "/products", hasDropdown: true },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Company", href: "/about" },
]

export function UnifiedNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const productsRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const userMenuRef = useRef<HTMLDivElement>(null)
  const { user, profile, loading: userLoading } = useUser()
  const cartCount = useCartCount()
  const router = useRouter()

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
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false)
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
              <div key={item.name} className="relative" ref={item.name === 'Systems' ? productsRef : item.name === 'Services' ? servicesRef : null}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={item.name === 'Systems' ? toggleProducts : item.name === 'Services' ? toggleServices : undefined}
                      className="text-sm font-medium text-amber-500/80 hover:text-amber-500 transition-colors duration-300 relative group flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded px-2 py-1"
                      aria-expanded={item.name === 'Systems' ? productsOpen : item.name === 'Services' ? servicesOpen : false}
                      aria-haspopup={item.hasDropdown ? "true" : undefined}
                    >
                      {item.name}
                      {item.hasDropdown && (
                        <ChevronDown className={`w-4 h-4 transition-transform ${item.name === 'Systems' && productsOpen ? 'rotate-180' : item.name === 'Services' && servicesOpen ? 'rotate-180' : ''}`} />
                      )}
                      <span className="absolute left-0 bottom-0 h-px w-0 group-hover:w-full bg-amber-500 transition-all duration-300" />
                    </button>
                    <AnimatePresence>
                      {(item.name === 'Systems' ? productsOpen : item.name === 'Services' ? servicesOpen : false) && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-xl border border-amber-500/30 shadow-xl"
                          role="menu"
                        >
                          <div className="p-2">
                            {/* Add Orbit as first item in Systems dropdown */}
                            {item.name === 'Systems' && (
                              <Link
                                href="/orbit"
                                className="block px-4 py-3 text-sm text-gray-300 hover:text-amber-500 hover:bg-amber-500/10 transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-inset border-b border-amber-500/10 mb-2"
                                role="menuitem"
                                onClick={() => setProductsOpen(false)}
                              >
                                <div className="font-semibold text-amber-100 mb-1">Orbit Cloud</div>
                                <div className="text-xs text-gray-400">Command, control, and intelligence platform</div>
                              </Link>
                            )}
                            {(item.name === 'Systems' ? products : item.name === 'Services' ? services : []).slice(0, item.name === 'Systems' ? 3 : 4).map((subItem) => (
                              <Link
                                key={subItem.id}
                                href={`/${item.name === 'Systems' ? 'products' : 'services'}/${subItem.id}`}
                                className="block px-4 py-3 text-sm text-gray-300 hover:text-amber-500 hover:bg-amber-500/10 transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-inset"
                                role="menuitem"
                                onClick={() => item.name === 'Systems' ? setProductsOpen(false) : item.name === 'Services' ? setServicesOpen(false) : undefined}
                              >
                                <div className="font-semibold text-amber-100 mb-1">{subItem.name}</div>
                                <div className="text-xs text-gray-400">{subItem.tagline}</div>
                              </Link>
                            ))}
                            <Link
                              href={`/${item.name === 'Systems' ? 'products' : 'services'}`}
                              className="block px-4 py-3 mt-2 text-sm font-medium text-amber-500 hover:text-amber-400 border-t border-amber-500/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-inset rounded"
                              role="menuitem"
                              onClick={() => item.name === 'Systems' ? setProductsOpen(false) : item.name === 'Services' ? setServicesOpen(false) : undefined}
                            >
                              View All {item.name === 'Systems' ? 'Systems' : 'Services'} →
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
              aria-label="Contact systems team"
            >
              Contact
            </Link>

            {/* User Menu */}
            {!userLoading && (
              <div className="relative" ref={userMenuRef}>
                {user ? (
                  <>
                    <button
                      onClick={() => setUserMenuOpen(!userMenuOpen)}
                      className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-amber-500/80 hover:text-amber-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
                      aria-expanded={userMenuOpen}
                      aria-haspopup="true"
                    >
                      <User className="w-4 h-4" />
                      <span className="hidden lg:inline">
                        {profile?.name || user.email?.split('@')[0] || 'Account'}
                      </span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${userMenuOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {userMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full right-0 mt-2 w-56 bg-black/95 backdrop-blur-xl border border-amber-500/30 shadow-xl"
                          role="menu"
                        >
                          <div className="p-2">
                            <div className="px-4 py-3 border-b border-amber-500/20 mb-2">
                              <div className="text-sm font-medium text-white/90">
                                {profile?.name || 'User'}
                              </div>
                              <div className="text-xs text-gray-400 truncate">
                                {user.email}
                              </div>
                            </div>
                            <Link
                              href="/profile"
                              className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-amber-500 hover:bg-amber-500/10 transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-inset"
                              role="menuitem"
                              onClick={() => setUserMenuOpen(false)}
                            >
                              <Settings className="w-4 h-4" />
                              Profile Settings
                            </Link>
                            <Link
                              href="/orders"
                              className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-amber-500 hover:bg-amber-500/10 transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-inset"
                              role="menuitem"
                              onClick={() => setUserMenuOpen(false)}
                            >
                              <Package className="w-4 h-4" />
                              Order History
                            </Link>
                            <Link
                              href="/cart"
                              className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-amber-500 hover:bg-amber-500/10 transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-inset relative"
                              role="menuitem"
                              onClick={() => setUserMenuOpen(false)}
                            >
                              <ShoppingCart className="w-4 h-4" />
                              Shopping Cart
                              {cartCount > 0 && (
                                <span className="ml-auto bg-amber-500 text-black text-xs font-bold px-2 py-0.5 rounded-full min-w-[20px] text-center">
                                  {cartCount}
                                </span>
                              )}
                            </Link>
                            <div className="border-t border-amber-500/20 mt-2 pt-2">
                              <button
                                onClick={async () => {
                                  const supabase = createClient()
                                  await supabase.auth.signOut()
                                  setUserMenuOpen(false)
                                  router.push('/')
                                }}
                                className="flex items-center gap-3 w-full px-4 py-3 text-sm text-gray-300 hover:text-red-400 hover:bg-red-500/10 transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-inset"
                                role="menuitem"
                              >
                                <LogOut className="w-4 h-4" />
                                Sign Out
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href="/auth/login"
                    className="inline-flex items-center justify-center px-5 py-2.5 text-amber-500/80 hover:text-amber-500 text-sm font-medium transition-colors border border-amber-500/30 hover:border-amber-500/50 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    Sign In
                  </Link>
                )}
              </div>
            )}
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
                        {/* Add Orbit as first item in Systems mobile menu */}
                        {item.name === 'Systems' && (
                          <Link
                            href="/orbit"
                            onClick={handleMenuClick}
                            className="block py-3 px-4 rounded-lg text-base text-gray-300 hover:bg-amber-500/10 hover:text-amber-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-inset border-b border-amber-500/10 mb-2"
                          >
                            Orbit Cloud
                          </Link>
                        )}
                        {(item.name === 'Systems' ? products : item.name === 'Services' ? services : []).map((subItem) => (
                          <Link
                            key={subItem.id}
                            href={`/${item.name === 'Systems' ? 'products' : 'services'}/${subItem.id}`}
                            onClick={handleMenuClick}
                            className="block py-3 px-4 rounded-lg text-base text-gray-300 hover:bg-amber-500/10 hover:text-amber-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-inset"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                        <Link
                          href={`/${item.name === 'Systems' ? 'products' : 'services'}`}
                          onClick={handleMenuClick}
                          className="block py-3 px-4 rounded-lg text-base font-medium text-amber-500 hover:bg-amber-500/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-inset"
                        >
                          View All {item.name === 'Systems' ? 'Systems' : 'Services'} →
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
                className="pt-4 mt-4 border-t border-amber-500/20 space-y-2"
              >
                {user ? (
                  <>
                    <div className="px-4 py-2 border-b border-amber-500/20 mb-2">
                      <div className="text-sm font-medium text-white/90">
                        {profile?.name || 'User'}
                      </div>
                      <div className="text-xs text-gray-400 truncate">
                        {user.email}
                      </div>
                    </div>
                    <Link
                      href="/profile"
                      onClick={handleMenuClick}
                      className="flex items-center gap-3 py-3 px-4 rounded-lg text-base text-gray-300 hover:bg-amber-500/10 hover:text-amber-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-inset"
                    >
                      <Settings className="w-5 h-5" />
                      Profile
                    </Link>
                    <Link
                      href="/orders"
                      onClick={handleMenuClick}
                      className="flex items-center gap-3 py-3 px-4 rounded-lg text-base text-gray-300 hover:bg-amber-500/10 hover:text-amber-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-inset"
                    >
                      <Package className="w-5 h-5" />
                      Orders
                    </Link>
                    <Link
                      href="/cart"
                      onClick={handleMenuClick}
                      className="flex items-center gap-3 py-3 px-4 rounded-lg text-base text-gray-300 hover:bg-amber-500/10 hover:text-amber-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-inset relative"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Cart
                      {cartCount > 0 && (
                        <span className="ml-auto bg-amber-500 text-black text-xs font-bold px-2 py-0.5 rounded-full min-w-[20px] text-center">
                          {cartCount}
                        </span>
                      )}
                    </Link>
                    <button
                      onClick={async () => {
                        const supabase = createClient()
                        await supabase.auth.signOut()
                        handleMenuClick()
                        router.push('/')
                      }}
                      className="flex items-center gap-3 w-full py-3 px-4 rounded-lg text-base text-gray-300 hover:bg-red-500/10 hover:text-red-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-inset"
                    >
                      <LogOut className="w-5 h-5" />
                      Sign Out
                    </button>
                  </>
                ) : (
                  <Link
                    href="/auth/login"
                    onClick={handleMenuClick}
                    className="flex items-center justify-center w-full py-4 px-4 bg-amber-500 hover:bg-amber-600 text-black font-medium transition-colors rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    Sign In
                  </Link>
                )}
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

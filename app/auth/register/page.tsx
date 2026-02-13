"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Loader2, Lock, Mail, User, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters')
      return
    }

    setLoading(true)

    try {
      const supabase = createClient()
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            name: formData.name,
            phone: formData.phone || undefined,
          },
        },
      })

      if (signUpError) {
        setError(signUpError.message)
        return
      }

      if (data.user) {
        // Update profile if name or phone provided
        if (formData.name || formData.phone) {
          const { error: profileError } = await supabase
            .from('users')
            .update({
              name: formData.name || null,
              phone: formData.phone || null,
            })
            .eq('id', data.user.id)

          if (profileError) {
            console.error('Error updating profile:', profileError)
          }
        }

        // Redirect to login
        router.push('/auth/login?registered=true')
      }
    } catch (error) {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(245,158,11,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,158,11,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Depth Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0f1625] to-[#0a0e1a]" />

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />

      {/* Corner Markers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-amber-500/20" />
        <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-amber-500/20" />
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-amber-500/20" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-amber-500/20" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      </div>

      {/* System Reference */}
      <div className="absolute top-4 left-4 text-[10px] font-mono text-amber-500/60 z-20">
        <div className="inline-block border border-amber-500/20 bg-black/60 backdrop-blur-sm px-2 py-1">
          MR-AUTH | REGISTER
        </div>
      </div>

      {/* Status Indicator */}
      <div className="absolute top-4 right-4 text-[10px] font-mono text-amber-500/60 z-20 hidden sm:block">
        <div className="inline-block border border-amber-500/20 bg-black/60 backdrop-blur-sm px-2 py-1">
          SECURE: <span className="text-green-400">ENCRYPTED</span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-8"
        >
          <Link href="/" className="inline-block">
            <div className="border border-amber-500/30 bg-black/50 px-3 py-2 text-sm font-mono text-amber-500 hover:border-amber-500/50 transition-colors">
              MELON ROBOTICS
            </div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Card with corner decorations */}
          <div className="relative border border-amber-500/20 bg-gradient-to-b from-[#0a0e1a]/90 to-[#0f1625]/90 backdrop-blur-xl p-8 md:p-10">
            {/* Scan line animation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            {/* Card corner markers */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-amber-500/40" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-amber-500/40" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-amber-500/40" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-amber-500/40" />

            <div className="relative z-10">
              <div className="mb-8 text-center">
                <div className="inline-block border border-amber-500/20 bg-black/30 px-3 py-1 mb-4">
                  <div className="text-[10px] font-mono text-amber-500/70 tracking-widest uppercase">
                    NEW ACCOUNT
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-light mb-3 text-white/90 tracking-tight">Create Account</h1>
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent mx-auto mb-4" />
                <p className="text-gray-400 text-sm font-light">
                  Join the Melon Robotics platform
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
                  >
                    {error}
                  </motion.div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs font-mono text-amber-500/60 uppercase tracking-wider">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-500/40" />
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="pl-10 bg-black/40 border-gray-700/50 text-white focus:border-amber-500/50 focus:ring-amber-500/20 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs font-mono text-amber-500/60 uppercase tracking-wider">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-500/40" />
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="pl-10 bg-black/40 border-gray-700/50 text-white focus:border-amber-500/50 focus:ring-amber-500/20 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-xs font-mono text-amber-500/60 uppercase tracking-wider">
                    Phone <span className="text-gray-600 normal-case tracking-normal">(Optional)</span>
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-500/40" />
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="pl-10 bg-black/40 border-gray-700/50 text-white focus:border-amber-500/50 focus:ring-amber-500/20 transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-xs font-mono text-amber-500/60 uppercase tracking-wider">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-500/40" />
                    <Input
                      id="password"
                      type="password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required
                      minLength={8}
                      className="pl-10 bg-black/40 border-gray-700/50 text-white focus:border-amber-500/50 focus:ring-amber-500/20 transition-colors"
                      placeholder="••••••••"
                    />
                  </div>
                  <p className="text-[10px] font-mono text-gray-600 tracking-wider">MIN 8 CHARACTERS</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-xs font-mono text-amber-500/60 uppercase tracking-wider">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-500/40" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      required
                      className="pl-10 bg-black/40 border-gray-700/50 text-white focus:border-amber-500/50 focus:ring-amber-500/20 transition-colors"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-amber-500/12 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 py-6 text-base font-normal tracking-wide transition-all duration-200 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Creating account...
                      </>
                    ) : (
                      'Create Account'
                    )}
                  </Button>
                </div>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-800/50 text-center text-sm text-gray-500">
                Already have an account?{' '}
                <Link href="/auth/login" className="text-amber-500/80 hover:text-amber-500 transition-colors">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

"use client"

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Loader2, User, Mail, Phone, Save, LogOut } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface UserProfile {
  id: string
  name: string | null
  email: string
  phone: string | null
  role: string
  createdAt: string
}

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  })
  const router = useRouter()

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      router.push('/auth/login')
      return
    }

    setUser(user)

    // Fetch profile
    const { data: profileData } = await supabase
      .from('users')
      .select('*')
      .eq('id', user.id)
      .single()

    if (profileData) {
      setProfile(profileData)
      setFormData({
        name: profileData.name || '',
        phone: profileData.phone || '',
      })
    } else {
      // If no profile exists, create one
      const { data: newProfile } = await supabase
        .from('users')
        .insert({
          id: user.id,
          email: user.email,
          name: user.user_metadata?.name || null,
          phone: null,
        })
        .select()
        .single()

      if (newProfile) {
        setProfile(newProfile)
        setFormData({
          name: newProfile.name || '',
          phone: newProfile.phone || '',
        })
      }
    }

    setLoading(false)
  }

  const handleSave = async () => {
    if (!user) return

    setSaving(true)
    try {
      const supabase = createClient()
      const { error } = await supabase
        .from('users')
        .update({
          name: formData.name || null,
          phone: formData.phone || null,
        })
        .eq('id', user.id)

      if (error) throw error

      // Update local state
      if (profile) {
        setProfile({
          ...profile,
          name: formData.name || null,
          phone: formData.phone || null,
        })
      }

      alert('Profile updated successfully')
    } catch (error) {
      console.error('Error updating profile:', error)
      alert('Failed to update profile')
    } finally {
      setSaving(false)
    }
  }

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0e1a] text-white pt-20 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-amber-500" />
      </div>
    )
  }

  if (!user || !profile) {
    return null
  }

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white pt-20">
      <div className="container-responsive max-w-4xl py-16 px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-light mb-4 text-white/90">Profile</h1>
          <div className="h-px w-24 bg-amber-500/30" />
        </div>

        <div className="border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-8">
          {/* Account Info */}
          <div className="mb-8">
            <h2 className="text-xl font-light mb-6 text-white/90 flex items-center gap-2">
              <User className="w-5 h-5 text-amber-500/60" />
              Account Information
            </h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-gray-400 mb-2 block">
                  Email
                </Label>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    disabled
                    className="bg-black/40 border-gray-700/50 text-gray-400"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
              </div>

              <div>
                <Label htmlFor="name" className="text-gray-400 mb-2 block">
                  Name
                </Label>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-gray-500" />
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="bg-black/40 border-gray-700/50"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone" className="text-gray-400 mb-2 block">
                  Phone
                </Label>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Your phone number"
                    className="bg-black/40 border-gray-700/50"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Account Details */}
          <div className="mb-8 border-t border-gray-800/50 pt-8">
            <h2 className="text-xl font-light mb-6 text-white/90">Account Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-500 mb-1">Account ID</div>
                <div className="text-sm font-mono text-gray-400">{profile.id.slice(0, 8)}...</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Member Since</div>
                <div className="text-sm text-gray-400">
                  {new Date(profile.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Role</div>
                <div className="text-sm font-mono text-amber-500/80 uppercase">{profile.role}</div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-800/50">
            <Button
              onClick={handleSave}
              disabled={saving}
              className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 flex items-center gap-2"
            >
              {saving ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Save Changes
                </>
              )}
            </Button>

            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-600 flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </Button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/orders">
            <div className="border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 hover:border-amber-500/30 transition-colors">
              <h3 className="text-lg font-light mb-2 text-white/90">Order History</h3>
              <p className="text-sm text-gray-400">View your past purchases and subscriptions</p>
            </div>
          </Link>
          <Link href="/cart">
            <div className="border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 hover:border-amber-500/30 transition-colors">
              <h3 className="text-lg font-light mb-2 text-white/90">Shopping Cart</h3>
              <p className="text-sm text-gray-400">View and manage items in your cart</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}








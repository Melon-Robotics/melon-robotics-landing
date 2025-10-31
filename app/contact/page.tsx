"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <section className="py-24 px-4 border-b border-amber-500/20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block border border-amber-500/30 bg-black/50 px-3 py-1 mb-6 text-sm font-mono text-amber-500">
              CONTACT
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter">
              Get in <span className="text-amber-500">Touch</span>
            </h1>
            <p className="text-xl text-gray-300">
              Discuss your requirements with our team.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border border-amber-500/20 bg-black/40 p-8"
          >
            <form className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-amber-500/80 mb-2 block">
                  Name
                </Label>
                <Input
                  id="name"
                  className="bg-black border-amber-500/30 text-white focus:border-amber-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-amber-500/80 mb-2 block">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  className="bg-black border-amber-500/30 text-white focus:border-amber-500"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <Label htmlFor="company" className="text-amber-500/80 mb-2 block">
                  Company
                </Label>
                <Input
                  id="company"
                  className="bg-black border-amber-500/30 text-white focus:border-amber-500"
                  placeholder="Company Name"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-amber-500/80 mb-2 block">
                  Message
                </Label>
                <Textarea
                  id="message"
                  className="bg-black border-amber-500/30 text-white focus:border-amber-500 min-h-[200px]"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-black border border-amber-400 py-6 text-lg"
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



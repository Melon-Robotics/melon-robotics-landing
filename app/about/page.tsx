"use client"

import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <section className="py-24 px-4 border-b border-amber-500/20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block border border-amber-500/30 bg-black/50 px-3 py-1 mb-6 text-sm font-mono text-amber-500">
              ABOUT
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter">
              About <span className="text-amber-500">Melon Robotics</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content will be added */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xl text-gray-300">
            Content coming soon.
          </p>
        </div>
      </section>
    </div>
  )
}



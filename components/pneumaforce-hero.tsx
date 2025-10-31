"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function PneumaForceHero() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(245,158,11,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-amber-500/30" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-amber-500/30" />
      </div>

      <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4 md:px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4"
        >
          <span className="text-amber-500 tracking-tighter">PNEUMAFORCE</span> EXOSKELETON
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl"
        >
          Upper-body pneumatic augmentation with AirMatrix buoyancy, PneumaPower assist, and SyncMotion interface.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          <Button className="bg-amber-500 hover:bg-amber-600 text-black border border-amber-400 w-full sm:w-auto" size="lg">
            REQUEST DEMO
          </Button>
          <Button variant="outline" className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10 w-full sm:w-auto" size="lg">
            SPECIFICATIONS
          </Button>
        </motion.div>
      </div>

      {/* Kinetic exoskeleton visual */}
      <div className="absolute right-0 bottom-0 top-0 w-full md:w-1/2 z-10 pointer-events-none">
        <div className="relative h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Image src="/exoskeleton.png" alt="PneumaForce" width={900} height={900} className="object-contain opacity-90" />
          </motion.div>

          {/* HUD specs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-8 right-6 bg-black/70 border border-amber-500/30 p-3 text-xs text-amber-500 font-mono"
          >
            <div className="flex justify-between gap-6">
              <div>
                <div>BATT</div>
                <div className="text-amber-100">9h</div>
              </div>
              <div>
                <div>DEPTH</div>
                <div className="text-amber-100">1000ft</div>
              </div>
              <div>
                <div>ASSIST</div>
                <div className="text-amber-100">+100lb</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


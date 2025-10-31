"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export function BlackBoxHero() {
  const [loaded, setLoaded] = useState(false)
  const [wave, setWave] = useState<number[]>([])
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    setLoaded(true)
    const generate = () => {
      setWave(prev => {
        const next = [...prev]
        while (next.length < 80) next.push(Math.random())
        next.shift()
        next.push(Math.random())
        return next.slice(-80)
      })
      rafRef.current = requestAnimationFrame(generate)
    }
    rafRef.current = requestAnimationFrame(generate)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* HUD overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-amber-500/30" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-amber-500/30" />
        <div className="absolute top-4 left-4 text-[10px] sm:text-xs font-mono text-amber-500/80">
          <div className="inline-block border border-amber-500/30 bg-black/50 px-2 py-1">BLACKBOX // OFFLINE-FIRST</div>
        </div>
        <div className="absolute top-4 right-4 text-[10px] sm:text-xs font-mono text-amber-500/80 hidden xs:block">
          <div className="inline-block border border-amber-500/30 bg-black/50 px-2 py-1">PRIVACY: LOCAL ONLY</div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4 md:px-6">
        <AnimatePresence>
          {loaded && (
            <>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4"
              >
                <span className="text-amber-500 tracking-tighter">BLACKBOX</span> APP
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl"
              >
                Offline-first speech intelligence with transcription, flagging, and situational awareness for ocean and air.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <Button className="bg-amber-500 hover:bg-amber-600 text-black border border-amber-400 w-full sm:w-auto" size="lg">
                  DOWNLOAD
                </Button>
                <Button variant="outline" className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10 w-full sm:w-auto" size="lg">
                  VIEW DOCS
                </Button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Waveform + transcription panel */}
      <div className="absolute bottom-0 left-0 right-0 z-20 px-4 md:px-6 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Waveform */}
          <div className="md:col-span-2 border border-amber-500/30 bg-black/70 p-3">
            <div className="text-[10px] sm:text-xs font-mono text-amber-500 mb-2">AUDIO WAVEFORM</div>
            <div className="h-24 flex items-end gap-[2px]">
              {wave.map((v, i) => (
                <div key={i} className="bg-amber-500/70" style={{ width: 3, height: 8 + v * 80 }} />
              ))}
            </div>
          </div>

          {/* Transcription feed */}
          <div className="border border-amber-500/30 bg-black/70 p-3 h-28 overflow-hidden">
            <div className="text-[10px] sm:text-xs font-mono text-amber-500 mb-2">LIVE TRANSCRIPTION</div>
            <div className="text-xs sm:text-sm text-gray-300 font-mono space-y-1">
              <div className="text-amber-400">[14:32] COASTGUARD: Maintain heading 120. Report at marker Bravo.</div>
              <div className="text-gray-300">[14:33] SCOUT_03: Copy. Heading one-two-zero. ETA 3 minutes.</div>
              <div className="text-gray-300">[14:34] PILOT_12: Winds 14kt cross. Switching to channel 3.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(245,158,11,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
    </section>
  )
}


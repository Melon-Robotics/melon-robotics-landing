"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function PneumaForceExplainer() {
  return (
    <section className="relative py-32 md:py-40 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] overflow-hidden border-b border-amber-500/10">
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

      <div className="container-responsive max-w-6xl relative z-10 px-4">
          {/* What it is */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <div className="text-center mb-12 md:mb-16 px-4">
            <div className="flex items-center justify-center gap-2 md:gap-4 mb-6 md:mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
              <div className="font-mono text-[10px] sm:text-xs text-amber-500/60 tracking-[0.2em] sm:tracking-[0.3em] uppercase">SYSTEM OVERVIEW</div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            </div>
            <div className="mb-4 md:mb-6">
              <div className="font-mono text-[8px] sm:text-[9px] text-gray-600 mb-2">REF: MR-PNF-OVW | REV: A.1</div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-6 md:mb-8 tracking-tight text-white/90">
              Pneumatic exoskeleton for<br className="hidden sm:block" />subsea strength and control
            </h2>
            <div className="h-px w-16 md:w-24 bg-amber-500/30 mx-auto mb-6 md:mb-8" />
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light">
              PneumaForce is an upper-body exoskeleton that augments a diver's strength, endurance, and buoyancy control. AirMatrix provides precise buoyancy trimming, PneumaPower delivers up to +100 lb assist, and SyncMotion anticipates intent for natural movement.
            </p>
                  </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-20">
            {[
              { label: "Assist", value: "+100 lb", sub: "Power" },
              { label: "Depth", value: "1000 ft", sub: "Max Operating" },
              { label: "Runtime", value: "Up to 9h", sub: "Battery Life" },
              { label: "Weight", value: "46 lb", sub: "System" },
              { label: "Control", value: "Predictive", sub: "AI-Powered" },
              { label: "Materials", value: "CF/Al/HDPE", sub: "Marine-Grade" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-600">{stat.sub}</div>
              </motion.div>
                ))}
              </div>
        </motion.div>

        {/* Problem & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] rounded-3xl p-6 md:p-8 lg:p-10 border border-gray-800/50 relative group"
          >
            <div className="absolute top-0 right-0">
              <div className="font-mono text-[8px] text-gray-700">REF: 01</div>
            </div>
            <div className="mb-4">
              <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-2">PROBLEM STATEMENT</div>
              <div className="h-px w-8 bg-amber-500/30 mb-4" />
          </div>
            <h3 className="text-2xl md:text-3xl font-light text-white/90 mb-4 md:mb-6 tracking-tight">The Problem</h3>
            <ul className="space-y-4 text-gray-400">
              {[
                "Physical strain and injury risk in heavy, repetitive subsea tasks",
                "Inconsistent buoyancy causing fatigue and imprecise station-keeping",
                "Limited productivity windows due to diver fatigue and cold",
                "Safety risks when handling heavy tools and salvage loads"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 bg-gray-600 rounded-full" />
                  <span className="leading-relaxed font-light">{item}</span>
                </li>
              ))}
              </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] rounded-3xl p-6 md:p-8 lg:p-10 border border-gray-800/50 relative group"
          >
            <div className="absolute top-0 right-0">
              <div className="font-mono text-[8px] text-gray-700">REF: 02</div>
            </div>
            <div className="mb-4">
              <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-2">SOLUTION ARCHITECTURE</div>
              <div className="h-px w-8 bg-amber-500/30 mb-4" />
            </div>
            <h3 className="text-2xl md:text-3xl font-light text-white/90 mb-4 md:mb-6 tracking-tight">The Solution</h3>
            <ul className="space-y-4 text-gray-400">
              {[
                "AirMatrix dynamically trims buoyancy for neutral/positive/negative control",
                "PneumaPower offloads heavy lifts and sustained force tasks",
                "SyncMotion predicts intent for smooth, precise movement under load",
                "Modular design enables mission-specific payloads and quick repairs"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 bg-amber-500/60 rounded-full" />
                  <span className="leading-relaxed font-light">{item}</span>
                </li>
              ))}
              </ul>
          </motion.div>
        </div>

        {/* Deep Dive: AirMatrix & SyncMotion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
              <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">SYSTEM DEEP DIVE</div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            </div>
            <div className="mb-6">
              <div className="font-mono text-[9px] text-gray-600 mb-2">REF: MR-PNF-DEEP | REV: A.1</div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight text-white/90">
              How it works
            </h2>
            <div className="h-px w-24 bg-amber-500/30 mx-auto mb-6" />
            <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light">
              Three revolutionary systems working in harmony to eliminate diver fatigue and enhance precision.
            </p>
          </div>

          {/* AirMatrix Buoyancy System */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] rounded-3xl p-10 md:p-12 border border-gray-800/50 relative group"
            >
              <div className="absolute top-4 right-4">
                <div className="font-mono text-[8px] text-gray-700">REF: AIR-001</div>
              </div>
              
              <div className="mb-6">
                <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-2">AIRMATRIX BUOYANCY SYSTEM</div>
                <div className="h-px w-12 bg-amber-500/30 mb-4" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-light text-white/90 mb-6 tracking-tight">
                Replace your dive belt.<br />Never adjust again.
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
                <div>
                  <h4 className="text-xl font-light text-white/90 mb-4 tracking-tight">How It Works</h4>
                  <div className="space-y-4 text-gray-400 leading-relaxed font-light">
                    <p>
                      AirMatrix replaces traditional dive belts and weight systems with a distributed network of micro-pneumatic bladders integrated throughout the exoskeleton. Each bladder can independently inflate or deflate in real-time, providing precise buoyancy control.
                    </p>
                    <p>
                      The system continuously monitors depth, pressure, and diver position through integrated sensors. As you descend or ascend, AirMatrix automatically adjusts buoyancy to maintain your selected profile—neutral, positive, or negative—without manual intervention.
                    </p>
                    <p>
                      Unlike static weight systems that require constant adjustment, AirMatrix responds instantly to changes in depth, equipment weight, and even gas consumption from your tanks. The result: perfect trim at all times, regardless of depth or task.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-light text-white/90 mb-4 tracking-tight">Key Benefits</h4>
                  <ul className="space-y-3 text-gray-400 leading-relaxed font-light">
                    {[
                      "Eliminates constant weight belt adjustments—set once, dive all day",
                      "Reduces fatigue by maintaining perfect trim automatically",
                      "Extends dive time by up to 3x through reduced energy expenditure",
                      "Enables precise station-keeping for inspection and construction work",
                      "Adapts to changing conditions: depth, equipment, gas consumption",
                      "Prevents buoyancy-related accidents through automatic compensation"
                    ].map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 bg-amber-500/60 rounded-full flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="mt-8 pt-8 border-t border-gray-800/50">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { label: "Response Time", value: "< 0.5s", sub: "Real-time adjustment" },
                    { label: "Precision", value: "±0.1 lb", sub: "Buoyancy control" },
                    { label: "Depth Range", value: "0-1000ft", sub: "Full operating range" },
                    { label: "Bladder Network", value: "12 zones", sub: "Distributed control" },
                  ].map((spec, idx) => (
                    <div key={idx} className="border border-gray-800/50 bg-black/40 p-4">
                      <div className="text-2xl font-light text-white mb-1 font-mono">{spec.value}</div>
                      <div className="text-xs text-gray-500 mb-1 font-mono">{spec.label.toUpperCase()}</div>
                      <div className="text-[10px] text-gray-600 font-mono">{spec.sub}</div>
                </div>
              ))}
            </div>
          </div>
            </motion.div>
          </div>

          {/* PneumaPower Assist System */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] rounded-3xl p-10 md:p-12 border border-gray-800/50 relative group"
            >
              <div className="absolute top-4 right-4">
                <div className="font-mono text-[8px] text-gray-700">REF: PNEUMA-001</div>
              </div>
              
              <div className="mb-6">
                <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-2">PNEUMAPOWER ASSIST SYSTEM</div>
                <div className="h-px w-12 bg-amber-500/30 mb-4" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-light text-white/90 mb-6 tracking-tight">
                Lift 100 pounds like 10.<br />Strength without strain.
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
                <div>
                  <h4 className="text-xl font-light text-white/90 mb-4 tracking-tight">How It Works</h4>
                  <div className="space-y-4 text-gray-400 leading-relaxed font-light">
                    <p>
                      PneumaPower uses a network of adaptive pneumatic actuators integrated into the exoskeleton's shoulder, arm, and torso sections. These actuators are powered by your SCUBA air supply and respond to muscle activation signals detected by the SyncMotion sensor network.
                    </p>
                    <p>
                      When you initiate a lift or apply force, the system detects your intent through micro-movements and muscle tension patterns. Pneumatic actuators then engage proportionally, amplifying your strength by up to 100 pounds of additional assist force. The system provides smooth, controlled augmentation that feels natural—you maintain full control while the exoskeleton handles the heavy lifting.
                    </p>
                    <p>
                      The assist level is dynamically adjustable based on task requirements. For delicate work, you can reduce assistance to near-zero for fine motor control. For heavy lifting or sustained force tasks, maximum assist engages automatically when needed. The system continuously adapts to your movements, ensuring the right amount of help at the right time.
                    </p>
                  </div>
            </div>
                
                <div>
                  <h4 className="text-xl font-light text-white/90 mb-4 tracking-tight">Key Benefits</h4>
                  <ul className="space-y-3 text-gray-400 leading-relaxed font-light">
                    {[
                      "Up to 100 lb of force augmentation for heavy lifts and sustained tasks",
                      "Reduces physical strain and injury risk from repetitive heavy work",
                      "Extends productive dive time by minimizing fatigue accumulation",
                      "Enables tasks previously requiring multiple divers or surface support",
                      "Proportional control maintains natural movement and fine motor skills",
                      "Automatic engagement adapts to task demands without manual switching"
                    ].map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 bg-amber-500/60 rounded-full flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
              </ul>
            </div>
          </div>

              {/* Technical Specifications */}
              <div className="mt-8 pt-8 border-t border-gray-800/50">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { label: "Max Assist", value: "+100 lb", sub: "Force augmentation" },
                    { label: "Actuators", value: "8 zones", sub: "Distributed power" },
                    { label: "Response Time", value: "< 50ms", sub: "Activation speed" },
                    { label: "Power Source", value: "SCUBA", sub: "Air-driven system" },
                  ].map((spec, idx) => (
                    <div key={idx} className="border border-gray-800/50 bg-black/40 p-4">
                      <div className="text-2xl font-light text-white mb-1 font-mono">{spec.value}</div>
                      <div className="text-xs text-gray-500 mb-1 font-mono">{spec.label.toUpperCase()}</div>
                      <div className="text-[10px] text-gray-600 font-mono">{spec.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>


          {/* SyncMotion Leveling System */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] rounded-3xl p-10 md:p-12 border border-gray-800/50 relative group"
            >
              <div className="absolute top-4 right-4">
                <div className="font-mono text-[8px] text-gray-700">REF: SYNC-001</div>
              </div>
              
              <div className="mb-6">
                <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-2">SYNCMOTION LEVELING SYSTEM</div>
                <div className="h-px w-12 bg-amber-500/30 mb-4" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-light text-white/90 mb-6 tracking-tight">
                AI that reads your mind.<br />Movement amplified.
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
                <div>
                  <h4 className="text-xl font-light text-white/90 mb-4 tracking-tight">How It Works</h4>
                  <div className="space-y-4 text-gray-400 leading-relaxed font-light">
                    <p>
                      SyncMotion uses a neural sensor network embedded throughout the exoskeleton to detect micro-movements and muscle activation patterns. Advanced AI algorithms analyze these signals in real-time to predict your intended movement before you fully execute it.
                    </p>
                    <p>
                      The system provides two critical functions: <strong className="text-amber-500/80">intent prediction</strong> and <strong className="text-amber-500/80">automatic leveling</strong>. As you begin to move, SyncMotion anticipates the direction and magnitude of your motion, activating pneumatic actuators to amplify your movement while maintaining perfect balance.
                    </p>
                    <p>
                      The leveling system continuously monitors your orientation and automatically adjusts actuator pressure to keep you perfectly level, even when handling heavy loads or working in strong currents. This eliminates the constant micro-adjustments divers make to maintain position, dramatically reducing cognitive load and fatigue.
                    </p>
                    <p>
                      Over time, SyncMotion learns your movement patterns and preferences, becoming more intuitive with each dive. The system adapts to your personal diving style, making the exoskeleton feel like a natural extension of your body.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-light text-white/90 mb-4 tracking-tight">Key Benefits</h4>
                  <ul className="space-y-3 text-gray-400 leading-relaxed font-light">
                    {[
                      "Millisecond response time—movement feels natural and immediate",
                      "Automatic leveling maintains perfect trim in any orientation",
                      "Reduces cognitive load by eliminating constant position adjustments",
                      "Learns your movement patterns for increasingly intuitive control",
                      "Enables precise work even in strong currents or with heavy loads",
                      "Prevents overcompensation and reduces risk of disorientation"
                    ].map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 bg-amber-500/60 rounded-full flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="mt-8 pt-8 border-t border-gray-800/50">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { label: "Response Time", value: "< 10ms", sub: "Neural prediction" },
                    { label: "Sensors", value: "24 nodes", sub: "Neural network" },
                    { label: "Learning Rate", value: "Adaptive", sub: "Per-diver profile" },
                    { label: "Leveling Precision", value: "±0.5°", sub: "Orientation control" },
                  ].map((spec, idx) => (
                    <div key={idx} className="border border-gray-800/50 bg-black/40 p-4">
                      <div className="text-2xl font-light text-white mb-1 font-mono">{spec.value}</div>
                      <div className="text-xs text-gray-500 mb-1 font-mono">{spec.label.toUpperCase()}</div>
                      <div className="text-[10px] text-gray-600 font-mono">{spec.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
              <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">USE CASES</div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            </div>
            <div className="mb-6">
              <div className="font-mono text-[9px] text-gray-600 mb-2">REF: MR-PNF-USE | REV: A.1</div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight text-white/90">
              Built for professionals
            </h2>
            <div className="h-px w-24 bg-amber-500/30 mx-auto mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { title: "Underwater Construction", description: "Heavy tool operation, torque tasks, and precise positioning for fasteners and fittings." },
                { title: "Salvage & Recovery", description: "Lift assist and fatigue reduction for repetitive lift-and-secure operations." },
                { title: "Scientific Diving", description: "Fine buoyancy and motion control for sampling, transects, and photogrammetry." },
              ].map((useCase, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] rounded-3xl p-8 border border-gray-800/50 relative group"
                >
                  <div className="absolute top-3 right-3">
                    <div className="font-mono text-[8px] text-gray-700">REF: {String(idx + 1).padStart(2, '0')}</div>
                  </div>
                  <h4 className="text-xl font-light text-white/90 mb-4 tracking-tight pr-8">{useCase.title}</h4>
                  <div className="h-px w-8 bg-amber-500/30 mb-4" />
                  <p className="text-gray-500 leading-relaxed font-light">{useCase.description}</p>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Safety & Integration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] rounded-3xl p-12 border border-gray-800/50 relative group">
            <div className="absolute top-4 right-4">
              <div className="font-mono text-[8px] text-gray-700">REF: SAF-001</div>
            </div>
            <div className="text-center mb-8">
              <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-2">SAFETY & INTEGRATION</div>
              <div className="h-px w-12 bg-amber-500/30 mx-auto mb-4" />
            </div>
            <h3 className="text-4xl font-light text-white/90 mb-8 tracking-tight text-center">Safety & Integration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-light text-white mb-4">Operational Flow</h4>
                <ol className="space-y-3 text-gray-500 leading-relaxed font-light">
                  {[
                    "Don exoskeleton; connect air and sensor harness",
                    "Set buoyancy profile (neutral/positive/negative) via AirMatrix",
                    "Enable PneumaPower assist per task; adjust assistance level",
                    "SyncMotion learns movement patterns, enhancing precision",
                    "Monitor battery/air status; swap modules as needed"
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-amber-500/60 font-mono text-sm mt-1">{String(i + 1).padStart(2, '0')}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h4 className="text-xl font-light text-white mb-4">Safety Features</h4>
                <ul className="space-y-3 text-gray-500 leading-relaxed font-light">
                  {[
                    "Quick-release disconnects and manual override valves",
                    "Standard SCUBA compatibility and redundant failsafes",
                    "Compatible with commercial dive comms and tools",
                    "Field-repairable modules with sealed connectors"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 bg-amber-500/60 rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
              <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">FAQ</div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            </div>
            <div className="mb-6">
              <div className="font-mono text-[9px] text-gray-600 mb-2">REF: MR-PNF-FAQ | REV: A.1</div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight text-white/90">
              Common questions
            </h2>
            <div className="h-px w-24 bg-amber-500/30 mx-auto mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
                { q: "How quickly can a diver learn PneumaForce?", a: "Typical familiarization is under 1 hour; proficiency within 1-2 working days." },
                { q: "Can it be used for deep dives?", a: "Operational up to 1000 ft (305 m) with appropriate gas and thermal protection." },
                { q: "What about maintenance?", a: "Modular components allow easy field replacement; periodic checks align with dive gear schedules." },
                { q: "Is the assist adjustable?", a: "Yes—assistance levels are task-adjustable, including fine control for delicate work." },
              ].map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] rounded-3xl p-8 border border-gray-800/50 relative group"
                >
                  <div className="absolute top-3 right-3">
                    <div className="font-mono text-[8px] text-gray-700">Q: {String(idx + 1).padStart(2, '0')}</div>
                  </div>
                  <h4 className="text-xl font-light text-white/90 mb-4 tracking-tight pr-8">{faq.q}</h4>
                  <div className="h-px w-8 bg-amber-500/30 mb-4" />
                  <p className="text-gray-500 leading-relaxed font-light">{faq.a}</p>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-24"
        >
          <Link href="/contact">
            <Button 
              size="lg"
              className="bg-white hover:bg-gray-100 text-black px-12 py-8 text-lg font-medium rounded-full transition-all duration-300 shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20"
            >
              Request Demo
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

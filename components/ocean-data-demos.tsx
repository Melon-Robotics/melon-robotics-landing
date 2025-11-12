"use client"

import { motion } from "framer-motion"

export function OceanDataDemos() {
  return (
    <section className="relative py-32 md:py-40 px-4 border-b border-amber-500/10 bg-gradient-to-b from-[#0a0e1a] to-black overflow-hidden">
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

      <div className="container-responsive max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-28"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">DATA DASHBOARD</div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 text-white/90">
            Real-Time Ocean<br />Intelligence
          </h2>
          <p className="text-base md:text-lg text-gray-500 font-light max-w-xl leading-relaxed">
            Live environmental data from sensor networks, historical archives, and AI-powered forecasting models integrated through RESTful APIs.
          </p>
        </motion.div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Regional Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 group relative"
          >
            <div className="relative border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 transition-all duration-500 hover:border-amber-500/30 hover:shadow-[0_0_40px_rgba(245,158,11,0.1)]">
              {/* Technical Drawing Corners */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Panel Header */}
              <div className="mb-4 flex items-center justify-between">
                <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider">REGIONAL OVERVIEW</div>
                <div className="font-mono text-[8px] text-gray-700">REF: MAP-001</div>
          </div>

              {/* Map Display */}
              <div className="relative h-80 bg-black/60 overflow-hidden border border-gray-800/50">
                <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(245, 158, 11, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 158, 11, 0.08) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                
                {/* Sensor Stations */}
                {Array.from({length:7}).map((_,i)=> (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.7)]"
                    style={{ left: `${10+i*12}%`, top: `${25 + (i%3)*18}%` }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: [0.5,1,0.5], scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i*0.15 }}
                  />
                ))}
                
                {/* Current Flow Line */}
                <motion.div
                  className="absolute left-0 top-1/2 h-px w-full bg-amber-500/40"
                  animate={{ opacity: [0.2,0.6,0.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                {/* Live Data Readout */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-black/90 border border-gray-700/50 px-3 py-1.5 backdrop-blur-sm">
                    <div className="font-mono text-[8px] text-amber-500/80 space-y-0.5">
                      <div>CUR: 1.2 kt • DIR: 215°</div>
                      <div>WAVES: Hs 2.3m • Tp 8.1s</div>
                      <div>SST: 21.6°C • SAL: 34.8 PSU</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6">
                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  Real-time visualization of oceanographic conditions across regional sensor networks. Live data streams update every 5-15 minutes with historical context and forecast overlays for operational planning.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="group relative"
          >
            <div className="relative border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 transition-all duration-500 hover:border-amber-500/30 hover:shadow-[0_0_40px_rgba(245,158,11,0.1)]">
              {/* Technical Drawing Corners */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Panel Header */}
              <div className="mb-4 flex items-center justify-between">
                <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider">KEY METRICS</div>
                <div className="font-mono text-[8px] text-gray-700">REF: MET-001</div>
                  </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  {k:"Waves Hs",v:"2.3 m",trend:"+0.2"},
                  {k:"Waves Tp",v:"8.1 s",trend:"-0.3"},
                  {k:"Currents",v:"1.2 kt",trend:"+0.1"},
                  {k:"Wind",v:"14 kt",trend:"-2.0"},
                  {k:"SST",v:"21.6 °C",trend:"+0.5"},
                  {k:"Salinity",v:"34.8 PSU",trend:"0.0"},
                ].map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                    className="border border-gray-800/50 bg-black/40 p-3"
                  >
                    <div className="font-mono text-[8px] text-amber-500/70 mb-1">{m.k}</div>
                    <div className="text-base text-amber-100 font-light mb-1">{m.v}</div>
                    <div className="font-mono text-[8px] text-gray-600">{m.trend}</div>
                  </motion.div>
                ))}
              </div>

              {/* Description */}
              <div className="mt-6">
                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  Critical environmental parameters with trend indicators. Real-time updates from multiple sensor platforms provide comprehensive situational awareness for operational decision-making.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* API Integration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group relative"
        >
          <div className="relative border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 transition-all duration-500 hover:border-amber-500/30 hover:shadow-[0_0_40px_rgba(245,158,11,0.1)]">
            {/* Technical Drawing Corners */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Panel Header */}
            <div className="mb-4 flex items-center justify-between">
              <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider">API INTEGRATION</div>
              <div className="font-mono text-[8px] text-gray-700">REF: API-001</div>
          </div>

            {/* API Response */}
            <div className="bg-black/60 border border-gray-800/50 p-4">
              <div className="font-mono text-[9px] text-amber-500/60 mb-3">REST API RESPONSE</div>
              <pre className="text-xs text-gray-300 overflow-x-auto font-mono leading-relaxed">{`{
  "station": "MELON_BUOY_A7",
  "timestamp": "2025-10-30T14:12:05Z",
  "location": {
    "lat": 34.0522,
    "lon": -118.2437
  },
  "waves": {
    "hs": 2.3,
    "tp": 8.1,
    "direction": 215
  },
  "currents": {
    "speed": 1.2,
    "dir": 215,
    "depth": 5.0
  },
  "sst": 21.6,
  "salinity": 34.8,
  "quality": "GOOD"
}`}</pre>
            </div>

            {/* Description */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 leading-relaxed font-light">
                RESTful API endpoints provide programmatic access to real-time and historical data. JSON responses include comprehensive metadata, quality indicators, and standardized units for seamless integration with operational systems.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

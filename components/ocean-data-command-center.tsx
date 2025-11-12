"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function OceanDataCommandCenter() {
  const [activeStation, setActiveStation] = useState(0)
  const [timestamp, setTimestamp] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const stations = [
    { id: "A7", name: "MELON_BUOY_A7", status: "OPERATIONAL", lat: 34.0522, lon: -118.2437, depth: 12.2, lastUpdate: "5s" },
    { id: "B3", name: "MELON_BUOY_B3", status: "OPERATIONAL", lat: 33.6846, lon: -118.0000, depth: 45.8, lastUpdate: "8s" },
    { id: "C1", name: "MELON_BUOY_C1", status: "OPERATIONAL", lat: 34.1478, lon: -119.1950, depth: 28.3, lastUpdate: "3s" },
    { id: "D9", name: "MELON_BUOY_D9", status: "OPERATIONAL", lat: 32.7157, lon: -117.1611, depth: 67.1, lastUpdate: "12s" },
    { id: "E5", name: "MELON_BUOY_E5", status: "MAINTENANCE", lat: 35.2828, lon: -120.6596, depth: 89.4, lastUpdate: "2m" },
  ]

  return (
    <section className="relative min-h-screen bg-[#0a0e1a] overflow-hidden">
      {/* Technical Grid Background - Denser */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(245,158,11,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,158,11,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }} />
      </div>

      {/* Depth Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0f1625] to-[#1a2332]" />

      {/* Command Center Frame - Top Bar */}
      <div className="absolute top-0 left-0 right-0 h-14 md:h-16 border-b border-amber-500/20 bg-black/40 backdrop-blur-sm z-20">
        <div className="container-responsive h-full flex items-center justify-between px-4">
          <div className="flex items-center gap-2 md:gap-6 flex-1 min-w-0">
            <div className="font-mono text-[8px] md:text-[10px] text-amber-500/80 tracking-[0.2em] md:tracking-[0.3em] uppercase truncate">
              OCEAN DATA COMMAND CENTER
            </div>
            <div className="h-4 w-px bg-amber-500/20 hidden md:block" />
            <div className="font-mono text-[8px] md:text-[9px] text-gray-600 hidden md:block">
              SYS: OPERATIONAL | FLEET: {stations.filter(s => s.status === "OPERATIONAL").length}/{stations.length} ACTIVE
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
            <div className="font-mono text-[8px] md:text-[9px] text-gray-600 hidden sm:block">
              {timestamp.toISOString().replace('T', ' ').substring(0, 19)}Z
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-responsive pt-20 md:pt-24 pb-12 relative z-10 px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 md:mb-12"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6 md:mb-8">
            <div className="flex-1">
              <div className="font-mono text-[8px] md:text-[9px] text-gray-600 mb-2">REF: MR-CC-001 | REV: 3.0 | CLASS: UNCLASSIFIED</div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white/90 mb-2">
                Ocean Data<br />Command Center
              </h1>
              <div className="h-px w-12 md:w-16 bg-amber-500/30 mb-4" />
              <p className="text-sm md:text-base text-gray-400 font-light max-w-2xl">
                Real-time monitoring and control interface for global sensor fleet. Enterprise-grade oceanographic intelligence as a service.
              </p>
            </div>
            <div className="w-full lg:w-auto lg:min-w-[200px]">
              <div className="border border-amber-500/30 bg-black/60 p-4 md:p-6 backdrop-blur-sm">
                <div className="font-mono text-[8px] md:text-[9px] text-amber-500/70 uppercase tracking-wider mb-3 md:mb-4">FLEET STATUS</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 font-mono">ACTIVE</span>
                    <span className="text-base md:text-lg text-green-400 font-mono">{stations.filter(s => s.status === "OPERATIONAL").length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 font-mono">MAINTENANCE</span>
                    <span className="text-base md:text-lg text-amber-500 font-mono">{stations.filter(s => s.status === "MAINTENANCE").length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 font-mono">UPTIME</span>
                    <span className="text-base md:text-lg text-amber-500/90 font-mono">99.7%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bloomberg Terminal Style Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-6 md:mb-8">
          {/* Sensor Fleet Map - Large Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8 border border-amber-500/20 bg-black/60 backdrop-blur-sm p-4 md:p-6 relative group"
          >
            {/* Technical Corner Markers */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-amber-500/30" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-amber-500/30" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-amber-500/30" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-amber-500/30" />

            {/* Panel Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider">SENSOR FLEET MAP</div>
              <div className="font-mono text-[8px] text-gray-700">REF: MAP-001</div>
            </div>

            {/* Map Visualization */}
            <div className="relative h-64 md:h-80 lg:h-96 bg-gradient-to-br from-[#0a0e1a] to-black border border-gray-800/50 overflow-hidden">
              {/* Grid Overlay */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `
                  linear-gradient(rgba(245,158,11,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(245,158,11,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }} />

              {/* Sensor Stations */}
              {stations.map((station, idx) => (
                <motion.div
                  key={station.id}
                  className={`absolute cursor-pointer ${
                    station.status === "OPERATIONAL" ? "text-green-400" : "text-amber-500"
                  }`}
                  style={{
                    left: `${15 + idx * 18}%`,
                    top: `${30 + (idx % 3) * 25}%`
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                  onClick={() => setActiveStation(idx)}
                >
                  <div className="relative">
                    <motion.div
                      className={`w-3 h-3 rounded-full ${
                        station.status === "OPERATIONAL" ? "bg-green-400" : "bg-amber-500"
                      } shadow-[0_0_12px_currentColor]`}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: station.status === "OPERATIONAL" ? [0.8, 1, 0.8] : [0.5, 0.7, 0.5]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    {activeStation === idx && (
                      <motion.div
                        className="absolute -inset-2 border-2 border-amber-500/50 rounded-full"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1.2, opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </div>
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <div className="bg-black/90 border border-amber-500/30 px-2 py-1 backdrop-blur-sm">
                      <div className="font-mono text-[8px] text-amber-500/90">{station.id}</div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Current Flow Visualization */}
              <motion.svg
                className="absolute inset-0 w-full h-full opacity-30"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M0,50 Q25,30 50,50 T100,50"
                  stroke="#f59e0b"
                  strokeWidth="0.5"
                  fill="none"
                  animate={{
                    pathLength: [0, 1, 0],
                    opacity: [0.2, 0.6, 0.2]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </motion.svg>

              {/* Active Station Info Overlay */}
              {stations[activeStation] && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-4 left-4 bg-black/90 border border-amber-500/30 p-4 backdrop-blur-sm"
                >
                  <div className="font-mono text-[8px] text-amber-500/70 mb-2">ACTIVE STATION</div>
                  <div className="font-mono text-sm text-white mb-1">{stations[activeStation].name}</div>
                  <div className="font-mono text-[9px] text-gray-500 space-y-0.5">
                    <div>LAT: {stations[activeStation].lat}°</div>
                    <div>LON: {stations[activeStation].lon}°</div>
                    <div>DEPTH: {stations[activeStation].depth}m</div>
                    <div>STATUS: <span className={stations[activeStation].status === "OPERATIONAL" ? "text-green-400" : "text-amber-500"}>{stations[activeStation].status}</span></div>
                    <div>UPDATE: {stations[activeStation].lastUpdate} AGO</div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Real-Time Data Streams - Right Column */}
          <div className="lg:col-span-4 space-y-4">
            {/* Live Telemetry */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="border border-amber-500/20 bg-black/60 backdrop-blur-sm p-3 md:p-4 relative group"
            >
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber-500/30" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber-500/30" />
              
              <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-3">LIVE TELEMETRY</div>
              <div className="space-y-2">
                {[
                  { param: "WAVES_HS", value: "2.3m", trend: "+0.2", ref: "TLM-001" },
                  { param: "WAVES_TP", value: "8.1s", trend: "-0.3", ref: "TLM-002" },
                  { param: "CURR_SPD", value: "1.2kt", trend: "+0.1", ref: "TLM-003" },
                  { param: "WIND_SPD", value: "14kt", trend: "-2.0", ref: "TLM-004" },
                  { param: "SST", value: "21.6°C", trend: "+0.5", ref: "TLM-005" },
                  { param: "SALINITY", value: "34.8PSU", trend: "0.0", ref: "TLM-006" },
                ].map((metric, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + idx * 0.05 }}
                    className="flex items-center justify-between border-b border-gray-800/50 pb-2"
                  >
                    <div className="flex-1">
                      <div className="font-mono text-[8px] text-gray-600 mb-0.5">{metric.param}</div>
                      <div className="font-mono text-sm text-amber-100">{metric.value}</div>
                    </div>
                    <div className="text-right">
                      <div className={`font-mono text-[8px] ${metric.trend.startsWith('+') ? 'text-green-400' : metric.trend.startsWith('-') ? 'text-red-400' : 'text-gray-600'}`}>
                        {metric.trend}
                      </div>
                      <div className="font-mono text-[7px] text-gray-700">{metric.ref}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* System Status */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="border border-amber-500/20 bg-black/60 backdrop-blur-sm p-3 md:p-4 relative group"
            >
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber-500/30" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber-500/30" />
              
              <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-3">SYSTEM STATUS</div>
              <div className="space-y-2">
                {[
                  { system: "API_GATEWAY", status: "ONLINE", latency: "12ms", ref: "SYS-001" },
                  { system: "DATA_PROC", status: "ONLINE", latency: "8ms", ref: "SYS-002" },
                  { system: "FORECAST_AI", status: "ONLINE", latency: "45ms", ref: "SYS-003" },
                  { system: "STORAGE", status: "ONLINE", latency: "3ms", ref: "SYS-004" },
                ].map((sys, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                      <div className="font-mono text-[8px] text-gray-400">{sys.system}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-[8px] text-green-400">{sys.status}</div>
                      <div className="font-mono text-[7px] text-gray-600">{sys.latency}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Data Stream Panels - Bloomberg Terminal Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 md:mb-8">
          {/* Wave Forecast Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="border border-amber-500/20 bg-black/60 backdrop-blur-sm p-3 md:p-4 relative group"
          >
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber-500/30" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber-500/30" />
            
            <div className="flex items-center justify-between mb-3">
              <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider">WAVE FORECAST</div>
              <div className="font-mono text-[8px] text-gray-700">REF: WFC-001</div>
            </div>
            <div className="h-24 md:h-32 relative">
              <svg viewBox="0 0 200 80" className="w-full h-full">
                <motion.path
                  d="M0,60 L40,45 L80,50 L120,35 L160,40 L200,30"
                  stroke="#f59e0b"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
              </svg>
              <div className="absolute bottom-0 left-0 right-0 flex justify-between font-mono text-[7px] text-gray-600">
                <span>NOW</span>
                <span>+24H</span>
                <span>+48H</span>
                <span>+72H</span>
              </div>
            </div>
          </motion.div>

          {/* Current Flow Vector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="border border-amber-500/20 bg-black/60 backdrop-blur-sm p-4 relative group"
          >
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber-500/30" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber-500/30" />
            
            <div className="flex items-center justify-between mb-3">
              <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider">CURRENT FLOW</div>
              <div className="font-mono text-[8px] text-gray-700">REF: CFL-001</div>
            </div>
            <div className="h-24 md:h-32 relative flex items-center justify-center">
              <div className="relative">
                <motion.div
                  className="w-12 h-12 md:w-16 md:h-16 border-2 border-amber-500/40 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-mono text-lg text-amber-500/90">215°</div>
                    <div className="font-mono text-[8px] text-gray-600">1.2 kt</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* API Request Rate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="border border-amber-500/20 bg-black/60 backdrop-blur-sm p-4 relative group"
          >
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber-500/30" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber-500/30" />
            
            <div className="flex items-center justify-between mb-3">
              <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider">API THROUGHPUT</div>
              <div className="font-mono text-[8px] text-gray-700">REF: API-001</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[8px] text-gray-500">REQUESTS/SEC</span>
                <span className="font-mono text-lg text-amber-500/90">1,247</span>
              </div>
              <div className="h-2 bg-gray-900 border border-gray-800">
                <motion.div
                  className="h-full bg-amber-500/60"
                  initial={{ width: 0 }}
                  animate={{ width: "78%" }}
                  transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                />
              </div>
              <div className="flex items-center justify-between text-[8px] font-mono text-gray-600">
                <span>CAPACITY: 1,600 req/s</span>
                <span>78%</span>
              </div>
            </div>
          </motion.div>

          {/* Data Quality Monitor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="border border-amber-500/20 bg-black/60 backdrop-blur-sm p-4 relative group"
          >
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber-500/30" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber-500/30" />
            
            <div className="flex items-center justify-between mb-3">
              <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider">DATA QUALITY</div>
              <div className="font-mono text-[8px] text-gray-700">REF: DQM-001</div>
            </div>
            <div className="space-y-3">
              {[
                { label: "GOOD", value: 94, color: "green" },
                { label: "FAIR", value: 5, color: "amber" },
                { label: "POOR", value: 1, color: "red" },
              ].map((q, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[8px] text-gray-500">{q.label}</span>
                    <span className={`font-mono text-xs ${
                      q.color === "green" ? "text-green-400" :
                      q.color === "amber" ? "text-amber-500" :
                      "text-red-400"
                    }`}>{q.value}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-900 border border-gray-800">
                    <motion.div
                      className={`h-full ${
                        q.color === "green" ? "bg-green-500/60" :
                        q.color === "amber" ? "bg-amber-500/60" :
                        "bg-red-500/60"
                      }`}
                      initial={{ width: 0 }}
                      animate={{ width: `${q.value}%` }}
                      transition={{ duration: 1, delay: 1 + idx * 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Station Status Table - Bloomberg Terminal Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="border border-amber-500/20 bg-black/60 backdrop-blur-sm p-4 md:p-6 relative group mb-6 md:mb-8 overflow-x-auto"
        >
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-amber-500/30" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-amber-500/30" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-amber-500/30" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-amber-500/30" />

          <div className="flex items-center justify-between mb-4">
            <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider">STATION STATUS MATRIX</div>
            <div className="font-mono text-[8px] text-gray-700">REF: SSM-001</div>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-6 gap-2 md:gap-4 pb-2 border-b border-gray-800/50 mb-3 font-mono text-[7px] md:text-[8px] text-amber-500/70 uppercase tracking-wider min-w-[600px]">
            <div>STATION</div>
            <div>STATUS</div>
            <div className="hidden sm:block">LAST UPDATE</div>
            <div>DEPTH</div>
            <div className="hidden md:block">LAT/LON</div>
            <div>REF</div>
          </div>

          {/* Table Rows */}
          <div className="space-y-2">
            {stations.map((station, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + idx * 0.1 }}
                className={`grid grid-cols-6 gap-2 md:gap-4 py-2 border-b border-gray-800/30 font-mono text-[10px] md:text-xs hover:bg-amber-500/5 transition-colors cursor-pointer min-w-[600px] ${
                  activeStation === idx ? "bg-amber-500/10 border-l-2 border-l-amber-500" : ""
                }`}
                onClick={() => setActiveStation(idx)}
              >
                <div className="text-amber-500/90 truncate">{station.name}</div>
                <div className={`${station.status === "OPERATIONAL" ? "text-green-400" : "text-amber-500"} truncate`}>
                  {station.status}
                </div>
                <div className="text-gray-400 hidden sm:block">{station.lastUpdate}</div>
                <div className="text-gray-400">{station.depth}m</div>
                <div className="text-gray-500 text-[9px] md:text-[10px] hidden md:block">{station.lat.toFixed(2)}/{station.lon.toFixed(2)}</div>
                <div className="text-gray-700 text-[9px] md:text-[10px]">STN-{String(idx + 1).padStart(3, '0')}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}


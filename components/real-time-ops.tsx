"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Activity, BarChart3, Wifi, RefreshCw, TerminalSquare, Shield, Eye, AlertTriangle, Cpu, Lock, KeySquare } from "lucide-react"

export function RealTimeOps() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })
  const [activeTab, setActiveTab] = useState('operations')
  const [mobileTabsOpen, setMobileTabsOpen] = useState(false)
  const [matrixElements, setMatrixElements]: any = useState([])
  const [glitchTextDelay, setGlitchTextDelay] = useState(3)

  // Generate matrix elements only on client-side to avoid hydration errors
  // and set glitch text animation delay for consistency
  useEffect(() => {
    const generateMatrixElements = () => {
      return Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: `${Math.random() * 20 + 10}s`,
        content: Array.from({ length: 20 }).map(() => 
          Math.random() > 0.5 ? '1' : '0'
        ).join(' ')
      }));
    };
    
    setMatrixElements(generateMatrixElements());
    setGlitchTextDelay(Math.random() * 5 + 2);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  const glitchText = {
    initial: { opacity: 1 },
    animate: {
      opacity: [1, 0.8, 1, 0.9, 1],
      x: [0, -1, 1, -1, 0],
      transition: {
        duration: 0.2,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: glitchTextDelay
      }
    }
  }

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 md:py-32 bg-[#0a0e1a] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Grid background */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: "linear-gradient(#f59e0b20 1px, transparent 1px), linear-gradient(90deg, #f59e0b20 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />
        
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        
        {/* Glowing orbs */}
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
        
        {/* Diagonal accent lines */}
        <div className="absolute top-0 right-1/4 w-px h-32 bg-amber-500/30 origin-top-right transform rotate-45" />
        <div className="absolute bottom-0 left-1/4 w-px h-32 bg-amber-500/30 origin-bottom-left transform -rotate-45" />
        
        {/* Code matrix - Client-side only rendering */}
        <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
          {matrixElements.map((element: any) => (
            <div 
              key={element.id}
              className="absolute text-amber-500 font-mono text-xs whitespace-nowrap"
              style={{
                top: element.top,
                left: element.left,
                animation: `matrixFlow ${element.duration} linear infinite`,
              }}
            >
              {element.content}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header - Improved for mobile */}
          <motion.div variants={itemVariants} className="text-center mb-10 sm:mb-16">
            <motion.div 
              className="text-xs uppercase tracking-widest text-amber-500 font-mono mb-2"
              variants={glitchText}
              initial="initial"
              animate="animate"
            >
              Operational Intelligence
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter mb-4 sm:mb-6">
              <span className="text-amber-500">Command Center</span> Platform
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-300/90 max-w-3xl mx-auto leading-relaxed">
              Monitor and control your fleet with our comprehensive dashboard. Real-time telemetry, mission planning,
              and digital twin simulation in one secure platform.
            </p>
          </motion.div>

          {/* Command Center Dashboard - Improved for mobile */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="relative rounded-none border border-amber-500/30 shadow-[0_0_25px_rgba(245,158,11,0.15)]">
              {/* Terminal header */}
              <div className="bg-black border-b border-amber-500/30 p-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/80" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                  <div className="w-2 h-2 rounded-full bg-green-500/80" />
                  <div className="text-xs text-amber-500 ml-1 font-mono flex items-center gap-1">
                    <TerminalSquare size={12} className="hidden xs:block" />
                    <span className="truncate">MELON_COMMAND</span>
                  </div>
                </div>
                <div className="text-[10px] sm:text-xs text-amber-500/70 font-mono">
                  <span className="bg-amber-500/10 px-1.5 py-0.5 rounded-sm">SECURE</span>
                </div>
              </div>

              {/* Navigation tabs - Mobile optimized */}
              <div className="bg-black border-b border-amber-500/30 flex relative">
                {/* Mobile tabs dropdown button */}
                <button 
                  className="md:hidden flex items-center justify-between w-full p-2 text-xs font-mono text-amber-500" 
                  onClick={() => setMobileTabsOpen(!mobileTabsOpen)}
                >
                  <span>{activeTab.toUpperCase()}</span>
                  <span className="text-amber-500/70">{mobileTabsOpen ? '▲' : '▼'}</span>
                </button>

                {/* Mobile tabs dropdown */}
                {mobileTabsOpen && (
                  <div className="absolute top-full left-0 right-0 z-30 bg-black border-b border-amber-500/30 md:hidden">
                    {[
                      { id: 'operations', label: 'OPERATIONS' },
                      { id: 'diagnostics', label: 'DIAGNOSTICS' },
                      { id: 'network', label: 'NETWORK' },
                      { id: 'security', label: 'SECURITY' }
                    ].map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => {
                          setActiveTab(tab.id);
                          setMobileTabsOpen(false);
                        }}
                        className={`text-xs font-mono py-2 px-4 w-full text-left border-t border-amber-500/10 cursor-pointer ${
                          activeTab === tab.id 
                            ? 'text-amber-500 bg-amber-500/10' 
                            : 'text-gray-400 hover:bg-amber-500/5'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                )}

                {/* Desktop tabs */}
                <div className="hidden md:flex">
                  {[
                    { id: 'operations', label: 'OPERATIONS' },
                    { id: 'diagnostics', label: 'DIAGNOSTICS' },
                    { id: 'network', label: 'NETWORK' },
                    { id: 'security', label: 'SECURITY' }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`text-xs font-mono py-2 px-4 border-r border-amber-500/30 relative cursor-pointer ${
                        activeTab === tab.id 
                          ? 'text-amber-500 bg-amber-500/10' 
                          : 'text-gray-400 hover:bg-amber-500/5'
                      }`}
                    >
                      {tab.label}
                      {activeTab === tab.id && (
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-500" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Main dashboard content */}
              <div className="p-3 bg-black">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Operations Tab - Mobile Optimized */}
                    {activeTab === 'operations' && (
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                        {/* Sidebar - Full width on mobile, column on desktop */}
                        <div className="md:col-span-3 bg-black border border-amber-500/20 p-3">
                          <div className="space-y-4">
                            <div className="text-amber-500 font-semibold text-sm font-mono border-b border-amber-500/20 pb-2 flex justify-between items-center">
                              <span>ACTIVE UNITS</span>
                              <span className="text-xs text-gray-400">(5)</span>
                            </div>
                            
                            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-1 gap-2">
                              {["SCOUT_01", "SCOUT_03", "SCOUT_07", "SCOUT_12", "SCOUT_15"].map((unit, i) => (
                                <div key={i} className="flex items-center justify-between text-xs p-1.5 border border-amber-500/10 bg-amber-500/5">
                                  <div className="flex items-center gap-1 sm:gap-2">
                                    <div className={`w-1.5 h-1.5 rounded-full ${i !== 2 ? 'bg-green-500' : 'bg-yellow-500'} animate-pulse`} />
                                    <span className="text-gray-300 font-mono text-[10px] sm:text-xs">{unit}</span>
                                  </div>
                                  <span className={`text-[10px] sm:text-xs font-mono ${i !== 2 ? 'text-green-400' : 'text-yellow-400'}`}>
                                    {i !== 2 ? 'ONLINE' : 'STANDBY'}
                                  </span>
                                </div>
                              ))}
                            </div>
                            
                            <div className="text-amber-500 font-semibold text-sm font-mono border-b border-amber-500/20 pb-2 pt-2">
                              MISSION STATUS
                            </div>
                            
                            <div className="space-y-0.5 text-[10px] sm:text-xs font-mono">
                              <div className="flex justify-between text-gray-400">
                                <span>MISSION_ID:</span>
                                <span className="text-amber-400">COASTAL_SURVEY_04</span>
                              </div>
                              <div className="flex justify-between text-gray-400">
                                <span>TIME ELAPSED:</span>
                                <span>14:32:05</span>
                              </div>
                              <div className="flex justify-between text-gray-400">
                                <span>COMPLETION:</span>
                                <span>68%</span>
                              </div>
                              <div className="h-1.5 bg-gray-800 rounded-sm mt-1 overflow-hidden">
                                <div className="h-full bg-amber-500 rounded-sm" style={{ width: '68%' }} />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Main content area */}
                        <div className="md:col-span-9 space-y-3">
                          {/* Top stats row - 2x2 grid on mobile, 4 columns on desktop */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {[
                              {
                                label: "ACTIVE UNITS",
                                value: "5/8",
                                icon: <Activity className="w-4 h-4 text-green-500" />,
                                change: "+2",
                              },
                              {
                                label: "DATA TRANSFER",
                                value: "1.2 TB/hr",
                                icon: <BarChart3 className="w-4 h-4 text-blue-500" />,
                                change: "↑ 5%",
                              },
                              {
                                label: "NETWORK STATUS",
                                value: "OPTIMAL",
                                icon: <Wifi className="w-4 h-4 text-amber-500" />,
                                change: "99.8%",
                              },
                              {
                                label: "SYSTEM INTEGRITY",
                                value: "SECURE",
                                icon: <Shield className="w-4 h-4 text-purple-500" />,
                                change: "NO THREATS",
                              },
                            ].map((stat, i) => (
                              <div key={i} className="bg-black border border-amber-500/20 p-2 sm:p-3">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <div className="text-[10px] sm:text-xs text-gray-500 mb-1 font-mono truncate">{stat.label}</div>
                                    <div className="text-base sm:text-xl font-bold text-white">{stat.value}</div>
                                  </div>
                                  <div className="p-1.5 sm:p-2 bg-gray-900 border border-amber-500/10 rounded">{stat.icon}</div>
                                </div>
                                <div className="text-[10px] sm:text-xs text-green-500 mt-2 flex items-center gap-1">
                                  <RefreshCw className="w-2 h-2 sm:w-3 sm:h-3" /> {stat.change}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Map view - Responsive height */}
                          <div className="bg-black border border-amber-500/20 h-56 sm:h-64 relative overflow-hidden">
                            {/* Stylized map overlay */}
                            <div className="absolute inset-0">
                              {/* Stylized map overlay */}
                              <div className="absolute inset-0 bg-gray-900/80">
                                {/* Grid lines */}
                                <div className="absolute inset-0" style={{
                                  backgroundImage: `
                                    linear-gradient(rgba(245, 158, 11, 0.1) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(245, 158, 11, 0.1) 1px, transparent 1px)
                                  `,
                                  backgroundSize: '20px 20px',
                                  backgroundPosition: 'center center'
                                }} />
                                
                                {/* Coastline */}
                                <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.2 }}>
                                  <path
                                    d="M0,80 C100,110 180,90 300,140 C400,180 500,120 600,110 C700,100 800,130 900,80 L900,400 L0,400 Z"
                                    fill="rgba(245, 158, 11, 0.2)"
                                    stroke="rgba(245, 158, 11, 0.5)"
                                    strokeWidth="1"
                                  />
                                </svg>
                                
                                {/* Scanning effect */}
                                <div className="absolute inset-0 overflow-hidden">
                                  <div 
                                    className="absolute w-full h-8 bg-gradient-to-b from-amber-500/0 via-amber-500/20 to-amber-500/0"
                                    style={{
                                      animation: 'scanline 3s linear infinite',
                                      transform: 'translateY(-100%)'
                                    }}
                                  />
                                </div>
                              </div>

                              {/* AUV positions - spaced based on viewport size */}
                              {Array.from({ length: 5 }).map((_, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ scale: 0.8, opacity: 0.5 }}
                                  animate={{
                                    scale: [0.8, 1.2, 0.8],
                                    opacity: [0.5, 1, 0.5],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: i * 0.5,
                                  }}
                                  className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-amber-500 rounded-full shadow-[0_0_5px_rgba(245,158,11,0.7)]"
                                  style={{
                                    left: `${15 + i * (i % 2 === 0 ? 15 : 18)}%`,
                                    top: `${25 + (i % 3) * 22}%`,
                                  }}
                                />
                              ))}

                              {/* Connection lines between units */}
                              <svg className="absolute inset-0 w-full h-full">
                                {/* Connection lines - simplified for mobile */}
                                <line 
                                  x1="15%" y1="25%" x2="30%" y2="47%" 
                                  stroke="#f59e0b" strokeWidth="0.5" strokeDasharray="5,5" strokeOpacity="0.7" 
                                />
                                <line 
                                  x1="30%" y1="47%" x2="45%" y2="25%" 
                                  stroke="#f59e0b" strokeWidth="0.5" strokeDasharray="5,5" strokeOpacity="0.7" 
                                />
                                <line 
                                  x1="45%" y1="25%" x2="63%" y2="47%" 
                                  stroke="#f59e0b" strokeWidth="0.5" strokeDasharray="5,5" strokeOpacity="0.7" 
                                />
                                <line 
                                  x1="63%" y1="47%" x2="78%" y2="25%" 
                                  stroke="#f59e0b" strokeWidth="0.5" strokeDasharray="5,5" strokeOpacity="0.7" 
                                />

                                {/* Data pulse animations - one simplified pulse for mobile */}
                                <motion.circle 
                                  cx="0" cy="0" r="1.5"
                                  fill="#f59e0b"
                                  animate={{
                                    cx: ["15%", "30%", "45%", "63%", "78%"],
                                    cy: ["25%", "47%", "25%", "47%", "25%"],
                                    opacity: [0, 1, 1, 1, 0]
                                  }}
                                  transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatDelay: 1
                                  }}
                                />
                              </svg>
                            </div>

                            {/* Map overlay information - Simplified for mobile */}
                            <div className="absolute top-2 left-2 sm:top-3 sm:left-3 text-[10px] sm:text-xs text-amber-500 font-mono">
                              <div className="border border-amber-500/30 bg-black/80 px-1 py-0.5 sm:px-2 sm:py-1">
                                COASTAL_SURVEY_04
                              </div>
                            </div>

                            {/* Target information - Simplified for mobile */}
                            <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 px-1 py-0.5 sm:px-2 sm:py-1 bg-black/80 border border-amber-500/30 text-[10px] sm:text-xs text-amber-500 font-mono">
                              <div className="flex flex-col">
                                <div>LAT: 34.052 | LONG: -118.243</div>
                                <div>DEPTH: 120M</div>
                              </div>
                            </div>
                            
                            {/* Map controls - Simplified for mobile */}
                            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 flex gap-1">
                              <button className="h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center border border-amber-500/30 bg-black/80 text-amber-500 hover:bg-amber-500/10">
                                <span className="text-xs sm:text-sm">+</span>
                              </button>
                              <button className="h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center border border-amber-500/30 bg-black/80 text-amber-500 hover:bg-amber-500/10">
                                <span className="text-xs sm:text-sm">-</span>
                              </button>
                            </div>
                          </div>

                          {/* Bottom row - 1 column on small mobile, 2 on larger screens */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {/* System health */}
                            <div className="bg-black border border-amber-500/20 p-3">
                              <div className="text-[10px] sm:text-xs text-amber-500 mb-2 font-mono border-b border-amber-500/20 pb-1">SYSTEM HEALTH</div>
                              <div className="space-y-2">
                                {[
                                  { name: "Power Systems", value: 95, color: "green" },
                                  { name: "Navigation", value: 98, color: "green" },
                                  { name: "Communication", value: 87, color: "amber" },
                                  { name: "Sensors", value: 92, color: "green" }
                                ].map((system, i) => (
                                  <div key={i} className="flex items-center justify-between text-[10px] sm:text-xs">
                                    <span className="text-gray-400 font-mono">{system.name}</span>
                                    <div className="w-20 sm:w-32 h-1.5 sm:h-2 bg-gray-800 rounded-sm overflow-hidden">
                                      <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${system.value}%` }}
                                        transition={{ duration: 1, delay: i * 0.2 }}
                                        className={`h-full ${
                                          system.color === "green" 
                                            ? "bg-gradient-to-r from-green-500 to-green-400" 
                                            : "bg-gradient-to-r from-amber-500 to-amber-400"
                                        } rounded-sm`}
                                      />
                                    </div>
                                    <span className={`text-${system.color}-400 font-mono`}>{system.value}%</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Mission logs */}
                            <div className="bg-black border border-amber-500/20 p-3">
                              <div className="text-[10px] sm:text-xs text-amber-500 mb-2 font-mono border-b border-amber-500/20 pb-1">MISSION LOGS</div>
                              <div className="space-y-1.5 text-[10px] sm:text-xs h-[120px] sm:h-[132px] overflow-y-auto custom-scrollbar pr-1">
                                {[
                                  { time: "14:32:05", message: "SCOUT_07 completed sector scan", status: "INFO" },
                                  { time: "14:28:17", message: "Anomaly detected at sector B-12", status: "ALERT" },
                                  { time: "14:25:03", message: "SCOUT_03 battery at 62%", status: "WARNING" },
                                  { time: "14:20:45", message: "New mission parameters uploaded", status: "INFO" },
                                  { time: "14:15:22", message: "All units reporting nominal status", status: "INFO" },
                                  { time: "14:10:08", message: "SCOUT_15 deployed from carrier", status: "INFO" },
                                ].map((log, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: i * 0.1 }}
                                    className="flex items-start gap-1 sm:gap-2 font-mono border-b border-gray-800/50 pb-1"
                                  >
                                    <span className="text-gray-500">{log.time}</span>
                                    <span
                                      className={`
                                        px-1 rounded text-[8px] sm:text-[10px] flex-shrink-0
                                        ${
                                          log.status === "INFO"
                                            ? "bg-blue-500/20 text-blue-400"
                                            : log.status === "WARNING"
                                              ? "bg-yellow-500/20 text-yellow-400"
                                              : "bg-red-500/20 text-red-400"
                                        }
                                      `}
                                    >
                                      {log.status}
                                    </span>
                                    <span className="text-gray-400 truncate">{log.message}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Diagnostics Tab - Detailed Implementation */}
                    {activeTab === 'diagnostics' && (
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                        {/* Sidebar - Full width on mobile, column on desktop */}
                        <div className="md:col-span-3 bg-black border border-amber-500/20 p-3">
                          <div className="space-y-4">
                            <div className="text-amber-500 font-semibold text-sm font-mono border-b border-amber-500/20 pb-2 flex justify-between items-center">
                              <span>DIAGNOSTIC TOOLS</span>
                            </div>
                            
                            <div className="space-y-2">
                              {["SYSTEM CHECK", "SENSOR CALIB", "POWER DIAG", "DEBUG LOGS", "FIRMWARE"].map((tool, i) => (
                                <div key={i} className="flex items-center justify-between text-xs p-1.5 border border-amber-500/10 hover:bg-amber-500/5 cursor-pointer">
                                  <div className="flex items-center gap-2">
                                    <span className="text-gray-300 font-mono text-[10px] sm:text-xs">{tool}</span>
                                  </div>
                                  <span className="text-[10px] sm:text-xs font-mono text-amber-500/70">
                                    RUN
                                  </span>
                                </div>
                              ))}
                            </div>
                            
                            <div className="text-amber-500 font-semibold text-sm font-mono border-b border-amber-500/20 pb-2 pt-2">
                              MAINTENANCE STATUS
                            </div>
                            
                            <div className="space-y-0.5 text-[10px] sm:text-xs font-mono">
                              <div className="flex justify-between text-gray-400">
                                <span>NEXT CHECK:</span>
                                <span className="text-amber-400">14 DAYS</span>
                              </div>
                              <div className="flex justify-between text-gray-400">
                                <span>CALIBRATION:</span>
                                <span className="text-green-400">OPTIMAL</span>
                              </div>
                              <div className="flex justify-between text-gray-400">
                                <span>FIRMWARE:</span>
                                <span className="text-amber-400">UPDATE AVAILABLE</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Main content area */}
                        <div className="md:col-span-9 space-y-3">
                          {/* Top stats row - 2x2 grid on mobile, 4 columns on desktop */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {[
                              {
                                label: "BATTERY HEALTH",
                                value: "92%",
                                icon: <Activity className="w-4 h-4 text-green-500" />,
                                change: "OPTIMAL",
                              },
                              {
                                label: "SENSOR STATUS",
                                value: "96%",
                                icon: <Eye className="w-4 h-4 text-blue-500" />,
                                change: "NOMINAL",
                              },
                              {
                                label: "CPU LOAD",
                                value: "43%",
                                icon: <Cpu className="w-4 h-4 text-amber-500" />,
                                change: "NORMAL",
                              },
                              {
                                label: "MEMORY USE",
                                value: "2.8/4GB",
                                icon: <BarChart3 className="w-4 h-4 text-purple-500" />,
                                change: "STABLE",
                              },
                            ].map((stat, i) => (
                              <div key={i} className="bg-black border border-amber-500/20 p-2 sm:p-3">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <div className="text-[10px] sm:text-xs text-gray-500 mb-1 font-mono truncate">{stat.label}</div>
                                    <div className="text-base sm:text-xl font-bold text-white">{stat.value}</div>
                                  </div>
                                  <div className="p-1.5 sm:p-2 bg-gray-900 border border-amber-500/10 rounded">{stat.icon}</div>
                                </div>
                                <div className="text-[10px] sm:text-xs text-green-500 mt-2 flex items-center gap-1">
                                  <RefreshCw className="w-2 h-2 sm:w-3 sm:h-3" /> {stat.change}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Unit diagnostics view */}
                          <div className="bg-black border border-amber-500/20 p-3">
                            <div className="flex justify-between items-center mb-3">
                              <div className="text-[10px] sm:text-xs text-amber-500 font-mono">SWARM UNIT DIAGNOSTICS</div>
                              <div className="text-[10px] sm:text-xs text-gray-400 font-mono">AUTO-UPDATE: ON</div>
                            </div>
                            
                            <div className="space-y-3">
                              {["SCOUT_01", "SCOUT_03", "SCOUT_07", "SCOUT_12", "SCOUT_15"].map((unit, i) => (
                                <div key={i} className="border border-amber-500/20 p-2">
                                  <div className="flex justify-between items-center mb-1">
                                    <div className="flex items-center gap-1.5">
                                      <div className={`w-1.5 h-1.5 rounded-full ${i !== 2 ? 'bg-green-500' : 'bg-yellow-500'} animate-pulse`} />
                                      <span className="text-[10px] sm:text-xs text-amber-500 font-mono">{unit}</span>
                                    </div>
                                    <span className="text-[10px] sm:text-xs text-gray-400 font-mono">
                                      ID: {Math.floor(Math.random() * 100000).toString().padStart(6, '0')}
                                    </span>
                                  </div>

                                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] sm:text-xs">
                                    <div className="bg-gray-900/50 p-1.5">
                                      <div className="text-gray-500 font-mono">BATT</div>
                                      <div className="text-white font-mono">{90 - (i * 5)}%</div>
                                    </div>
                                    <div className="bg-gray-900/50 p-1.5">
                                      <div className="text-gray-500 font-mono">TEMP</div>
                                      <div className="text-white font-mono">{22 + i}°C</div>
                                    </div>
                                    <div className="bg-gray-900/50 p-1.5">
                                      <div className="text-gray-500 font-mono">DEPTH</div>
                                      <div className="text-white font-mono">{i * 35 + 80}M</div>
                                    </div>
                                    <div className="bg-gray-900/50 p-1.5">
                                      <div className="text-gray-500 font-mono">SIGNAL</div>
                                      <div className="text-white font-mono">{95 - (i * 3)}%</div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Bottom row - 1 column on small mobile, 2 on larger screens */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {/* Sensor status */}
                            <div className="bg-black border border-amber-500/20 p-3">
                              <div className="text-[10px] sm:text-xs text-amber-500 mb-2 font-mono border-b border-amber-500/20 pb-1">SENSOR DIAGNOSTICS</div>
                              <div className="space-y-2">
                                {[
                                  { name: "Imaging Sonar", value: 98, color: "green" },
                                  { name: "Acoustic Modem", value: 87, color: "amber" },
                                  { name: "Depth Sensor", value: 100, color: "green" },
                                  { name: "Inertial Nav", value: 95, color: "green" }
                                ].map((system, i) => (
                                  <div key={i} className="flex items-center justify-between text-[10px] sm:text-xs">
                                    <span className="text-gray-400 font-mono">{system.name}</span>
                                    <div className="w-20 sm:w-32 h-1.5 sm:h-2 bg-gray-800 rounded-sm overflow-hidden">
                                      <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${system.value}%` }}
                                        transition={{ duration: 1, delay: i * 0.2 }}
                                        className={`h-full ${
                                          system.color === "green" 
                                            ? "bg-gradient-to-r from-green-500 to-green-400" 
                                            : "bg-gradient-to-r from-amber-500 to-amber-400"
                                        } rounded-sm`}
                                      />
                                    </div>
                                    <span className={`text-${system.color}-400 font-mono`}>{system.value}%</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Diagnostic logs */}
                            <div className="bg-black border border-amber-500/20 p-3">
                              <div className="text-[10px] sm:text-xs text-amber-500 mb-2 font-mono border-b border-amber-500/20 pb-1">DIAGNOSTIC LOGS</div>
                              <div className="space-y-1.5 text-[10px] sm:text-xs h-[120px] sm:h-[132px] overflow-y-auto custom-scrollbar pr-1">
                                {[
                                  { time: "14:32:05", message: "SCOUT_01 sensor calibration complete", status: "INFO" },
                                  { time: "14:28:17", message: "Battery temperature above threshold", status: "WARNING" },
                                  { time: "14:25:03", message: "SCOUT_12 depth sensor recalibrated", status: "INFO" },
                                  { time: "14:20:45", message: "Firmware update available for units", status: "INFO" },
                                  { time: "14:15:22", message: "SCOUT_07 propulsion test completed", status: "INFO" },
                                  { time: "14:10:08", message: "Gyroscope drift detected", status: "WARNING" },
                                ].map((log, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: i * 0.1 }}
                                    className="flex items-start gap-1 sm:gap-2 font-mono border-b border-gray-800/50 pb-1"
                                  >
                                    <span className="text-gray-500">{log.time}</span>
                                    <span
                                      className={`
                                        px-1 rounded text-[8px] sm:text-[10px] flex-shrink-0
                                        ${
                                          log.status === "INFO"
                                            ? "bg-blue-500/20 text-blue-400"
                                            : log.status === "WARNING"
                                              ? "bg-yellow-500/20 text-yellow-400"
                                              : "bg-red-500/20 text-red-400"
                                        }
                                      `}
                                    >
                                      {log.status}
                                    </span>
                                    <span className="text-gray-400 truncate">{log.message}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Network Tab - Detailed Implementation */}
                    {activeTab === 'network' && (
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                        {/* Sidebar - Full width on mobile, column on desktop */}
                        <div className="md:col-span-3 bg-black border border-amber-500/20 p-3">
                          <div className="space-y-4">
                            <div className="text-amber-500 font-semibold text-sm font-mono border-b border-amber-500/20 pb-2 flex justify-between items-center">
                              <span>NETWORK CONTROLS</span>
                            </div>
                            
                            <div className="space-y-2">
                              {["MESH CONFIG", "BANDWIDTH CTRL", "SIGNAL BOOST", "PROTOCOL SEL", "RANGE TEST"].map((tool, i) => (
                                <div key={i} className="flex items-center justify-between text-xs p-1.5 border border-amber-500/10 hover:bg-amber-500/5 cursor-pointer">
                                  <div className="flex items-center gap-2">
                                    <span className="text-gray-300 font-mono text-[10px] sm:text-xs">{tool}</span>
                                  </div>
                                  <span className="text-[10px] sm:text-xs font-mono text-amber-500/70">
                                    ACCESS
                                  </span>
                                </div>
                              ))}
                            </div>
                            
                            <div className="text-amber-500 font-semibold text-sm font-mono border-b border-amber-500/20 pb-2 pt-2">
                              PROTOCOL STATUS
                            </div>
                            
                            <div className="space-y-0.5 text-[10px] sm:text-xs font-mono">
                              <div className="flex justify-between text-gray-400">
                                <span>PRIMARY:</span>
                                <span className="text-amber-400">ACOUSTIC</span>
                              </div>
                              <div className="flex justify-between text-gray-400">
                                <span>BACKUP:</span>
                                <span className="text-green-400">RF-MESH</span>
                              </div>
                              <div className="flex justify-between text-gray-400">
                                <span>ENCRYPTION:</span>
                                <span className="text-green-400">ACTIVE</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Main content area */}
                        <div className="md:col-span-9 space-y-3">
                          {/* Top stats row - 2x2 grid on mobile, 4 columns on desktop */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {[
                              {
                                label: "ACTIVE NODES",
                                value: "5/8",
                                icon: <Wifi className="w-4 h-4 text-green-500" />,
                                change: "MESH STABLE",
                              },
                              {
                                label: "BANDWIDTH",
                                value: "64 kbps",
                                icon: <Activity className="w-4 h-4 text-blue-500" />,
                                change: "OPTIMAL",
                              },
                              {
                                label: "LATENCY",
                                value: "78 ms",
                                icon: <RefreshCw className="w-4 h-4 text-amber-500" />,
                                change: "LOW",
                              },
                              {
                                label: "PACKET LOSS",
                                value: "0.8%",
                                icon: <AlertTriangle className="w-4 h-4 text-purple-500" />,
                                change: "MINIMAL",
                              },
                            ].map((stat, i) => (
                              <div key={i} className="bg-black border border-amber-500/20 p-2 sm:p-3">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <div className="text-[10px] sm:text-xs text-gray-500 mb-1 font-mono truncate">{stat.label}</div>
                                    <div className="text-base sm:text-xl font-bold text-white">{stat.value}</div>
                                  </div>
                                  <div className="p-1.5 sm:p-2 bg-gray-900 border border-amber-500/10 rounded">{stat.icon}</div>
                                </div>
                                <div className="text-[10px] sm:text-xs text-green-500 mt-2 flex items-center gap-1">
                                  <RefreshCw className="w-2 h-2 sm:w-3 sm:h-3" /> {stat.change}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Mesh Network Visualization */}
                          <div className="bg-black border border-amber-500/20 h-56 sm:h-64 relative overflow-hidden">
                            {/* Network visualization */}
                            <div className="absolute inset-0 bg-gray-900/80">
                              {/* Grid lines */}
                              <div className="absolute inset-0" style={{
                                backgroundImage: `
                                  linear-gradient(rgba(245, 158, 11, 0.05) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(245, 158, 11, 0.05) 1px, transparent 1px)
                                `,
                                backgroundSize: '40px 40px',
                                backgroundPosition: 'center center'
                              }} />
                            </div>

                            {/* Mesh network nodes */}
                            {Array.from({ length: 5 }).map((_, i) => (
                              <div key={i}>
                                {/* Nodes */}
                                <motion.div
                                  initial={{ scale: 0.8, opacity: 0.5 }}
                                  animate={{
                                    scale: [0.8, 1.2, 0.8],
                                    opacity: [0.5, 1, 0.5],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: i * 0.5,
                                  }}
                                  className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.7)]"
                                  style={{
                                    left: `${15 + i * (i % 2 === 0 ? 17 : 18)}%`,
                                    top: `${25 + (i % 3) * 20}%`,
                                  }}
                                />
                              
                                {/* Signal radius indicators */}
                                <motion.div
                                  initial={{ scale: 0, opacity: 0.1 }}
                                  animate={{
                                    scale: [0, 1, 1.3],
                                    opacity: [0.3, 0.2, 0],
                                  }}
                                  transition={{
                                    duration: 3,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: i * 0.7,
                                  }}
                                  className="absolute w-24 h-24 sm:w-32 sm:h-32 border border-amber-500/30 rounded-full"
                                  style={{
                                    left: `${15 + i * (i % 2 === 0 ? 17 : 18)}%`,
                                    top: `${25 + (i % 3) * 20}%`,
                                    transform: "translate(-50%, -50%)",
                                  }}
                                />
                              </div>
                            ))}

                            {/* Connection lines */}
                            <svg className="absolute inset-0 w-full h-full">
                              {/* Primary connections */}
                              <line x1="15%" y1="25%" x2="32%" y2="25%" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.8" />
                              <line x1="32%" y1="25%" x2="49%" y2="45%" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.8" />
                              <line x1="49%" y1="45%" x2="66%" y2="25%" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.8" />
                              <line x1="66%" y1="25%" x2="83%" y2="45%" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.8" />
                              
                              {/* Secondary connections - cross-mesh */}
                              <line x1="15%" y1="25%" x2="49%" y2="45%" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.5" strokeDasharray="5,5" />
                              <line x1="32%" y1="25%" x2="83%" y2="45%" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.5" strokeDasharray="5,5" />
                              <line x1="32%" y1="25%" x2="66%" y2="25%" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.5" strokeDasharray="5,5" />
                              
                              {/* Data pulse animations */}
                              <motion.circle 
                                cx="0" cy="0" r="2"
                                fill="#f59e0b"
                                animate={{
                                  cx: ["15%", "32%", "49%", "66%", "83%"],
                                  cy: ["25%", "25%", "45%", "25%", "45%"],
                                  opacity: [1, 1, 1, 1, 0]
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  repeatDelay: 1
                                }}
                              />
                              
                              <motion.circle 
                                cx="0" cy="0" r="2"
                                fill="#f59e0b"
                                animate={{
                                  cx: ["49%", "32%", "15%"],
                                  cy: ["45%", "25%", "25%"],
                                  opacity: [1, 1, 0]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  repeatDelay: 2.5
                                }}
                              />
                            </svg>

                            {/* Network overlay information */}
                            <div className="absolute top-2 left-2 sm:top-3 sm:left-3 text-[10px] sm:text-xs text-amber-500 font-mono">
                              <div className="border border-amber-500/30 bg-black/80 px-1 py-0.5 sm:px-2 sm:py-1">
                                FEVER MESH NETWORK
                              </div>
                            </div>

                            {/* Network details */}
                            <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 px-1 py-0.5 sm:px-2 sm:py-1 bg-black/80 border border-amber-500/30 text-[10px] sm:text-xs text-amber-500 font-mono">
                              <div className="flex flex-col">
                                <div>PROTOCOL: ACOUSTIC</div>
                                <div>RANGE: 850M</div>
                              </div>
                            </div>
                          </div>

                          {/* Bottom row - 1 column on small mobile, 2 on larger screens */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {/* Network health */}
                            <div className="bg-black border border-amber-500/20 p-3">
                              <div className="text-[10px] sm:text-xs text-amber-500 mb-2 font-mono border-b border-amber-500/20 pb-1">NETWORK HEALTH</div>
                              <div className="space-y-2">
                                {[
                                  { name: "Signal Strength", value: 88, color: "green" },
                                  { name: "Bandwidth Usage", value: 65, color: "green" },
                                  { name: "Acoustic Quality", value: 72, color: "amber" },
                                  { name: "Mesh Resilience", value: 96, color: "green" }
                                ].map((system, i) => (
                                  <div key={i} className="flex items-center justify-between text-[10px] sm:text-xs">
                                    <span className="text-gray-400 font-mono">{system.name}</span>
                                    <div className="w-20 sm:w-32 h-1.5 sm:h-2 bg-gray-800 rounded-sm overflow-hidden">
                                      <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${system.value}%` }}
                                        transition={{ duration: 1, delay: i * 0.2 }}
                                        className={`h-full ${
                                          system.color === "green" 
                                            ? "bg-gradient-to-r from-green-500 to-green-400" 
                                            : "bg-gradient-to-r from-amber-500 to-amber-400"
                                        } rounded-sm`}
                                      />
                                    </div>
                                    <span className={`text-${system.color}-400 font-mono`}>{system.value}%</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Network logs */}
                            <div className="bg-black border border-amber-500/20 p-3">
                              <div className="text-[10px] sm:text-xs text-amber-500 mb-2 font-mono border-b border-amber-500/20 pb-1">NETWORK LOGS</div>
                              <div className="space-y-1.5 text-[10px] sm:text-xs h-[120px] sm:h-[132px] overflow-y-auto custom-scrollbar pr-1">
                                {[
                                  { time: "14:32:05", message: "Mesh topology optimized", status: "INFO" },
                                  { time: "14:28:17", message: "Signal interference detected", status: "WARNING" },
                                  { time: "14:25:03", message: "SCOUT_03 rejoined mesh network", status: "INFO" },
                                  { time: "14:20:45", message: "Switched to acoustic protocol", status: "INFO" },
                                  { time: "14:15:22", message: "Bandwidth allocation adjusted", status: "INFO" },
                                  { time: "14:10:08", message: "Network latency spike detected", status: "WARNING" },
                                ].map((log, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: i * 0.1 }}
                                    className="flex items-start gap-1 sm:gap-2 font-mono border-b border-gray-800/50 pb-1"
                                  >
                                    <span className="text-gray-500">{log.time}</span>
                                    <span
                                      className={`
                                        px-1 rounded text-[8px] sm:text-[10px] flex-shrink-0
                                        ${
                                          log.status === "INFO"
                                            ? "bg-blue-500/20 text-blue-400"
                                            : log.status === "WARNING"
                                              ? "bg-yellow-500/20 text-yellow-400"
                                              : "bg-red-500/20 text-red-400"
                                        }
                                      `}
                                    >
                                      {log.status}
                                    </span>
                                    <span className="text-gray-400 truncate">{log.message}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Security Tab - Detailed Implementation */}
                    {activeTab === 'security' && (
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                        {/* Sidebar - Full width on mobile, column on desktop */}
                        <div className="md:col-span-3 bg-black border border-amber-500/20 p-3">
                          <div className="space-y-4">
                            <div className="text-amber-500 font-semibold text-sm font-mono border-b border-amber-500/20 pb-2 flex justify-between items-center">
                              <span>SECURITY CONTROLS</span>
                            </div>
                            
                            <div className="space-y-2">
                              {["THREAT MONITOR", "ACCESS MGMT", "ENCRYPTION", "LOCKDOWN", "AUDIT LOGS"].map((tool, i) => (
                                <div key={i} className="flex items-center justify-between text-xs p-1.5 border border-amber-500/10 hover:bg-amber-500/5 cursor-pointer">
                                  <div className="flex items-center gap-2">
                                    <span className="text-gray-300 font-mono text-[10px] sm:text-xs">{tool}</span>
                                  </div>
                                  <span className="text-[10px] sm:text-xs font-mono text-amber-500/70">
                                    SECURE
                                  </span>
                                </div>
                              ))}
                            </div>
                            
                            <div className="text-amber-500 font-semibold text-sm font-mono border-b border-amber-500/20 pb-2 pt-2">
                              SECURITY STATUS
                            </div>
                            
                            <div className="space-y-0.5 text-[10px] sm:text-xs font-mono">
                              <div className="flex justify-between text-gray-400">
                                <span>THREAT LEVEL:</span>
                                <span className="text-green-400">LOW</span>
                              </div>
                              <div className="flex justify-between text-gray-400">
                                <span>LAST SCAN:</span>
                                <span className="text-amber-400">2 MIN AGO</span>
                              </div>
                              <div className="flex justify-between text-gray-400">
                                <span>BREACHES:</span>
                                <span className="text-green-400">NONE</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Main content area */}
                        <div className="md:col-span-9 space-y-3">
                          {/* Top stats row - 2x2 grid on mobile, 4 columns on desktop */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {[
                              {
                                label: "SECURITY LEVEL",
                                value: "A+",
                                icon: <Shield className="w-4 h-4 text-green-500" />,
                                change: "MAXIMUM",
                              },
                              {
                                label: "ENCRYPTION",
                                value: "AES-256",
                                icon: <Lock className="w-4 h-4 text-blue-500" />,
                                change: "SECURE",
                              },
                              {
                                label: "THREATS BLOCKED",
                                value: "24",
                                icon: <AlertTriangle className="w-4 h-4 text-amber-500" />,
                                change: "24H PERIOD",
                              },
                              {
                                label: "AUTH LEVEL",
                                value: "MIL-SPEC",
                                icon: <KeySquare className="w-4 h-4 text-purple-500" />,
                                change: "ELEVATED",
                              },
                            ].map((stat, i) => (
                              <div key={i} className="bg-black border border-amber-500/20 p-2 sm:p-3">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <div className="text-[10px] sm:text-xs text-gray-500 mb-1 font-mono truncate">{stat.label}</div>
                                    <div className="text-base sm:text-xl font-bold text-white">{stat.value}</div>
                                  </div>
                                  <div className="p-1.5 sm:p-2 bg-gray-900 border border-amber-500/10 rounded">{stat.icon}</div>
                                </div>
                                <div className="text-[10px] sm:text-xs text-green-500 mt-2 flex items-center gap-1">
                                  <RefreshCw className="w-2 h-2 sm:w-3 sm:h-3" /> {stat.change}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Security visualization */}
                          <div className="bg-black border border-amber-500/20 h-56 sm:h-64 relative overflow-hidden">
                            {/* Background grid */}
                            <div className="absolute inset-0 bg-gray-900/90">
                              <div className="absolute inset-0" style={{
                                backgroundImage: `
                                  linear-gradient(rgba(245, 158, 11, 0.05) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(245, 158, 11, 0.05) 1px, transparent 1px)
                                `,
                                backgroundSize: '20px 20px',
                                backgroundPosition: 'center center'
                              }} />
                              
                              {/* Scanning effect */}
                              <div className="absolute inset-0 overflow-hidden">
                                <div 
                                  className="absolute w-full h-8 bg-gradient-to-b from-amber-500/0 via-amber-500/10 to-amber-500/0"
                                  style={{
                                    animation: 'scanline 2s linear infinite',
                                    transform: 'translateY(-100%)'
                                  }}
                                />
                              </div>
                            </div>
                            
                            {/* Security perimeter visualization */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              {/* Outer security layer */}
                              <motion.div
                                initial={{ scale: 0.9, opacity: 0.3 }}
                                animate={{
                                  scale: [0.9, 1, 0.9],
                                  opacity: [0.3, 0.5, 0.3],
                                }}
                                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                                className="absolute w-[80%] h-[80%] border-2 border-amber-500/30 rounded-full"
                              />
                              
                              {/* Middle security layer */}
                              <motion.div
                                initial={{ scale: 0.7, opacity: 0.4 }}
                                animate={{
                                  scale: [0.7, 0.8, 0.7],
                                  opacity: [0.4, 0.6, 0.4],
                                }}
                                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                                className="absolute w-[60%] h-[60%] border-2 border-amber-500/40 rounded-full"
                              />
                              
                              {/* Inner security layer */}
                              <motion.div
                                initial={{ scale: 0.5, opacity: 0.5 }}
                                animate={{
                                  scale: [0.5, 0.6, 0.5],
                                  opacity: [0.5, 0.7, 0.5],
                                }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                                className="absolute w-[40%] h-[40%] border-2 border-amber-500/50 rounded-full"
                              />
                              
                              {/* Central protected zone */}
                              <div className="absolute w-[30%] h-[30%] bg-amber-500/10 border-2 border-amber-500/60 rounded-full flex items-center justify-center">
                                <Shield className="w-8 h-8 text-amber-500" />
                              </div>
                              
                              {/* Security threats - animated dots moving toward center */}
                              {Array.from({ length: 5 }).map((_, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ 
                                    x: Math.cos(i * (360/5) * (Math.PI/180)) * 150, 
                                    y: Math.sin(i * (360/5) * (Math.PI/180)) * 150,
                                    opacity: 0.7
                                  }}
                                  animate={{ 
                                    x: [
                                      Math.cos(i * (360/5) * (Math.PI/180)) * 150,
                                      Math.cos(i * (360/5) * (Math.PI/180)) * 100,
                                      Math.cos(i * (360/5) * (Math.PI/180)) * 70,
                                      Math.cos(i * (360/5) * (Math.PI/180)) * 50,
                                      Math.cos(i * (360/5) * (Math.PI/180)) * 150
                                    ],
                                    y: [
                                      Math.sin(i * (360/5) * (Math.PI/180)) * 150,
                                      Math.sin(i * (360/5) * (Math.PI/180)) * 100,
                                      Math.sin(i * (360/5) * (Math.PI/180)) * 70,
                                      Math.sin(i * (360/5) * (Math.PI/180)) * 50,
                                      Math.sin(i * (360/5) * (Math.PI/180)) * 150
                                    ],
                                    opacity: [0.7, 0.8, 1, 0, 0.7]
                                  }}
                                  transition={{ 
                                    duration: 8, 
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: i * 1.5
                                  }}
                                  className="absolute w-2 h-2 bg-red-500 rounded-full"
                                />
                              ))}
                            </div>

                            {/* Security overlay information */}
                            <div className="absolute top-2 left-2 sm:top-3 sm:left-3 text-[10px] sm:text-xs text-amber-500 font-mono">
                              <div className="border border-amber-500/30 bg-black/80 px-1 py-0.5 sm:px-2 sm:py-1">
                                SECURITY PERIMETER
                              </div>
                            </div>

                            {/* Security details */}
                            <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 px-1 py-0.5 sm:px-2 sm:py-1 bg-black/80 border border-amber-500/30 text-[10px] sm:text-xs text-amber-500 font-mono">
                              <div className="flex flex-col">
                                <div>THREATS DETECTED: 2</div>
                                <div>SECURITY LEVEL: MAXIMUM</div>
                              </div>
                            </div>
                          </div>

                          {/* Bottom row - 1 column on small mobile, 2 on larger screens */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {/* Security metrics */}
                            <div className="bg-black border border-amber-500/20 p-3">
                              <div className="text-[10px] sm:text-xs text-amber-500 mb-2 font-mono border-b border-amber-500/20 pb-1">SECURITY METRICS</div>
                              <div className="space-y-2">
                                {[
                                  { name: "Anomaly Detection", value: 95, color: "green" },
                                  { name: "Auth Protocols", value: 100, color: "green" },
                                  { name: "Data Encryption", value: 98, color: "green" },
                                  { name: "Tamper Protection", value: 92, color: "green" }
                                ].map((system, i) => (
                                  <div key={i} className="flex items-center justify-between text-[10px] sm:text-xs">
                                    <span className="text-gray-400 font-mono">{system.name}</span>
                                    <div className="w-20 sm:w-32 h-1.5 sm:h-2 bg-gray-800 rounded-sm overflow-hidden">
                                      <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${system.value}%` }}
                                        transition={{ duration: 1, delay: i * 0.2 }}
                                        className={`h-full ${
                                          system.color === "green" 
                                            ? "bg-gradient-to-r from-green-500 to-green-400" 
                                            : "bg-gradient-to-r from-amber-500 to-amber-400"
                                        } rounded-sm`}
                                      />
                                    </div>
                                    <span className={`text-${system.color}-400 font-mono`}>{system.value}%</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Security logs */}
                            <div className="bg-black border border-amber-500/20 p-3">
                              <div className="text-[10px] sm:text-xs text-amber-500 mb-2 font-mono border-b border-amber-500/20 pb-1">SECURITY LOGS</div>
                              <div className="space-y-1.5 text-[10px] sm:text-xs h-[120px] sm:h-[132px] overflow-y-auto custom-scrollbar pr-1">
                                {[
                                  { time: "14:32:05", message: "Unauthorized access attempt blocked", status: "ALERT" },
                                  { time: "14:28:17", message: "Command encryption verified", status: "INFO" },
                                  { time: "14:25:03", message: "Anomalous signal pattern detected", status: "WARNING" },
                                  { time: "14:20:45", message: "System integrity check passed", status: "INFO" },
                                  { time: "14:15:22", message: "Security patches applied to all units", status: "INFO" },
                                  { time: "14:10:08", message: "Potential spoofing attempt neutralized", status: "ALERT" },
                                ].map((log, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: i * 0.1 }}
                                    className="flex items-start gap-1 sm:gap-2 font-mono border-b border-gray-800/50 pb-1"
                                  >
                                    <span className="text-gray-500">{log.time}</span>
                                    <span
                                      className={`
                                        px-1 rounded text-[8px] sm:text-[10px] flex-shrink-0
                                        ${
                                          log.status === "INFO"
                                            ? "bg-blue-500/20 text-blue-400"
                                            : log.status === "WARNING"
                                              ? "bg-yellow-500/20 text-yellow-400"
                                              : "bg-red-500/20 text-red-400"
                                        }
                                      `}
                                    >
                                      {log.status}
                                    </span>
                                    <span className="text-gray-400 truncate">{log.message}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Features grid - 1 column on mobile, 3 on desktop */}
          <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                icon: <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />,
                title: "Real-Time Monitoring",
                description:
                  "Monitor all aspects of your AUV fleet with millisecond precision, from power systems to sensor readings and mission progress.",
              },
              {
                icon: <TerminalSquare className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />,
                title: "Command Interface",
                description:
                  "Issue commands to individual units or the entire swarm with our intuitive but powerful terminal-inspired interface.",
              },
              {
                icon: <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />,
                title: "Predictive Analytics",
                description:
                  "AI-driven system predicts potential issues before they occur, allowing for preventative maintenance and mission optimization.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-[#0a0e1a] to-[#0f1625] border border-amber-500/20 rounded-none p-4 sm:p-6 hover:border-amber-500/40 transition-colors relative group overflow-hidden"
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 left-0 w-8 sm:w-12 h-px bg-amber-500" />
                <div className="absolute top-0 left-0 w-px h-8 sm:h-12 bg-amber-500" />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 p-1.5 sm:p-2 border border-amber-500/20 rounded">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-amber-100">{feature.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* CSS for animations */}
      <style jsx>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(800px); }
        }
        
        @keyframes matrixFlow {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(2000px); }
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(245, 158, 11, 0.3);
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(245, 158, 11, 0.5);
        }
      `}</style>
    </section>
  )
}

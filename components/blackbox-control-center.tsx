"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { TerminalSquare, Mic, Brain, Radio, BarChart3, Activity, Zap, Database, TrendingUp, Play, Pause, Waveform } from "lucide-react"

export function BlackBoxControlCenter() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const [hasBeenVisible, setHasBeenVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('commands')
  const [isRecording, setIsRecording] = useState(false)
  const [selectedSpeaker, setSelectedSpeaker] = useState('OPERATOR_01')

  useEffect(() => {
    if (isInView && !hasBeenVisible) {
      setHasBeenVisible(true)
    }
  }, [isInView, hasBeenVisible])

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

  const speakers = [
    { id: 'OPERATOR_01', name: 'Operator Alpha', accuracy: 94, commands: 127, lastActive: '2m ago' },
    { id: 'OPERATOR_02', name: 'Operator Beta', accuracy: 87, commands: 89, lastActive: '5m ago' },
    { id: 'OPERATOR_03', name: 'Operator Gamma', accuracy: 91, commands: 203, lastActive: '1m ago' },
  ]

  const recentCommands = [
    { time: '14:32:15', speaker: 'OPERATOR_01', command: 'SCOUT_07 proceed to waypoint alpha', status: 'EXECUTED', confidence: 0.96 },
    { time: '14:31:42', speaker: 'OPERATOR_03', command: 'FEVER_SWARM deploy search pattern delta', status: 'EXECUTED', confidence: 0.89 },
    { time: '14:30:18', speaker: 'OPERATOR_01', command: 'All units return to base', status: 'PENDING', confidence: 0.92 },
    { time: '14:29:55', speaker: 'OPERATOR_02', command: 'Increase depth to 200 meters', status: 'EXECUTED', confidence: 0.85 },
  ]

  const nlpMetrics = [
    { label: 'Intent Accuracy', value: 94, trend: '+2.3%', color: 'green' },
    { label: 'Entity Extraction', value: 91, trend: '+1.1%', color: 'green' },
    { label: 'Command Parsing', value: 88, trend: '-0.5%', color: 'amber' },
    { label: 'Speaker Recognition', value: 96, trend: '+0.8%', color: 'green' },
  ]

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 md:py-32 bg-[#0a0e1a] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: "linear-gradient(#f59e0b20 1px, transparent 1px), linear-gradient(90deg, #f59e0b20 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={hasBeenVisible || isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-10 sm:mb-16">
            <div className="text-xs uppercase tracking-widest text-amber-500 font-mono mb-2">
              Master Control Interface
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter mb-4 sm:mb-6">
              <span className="text-amber-500">BlackBox</span> Command Center
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-300/90 max-w-3xl mx-auto leading-relaxed">
              Voice commands, NLP analytics, and speaker model training unified in one control interface.
            </p>
          </motion.div>

          {/* Command Center Dashboard */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="relative border border-amber-500/30 shadow-[0_0_25px_rgba(245,158,11,0.15)]">
              {/* Terminal header */}
              <div className="bg-black border-b border-amber-500/30 p-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/80" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                  <div className="w-2 h-2 rounded-full bg-green-500/80" />
                  <div className="text-xs text-amber-500 ml-1 font-mono flex items-center gap-1">
                    <TerminalSquare size={12} />
                    <span>BLACKBOX_CONTROL</span>
                  </div>
                </div>
                <div className="text-[10px] text-amber-500/70 font-mono">
                  <span className="bg-amber-500/10 px-1.5 py-0.5 rounded-sm">LIVE</span>
                </div>
              </div>

              {/* Navigation tabs */}
              <div className="bg-black border-b border-amber-500/30 flex">
                {[
                  { id: 'commands', label: 'VOICE COMMANDS' },
                  { id: 'nlp', label: 'NLP ANALYTICS' },
                  { id: 'training', label: 'MODEL TRAINING' }
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
                    {/* Voice Commands Tab */}
                    {activeTab === 'commands' && (
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                        {/* Left Sidebar - Audio Input */}
                        <div className="md:col-span-4 bg-black border border-amber-500/20 p-3">
                          <div className="text-amber-500 font-semibold text-xs font-mono border-b border-amber-500/20 pb-2 mb-3">
                            AUDIO INPUT
                          </div>
                          
                          {/* Recording Interface */}
                          <div className="mb-4">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-xs text-gray-400 font-mono">STATUS</span>
                              <span className={`text-xs font-mono ${isRecording ? 'text-red-400' : 'text-gray-500'}`}>
                                {isRecording ? 'RECORDING' : 'STANDBY'}
                              </span>
                            </div>
                            
                            {/* Audio Waveform Visualization */}
                            <div className="h-16 bg-gray-900 border border-amber-500/10 rounded mb-3 p-2 flex items-end justify-center gap-1">
                              {Array.from({ length: 20 }).map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="w-1 bg-amber-500/60 rounded-t"
                                  animate={isRecording ? {
                                    height: [`${Math.random() * 60 + 20}%`, `${Math.random() * 80 + 10}%`, `${Math.random() * 60 + 20}%`],
                                  } : { height: '10%' }}
                                  transition={{ duration: 0.3, repeat: isRecording ? Infinity : 0 }}
                                  style={{ height: '10%' }}
                                />
                              ))}
                            </div>

                            <button
                              onClick={() => setIsRecording(!isRecording)}
                              className={`w-full py-2 px-3 border font-mono text-xs transition-all ${
                                isRecording
                                  ? 'bg-red-500/20 border-red-500/50 text-red-400 hover:bg-red-500/30'
                                  : 'bg-amber-500/10 border-amber-500/30 text-amber-500 hover:bg-amber-500/20'
                              }`}
                            >
                              {isRecording ? (
                                <>
                                  <Pause className="w-3 h-3 inline mr-2" />
                                  STOP RECORDING
                                </>
                              ) : (
                                <>
                                  <Play className="w-3 h-3 inline mr-2" />
                                  START RECORDING
                                </>
                              )}
                            </button>
                          </div>

                          {/* Active Speakers */}
                          <div className="text-amber-500 font-semibold text-xs font-mono border-b border-amber-500/20 pb-2 mb-3">
                            ACTIVE SPEAKERS
                          </div>
                          <div className="space-y-2">
                            {speakers.map((speaker) => (
                              <div
                                key={speaker.id}
                                onClick={() => setSelectedSpeaker(speaker.id)}
                                className={`p-2 border cursor-pointer transition-all ${
                                  selectedSpeaker === speaker.id
                                    ? 'border-amber-500/50 bg-amber-500/10'
                                    : 'border-amber-500/10 hover:border-amber-500/30'
                                }`}
                              >
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-xs text-gray-300 font-mono">{speaker.name}</span>
                                  <span className="text-[10px] text-green-400 font-mono">{speaker.accuracy}%</span>
                                </div>
                                <div className="flex items-center justify-between text-[10px] text-gray-500 font-mono">
                                  <span>{speaker.commands} commands</span>
                                  <span>{speaker.lastActive}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Main Content - Command Feed */}
                        <div className="md:col-span-8 space-y-3">
                          {/* Stats Row */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {[
                              { label: "COMMANDS TODAY", value: "419", icon: <Zap className="w-4 h-4 text-amber-500" /> },
                              { label: "SUCCESS RATE", value: "94.2%", icon: <Activity className="w-4 h-4 text-green-500" /> },
                              { label: "AVG CONFIDENCE", value: "91.5%", icon: <Brain className="w-4 h-4 text-blue-500" /> },
                              { label: "ACTIVE SPEAKERS", value: "3", icon: <Mic className="w-4 h-4 text-purple-500" /> },
                            ].map((stat, i) => (
                              <div key={i} className="bg-black border border-amber-500/20 p-2 sm:p-3">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <div className="text-[10px] text-gray-500 mb-1 font-mono">{stat.label}</div>
                                    <div className="text-base font-bold text-white">{stat.value}</div>
                                  </div>
                                  <div className="p-1.5 bg-gray-900 border border-amber-500/10 rounded">{stat.icon}</div>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Command Feed */}
                          <div className="bg-black border border-amber-500/20 p-3">
                            <div className="text-[10px] text-amber-500 mb-3 font-mono border-b border-amber-500/20 pb-2">
                              RECENT COMMAND EXECUTIONS
                            </div>
                            <div className="space-y-2 max-h-64 overflow-y-auto custom-scrollbar">
                              {recentCommands.map((cmd, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="border border-amber-500/10 bg-gray-900/30 p-2"
                                >
                                  <div className="flex items-start justify-between mb-1">
                                    <div className="flex items-center gap-2">
                                      <span className="text-[10px] text-gray-500 font-mono">{cmd.time}</span>
                                      <span className="text-[10px] text-amber-500/70 font-mono">{cmd.speaker}</span>
                                    </div>
                                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                                      cmd.status === 'EXECUTED' 
                                        ? 'bg-green-500/20 text-green-400' 
                                        : 'bg-amber-500/20 text-amber-400'
                                    }`}>
                                      {cmd.status}
                                    </span>
                                  </div>
                                  <div className="text-xs text-gray-300 font-mono mb-1">{cmd.command}</div>
                                  <div className="flex items-center justify-between">
                                    <span className="text-[10px] text-gray-500 font-mono">Confidence: {(cmd.confidence * 100).toFixed(0)}%</span>
                                    <div className="w-16 h-1 bg-gray-800 rounded overflow-hidden">
                                      <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${cmd.confidence * 100}%` }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        className="h-full bg-amber-500"
                                      />
                                    </div>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Scout System Integration */}
                          <div className="bg-black border border-amber-500/20 p-3">
                            <div className="text-[10px] text-amber-500 mb-3 font-mono border-b border-amber-500/20 pb-2">
                              SCOUT SYSTEM INTEGRATION
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              {['SCOUT_01', 'SCOUT_03', 'SCOUT_07', 'FEVER_SWARM'].map((unit, i) => (
                                <div key={i} className="border border-amber-500/10 bg-gray-900/30 p-2">
                                  <div className="flex items-center justify-between mb-1">
                                    <span className="text-xs text-gray-300 font-mono">{unit}</span>
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                  </div>
                                  <div className="text-[10px] text-gray-500 font-mono">Ready for commands</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* NLP Analytics Tab */}
                    {activeTab === 'nlp' && (
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                        {/* NLP Metrics */}
                        <div className="md:col-span-8 space-y-3">
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {nlpMetrics.map((metric, i) => (
                              <div key={i} className="bg-black border border-amber-500/20 p-3">
                                <div className="text-[10px] text-gray-500 mb-1 font-mono">{metric.label}</div>
                                <div className="text-xl font-bold text-white mb-1">{metric.value}%</div>
                                <div className="flex items-center gap-1">
                                  <TrendingUp className={`w-3 h-3 ${metric.color === 'green' ? 'text-green-400' : 'text-amber-400'}`} />
                                  <span className={`text-[10px] font-mono ${metric.color === 'green' ? 'text-green-400' : 'text-amber-400'}`}>
                                    {metric.trend}
                                  </span>
                                </div>
                                <div className="w-full h-1.5 bg-gray-800 rounded mt-2 overflow-hidden">
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${metric.value}%` }}
                                    transition={{ duration: 1, delay: i * 0.1 }}
                                    className={`h-full ${
                                      metric.color === 'green' 
                                        ? 'bg-gradient-to-r from-green-500 to-green-400' 
                                        : 'bg-gradient-to-r from-amber-500 to-amber-400'
                                    } rounded`}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* NLP Visualization */}
                          <div className="bg-black border border-amber-500/20 p-4 h-64">
                            <div className="text-[10px] text-amber-500 mb-3 font-mono border-b border-amber-500/20 pb-2">
                              TRANSCRIPT ANALYTICS
                            </div>
                            <div className="relative h-full">
                              {/* Sample visualization - word cloud / entity graph */}
                              <svg className="w-full h-full" viewBox="0 0 400 200">
                                {/* Entity nodes */}
                                {[
                                  { x: 100, y: 100, label: 'SCOUT', size: 20 },
                                  { x: 200, y: 80, label: 'WAYPOINT', size: 16 },
                                  { x: 300, y: 120, label: 'DEPTH', size: 14 },
                                  { x: 150, y: 150, label: 'COMMAND', size: 18 },
                                ].map((node, i) => (
                                  <g key={i}>
                                    <motion.circle
                                      cx={node.x}
                                      cy={node.y}
                                      r={node.size}
                                      fill="rgba(245, 158, 11, 0.3)"
                                      stroke="#f59e0b"
                                      strokeWidth="1"
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      transition={{ delay: i * 0.2 }}
                                    />
                                    <text
                                      x={node.x}
                                      y={node.y + 5}
                                      textAnchor="middle"
                                      className="text-[8px] fill-amber-500 font-mono"
                                    >
                                      {node.label}
                                    </text>
                                  </g>
                                ))}
                                {/* Connection lines */}
                                <line x1="100" y1="100" x2="200" y2="80" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.5" />
                                <line x1="200" y1="80" x2="300" y2="120" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.5" />
                                <line x1="100" y1="100" x2="150" y2="150" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.5" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Sidebar - Entity Extraction */}
                        <div className="md:col-span-4 bg-black border border-amber-500/20 p-3">
                          <div className="text-amber-500 font-semibold text-xs font-mono border-b border-amber-500/20 pb-2 mb-3">
                            ENTITY EXTRACTION
                          </div>
                          <div className="space-y-2">
                            {[
                              { entity: 'VEHICLE_ID', count: 45, confidence: 0.96 },
                              { entity: 'WAYPOINT', count: 32, confidence: 0.91 },
                              { entity: 'DEPTH', count: 28, confidence: 0.89 },
                              { entity: 'SPEED', count: 19, confidence: 0.87 },
                            ].map((item, i) => (
                              <div key={i} className="border border-amber-500/10 bg-gray-900/30 p-2">
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-xs text-gray-300 font-mono">{item.entity}</span>
                                  <span className="text-[10px] text-amber-400 font-mono">{item.count}</span>
                                </div>
                                <div className="w-full h-1 bg-gray-800 rounded overflow-hidden">
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${item.confidence * 100}%` }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="h-full bg-amber-500"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Model Training Tab */}
                    {activeTab === 'training' && (
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                        {/* Training Interface */}
                        <div className="md:col-span-8 space-y-3">
                          <div className="bg-black border border-amber-500/20 p-4">
                            <div className="text-[10px] text-amber-500 mb-3 font-mono border-b border-amber-500/20 pb-2">
                              SPEAKER MODEL TRAINING
                            </div>
                            
                            {/* Selected Speaker */}
                            <div className="mb-4">
                              <div className="text-xs text-gray-400 mb-2 font-mono">SELECTED SPEAKER</div>
                              <div className="border border-amber-500/30 bg-amber-500/5 p-3">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-sm text-amber-500 font-mono">{selectedSpeaker}</span>
                                  <span className="text-xs text-green-400 font-mono">94% Accuracy</span>
                                </div>
                                <div className="text-xs text-gray-400 font-mono">
                                  127 training samples | Last updated: 2 hours ago
                                </div>
                              </div>
                            </div>

                            {/* Training Progress */}
                            <div className="mb-4">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-xs text-gray-400 font-mono">TRAINING PROGRESS</span>
                                <span className="text-xs text-amber-400 font-mono">Epoch 12/20</span>
                              </div>
                              <div className="w-full h-2 bg-gray-800 rounded overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: '60%' }}
                                  transition={{ duration: 1 }}
                                  className="h-full bg-gradient-to-r from-amber-500 to-amber-400"
                                />
                              </div>
                            </div>

                            {/* Training Metrics */}
                            <div className="grid grid-cols-3 gap-3">
                              {[
                                { label: 'LOSS', value: '0.023', trend: '↓' },
                                { label: 'ACCURACY', value: '94.2%', trend: '↑' },
                                { label: 'F1 SCORE', value: '0.91', trend: '↑' },
                              ].map((metric, i) => (
                                <div key={i} className="border border-amber-500/10 bg-gray-900/30 p-2">
                                  <div className="text-[10px] text-gray-500 mb-1 font-mono">{metric.label}</div>
                                  <div className="text-sm font-bold text-white">{metric.value}</div>
                                  <div className="text-[10px] text-green-400 font-mono">{metric.trend}</div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Training History */}
                          <div className="bg-black border border-amber-500/20 p-3">
                            <div className="text-[10px] text-amber-500 mb-3 font-mono border-b border-amber-500/20 pb-2">
                              TRAINING HISTORY
                            </div>
                            <div className="space-y-2">
                              {[
                                { date: '2024-01-15 14:30', model: 'OPERATOR_01_v3', accuracy: 94.2, status: 'COMPLETE' },
                                { date: '2024-01-15 10:15', model: 'OPERATOR_01_v2', accuracy: 92.8, status: 'COMPLETE' },
                                { date: '2024-01-14 16:45', model: 'OPERATOR_01_v1', accuracy: 90.1, status: 'COMPLETE' },
                              ].map((training, i) => (
                                <div key={i} className="border border-amber-500/10 bg-gray-900/30 p-2">
                                  <div className="flex items-center justify-between mb-1">
                                    <span className="text-xs text-gray-300 font-mono">{training.model}</span>
                                    <span className="text-[10px] text-green-400 font-mono">{training.status}</span>
                                  </div>
                                  <div className="flex items-center justify-between text-[10px] text-gray-500 font-mono">
                                    <span>{training.date}</span>
                                    <span className="text-amber-400">Accuracy: {training.accuracy}%</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Sidebar - Training Controls */}
                        <div className="md:col-span-4 bg-black border border-amber-500/20 p-3">
                          <div className="text-amber-500 font-semibold text-xs font-mono border-b border-amber-500/20 pb-2 mb-3">
                            TRAINING CONTROLS
                          </div>
                          <div className="space-y-3">
                            <button className="w-full py-2 px-3 border border-amber-500/30 bg-amber-500/10 text-amber-500 font-mono text-xs hover:bg-amber-500/20 transition-all">
                              START TRAINING
                            </button>
                            <button className="w-full py-2 px-3 border border-gray-700/30 bg-gray-900/30 text-white/60 font-mono text-xs hover:bg-gray-900/50 hover:text-white/80 transition-all">
                              EXPORT MODEL
                            </button>
                            <button className="w-full py-2 px-3 border border-gray-700/30 bg-gray-900/30 text-white/60 font-mono text-xs hover:bg-gray-900/50 hover:text-white/80 transition-all">
                              VIEW DATASET
                            </button>
                          </div>

                          <div className="mt-4 pt-4 border-t border-amber-500/20">
                            <div className="text-amber-500 font-semibold text-xs font-mono mb-3">
                              DATASET STATS
                            </div>
                            <div className="space-y-2 text-[10px] font-mono">
                              <div className="flex justify-between text-gray-400">
                                <span>Total Samples:</span>
                                <span className="text-amber-400">1,247</span>
                              </div>
                              <div className="flex justify-between text-gray-400">
                                <span>Training Set:</span>
                                <span className="text-amber-400">998 (80%)</span>
                              </div>
                              <div className="flex justify-between text-gray-400">
                                <span>Validation:</span>
                                <span className="text-amber-400">249 (20%)</span>
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
        </motion.div>
      </div>

      <style jsx>{`
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





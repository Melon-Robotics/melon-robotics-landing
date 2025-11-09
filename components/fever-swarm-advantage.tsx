"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Network, Share2, Cpu, Shield, ChevronRight, AlertTriangle } from "lucide-react"

export function FeverSwarmAdvantage() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })
  const [nodes, setNodes] = useState([])
  const [isClient, setIsClient] = useState(false)
  const [selectedFeature, setSelectedFeature] = useState(0)

  useEffect(() => {
    setIsClient(true)
    
    // Generate nodes only on client-side
    const generatedNodes = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      connections: [],
    }))

    // Create connections between nodes
    generatedNodes.forEach((node) => {
      const numConnections = Math.floor(Math.random() * 3) + 1
      for (let i = 0; i < numConnections; i++) {
        const targetId = Math.floor(Math.random() * generatedNodes.length)
        if (targetId !== node.id && !node.connections.includes(targetId)) {
          node.connections.push(targetId)
        }
      }
    })

    setNodes(generatedNodes)
  }, [])

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

  const features = [
    {
      icon: <Network className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500" />,
      title: "Distributed Intelligence",
      description:
        "Each Scout contributes to a collective intelligence network, sharing data and insights across the swarm for enhanced decision-making.",
      details: [
        "Parallel neural processing architecture",
        "Decentralized decision matrix",
        "Collaborative learning algorithms",
        "Self-organizing network topology"
      ]
    },
    {
      icon: <Share2 className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500" />,
      title: "Mesh Communication",
      description:
        "Proprietary underwater acoustic networking enables real-time data sharing between units, even in challenging environments.",
      details: [
        "Multi-frequency acoustic signaling",
        "Adaptive bandwidth allocation",
        "Error-correcting transmission protocols",
        "Dynamically routed messaging system"
      ]
    },
    {
      icon: <Cpu className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500" />,
      title: "Decentralized Task Execution",
      description:
        "Swarm members autonomously distribute mission objectives, optimizing coverage and redundancy without central control.",
      details: [
        "Autonomous task distribution algorithm",
        "Priority-based mission segmentation",
        "Real-time objective reassignment",
        "Energy-optimized coordination"
      ]
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500" />,
      title: "Fault Tolerance",
      description:
        "The loss of individual units doesn't compromise the mission. The swarm adapts and redistributes tasks automatically.",
      details: [
        "Multi-node redundancy systems",
        "Graceful degradation protocols",
        "Auto-healing network architecture",
        "Predictive failure analysis"
      ]
    },
  ]

  return (
    <section id="technology" ref={sectionRef} className="relative py-16 sm:py-24 md:py-32 bg-[#0a0e1a] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Grid background */}
        <div 
          className="absolute inset-0 opacity-5" 
          style={{ 
            backgroundImage: "linear-gradient(#f59e0b10 1px, transparent 1px), linear-gradient(90deg, #f59e0b10 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />
        
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        
        {/* Diagonal lines */}
        <div className="absolute -top-10 -right-10 w-64 h-64">
          <div className="absolute top-0 left-0 w-full h-px bg-amber-500/30 origin-top-left transform rotate-45" />
          <div className="absolute top-0 left-0 h-full w-px bg-amber-500/30 origin-top-left transform rotate-45" />
        </div>
        <div className="absolute -bottom-10 -left-10 w-64 h-64">
          <div className="absolute bottom-0 left-0 w-full h-px bg-amber-500/30 origin-bottom-left transform -rotate-45" />
          <div className="absolute bottom-0 left-0 h-full w-px bg-amber-500/30 origin-bottom-left transform -rotate-45" />
        </div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-10 sm:mb-16">
            <motion.div 
              className="inline-block px-2 py-1 sm:px-3 sm:py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] sm:text-xs tracking-widest uppercase mb-3 sm:mb-4 font-mono"
              animate={{
                borderColor: ["rgba(245,158,11,0.3)", "rgba(245,158,11,0.6)", "rgba(245,158,11,0.3)"],
                boxShadow: [
                  "0 0 0 rgba(245,158,11,0)",
                  "0 0 15px rgba(245,158,11,0.3)",
                  "0 0 0 rgba(245,158,11,0)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              Swarm Technology
            </motion.div>
            
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter mb-4 sm:mb-6">
              The <span className="text-amber-500">Fever Swarm</span> Protocol
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-300/90 max-w-3xl mx-auto leading-relaxed">
              Our proprietary swarm intelligence system enables multiple Scout units to work together as a coordinated
              network, monitoring entire oceanic zones with distributed intelligence.
            </p>
          </motion.div>

          {/* Swarm visualization with terminal-style border */}
          <motion.div
            variants={itemVariants}
            className="mb-10 sm:mb-16 relative h-56 sm:h-64 md:h-[400px] border border-amber-500/30 overflow-hidden bg-black/80 backdrop-blur-sm"
          >
            {/* Terminal-style header */}
            <div className="absolute top-0 left-0 w-full bg-black border-b border-amber-500/30 p-2 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/80" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                <div className="w-2 h-2 rounded-full bg-green-500/80" />
                <div className="text-[10px] sm:text-xs text-amber-500 ml-1 sm:ml-2 font-mono flex items-center truncate">
                  FEVER_SWARM_PROTOCOL.v2
                </div>
              </div>
              <div className="text-[10px] sm:text-xs text-amber-500/70 font-mono">
                <span className="bg-amber-500/10 px-1.5 py-0.5 rounded-sm">NODES: {isClient ? nodes.length : 0}</span>
              </div>
            </div>
            
            {/* Corner decorations - simpler on mobile */}
            <div className="absolute top-0 left-0 w-10 h-10 sm:w-16 sm:h-16 pointer-events-none z-10">
              <div className="absolute top-[12px] left-0 w-[1px] h-4 sm:h-8 bg-amber-500" />
              <div className="absolute top-[12px] left-0 w-4 sm:w-8 h-[1px] bg-amber-500" />
            </div>
            <div className="absolute top-0 right-0 w-10 h-10 sm:w-16 sm:h-16 pointer-events-none z-10">
              <div className="absolute top-[12px] right-0 w-[1px] h-4 sm:h-8 bg-amber-500" />
              <div className="absolute top-[12px] right-0 w-4 sm:w-8 h-[1px] bg-amber-500" />
            </div>
            <div className="absolute bottom-0 left-0 w-10 h-10 sm:w-16 sm:h-16 pointer-events-none z-10">
              <div className="absolute bottom-[12px] left-0 w-[1px] h-4 sm:h-8 bg-amber-500" />
              <div className="absolute bottom-[12px] left-0 w-4 sm:w-8 h-[1px] bg-amber-500" />
            </div>
            <div className="absolute bottom-0 right-0 w-10 h-10 sm:w-16 sm:h-16 pointer-events-none z-10">
              <div className="absolute bottom-[12px] right-0 w-[1px] h-4 sm:h-8 bg-amber-500" />
              <div className="absolute bottom-[12px] right-0 w-4 sm:w-8 h-[1px] bg-amber-500" />
            </div>
            
            {/* Scanning line animation */}
            <motion.div 
              className="absolute h-[1px] w-full bg-amber-500/60 z-10 pointer-events-none"
              animate={{ top: ["0%", "100%"] }}
              transition={{
                duration: 4,
                ease: "linear",
                repeat: Infinity,
              }}
            />

            {isClient && (
              <div className="absolute inset-0 pt-[30px]">
                {/* Nodes */}
                {nodes.map((node) => (
                  <motion.div
                    key={node.id}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      x: `${node.x}%`,
                      y: `${node.y}%`,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: node.id * 0.02,
                    }}
                    className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-amber-500 rounded-full shadow-[0_0_5px_rgba(245,158,11,0.7)]"
                    style={{
                      left: 0,
                      top: 0,
                    }}
                  />
                ))}

                {/* Connections - fewer on mobile */}
                <svg className="absolute inset-0 w-full h-full">
                  {nodes.map((node, nodeIndex) =>
                    // Reduce number of connections on mobile
                    nodeIndex % (window.innerWidth < 640 ? 3 : 1) === 0 &&
                    node.connections.slice(0, window.innerWidth < 640 ? 1 : node.connections.length).map((targetId, i) => {
                      const target = nodes[targetId]
                      return (
                        <motion.line
                          key={`${node.id}-${targetId}-${i}`}
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: 0.3,
                            x1: `${node.x}%`,
                            y1: `${node.y}%`,
                            x2: `${target.x}%`,
                            y2: `${target.y}%`,
                          }}
                          transition={{
                            duration: 0.5,
                            delay: (node.id + targetId) * 0.01 + 0.5,
                          }}
                          stroke="#f59e0b"
                          strokeWidth="0.5"
                          strokeDasharray="3,3"
                        />
                      )
                    }),
                  )}
                </svg>

                {/* Data pulses - fewer on mobile */}
                {nodes.map((node, nodeIndex) =>
                  // Reduce number of pulses on mobile
                  nodeIndex % (window.innerWidth < 640 ? 5 : 2) === 0 &&
                  node.connections.slice(0, 1).map((targetId, i) => {
                    const target = nodes[targetId]
                    return (
                      <motion.div
                        key={`pulse-${node.id}-${targetId}-${i}`}
                        initial={{
                          opacity: 0,
                          scale: 0.5,
                          x: `${node.x}%`,
                          y: `${node.y}%`,
                        }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0.5, 1.5, 0.5],
                          x: [`${node.x}%`, `${target.x}%`],
                          y: [`${node.y}%`, `${target.y}%`],
                        }}
                        transition={{
                          duration: 2,
                          delay: (node.id * 0.5) % 5,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatDelay: Math.random() * 5 + 3,
                        }}
                        className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-amber-400 rounded-full shadow-[0_0_5px_rgba(245,158,11,0.7)]"
                        style={{
                          left: 0,
                          top: 0,
                        }}
                      />
                    )
                  }),
                )}
              </div>
            )}

            {/* Status indicators - simplified for mobile */}
            <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 px-1.5 py-0.5 sm:px-2 sm:py-1 bg-black/80 border border-amber-500/30 text-[10px] sm:text-xs text-amber-500 font-mono z-10">
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 mr-1 sm:mr-2 animate-pulse" />
                <span>NETWORK: <span className="text-green-400">OPTIMAL</span></span>
              </div>
            </div>
            
            {/* Alert Callout - hide on smaller devices */}
            <div className="absolute top-[65px] right-2 sm:right-3 w-40 sm:w-64 bg-black/80 border border-amber-500/30 text-[10px] sm:text-xs text-amber-500 font-mono z-10 hidden xs:block">
              <div className="border-b border-amber-500/30 p-1.5 flex items-center gap-2">
                <AlertTriangle size={12} className="text-amber-500" />
                <span className="text-amber-500">SWARM ANALYSIS</span>
              </div>
              <div className="p-2 space-y-1 sm:space-y-2">
                <div className="flex justify-between items-center">
                  <span>Node Count:</span>
                  <span className="text-white">{isClient ? nodes.length : 0}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Network Density:</span>
                  <span className="text-white">72%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Efficiency:</span>
                  <span className="text-green-400">94.3%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Redundancy:</span>
                  <span className="text-white">3.2x</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features with interactive selection - mobile optimized */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            {/* Feature selection sidebar - scrollable on mobile */}
            <motion.div 
              variants={itemVariants}
              className="md:col-span-1 flex flex-row md:flex-col gap-3 md:gap-4 overflow-x-auto pb-2 md:pb-0 no-scrollbar"
            >
              <div className="text-amber-500 text-xs font-mono mb-2 border-b border-amber-500/20 pb-1 hidden md:block">
                FEVER PROTOCOL SUBSYSTEMS
              </div>
              
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`
                    cursor-pointer bg-gray-900/50 hover:bg-amber-500/10 transition-colors 
                    border border-amber-500/20 p-2 sm:p-3 flex flex-col md:flex-row items-center md:items-center justify-between
                    ${selectedFeature === index ? 'bg-amber-500/10 border-amber-500/40' : ''}
                    flex-shrink-0 w-[120px] sm:w-auto md:w-full
                  `}
                  onClick={() => setSelectedFeature(index)}
                  whileHover={{ y: -2, x: 0 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex flex-col md:flex-row items-center md:items-center gap-1 md:gap-3">
                    <div className="mb-1 md:mb-0">
                      {feature.icon}
                    </div>
                    <div className="text-gray-100 text-xs sm:text-sm text-center md:text-left font-medium">{feature.title.split(" ")[0]}</div>
                  </div>
                  <ChevronRight className={`w-3 h-3 sm:w-4 sm:h-4 mt-1 md:mt-0 transform rotate-90 md:rotate-0 ${selectedFeature === index ? 'text-amber-500' : 'text-gray-500'} md:block hidden`} />
                  {selectedFeature === index && (
                    <div className="h-1 w-6 bg-amber-500 mt-1 rounded-full md:hidden" />
                  )}
                </motion.div>
              ))}
            </motion.div>
            
            {/* Feature details panel */}
            <motion.div 
              variants={itemVariants}
              className="md:col-span-2 bg-gray-900/30 border border-amber-500/20 p-4 sm:p-6 relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedFeature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                    <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg mx-auto sm:mx-0">
                      {features[selectedFeature].icon}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-amber-100 mb-2 text-center sm:text-left">{features[selectedFeature].title}</h3>
                      <p className="text-sm sm:text-base text-gray-300">{features[selectedFeature].description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mt-6 sm:mt-8">
                    <div className="text-xs sm:text-sm text-amber-500 font-mono border-b border-amber-500/20 pb-1">
                      TECHNICAL SPECIFICATIONS
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
                      {features[selectedFeature].details.map((detail, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className="flex items-center"
                        >
                          <div className="w-1.5 h-1.5 bg-amber-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-300 text-xs sm:text-sm">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-amber-500/10">
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                        <span className="text-green-400 text-xs sm:text-sm font-mono">SUBSYSTEM STATUS: OPERATIONAL</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Decorative corner elements */}
              <div className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 pointer-events-none">
                <div className="absolute top-0 right-0 w-[1px] h-4 sm:h-6 bg-amber-500" />
                <div className="absolute top-0 right-0 w-4 sm:w-6 h-[1px] bg-amber-500" />
              </div>
              <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-12 sm:h-12 pointer-events-none">
                <div className="absolute bottom-0 left-0 w-[1px] h-4 sm:h-6 bg-amber-500" />
                <div className="absolute bottom-0 left-0 w-4 sm:w-6 h-[1px] bg-amber-500" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Custom styles for mobile optimization */}
      <style jsx>{`
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

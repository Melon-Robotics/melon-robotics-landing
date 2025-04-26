"use client"

import { Button } from "@/components/ui/button"
import { useRef, useEffect, useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, useTexture, PerspectiveCamera, Text, Effects, Html } from "@react-three/drei"
import * as THREE from "three"
import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils.js"

// Shader for glowing edges
function GlowingEdgesMaterial({ color = "#f59e0b", glowIntensity = 1.5 }) {
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(color) },
        glowIntensity: { value: glowIntensity },
        time: { value: 0 }
      },
      vertexShader: `
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec2 vUv;
        
        void main() {
          vPosition = position;
          vNormal = normalize(normalMatrix * normal);
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform float glowIntensity;
        uniform float time;
        
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec2 vUv;
        
        void main() {
          // Calculate fresnel effect for edge glow
          vec3 viewDirection = normalize(cameraPosition - vPosition);
          float fresnel = pow(1.0 - abs(dot(viewDirection, vNormal)), 3.0);
          
          // Pulsing effect
          float pulse = 0.5 + 0.5 * sin(time * 0.5);
          
          // Final color with edge glow
          vec3 finalColor = color * (fresnel * glowIntensity * pulse + 0.2);
          
          gl_FragColor = vec4(finalColor, fresnel * 0.7 + 0.3);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide
    })
  }, [color, glowIntensity])

  useFrame(({ clock }) => {
    material.uniforms.time.value = clock.getElapsedTime()
  })

  return material
}

// Underwater environment with realistic caustics
function UnderwaterEnvironment() {
  const { scene } = useThree()

  useEffect(() => {
    // Add underwater fog
    scene.fog = new THREE.FogExp2(0x001220, 0.025)
    scene.background = new THREE.Color(0x000a14)
  }, [scene])

  return null
}

// Marine Boundary Grid
function GridFloor() {
  const gridRef = useRef<THREE.GridHelper>(null)
  
  useFrame(({ clock }) => {
    if (gridRef.current) {
      const time = clock.getElapsedTime()
      gridRef.current.position.y = Math.sin(time * 0.2) * 0.2 - 3
      gridRef.current.material.opacity = 0.3 + Math.sin(time * 0.5) * 0.1
    }
  })
  
  return (
    <group>
      <gridHelper
        ref={gridRef}
        args={[80, 80, "#0f3854", "#0f3854"]}
        position={[0, -3, 0]}
        rotation={[0, 0, 0]}
      >
        <primitive object={new THREE.MeshBasicMaterial({ color: "#0f3854", transparent: true, opacity: 0.3 })} attach="material" />
      </gridHelper>
    </group>
  )
}

// Volumetric light rays
function VolumetricLightRays() {
  const raysRef = useRef<THREE.LineSegments>(null)

  // Create ray geometry
  const rayGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const rayCount = 20
    const positions = []
    const rayData = []

    for (let i = 0; i < rayCount; i++) {
      const angle = (i / rayCount) * Math.PI * 2
      const radius = 7 + Math.random() * 8
      const x = Math.cos(angle) * radius
      const z = Math.sin(angle) * radius
      const height = 12 + Math.random() * 8

      // Ray start (top)
      positions.push(x, 12, z)
      // Ray end (bottom)
      positions.push(x, -height, z)

      // Ray data (for animation)
      rayData.push({
        angle,
        radius,
        speed: 0.2 + Math.random() * 0.3,
        width: 0.1 + Math.random() * 0.3,
      })
    }

    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3))
    geometry.userData = { rayData }

    return geometry
  }, [])

  // Animate rays
  useFrame(({ clock }) => {
    if (raysRef.current) {
      const time = clock.getElapsedTime()
      const positions = raysRef.current.geometry.attributes.position.array
      const rayData = rayGeometry.userData.rayData

      for (let i = 0; i < rayData.length; i++) {
        const ray = rayData[i]
        const i6 = i * 6 // 2 points per ray, 3 coordinates per point

        // Animate ray position
        const newAngle = ray.angle + time * ray.speed * 0.05
        const x = Math.cos(newAngle) * ray.radius
        const z = Math.sin(newAngle) * ray.radius

        // Update top point
        positions[i6] = x
        positions[i6 + 2] = z

        // Update bottom point (keep y the same)
        positions[i6 + 3] = x
        positions[i6 + 5] = z
      }

      // Type assertion to fix TypeScript error
      const positionAttribute = raysRef.current.geometry.attributes.position as THREE.BufferAttribute;
      positionAttribute.needsUpdate = true;

      // Animate opacity
      (raysRef.current.material as THREE.LineBasicMaterial).opacity = Math.sin(time * 0.2) * 0.1 + 0.3
    }
  })

  return (
    <lineSegments ref={raysRef}>
      <primitive object={rayGeometry} attach="geometry" />
      <lineBasicMaterial color="#f59e0b" transparent opacity={0.3} blending={THREE.AdditiveBlending} linewidth={1} />
    </lineSegments>
  )
}

// Digital distortion post-processing
function DigitalDistortionEffect() {
  const effect = useMemo(() => {
    const shader = {
      uniforms: {
        tDiffuse: { value: null },
        time: { value: 0 },
        amount: { value: 0.02 },
        scanlineIntensity: { value: 0.15 },
        scanlineCount: { value: 800 },
        noiseIntensity: { value: 0.02 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform float time;
        uniform float amount;
        uniform float scanlineIntensity;
        uniform float scanlineCount;
        uniform float noiseIntensity;
        
        varying vec2 vUv;
        
        float random(vec2 p) {
          return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453123);
        }
        
        void main() {
          // Subtle digital distortion
          vec2 distortedUV = vUv;
          distortedUV.y += cos(distortedUV.x * 10.0 + time) * amount;
          
          // Intensity of the glitch based on time
          float glitchFrequency = sin(time * 0.1) * 0.5 + 0.5;
          float glitchOffset = random(vec2(floor(time * 5.0), 0.0)) * 0.01 * glitchFrequency;
          
          // Horizontal line glitch
          if (random(vec2(floor(time * 3.0), 0.0)) < 0.05 * glitchFrequency) {
            float lineY = floor(random(vec2(floor(time * 20.0), 0.0)) * 20.0) / 20.0;
            if (abs(vUv.y - lineY) < 0.02) {
              distortedUV.x += glitchOffset * 5.0 * sin(time * 50.0 + vUv.y * 100.0);
            }
          }
          
          // RGB shift
          vec4 shiftedColor = vec4(0.0);
          shiftedColor.r = texture2D(tDiffuse, distortedUV + vec2(glitchOffset, 0.0)).r;
          shiftedColor.g = texture2D(tDiffuse, distortedUV).g;
          shiftedColor.b = texture2D(tDiffuse, distortedUV - vec2(glitchOffset, 0.0)).b;
          shiftedColor.a = 1.0;
          
          // Scanlines
          float scanline = sin(vUv.y * scanlineCount - time * 5.0) * 0.5 + 0.5;
          scanline = pow(scanline, 1.5) * scanlineIntensity;
          
          // Noise
          float noise = random(vUv + time) * noiseIntensity;
          
          // Final color
          vec4 finalColor = mix(shiftedColor, vec4(1.0), scanline);
          finalColor.rgb *= (1.0 - noise);
          
          gl_FragColor = finalColor;
        }
      `
    }
    return new THREE.ShaderMaterial(shader)
  }, [])

  useFrame(({ clock }) => {
    effect.uniforms.time.value = clock.getElapsedTime()
  })

  return <Effects>
    <shaderPass args={[effect]} />
  </Effects>
}

// Scout AUV Model
function ScoutAUV() {
  const meshRef = useRef<THREE.Mesh>(null)
  const rotationRef = useRef({ y: 0, speed: 0.2 })
  const glowingEdgesMaterial = GlowingEdgesMaterial({ color: "#f59e0b", glowIntensity: 1.8 })
  
  // Create a simplified AUV geometry
  const geometry = useMemo(() => {
    const mainBody = new THREE.CylinderGeometry(0.8, 0.8, 4, 16)
    const nose = new THREE.ConeGeometry(0.8, 1.2, 16)
    const tail = new THREE.CylinderGeometry(0.6, 0.2, 1, 16)
    const fin1 = new THREE.BoxGeometry(0.1, 1, 0.8)
    const fin2 = new THREE.BoxGeometry(0.1, 1, 0.8)
    const propeller = new THREE.CylinderGeometry(0.2, 0.2, 0.3, 16)
    
    const mainBodyMesh = new THREE.Mesh(mainBody)
    mainBodyMesh.position.set(0, 0, 0)
    
    const noseMesh = new THREE.Mesh(nose)
    noseMesh.position.set(0, 2.6, 0)
    noseMesh.rotation.x = Math.PI / 2
    
    const tailMesh = new THREE.Mesh(tail)
    tailMesh.position.set(0, -2.4, 0)
    tailMesh.rotation.x = Math.PI / 2
    
    const fin1Mesh = new THREE.Mesh(fin1)
    fin1Mesh.position.set(0, 0, 1)
    
    const fin2Mesh = new THREE.Mesh(fin2)
    fin2Mesh.position.set(0, 0, -1)
    
    const propellerMesh = new THREE.Mesh(propeller)
    propellerMesh.position.set(0, -3, 0)
    propellerMesh.rotation.x = Math.PI / 2
    
    // Combine all geometries
    const geometries = []
    geometries.push(mainBodyMesh.geometry.clone().applyMatrix4(new THREE.Matrix4().makeTranslation(0, 0, 0)))
    geometries.push(noseMesh.geometry.clone().applyMatrix4(new THREE.Matrix4().makeTranslation(0, 2.6, 0)).applyMatrix4(new THREE.Matrix4().makeRotationX(Math.PI / 2)))
    geometries.push(tailMesh.geometry.clone().applyMatrix4(new THREE.Matrix4().makeTranslation(0, -2.4, 0)).applyMatrix4(new THREE.Matrix4().makeRotationX(Math.PI / 2)))
    geometries.push(fin1Mesh.geometry.clone().applyMatrix4(new THREE.Matrix4().makeTranslation(0, 0, 1)))
    geometries.push(fin2Mesh.geometry.clone().applyMatrix4(new THREE.Matrix4().makeTranslation(0, 0, -1)))
    geometries.push(propellerMesh.geometry.clone().applyMatrix4(new THREE.Matrix4().makeTranslation(0, -3, 0)).applyMatrix4(new THREE.Matrix4().makeRotationX(Math.PI / 2)))
    
    const mergedGeometry = BufferGeometryUtils.mergeGeometries(geometries)
    return mergedGeometry
  }, [])

  // Animation
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime()
      
      // Smooth hovering movement
      meshRef.current.position.y = Math.sin(time * 0.5) * 0.2
      
      // Smooth rotation
      rotationRef.current.y += rotationRef.current.speed * 0.005
      meshRef.current.rotation.y = rotationRef.current.y
      
      // Small tilt based on rotation
      meshRef.current.rotation.z = Math.sin(time * 0.5) * 0.05
    }
  })

  return (
    <group position={[0, 0, 0]} scale={[0.7, 0.7, 0.7]}>
      <mesh ref={meshRef} geometry={geometry}>
        <primitive object={glowingEdgesMaterial} attach="material" />
      </mesh>
      
      {/* Technical data labels */}
      <Html position={[3, 1, 0]} distanceFactor={15} zIndexRange={[0, 0]} occlude>
        <div className="w-40 h-28 border border-amber-500/50 bg-black/80 rounded-md p-2 text-xs font-mono text-amber-500 overflow-hidden">
          <div className="border-b border-amber-500/30 mb-1 pb-1">MELON SCOUT AUV</div>
          <div className="flex justify-between border-b border-amber-500/20 text-[10px] mb-1">
            <span>POWER:</span>
            <span className="text-green-400">97%</span>
          </div>
          <div className="flex justify-between border-b border-amber-500/20 text-[10px] mb-1">
            <span>DEPTH:</span>
            <span>120M</span>
          </div>
          <div className="flex justify-between border-b border-amber-500/20 text-[10px] mb-1">
            <span>SPEED:</span>
            <span>12 KNOTS</span>
          </div>
          <div className="flex justify-between text-[10px]">
            <span>STATUS:</span>
            <span className="text-green-400">OPERATIONAL</span>
          </div>
        </div>
      </Html>
      
      {/* Technical callout lines */}
      <line>
        <bufferGeometry>
          <bufferAttribute 
            attach="attributes-position"
            args={[new Float32Array([0, 0.5, 0, 2, 0.5, 0]), 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#f59e0b" transparent opacity={0.5} />
      </line>
    </group>
  )
}

export function MelonScoutHero() {
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Terminal-inspired HUD overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Top frame */}
        <div className="absolute top-0 left-0 w-full h-px bg-amber-500/30" />
        <div className="absolute top-0 left-0 h-16 w-px bg-amber-500/30" />
        <div className="absolute top-0 right-0 h-16 w-px bg-amber-500/30" />
        
        {/* Bottom frame */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-amber-500/30" />
        <div className="absolute bottom-0 left-0 h-16 w-px bg-amber-500/30" />
        <div className="absolute bottom-0 right-0 h-16 w-px bg-amber-500/30" />
        
        {/* Top-left corner info - responsive for mobile */}
        <div className="absolute top-4 left-4 text-[10px] sm:text-xs font-mono text-amber-500/80">
          <div className="inline-block border border-amber-500/30 bg-black/50 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded">
            <span className="hidden xs:inline">MELON_ROBOTICS // </span>SECURE_SESSION
          </div>
        </div>
        
        {/* Top-right corner info - hide on smallest screens */}
        <div className="absolute top-4 right-4 text-[10px] sm:text-xs font-mono text-amber-500/80 hidden xs:block">
          <div className="inline-block border border-amber-500/30 bg-black/50 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded">
            SYS_STATUS: <span className="text-green-400">SECURE</span>
          </div>
        </div>
        
        {/* Bottom-left indicators - simplified for mobile */}
        <div className="absolute bottom-4 left-4 flex items-center text-[10px] sm:text-xs font-mono">
          <div className="flex items-center mr-3">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 mr-1 animate-pulse" />
            <span className="text-green-400">ONLINE</span>
          </div>
          <div className="flex items-center hidden xs:flex">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-500 mr-1 animate-pulse" />
            <span className="text-amber-500">COMMS</span>
          </div>
        </div>
        
        {/* Bottom-right indicators - simplified for mobile */}
        <div className="absolute bottom-4 right-4 text-[10px] sm:text-xs font-mono text-amber-500/80">
          <div className="inline-block border border-amber-500/30 bg-black/50 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded">
            <span className="hidden xs:inline">DEPTH: 120M | </span>
            <span>FEVER: <span className="text-green-400">ACTIVE</span></span>
          </div>
        </div>
      </div>

      {/* Main 3D scene */}
      <div className="absolute inset-0 z-0">
        <Canvas 
          className="!touch-none" 
          camera={{ position: [0, 0, 10], fov: 45 }}
          dpr={[1, 2]} // Control pixel ratio for better mobile performance
        >
          <UnderwaterEnvironment />
          <ambientLight intensity={0.2} />
          <directionalLight position={[5, 5, 5]} intensity={0.5} />
          <pointLight position={[0, 0, 5]} intensity={2} color="#f59e0b" />
          
          <ScoutAUV />
          <GridFloor />
          <VolumetricLightRays />
          <DigitalDistortionEffect />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            rotateSpeed={0.3}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
            minAzimuthAngle={-Math.PI / 4}
            maxAzimuthAngle={Math.PI / 4}
            enableDamping={true}
            dampingFactor={0.05}
          />
        </Canvas>
      </div>

      {/* Content overlay - improved for mobile */}
      <div className="container relative z-20 mx-auto h-full flex flex-col justify-center px-4 md:px-6">
        <div className="max-w-2xl">
          <AnimatePresence>
            {isLoaded && (
              <>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl sm:text-5xl md:text-7xl font-bold mb-3 sm:mb-4"
                >
                  <span className="text-amber-500 tracking-tighter">SCOUT</span> AUV
                </motion.h1>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gradient-to-r from-amber-500/20 to-transparent p-px mb-6 sm:mb-8"
                >
                  <div className="h-px bg-amber-500/60" />
                </motion.div>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-base sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 font-light leading-relaxed"
                >
                  Modular subsea robotics system with <span className="text-amber-400">swarm intelligence</span> for defense and research applications.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                >
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="bg-amber-500 hover:bg-amber-600 text-black rounded-none border border-amber-400 w-full sm:w-auto"
                  >
                    REQUEST DEMO
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10 rounded-none w-full sm:w-auto"
                  >
                    SPECIFICATIONS
                  </Button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

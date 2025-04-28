'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, Float } from '@react-three/drei'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import * as THREE from 'three'

function FloatingTechIcons() {
  const iconsRef = useRef<THREE.Group>(null)

  // Array of tech icons (we'll use simple geometries for now)
  const techIcons = [
    { position: [0, 0, 0], color: '#38b6ff', geometry: 'box' },
    { position: [2, 1, -1], color: '#ff2d75', geometry: 'sphere' },
    { position: [-2, -1, 1], color: '#2dff56', geometry: 'torus' },
    { position: [1, -2, -1], color: '#f5ff2d', geometry: 'cone' },
    { position: [-1, 2, 1], color: '#ff8f2d', geometry: 'cylinder' },
  ]

  useFrame(({ clock }) => {
    if (iconsRef.current) {
      iconsRef.current.rotation.y = clock.getElapsedTime() * 0.2
    }
  })

  return (
    <group ref={iconsRef}>
      {techIcons.map((icon, index) => (
        <Float key={index} speed={2 + Math.random() * 2} rotationIntensity={1} floatIntensity={1}>
          <mesh position={icon.position as [number, number, number]}>
            {icon.geometry === 'box' && <boxGeometry args={[1, 1, 1]} />}
            {icon.geometry === 'sphere' && <sphereGeometry args={[0.7, 16, 16]} />}
            {icon.geometry === 'torus' && <torusGeometry args={[0.5, 0.2, 16, 32]} />}
            {icon.geometry === 'cone' && <coneGeometry args={[0.6, 1, 32]} />}
            {icon.geometry === 'cylinder' && <cylinderGeometry args={[0.5, 0.5, 1, 32]} />}
            <meshStandardMaterial 
              color={icon.color} 
              emissive={icon.color}
              emissiveIntensity={0.5}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

function TechParticles() {
  const particlesRef = useRef<THREE.Points>(null)
  const count = 500

  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10
    colors[i] = Math.random()
  }

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x = clock.getElapsedTime() * 0.1
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.1
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
          array={positions}
          itemSize={3}
          />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={0.05}
        sizeAttenuation={true}
        vertexColors
        transparent
        opacity={0.8}
      />
    </points>
  )
}

export default function ThreeScene() {
  return (
    <div className="w-full h-[80vh] relative">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[0, 10, 0]} angle={0.15} penumbra={1} intensity={1} />
        
        <FloatingTechIcons />
        <TechParticles />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.5} 
          minPolarAngle={Math.PI / 3} 
          maxPolarAngle={Math.PI / 3}
        />
      </Canvas>
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center px-6"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 font-orbitron text-white">
            My Tech Universe
          </h2>
          <p className="text-xl md:text-2xl text-neon-blue max-w-2xl mx-auto">
            Explore my projects floating in this digital cosmos
          </p>
        </motion.div>
      </div>
    </div>
  )
}
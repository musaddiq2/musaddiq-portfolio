'use client'
import { Float, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

// Tech icon configurations
const TECH_ICONS = [
  {
    name: 'React',
    position: [1.5, 0.5, 0] as [number, number, number],
    color: '#61DAFB',
    geometry: <boxGeometry args={[0.8, 0.8, 0.8]} />,
    rotationSpeed: 0.01
  },
  {
    name: 'Node',
    position: [-1.5, -0.5, 1] as [number, number, number],
    color: '#68A063',
    geometry: <sphereGeometry args={[0.6, 32, 32]} />,
    rotationSpeed: -0.015
  },
  {
    name: 'MongoDB',
    position: [0, 1.5, -1] as [number, number, number],
    color: '#47A248',
    geometry: <cylinderGeometry args={[0.5, 0.5, 0.8, 32]} />,
    rotationSpeed: 0.02
  },
  {
    name: 'NextJS',
    position: [0, -1.5, 1] as [number, number, number],
    color: '#000000',
    geometry: <torusGeometry args={[0.5, 0.2, 16, 32]} />,
    rotationSpeed: -0.01
  }
]

export default function FloatingTechIcons() {
  const group = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.05
    }
  })

  return (
    <group ref={group}>
      {TECH_ICONS.map((tech, index) => (
        <Float
          key={index}
          speed={2 + Math.random()} 
          rotationIntensity={0.5}
          floatIntensity={1}
        >
          <mesh 
            position={tech.position}
            castShadow
            receiveShadow
          >
            {tech.geometry}
            <meshStandardMaterial 
              color={tech.color}
              emissive={tech.color}
              emissiveIntensity={0.3}
              metalness={0.7}
              roughness={0.2}
            />
            <Text
              position={[0, 0, 1]}
              fontSize={0.3}
              color="white"
              anchorX="center"
              anchorY="middle"
              outlineColor={tech.color}
              outlineWidth={0.01}
            >
              {tech.name}
            </Text>
          </mesh>
        </Float>
      ))}

      {/* Connecting lines between icons */}
      <line>
        <bufferGeometry attach="geometry">
          <primitive
            object={
              new THREE.BufferAttribute(
                new Float32Array(TECH_ICONS.flatMap(tech => tech.position)),
                3
              )
            }
            attach="attributes-position"
          />
        </bufferGeometry>
        <lineBasicMaterial attach="material" color="#38b6ff" opacity={0.5} transparent />
      </line>
    </group>
  )
}
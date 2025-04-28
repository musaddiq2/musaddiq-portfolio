'use client'

import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

useGLTF.preload('/models/react.glb') // Preload your models

export function TechModel({ modelPath, position, scale = 1 }: { 
  modelPath: string 
  position: [number, number, number]
  scale?: number
}) {
  const group = useRef<THREE.Group>(null)
  const { scene } = useGLTF(modelPath)

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.5
    }
  })

  return (
    <group ref={group} position={position} scale={[scale, scale, scale]}>
      <primitive object={scene} />
    </group>
  )
}
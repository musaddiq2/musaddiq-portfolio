'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const fragmentShader = `
  uniform float u_time;
  uniform vec2 u_resolution;
  
  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    uv -= 0.5;
    uv.x *= u_resolution.x / u_resolution.y;
    
    float d = length(uv);
    float c = smoothstep(0.3, 0.29, d);
    
    // Pulsing effect
    c += sin(u_time * 2.0 + d * 10.0) * 0.1;
    
    // Color gradient
    vec3 color = mix(
      vec3(0.1, 0.3, 0.8),
      vec3(0.8, 0.1, 0.3),
      uv.x + uv.y + sin(u_time) * 0.5
    );
    
    gl_FragColor = vec4(color * c, 1.0);
  }
`

const vertexShader = `
  varying vec2 vUv;
  
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

export function ShaderPlane() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      (meshRef.current.material as THREE.ShaderMaterial).uniforms.u_time.value = clock.getElapsedTime()
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, -2]} rotation={[Math.PI / 2, 0, 0]}>
      <planeGeometry args={[5, 5, 32, 32]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={{
          u_time: { value: 0 },
          u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        }}
        side={THREE.DoubleSide}
        transparent
      />
    </mesh>
  )
}
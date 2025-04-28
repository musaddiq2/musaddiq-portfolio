import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = () => {
  const mesh = useRef();
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.001;
    }
  });

  const particles = [];
  for (let i = 0; i < 200; i++) {
    particles.push({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
      ],
    });
  }

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length}
          array={new Float32Array(particles.flatMap((p) => p.position))}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#00ffcc" transparent opacity={0.8} />
    </points>
  );
};

const ParticlesBackground = () => (
  <Canvas className="absolute inset-0 z-0">
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} />
    <Particles />
  </Canvas>
);

export default ParticlesBackground;
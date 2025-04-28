import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Sphere = () => {
  const mesh = useRef();
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#00ffcc" wireframe />
    </mesh>
  );
};

const TechSphere = () => (
  <Canvas className="w-full h-64">
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} />
    <Sphere />
  </Canvas>
);

export default TechSphere;
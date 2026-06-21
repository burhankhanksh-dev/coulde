import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float, MeshRefractionMaterial, useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function DiamondRing() {
  const ringRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ringRef.current.rotation.y = t * 0.5;
    ringRef.current.rotation.x = Math.sin(t * 0.3) * 0.2;
  });

  return (
    <group ref={ringRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        {/* The Golden Ring Band */}
        <mesh>
          <torusGeometry args={[2, 0.15, 32, 100]} />
          <meshStandardMaterial 
            color="#D4AF37" 
            metalness={1} 
            roughness={0.1} 
            envMapIntensity={2}
          />
        </mesh>
        
        {/* The Diamond */}
        <mesh position={[0, 2.1, 0]} rotation={[Math.PI / 4, 0, 0]}>
          <octahedronGeometry args={[0.6, 0]} />
          <meshPhongMaterial 
            color="#ffffff" 
            shininess={100} 
            transparent 
            opacity={0.8} 
            emissive="#ffffff"
            emissiveIntensity={0.5}
          />
        </mesh>
      </Float>

      {/* Floating Gold Particles */}
      <Points count={50} />
    </group>
  );
}

function Points({ count }) {
  const mesh = useRef();
  const particles = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    particles[i * 3] = (Math.random() - 0.5) * 15;
    particles[i * 3 + 1] = (Math.random() - 0.5) * 15;
    particles[i * 3 + 2] = (Math.random() - 0.5) * 15;
  }

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particles.length / 3} array={particles} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#D4AF37" transparent opacity={0.6} />
    </points>
  );
}

'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Sphere, Torus, Box } from '@react-three/drei';
import * as THREE from 'three';

// Avatar component representing kids
function Avatar({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Orbital rotation
      const time = state.clock.getElapsedTime() * 0.1;
      meshRef.current.position.x = position[0] * Math.cos(time);
      meshRef.current.position.z = position[2] * Math.sin(time);
      meshRef.current.position.y = position[1] + Math.sin(time * 2) * 0.1; // Gentle bobbing
    }
  });

  return (
    <group ref={meshRef}>
      {/* Avatar body - clay-style */}
      <Sphere args={[0.3, 16, 16]} position={[0, 0.5, 0]}>
        <meshPhongMaterial color={color} />
      </Sphere>
      {/* Avatar head */}
      <Sphere args={[0.2, 16, 16]} position={[0, 0.9, 0]}>
        <meshPhongMaterial color={color} />
      </Sphere>
      {/* Simple frame for portrait */}
      <Box args={[0.15, 0.15, 0.02]} position={[0, 0.9, 0.21]}>
        <meshPhongMaterial color="#8B4513" />
      </Box>
    </group>
  );
}

// Orbiting badge component
function Badge({ position, text, color }: { position: [number, number, number]; text: string; color: string }) {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime() * 0.15;
      meshRef.current.position.x = position[0] * Math.cos(time + 2);
      meshRef.current.position.z = position[2] * Math.sin(time + 2);
      meshRef.current.position.y = position[1] + Math.sin(time * 3) * 0.05;
    }
  });

  return (
    <group ref={meshRef}>
      <Torus args={[0.1, 0.03, 8, 16]} rotation={[Math.PI / 2, 0, 0]}>
        <meshPhongMaterial color={color} emissive={color} emissiveIntensity={0.2} />
      </Torus>
      <Text
        position={[0, 0, 0]}
        fontSize={0.08}
        color={color}
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter.woff"
        maxWidth={1}
      >
        {text}
      </Text>
    </group>
  );
}

// Central pedestal
function Pedestal() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -0.5, 0]}>
      <cylinderGeometry args={[0.8, 1, 0.3, 16]} />
      <meshPhongMaterial color="#F9F9F9" />
    </mesh>
  );
}

function Scene() {
  const avatars = useMemo(() => [
    { position: [2, 0, 0] as [number, number, number], color: '#FFE600' },
    { position: [-1, 0, 1.5] as [number, number, number], color: '#00D6C2' },
    { position: [-1, 0, -1.5] as [number, number, number], color: '#3083FF' },
  ], []);

  const badges = useMemo(() => [
    { position: [1.5, 1, 1.5] as [number, number, number], text: 'Confidence', color: '#3083FF' },
    { position: [-1.5, 1, 1] as [number, number, number], text: 'Creativity', color: '#FFE600' },
    { position: [0, 1.5, -1.5] as [number, number, number], text: 'Leadership', color: '#00D6C2' },
  ], []);

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.6} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#00D6C2" />
      
      {/* Central pedestal */}
      <Pedestal />
      
      {/* Avatars */}
      {avatars.map((avatar, index) => (
        <Avatar key={index} position={avatar.position} color={avatar.color} />
      ))}
      
      {/* Badges */}
      {badges.map((badge, index) => (
        <Badge key={index} position={badge.position} text={badge.text} color={badge.color} />
      ))}
      
      {/* Controls for interaction */}
      <OrbitControls 
        enablePan={false} 
        enableZoom={false} 
        maxPolarAngle={Math.PI / 2} 
        minPolarAngle={Math.PI / 4}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden">
      <Canvas
        camera={{ position: [0, 2, 5], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
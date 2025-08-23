'use client';

import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Torus, Box, Plane } from '@react-three/drei';
import * as THREE from 'three';
import Image from 'next/image';

// Student photo badge component  
function StudentBadge({ position, imageSrc, altText, color }: { 
  position: [number, number, number]; 
  imageSrc: string; 
  altText: string; 
  color: string; 
}) {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Orbital rotation
      const time = state.clock.getElapsedTime() * 0.08;
      meshRef.current.position.x = position[0] * Math.cos(time);
      meshRef.current.position.z = position[2] * Math.sin(time);
      meshRef.current.position.y = position[1] + Math.sin(time * 2) * 0.05; // Gentle bobbing
      
      // Face the camera
      meshRef.current.lookAt(0, meshRef.current.position.y, 5);
    }
  });

  return (
    <group 
      ref={meshRef}
      userData={{ altText }} // Store alt text for accessibility
    >
      {/* Luminous frame/badge */}
      <Torus args={[0.35, 0.05, 8, 16]} position={[0, 0, 0]}>
        <meshPhongMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.3}
        />
      </Torus>
      
      {/* Photo billboard placeholder with gradient */}
      <Plane args={[0.6, 0.6]} position={[0, 0, 0.01]}>
        <meshPhongMaterial 
          color={color}
          emissive={color}
          emissiveIntensity={0.05}
          transparent
          opacity={0.8}
        />
      </Plane>
      
      {/* Small indicator of photo content */}
      <Box args={[0.1, 0.1, 0.02]} position={[0, 0.1, 0.02]}>
        <meshPhongMaterial color="#F9F9F9" />
      </Box>
      <Box args={[0.15, 0.05, 0.02]} position={[0, -0.1, 0.02]}>
        <meshPhongMaterial color="#F9F9F9" />
      </Box>
      
      {/* Subtle glow effect behind */}
      <Plane args={[0.8, 0.8]} position={[0, 0, -0.05]}>
        <meshBasicMaterial 
          color={color} 
          transparent 
          opacity={0.2}
        />
      </Plane>
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
        maxWidth={1}
      >
        {text}
      </Text>
    </group>
  );
}

// 3D Myversity M Logo
function MyversityLogo() {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={meshRef} position={[0, 0, 0]}>
      {/* Left pillar of M */}
      <Box args={[0.15, 1.2, 0.15]} position={[-0.4, 0, 0]}>
        <meshPhysicalMaterial 
          color="#00D6C2" 
          metalness={0.1}
          roughness={0.1}
          transmission={0.7}
          thickness={0.2}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
        />
      </Box>
      
      {/* Right pillar of M */}
      <Box args={[0.15, 1.2, 0.15]} position={[0.4, 0, 0]}>
        <meshPhysicalMaterial 
          color="#00D6C2" 
          metalness={0.1}
          roughness={0.1}
          transmission={0.7}
          thickness={0.2}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
        />
      </Box>
      
      {/* Left diagonal of M */}
      <Box args={[0.1, 0.7, 0.1]} position={[-0.2, 0.15, 0]} rotation={[0, 0, Math.PI / 6]}>
        <meshPhysicalMaterial 
          color="#00D6C2" 
          metalness={0.1}
          roughness={0.1}
          transmission={0.7}
          thickness={0.2}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
        />
      </Box>
      
      {/* Right diagonal of M */}
      <Box args={[0.1, 0.7, 0.1]} position={[0.2, 0.15, 0]} rotation={[0, 0, -Math.PI / 6]}>
        <meshPhysicalMaterial 
          color="#00D6C2" 
          metalness={0.1}
          roughness={0.1}
          transmission={0.7}
          thickness={0.2}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
        />
      </Box>
    </group>
  );
}

function Scene() {
  const studentBadges = useMemo(() => [
    { 
      position: [2.5, 0.5, 0] as [number, number, number], 
      color: '#FFE600',
      imageSrc: '/images/students-session.svg',
      altText: 'Students in a Myversity session'
    },
    { 
      position: [-1.2, 0.8, 2] as [number, number, number], 
      color: '#00D6C2',
      imageSrc: '/images/student-mentor.svg',
      altText: 'Student reading with a mentor'
    },
    { 
      position: [-1.2, 0.3, -2] as [number, number, number], 
      color: '#3083FF',
      imageSrc: '/images/student-desk.svg',
      altText: 'Student working at a desk'
    },
  ], []);

  const badges = useMemo(() => [
    { position: [1.5, 1.8, 1.5] as [number, number, number], text: 'Confidence', color: '#3083FF' },
    { position: [-1.5, 1.5, 1] as [number, number, number], text: 'Creativity', color: '#FFE600' },
    { position: [0, 2, -1.5] as [number, number, number], text: 'Leadership', color: '#00D6C2' },
  ], []);

  return (
    <>
      {/* Enhanced lighting for glassy effects */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.4} color="#00D6C2" />
      <pointLight position={[0, 5, 0]} intensity={0.5} color="#FFE600" />
      <spotLight 
        position={[0, 0, 5]} 
        intensity={0.6} 
        color="#00D6C2"
        angle={Math.PI / 6}
        penumbra={0.5}
      />
      
      {/* Central Myversity M Logo */}
      <MyversityLogo />
      
      {/* Student Photo Badges */}
      {studentBadges.map((badge, index) => (
        <StudentBadge 
          key={index} 
          position={badge.position} 
          imageSrc={badge.imageSrc}
          altText={badge.altText}
          color={badge.color} 
        />
      ))}
      
      {/* Text Badges */}
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
        autoRotateSpeed={0.3}
      />
    </>
  );
}

export default function Scene3D() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      // More specific mobile detection - only consider actual mobile devices
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const isSmallScreen = window.innerWidth < 640; // Only very small screens
      setIsMobile(isMobileDevice && isSmallScreen);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile fallback with static poster
  if (isMobile) {
    return (
      <div className="w-full h-full rounded-xl overflow-hidden relative">
        <Image
          src="/images/hero-poster.svg"
          alt="Myversity 3D logo with student badges showing confidence, creativity, and leadership"
          fill
          className="object-cover"
          priority
        />
      </div>
    );
  }

  return (
    <div 
      className="w-full h-full rounded-xl overflow-hidden"
      role="img"
      aria-label="Interactive 3D scene featuring Myversity logo with orbiting student photo badges"
    >
      <Canvas
        camera={{ position: [0, 2, 5], fov: 45 }}
        style={{ background: 'transparent' }}
        aria-hidden="true"
      >
        <Scene />
      </Canvas>
    </div>
  );
}
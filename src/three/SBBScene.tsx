import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Procedural floating glowing embers
const Embers: React.FC<{ count?: number }> = ({ count = 600 }) => {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const gold = new THREE.Color('#e5a93c');
    const red = new THREE.Color('#e50914');

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;

      const mixed = Math.random() > 0.4 ? gold : red;
      col[i * 3] = mixed.r;
      col[i * 3 + 1] = mixed.g;
      col[i * 3 + 2] = mixed.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.08;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

// Holographic Energy Rings
const HologramRings: React.FC = () => {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const ring3 = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ring1.current) ring1.current.rotation.z += delta * 0.35;
    if (ring2.current) {
      ring2.current.rotation.x += delta * 0.2;
      ring2.current.rotation.y += delta * 0.3;
    }
    if (ring3.current) {
      ring3.current.rotation.y -= delta * 0.25;
      ring3.current.rotation.z -= delta * 0.15;
    }
  });

  return (
    <group>
      {/* Outer Gold Energy Ring */}
      <mesh ref={ring1}>
        <torusGeometry args={[3.2, 0.03, 16, 100]} />
        <meshStandardMaterial
          color="#e5a93c"
          emissive="#e5a93c"
          emissiveIntensity={1.2}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Middle Crimson Energy Ring */}
      <mesh ref={ring2} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.7, 0.025, 16, 80]} />
        <meshStandardMaterial
          color="#e50914"
          emissive="#e50914"
          emissiveIntensity={1.5}
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>

      {/* Inner Tech Ring */}
      <mesh ref={ring3} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[2.2, 0.02, 16, 60]} />
        <meshStandardMaterial
          color="#d1d9e6"
          emissive="#ffffff"
          emissiveIntensity={0.8}
          roughness={0.1}
          metalness={1.0}
        />
      </mesh>
    </group>
  );
};

// Central 3D Cyber Emblem / Shield Core
const CyberCore: React.FC = () => {
  const coreRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (coreRef.current) {
      const t = state.clock.getElapsedTime();
      coreRef.current.rotation.y = Math.sin(t * 0.5) * 0.3;
      coreRef.current.rotation.x = Math.cos(t * 0.4) * 0.15;
    }
  });

  return (
    <group ref={coreRef}>
      {/* Central Gemstone / Core */}
      <mesh>
        <octahedronGeometry args={[1.1, 0]} />
        <meshStandardMaterial
          color="#aa1119"
          emissive="#e50914"
          emissiveIntensity={0.8}
          roughness={0.1}
          metalness={0.9}
          wireframe={false}
        />
      </mesh>

      {/* Metallic Wireframe Cage */}
      <mesh>
        <octahedronGeometry args={[1.35, 1]} />
        <meshStandardMaterial
          color="#e5a93c"
          emissive="#e5a93c"
          emissiveIntensity={0.5}
          wireframe
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>

      {/* Flanking Satellite Tech Nodes */}
      {[-2, 2].map((x, i) => (
        <group key={i} position={[x, 0, 0]}>
          <mesh>
            <boxGeometry args={[0.3, 0.8, 0.3]} />
            <meshStandardMaterial
              color="#1a202c"
              emissive="#e5a93c"
              emissiveIntensity={0.6}
              metalness={0.9}
              roughness={0.2}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
};

export const SBBScene: React.FC = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '520px',
        overflow: 'hidden',
        background: 'transparent',
        borderTop: '1px solid rgba(229, 169, 60, 0.15)',
        borderBottom: '1px solid rgba(229, 169, 60, 0.15)',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffd56b" />
        <pointLight position={[-10, -10, -10]} intensity={1.2} color="#e50914" />
        <spotLight position={[0, 8, 4]} intensity={2.0} color="#ffffff" angle={0.4} />

        <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
          <CyberCore />
          <HologramRings />
        </Float>

        <Embers count={isMobile ? 250 : 650} />
      </Canvas>

      {/* Cyber Overlay Banner */}
      <div
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '8px 20px',
          background: 'rgba(10, 12, 18, 0.85)',
          border: '1px solid rgba(229, 169, 60, 0.3)',
          borderRadius: '20px',
          backdropFilter: 'blur(8px)',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#00e5ff',
            boxShadow: '0 0 8px #00e5ff',
          }}
        />
        <span
          className="font-rajdhani"
          style={{
            fontSize: '0.85rem',
            letterSpacing: '0.2em',
            color: 'var(--metallic-silver)',
            textTransform: 'uppercase',
          }}
        >
          REAL-TIME 3D QUANTUM CORE • INTERACTIVE
        </span>
      </div>
    </div>
  );
};

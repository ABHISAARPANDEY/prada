"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

interface Real3DProductProps {
  product: "bag" | "shoes" | "sunglasses" | "wallet" | "watch";
  className?: string;
  autoRotate?: boolean;
}

// Simple camera rotation for auto-rotate
function CameraController({ autoRotate }: { autoRotate: boolean }) {
  const { camera } = useThree();
  const angleRef = useRef(0);

  useFrame(() => {
    if (autoRotate) {
      angleRef.current += 0.005;
      const radius = 5;
      camera.position.x = Math.sin(angleRef.current) * radius;
      camera.position.z = Math.cos(angleRef.current) * radius;
      camera.lookAt(0, 0, 0);
    }
  });

  return null;
}

// Model components
function BagModel({ rotationSpeed = 0.01 }: { rotationSpeed?: number }) {
  const meshRef = useRef<any>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[2, 2.5, 0.8]} />
        <meshStandardMaterial color="#0B0B0B" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, 1.5, 0]} castShadow rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.3, 0.05, 16, 32]} />
        <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, -0.5, 0.41]} castShadow>
        <boxGeometry args={[0.8, 0.3, 0.02]} />
        <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}

function ShoesModel({ rotationSpeed = 0.01 }: { rotationSpeed?: number }) {
  const meshRef = useRef<any>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <group ref={meshRef}>
      <mesh position={[-0.5, 0, 0]} castShadow>
        <boxGeometry args={[1.2, 0.4, 0.6]} />
        <meshStandardMaterial color="#0B0B0B" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[0.5, 0, 0]} castShadow>
        <boxGeometry args={[1.2, 0.4, 0.6]} />
        <meshStandardMaterial color="#0B0B0B" metalness={0.7} roughness={0.3} />
      </mesh>
    </group>
  );
}

function SunglassesModel({ rotationSpeed = 0.01 }: { rotationSpeed?: number }) {
  const meshRef = useRef<any>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <group ref={meshRef}>
      <mesh position={[-0.3, 0, 0]} castShadow>
        <boxGeometry args={[0.4, 0.3, 0.05]} />
        <meshStandardMaterial color="#0B0B0B" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0.3, 0, 0]} castShadow>
        <boxGeometry args={[0.4, 0.3, 0.05]} />
        <meshStandardMaterial color="#0B0B0B" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[0.6, 0.05, 0.02]} />
        <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}

function WalletModel({ rotationSpeed = 0.01 }: { rotationSpeed?: number }) {
  const meshRef = useRef<any>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} castShadow>
      <boxGeometry args={[1.2, 1.6, 0.1]} />
      <meshStandardMaterial color="#0B0B0B" metalness={0.8} roughness={0.2} />
    </mesh>
  );
}

function WatchModel({ rotationSpeed = 0.01 }: { rotationSpeed?: number }) {
  const meshRef = useRef<any>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <group ref={meshRef}>
      <mesh position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
        <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, 0, 0.11]} castShadow>
        <cylinderGeometry args={[0.35, 0.35, 0.02, 32]} />
        <meshStandardMaterial color="#0B0B0B" />
      </mesh>
    </group>
  );
}

const productModels: Record<string, any> = {
  bag: BagModel,
  shoes: ShoesModel,
  sunglasses: SunglassesModel,
  wallet: WalletModel,
  watch: WatchModel,
};

export default function Real3DProduct({
  product,
  className = "",
  autoRotate = true,
}: Real3DProductProps) {
  const ModelComponent = productModels[product];

  return (
    <div className={`relative w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [5, 5, 5], fov: 50 }}
        shadows
        className="rounded-lg"
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />
          <spotLight
            position={[0, 10, 0]}
            angle={0.3}
            penumbra={1}
            intensity={1}
            castShadow
          />
          <ModelComponent rotationSpeed={autoRotate ? 0.01 : 0} />
          <CameraController autoRotate={autoRotate} />
        </Suspense>
      </Canvas>
    </div>
  );
}

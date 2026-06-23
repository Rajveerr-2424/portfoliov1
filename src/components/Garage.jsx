import { Text } from "@react-three/drei";

export default function Garage() {
  return (
    <group>

      {/* ===== OUTER PLATFORM ===== */}
      <mesh position={[0, 0.25, 0]}>
        <cylinderGeometry args={[15, 15, 0.5, 64]} />
        <meshStandardMaterial color="#0a0a0a" />
      </mesh>

      {/* ===== MIDDLE PLATFORM ===== */}
      <mesh position={[0, 0.55, 0]}>
        <cylinderGeometry args={[11, 11, 0.2, 64]} />
        <meshStandardMaterial color="#151515" />
      </mesh>

      {/* ===== OUTER ENERGY RING ===== */}
      <mesh
        position={[0, 0.65, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <torusGeometry args={[10, 0.15, 16, 100]} />
        <meshStandardMaterial
          color="#00D4FF"
          emissive="#00D4FF"
          emissiveIntensity={3}
        />
      </mesh>

      {/* ===== INNER ENERGY RING ===== */}
      <mesh
        position={[0, 0.7, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <torusGeometry args={[5.5, 0.12, 16, 100]} />
        <meshStandardMaterial
          color="#00D4FF"
          emissive="#00D4FF"
          emissiveIntensity={2}
        />
      </mesh>

      {/* ===== CENTRAL MONUMENT ===== */}
      <mesh position={[0, 2.1, 0]}>
        <coneGeometry args={[2.5, 4, 4]} />
        <meshStandardMaterial
          color="#00D4FF"
          emissive="#00D4FF"
          emissiveIntensity={2}
        />
      </mesh>

      {/* ===== MONUMENT BASE ===== */}
      <mesh position={[0, 1.1, 0]}>
        <cylinderGeometry args={[3.2, 3.8, 1.2, 4]} />
        <meshStandardMaterial
          color="#111111"
        />
      </mesh>

      {/* ===== BIKE LAUNCH PAD ===== */}
      <mesh position={[0, 0.82, 4]}>
        <boxGeometry args={[3.5, 0.08, 2]} />
        <meshStandardMaterial
          color="#00D4FF"
          emissive="#00D4FF"
          emissiveIntensity={3}
        />
      </mesh>

      {/* ===== TITLE ===== */}
      <Text
        position={[0, 5.5, 0]}
        fontSize={1}
        anchorX="center"
        color="#ffffff"
      >
        RAJVEERR'S ARENA
      </Text>

    </group>
  );
}
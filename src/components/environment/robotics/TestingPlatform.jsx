export default function TestingPlatform() {
  return (
    <group position={[-85,0.2,-3]}>

      {/* Platform */}

      <mesh>
        <cylinderGeometry args={[2.2, 2.5, 0.4, 32]} />
        <meshStandardMaterial
          color="#2b2b2b"
          metalness={0.9}
        />
      </mesh>

      {/* Inner Ring */}

      <mesh position={[0, 0.21, 0]}>
        <cylinderGeometry args={[1.5, 1.5, 0.05, 32]} />
        <meshStandardMaterial
          color="#bb6400"
          emissive="#bb6400"
          emissiveIntensity={3}
        />
      </mesh>

      {/* Scan Pad */}

      <mesh position={[0, 0.26, 0]}>
        <cylinderGeometry args={[0.75, 0.75, 0.02, 32]} />
        <meshStandardMaterial
          color="#88ffff"
          emissive="#88ffff"
          emissiveIntensity={4}
        />
      </mesh>

    </group>
  );
}
export default function RobotCrate({
  position = [0, 0, 0],
}) {
  return (
    <group position={position}>

      {/* Main Body */}

      <mesh>
        <boxGeometry args={[1.4, 1.2, 1.4]} />

        <meshStandardMaterial
          color="#444444"
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>

      {/* Top Glow */}

      <mesh position={[0,0.63,0]}>
        <boxGeometry args={[1.42,0.05,1.42]} />

        <meshStandardMaterial
          color="#FF8800"
          emissive="#FF8800"
          emissiveIntensity={4}
        />
      </mesh>

      {/* Front Strip */}

      <mesh position={[0,0,0.72]}>
        <boxGeometry args={[0.8,0.18,0.05]} />

        <meshStandardMaterial
          color="#FFAA33"
          emissive="#FFAA33"
          emissiveIntensity={6}
        />
      </mesh>

    </group>
  );
}
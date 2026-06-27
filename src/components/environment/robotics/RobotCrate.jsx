export default function RobotCrate({
  position = [0, 0, 0],
}) {
  return (
    <group position={position}>
      {/* Main Crate */}
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#444444"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      {/* Top Glow */}
      <mesh position={[0, 0.52, 0]}>
        <boxGeometry args={[1.02, 0.05, 1.02]} />
        <meshStandardMaterial
          color="#FF8800"
          emissive="#FF8800"
          emissiveIntensity={3}
        />
      </mesh>

      {/* Front Glow Strip */}
      <mesh position={[0, 0, 0.52]}>
        <boxGeometry args={[0.6, 0.15, 0.04]} />
        <meshStandardMaterial
          color="#FFAA33"
          emissive="#FFAA33"
          emissiveIntensity={5}
        />
      </mesh>
    </group>
  );
}
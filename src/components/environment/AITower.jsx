export default function AITower() {
  return (
    <group position={[0, 0, -105]}>
      {/* Base */}
      <mesh position={[0, 2, 0]}>
        <boxGeometry args={[12, 4, 12]} />
        <meshStandardMaterial color="#101820" />
      </mesh>

      {/* Tower */}
      <mesh position={[0, 5, 0]}>
        <boxGeometry args={[4, 5, 4]} />
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={2}
        />
      </mesh>
    </group>
  );
}
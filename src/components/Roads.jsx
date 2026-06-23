export default function Roads() {
  return (
    <group>
      {/* Horizontal Road */}
      <mesh position={[0, 0.08, 0]}>
  <boxGeometry args={[160, 0.03, 0.15]} />
  <meshStandardMaterial
    color="#00D4FF"
    emissive="#00D4FF"
    emissiveIntensity={2}
  />
</mesh>

      {/* Vertical Road */}
      <mesh position={[0, 0.08, 0]}>
  <boxGeometry args={[0.15, 0.03, 160]} />
  <meshStandardMaterial
    color="#00D4FF"
    emissive="#00D4FF"
    emissiveIntensity={2}
  />
</mesh>
    </group>
  );
}
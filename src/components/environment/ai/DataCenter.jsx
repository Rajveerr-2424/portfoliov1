export default function DataCenter() {
  return (
    <group position={[-20, 0, -92]}>

      {/* Rack 1 */}
      <mesh position={[-2, 3, 0]}>
        <boxGeometry args={[2, 6, 2]} />
        <meshStandardMaterial
          color="#111111"
          emissive="#00D4FF"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Rack 2 */}
      <mesh position={[1, 4, 0]}>
        <boxGeometry args={[2, 8, 2]} />
        <meshStandardMaterial
          color="#111111"
          emissive="#00D4FF"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Rack 3 */}
      <mesh position={[4, 3.5, 0]}>
        <boxGeometry args={[2, 7, 2]} />
        <meshStandardMaterial
          color="#111111"
          emissive="#00D4FF"
          emissiveIntensity={0.2}
        />
      </mesh>

    </group>
  );
}
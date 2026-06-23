export default function WorldBoundary() {
  return (
    <group>
      {/* North */}
      <mesh position={[0, 2, -200]}>
        <boxGeometry args={[400, 4, 1]} />
        <meshStandardMaterial
  color="black"
  transparent
  opacity={0.3}
/>
      </mesh>

      {/* South */}
      <mesh position={[0, 2, 200]}>
        <boxGeometry args={[400, 4, 1]} />
        <meshStandardMaterial
  color="black"
  transparent
  opacity={0.3}
/>
      </mesh>

      {/* East */}
      <mesh position={[200, 2, 0]}>
        <boxGeometry args={[1, 4, 400]} />
        <meshStandardMaterial
  color="black"
  transparent
  opacity={0.3}
/>
      </mesh>

      {/* West */}
      <mesh position={[-200, 2, 0]}>
        <boxGeometry args={[1, 4, 400]} />
        <meshStandardMaterial
  color="black"
  transparent
  opacity={0.3}
/>
      </mesh>
    </group>
  );
}
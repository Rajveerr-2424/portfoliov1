export default function IndustrialDoor({
  position = [0, 0, 0],
}) {
  return (
    <group position={position}>

      <mesh>
        <boxGeometry args={[5, 5, 0.2]} />

        <meshStandardMaterial
          color="#151515"
          metalness={0.8}
        />
      </mesh>

      <mesh position={[0, 2.6, 0.12]}>
        <boxGeometry args={[5.2, 0.15, 0.05]} />

        <meshStandardMaterial
          color="#FF8800"
          emissive="#FF8800"
          emissiveIntensity={4}
        />
      </mesh>

    </group>
  );
}

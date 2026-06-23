export default function ProjectPod({
  position,
}) {
  return (
    <group position={position}>

      <mesh position={[0, 1.5, 0]}>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial
          color="#111111"
          emissive="#00D4FF"
          emissiveIntensity={0.2}
        />
      </mesh>

    </group>
  );
}
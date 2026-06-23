export default function NeuralLab() {
  return (
    <group position={[20, 0, -92]}>

      <mesh position={[0, 3, 0]}>
        <boxGeometry args={[4, 6, 4]} />
        <meshStandardMaterial
          color="#111111"
          emissive="#00D4FF"
          emissiveIntensity={0.3}
        />
      </mesh>

      <mesh position={[0, 7, 0]}>
        <boxGeometry args={[3, 2, 3]} />
        <meshStandardMaterial
          color="#00D4FF"
          emissive="#00D4FF"
          emissiveIntensity={3}
        />
      </mesh>

      <mesh position={[0, 9, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          color="#00D4FF"
          emissive="#00D4FF"
          emissiveIntensity={5}
        />
      </mesh>

    </group>
  );
}
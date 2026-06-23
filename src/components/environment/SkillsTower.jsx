export default function SkillsTower() {
  return (
    <group position={[105, 0, 0]}>
      <mesh position={[0, 2, 0]}>
        <boxGeometry args={[14, 4, 14]} />
        <meshStandardMaterial color="#181818" />
      </mesh>

      <mesh position={[0, 14, 0]}>
        <boxGeometry args={[6, 24, 6]} />
        <meshStandardMaterial
          color="#00ff88"
          emissive="#00ff88"
          emissiveIntensity={1.5}
        />
      </mesh>
    </group>
  );
}
export default function ContactTerminal() {
  return (
    <group position={[0, 0, 105]}>
      <mesh position={[0, 2, 0]}>
        <boxGeometry args={[16, 4, 16]} />
        <meshStandardMaterial color="#181818" />
      </mesh>

      <mesh position={[0, 8, 0]}>
        <boxGeometry args={[10, 8, 2]} />
        <meshStandardMaterial
          color="#ff00aa"
          emissive="#ff00aa"
          emissiveIntensity={2}
        />
      </mesh>
    </group>
  );
}
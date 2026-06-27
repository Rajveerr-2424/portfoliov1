export default function WarningLight({
  position = [0, 0, 0],
}) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.2, 16, 16]} />

      <meshStandardMaterial
        color="#FF8800"
        emissive="#FF8800"
        emissiveIntensity={8}
      />
    </mesh>
  );
}
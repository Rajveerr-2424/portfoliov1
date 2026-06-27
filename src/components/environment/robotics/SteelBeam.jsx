export default function SteelBeam({
  position = [0, 0, 0],
  height = 8,
}) {
  return (
    <mesh position={position}>
      <boxGeometry args={[0.5, height, 0.5]} />

      <meshStandardMaterial
        color="#666666"
        metalness={1}
        roughness={0.25}
      />
    </mesh>
  );
}
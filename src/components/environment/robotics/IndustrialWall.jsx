export default function IndustrialWall({
  width = 4,
  height = 4,
  depth = 0.4,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}) {
  return (
    <mesh
      position={position}
      rotation={rotation}
    >
      <boxGeometry
        args={[width, height, depth]}
      />

      <meshStandardMaterial
        color="#2B2B2B"
        metalness={0.8}
        roughness={0.4}
      />
    </mesh>
  );
}
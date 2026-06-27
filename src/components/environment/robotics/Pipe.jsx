export default function Pipe({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  length = 6,
}) {
  return (
    <mesh
      position={position}
      rotation={rotation}
    >
      <cylinderGeometry
        args={[0.15, 0.15, length, 16]}
      />

      <meshStandardMaterial
        color="#7A7A7A"
        metalness={1}
        roughness={0.2}
      />
    </mesh>
  );
}
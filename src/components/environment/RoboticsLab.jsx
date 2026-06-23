export default function RoboticsLab() {
  return (
    <group position={[-105, 0, 0]}>
      {/* Base */}
      <mesh position={[0, 2, 0]}>
        <boxGeometry args={[14, 4, 14]} />
        <meshStandardMaterial color="#181818" />
      </mesh>

      {/* Main Factory */}
      <mesh position={[0, 8, 0]}>
        <boxGeometry args={[10, 8, 10]} />
        <meshStandardMaterial
          color="#ff7b00"
          emissive="#ff7b00"
          emissiveIntensity={1.5}
        />
      </mesh>

      {/* Chimney */}
      <mesh position={[4, 15, 0]}>
        <cylinderGeometry args={[1, 1, 10]} />
        <meshStandardMaterial color="#666" />
      </mesh>
    </group>
  );
}
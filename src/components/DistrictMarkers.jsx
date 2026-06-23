export default function DistrictMarkers() {
  return (
    <group>
      {/* AI District */}
      <mesh position={[0, 1, -40]}>
        <boxGeometry args={[8, 2, 8]} />
        <meshStandardMaterial color="cyan" />
      </mesh>

      {/* Robotics */}
      <mesh position={[-40, 1, 0]}>
        <boxGeometry args={[8, 2, 8]} />
        <meshStandardMaterial color="orange" />
      </mesh>

      {/* Skills */}
      <mesh position={[40, 1, 0]}>
        <boxGeometry args={[8, 2, 8]} />
        <meshStandardMaterial color="lime" />
      </mesh>

      {/* Contact */}
      <mesh position={[0, 1, 40]}>
        <boxGeometry args={[8, 2, 8]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </group>
  );
}
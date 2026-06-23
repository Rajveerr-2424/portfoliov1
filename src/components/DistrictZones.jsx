export default function DistrictZones() {
  return (
    <group>

      {/* AI DISTRICT */}
      <mesh position={[0, 0.02, -75]}>
        <cylinderGeometry args={[18, 18, 0.05, 32]} />
        <meshStandardMaterial
          color="#00D4FF"
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* ROBOTICS DISTRICT */}
      <mesh position={[-75, 0.02, 0]}>
        <cylinderGeometry args={[18, 18, 0.05, 32]} />
        <meshStandardMaterial
          color="#ff8800"
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* SKILLS DISTRICT */}
      <mesh position={[75, 0.02, 0]}>
        <cylinderGeometry args={[18, 18, 0.05, 32]} />
        <meshStandardMaterial
          color="#00ff88"
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* CONTACT DISTRICT */}
      <mesh position={[0, 0.02, 75]}>
        <cylinderGeometry args={[18, 18, 0.05, 32]} />
        <meshStandardMaterial
          color="#ff00ff"
          transparent
          opacity={0.25}
        />
      </mesh>

    </group>
  );
}
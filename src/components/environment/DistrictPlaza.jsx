import * as THREE from "three";

export default function DistrictPlaza({
  position,
  color,
  rotationY = 0,
}) {
  return (
    <group position={position}>

      {/* ===== MAIN PLAZA ===== */}
      <mesh position={[0, 0.04, 0]}>
        <cylinderGeometry args={[7, 7, 0.08, 64]} />
        <meshStandardMaterial color="#111111" />
      </mesh>

      {/* ===== OUTER PLAZA RING ===== */}
      <mesh position={[0, 0.08, 0]}>
        <cylinderGeometry args={[7.5, 7.5, 0.02, 64]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={3}
        />
      </mesh>

      {/* ===== INNER PLAZA RING ===== */}
      <mesh position={[0, 0.09, 0]}>
        <cylinderGeometry args={[6, 6, 0.02, 64]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={2}
        />
      </mesh>

      {/* ===== DISTRICT BOUNDARY ===== */}
      <mesh
        position={[0, 0.06, 0]}
        rotation={[-Math.PI / 2, 0, rotationY+Math.PI]}
      >
        <ringGeometry
          args={[
            44.5,                // inner radius
            45,                // outer radius
            128,               // segments
            1,
            THREE.MathUtils.degToRad(20),
            THREE.MathUtils.degToRad(320)
          ]}
        />

        <meshBasicMaterial
          color={color}
          side={THREE.DoubleSide}
        />
      </mesh>

    </group>
  );
}
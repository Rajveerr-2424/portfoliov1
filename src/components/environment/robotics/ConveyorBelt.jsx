import RobotCrate from "./RobotCrate";

export default function ConveyorBelt() {
  return (
    <group position={[-85, 0.8, -20]}>

      {/* Belt Base */}
      <mesh position={[0, 0.25, 0]}>
        <boxGeometry args={[5, 0.5, 28]} />
        <meshStandardMaterial color="#222222" />
      </mesh>

      {/* Belt Surface */}
      <mesh position={[0, 0.55, 0]}>
        <boxGeometry args={[2.6, 0.08, 24]} />
        <meshStandardMaterial color="#111111" />
      </mesh>

      {/* Left Rail */}
      <mesh position={[-1.35, 0.7, 0]}>
        <boxGeometry args={[0.1, 0.25, 24]} />
        <meshStandardMaterial color="#777777" />
      </mesh>

      {/* Right Rail */}
      <mesh position={[1.35, 0.7, 0]}>
        <boxGeometry args={[0.1, 0.25, 24]} />
        <meshStandardMaterial color="#777777" />
      </mesh>

      {/* Rollers */}
      <mesh position={[0, 0.4, -11.5]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.22, 0.22, 3, 24]} />
        <meshStandardMaterial color="#666666" />
      </mesh>

      <mesh position={[0, 0.4, 11.5]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.22, 0.22, 3, 24]} />
        <meshStandardMaterial color="#666666" />
      </mesh>

      {/* Crates */}
      <RobotCrate position={[0, 1.05, -7]} />
      <RobotCrate position={[0, 1.05, 0]} />
      <RobotCrate position={[0, 1.05, 7]} />

    </group>
  );
}
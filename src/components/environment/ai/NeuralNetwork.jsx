export default function NeuralNetwork() {
  const lineMaterial = (
    <meshStandardMaterial
      color="#00D4FF"
      emissive="#00D4FF"
      emissiveIntensity={8}
    />
  );

  return (
    <group>

      {/* Center Hub */}
      <mesh position={[0, 0.03, -85]}>
        <cylinderGeometry
          args={[2.2, 2.2, 0.08, 32]}
        />
        {lineMaterial}
      </mesh>

      {/* Left Circuit */}
      <mesh
        position={[-11, 0.03, -88]}
        rotation={[0, -0.5, 0]}
      >
        <boxGeometry
          args={[15, 0.05, 0.3]}
        />
        {lineMaterial}
      </mesh>

      {/* Right Circuit */}
      <mesh
        position={[6, 0.03, -85]}
        rotation={[0, 0.5, 0]}
      >
        <boxGeometry
          args={[10, 0.05, 0.8]}
        />
        {lineMaterial}
      </mesh>

      {/* Up */}
      <mesh
        position={[0, 0.03, -92]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <boxGeometry
          args={[14, 0.05, 0.8]}
        />
        {lineMaterial}
      </mesh>

      {/* Down */}
      <mesh
        position={[0, 0.03, -78]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <boxGeometry
          args={[14, 0.05, 0.8]}
        />
        {lineMaterial}
      </mesh>

      {/* Diagonal Left */}
      <mesh
        position={[-8, 0.03, -80]}
        rotation={[0, 0.7, 0]}
      >
        <boxGeometry
          args={[29, 0.05, 0.3]}
        />
        {lineMaterial}
      </mesh>

      {/* Diagonal Right */}
      <mesh
        position={[5, 0.03, -80]}
        rotation={[0, -0.6, 0]}
      >
        <boxGeometry
          args={[8, 0.05, 0.8]}
        />
        {lineMaterial}
      </mesh>

    </group>
  );
}
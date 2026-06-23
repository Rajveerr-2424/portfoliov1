function Barrier({ position, rotation = [0, 0, 0] }) {
  return (
    <group position={position} rotation={rotation}>
      <mesh>
        <boxGeometry args={[4, 1, 0.4]} />
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={2}
        />
      </mesh>
    </group>
  );
}

export default function NeonBarriers() {
  return (
    <>
      <Barrier position={[20, 0.5, 6]} />
      <Barrier position={[-20, 0.5, 6]} />

      <Barrier position={[20, 0.5, -6]} />
      <Barrier position={[-20, 0.5, -6]} />

      <Barrier
        position={[6, 0.5, 20]}
        rotation={[0, Math.PI / 2, 0]}
      />

      <Barrier
        position={[-6, 0.5, 20]}
        rotation={[0, Math.PI / 2, 0]}
      />

      <Barrier
        position={[6, 0.5, -20]}
        rotation={[0, Math.PI / 2, 0]}
      />

      <Barrier
        position={[-6, 0.5, -20]}
        rotation={[0, Math.PI / 2, 0]}
      />
    </>
  );
}
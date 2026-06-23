function LightPole({ position }) {
  return (
    <group position={position}>
      <mesh position={[0, 2.5, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 5]} />
        <meshStandardMaterial color="#555" />
      </mesh>

      <mesh position={[0, 5.2, 0]}>
        <sphereGeometry args={[0.3]} />
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={2}
        />
      </mesh>
    </group>
  );
}

export default function StreetLights() {
  return (
    <>
      <LightPole position={[15, 0, 6]} />
      <LightPole position={[-15, 0, 6]} />

      <LightPole position={[15, 0, -6]} />
      <LightPole position={[-15, 0, -6]} />

      <LightPole position={[6, 0, 15]} />
      <LightPole position={[6, 0, -15]} />

      <LightPole position={[-6, 0, 15]} />
      <LightPole position={[-6, 0, -15]} />
    </>
  );
}
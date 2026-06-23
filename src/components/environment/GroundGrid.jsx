export default function GroundGrid() {
  const lines = [];

  for (let i = -100; i <= 100; i += 10) {
    lines.push(
      <mesh key={`x-${i}`} position={[i, 0.01, 0]}>
        <boxGeometry args={[0.05, 0.01, 200]} />
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={0.3}
        />
      </mesh>
    );

    lines.push(
      <mesh key={`z-${i}`} position={[0, 0.01, i]}>
        <boxGeometry args={[200, 0.01, 0.05]} />
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={0.1}
        />
      </mesh>
    );
  }

  return <>{lines}</>;
}
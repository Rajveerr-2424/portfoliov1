import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function NeuralCore() {
  const coreRef = useRef();

  useFrame(({ clock }) => {
    if (!coreRef.current) return;

    coreRef.current.rotation.y += 0.01;
coreRef.current.rotation.x += 0.003;

    coreRef.current.position.y =
      4 + Math.sin(clock.elapsedTime * 2) * 0.3;
  });

  return (
    <group position={[0, 0, -85]}>

      {/* Base Platform */}
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[4, 4, 0.6, 64]} />
        <meshStandardMaterial
          color="#111111"
        />
      </mesh>

      {/* Floating Core Assembly */}
      <group ref={coreRef}>

        {/* Main Core */}
        <mesh position={[0, 4, 0]}>
          <sphereGeometry args={[2.5, 32, 32]} />
          <meshStandardMaterial
            color="#00D4FF"
            emissive="#00D4FF"
            emissiveIntensity={8}
          />
        </mesh>
        {/* Secondary Core */}
<mesh position={[0, 7, 0]}>
  <sphereGeometry args={[0.8, 32, 32]} />
  <meshStandardMaterial
    color="#ffffff"
    emissive="#00D4FF"
    emissiveIntensity={10}
  />
</mesh>

{/* Vertical Beam */}
<mesh position={[0, 5.5, 0]}>
  <cylinderGeometry args={[0.04, 0.04, 3, 16]} />
  <meshStandardMaterial
    color="#00D4FF"
    emissive="#00D4FF"
    emissiveIntensity={8}
  />
</mesh>

        {/* Ring 1 */}
        <mesh
          position={[0, 4, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <torusGeometry args={[4, 0.08, 16, 100]} />
          <meshStandardMaterial
            color="#00D4FF"
            emissive="#00D4FF"
            emissiveIntensity={2}
          />
        </mesh>

        {/* Ring 2 */}
        <mesh
          position={[0, 4, 0]}
          rotation={[0, 0, Math.PI / 4]}
        >
          <torusGeometry args={[3.4, 0.08, 16, 100]} />
          <meshStandardMaterial
            color="#00D4FF"
            emissive="#00D4FF"
            emissiveIntensity={2}
          />
        </mesh>

        {/* Ring 3 */}
        <mesh
          position={[0, 4, 0]}
          rotation={[Math.PI / 4, 0, 0]}
        >
          <torusGeometry args={[3, 0.08, 16, 100]} />
          <meshStandardMaterial
            color="#00D4FF"
            emissive="#00D4FF"
            emissiveIntensity={2}
          />
        </mesh>

      </group>

      {/* Energy Beam */}
      <mesh position={[0, 2, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 4, 16]} />
        <meshStandardMaterial
          color="#00D4FF"
          emissive="#00D4FF"
          emissiveIntensity={3}
        />
      </mesh>

    </group>
  );
}
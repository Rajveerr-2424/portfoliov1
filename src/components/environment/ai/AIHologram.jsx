import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function AIHologram() {
  const ref = useRef();

  useFrame(({ clock }) => {
    if (!ref.current) return;

    ref.current.rotation.y += 0.01;

    ref.current.position.y =
      10 + Math.sin(clock.elapsedTime * 2) * 0.5;
  });

  return (
    <group position={[0, 0, -105]}>

      <mesh ref={ref}>
        <octahedronGeometry args={[2]} />

        <meshStandardMaterial
          color="#00D4FF"
          emissive="#00D4FF"
          emissiveIntensity={8}
          wireframe
        />
      </mesh>

    </group>
  );
}
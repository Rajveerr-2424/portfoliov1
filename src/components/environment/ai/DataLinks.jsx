import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function DataLink({
  position,
  rotation,
  length,
}) {
  const matRef = useRef();

  useFrame(({ clock }) => {
    if (!matRef.current) return;

    matRef.current.emissiveIntensity =
      4 +
      Math.sin(clock.elapsedTime * 5) * 2;
  });

  return (
    <mesh
      position={position}
      rotation={rotation}
    >
      <cylinderGeometry
        args={[0.12, 0.12, length, 12]}
      />

      <meshStandardMaterial
        ref={matRef}
        color="#00D4FF"
        emissive="#00D4FF"
        emissiveIntensity={4}
      />
    </mesh>
  );
}

export default function DataLinks() {
  return (
    <group>

      <DataLink
        position={[-12, 1.5, -89]}
        rotation={[0, 0, -0.4]}
        length={11}
      />

      <DataLink
        position={[12, 1.5, -89]}
        rotation={[0, 0, 0.4]}
        length={11}
      />

      <DataLink
        position={[-11, 1.5, -77.3]}
        rotation={[0, 0.6, -0.7]}
        length={10}
      />

      <DataLink
        position={[11, 1.5, -78]}
        rotation={[0, 0, 0.7]}
        length={10}
      />

    </group>
  );
}
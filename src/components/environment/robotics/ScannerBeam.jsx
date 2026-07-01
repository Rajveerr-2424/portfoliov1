import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function ScannerBeam() {

  const beam = useRef();

  useFrame(({ clock }) => {

    beam.current.scale.y =
      0.7 + Math.sin(clock.elapsedTime * 4) * 0.3;

  });

  return (

    <mesh
      ref={beam}
      position={[-85,2,-3]}
    >

      <cylinderGeometry
        args={[1.5,1.5,3,24]}
      />

      <meshStandardMaterial

        color="#00D5FF"

        emissive="#00D5FF"

        emissiveIntensity={5}

        transparent

        opacity={0.1}

      />

    </mesh>

  );

}
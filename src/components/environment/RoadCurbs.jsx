import { useRef } from "react";
import usePulse from "./PulsingMaterial";

export default function RoadCurbs() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();

  usePulse(ref1);
  usePulse(ref2);
  usePulse(ref3);
  usePulse(ref4);

  return (
    <group>
      <mesh position={[0, 0.15, 4.5]}>
        <boxGeometry args={[160, 0.3, 0.4]} />
        <meshStandardMaterial
          ref={ref1}
          color="#00aaff"
          emissive="#00D4FF"
          emissiveIntensity={2}
        />
      </mesh>

      <mesh position={[0, 0.15, -4.5]}>
        <boxGeometry args={[160, 0.3, 0.4]} />
        <meshStandardMaterial
          ref={ref2}
          color="#00aaff"
          emissive="#00D4FF"
          emissiveIntensity={2}
        />
      </mesh>

      <mesh position={[4.5, 0.15, 0]}>
        <boxGeometry args={[0.4, 0.3, 160]} />
        <meshStandardMaterial
          ref={ref3}
          color="#00aaff"
          emissive="#00D4FF"
          emissiveIntensity={2}
        />
      </mesh>

      <mesh position={[-4.5, 0.15, 0]}>
        <boxGeometry args={[0.4, 0.3, 160]} />
        <meshStandardMaterial
          ref={ref4}
          color="#00aaff"
          emissive="#00D4FF"
          emissiveIntensity={2}
        />
      </mesh>
    </group>
  );
}
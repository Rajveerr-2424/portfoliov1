import { useRef } from "react";
import usePulse from "./PulsingMaterial";

export default function RoadMarkings() {
  const horizontalRef = useRef();
  const verticalRef = useRef();

  usePulse(horizontalRef);
  usePulse(verticalRef);

  return (
    <>
      {/* Horizontal */}
      <mesh position={[0, 0.08, 0]}>
        <boxGeometry args={[160, 0.03, 0.15]} />
        <meshStandardMaterial
          ref={horizontalRef}
          color="#5be2fd"
          emissive="#00D4FF"
          emissiveIntensity={2}
        />
      </mesh>

      {/* Vertical */}
      <mesh position={[0, 0.08, 0]}>
        <boxGeometry args={[0.15, 0.03, 160]} />
        <meshStandardMaterial
          ref={verticalRef}
          color="#5be2fd"
          emissive="#00D4FF"
          emissiveIntensity={2}
        />
      </mesh>
    </>
  );
}
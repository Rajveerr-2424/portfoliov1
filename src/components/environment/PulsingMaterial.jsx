import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function usePulse(materialRef) {
  useFrame(({ clock }) => {
    if (!materialRef.current) return;

    materialRef.current.emissiveIntensity =
      6 + Math.sin(clock.elapsedTime * 4) * 3;
  });
}
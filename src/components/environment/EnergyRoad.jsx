import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function EnergySegment({
  position,
  rotation = [0, 0, 0],
  index,
}) {
  const materialRef = useRef();

  useFrame(({ clock }) => {
    if (!materialRef.current) return;

    const time = clock.elapsedTime * 20;

    const pulseSpacing = 15;

    const distance =
      (index - time + pulseSpacing * 1000) %
      pulseSpacing;

    if (distance < 4) {
      materialRef.current.emissiveIntensity = 5;
    } else {
      materialRef.current.emissiveIntensity = 0.1;
    }
  });

  return (
    <mesh position={position} rotation={rotation}>
      <boxGeometry args={[1.8, 0.04, 0.2]} />

      <meshStandardMaterial
        ref={materialRef}
        color="#00d5ff"
        emissive="#82eaff"
        emissiveIntensity={1}
      />
    </mesh>
  );
}

export default function EnergyRoad() {
  const segments = [];

  // NORTH ROAD
  for (let z = -4, i = 0; z >= -80; z -= 1, i++) {
    segments.push(
      <EnergySegment
        key={`n-${z}`}
        position={[0, 0.08, z]}
        rotation={[0, Math.PI / 2, 0]}
        index={i}
      />
    );
  }

  // SOUTH ROAD
  for (let z = 4, i = 0; z <= 80; z += 1, i++) {
    segments.push(
      <EnergySegment
        key={`s-${z}`}
        position={[0, 0.08, z]}
        rotation={[0, Math.PI / 2, 0]}
        index={i}
      />
    );
  }

  // EAST ROAD
  for (let x = 4, i = 0; x <= 80; x += 1, i++) {
    segments.push(
      <EnergySegment
        key={`e-${x}`}
        position={[x, 0.08, 0]}
        index={i}
      />
    );
  }

  // WEST ROAD
  for (let x = -4, i = 0; x >= -80; x -= 1, i++) {
    segments.push(
      <EnergySegment
        key={`w-${x}`}
        position={[x, 0.08, 0]}
        index={i}
      />
    );
  }

  return <>{segments}</>;
}
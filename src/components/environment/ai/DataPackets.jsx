import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Packet({
  start,
  end,
  speed = 10.5,
  offset = 0,
}) {
  const ref = useRef();

  useFrame(({ clock }) => {
    if (!ref.current) return;

    const t =
      (clock.elapsedTime * speed + offset) % 1;

    ref.current.position.x =
      start[0] + (end[0] - start[0]) * t;

    ref.current.position.y =
      start[1] + (end[1] - start[1]) * t;

    ref.current.position.z =
      start[2] + (end[2] - start[2]) * t;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.18, 16, 16]} />

      <meshStandardMaterial
        color="#00D4FF"
        emissive="#00D4FF"
        emissiveIntensity={10}
      />
    </mesh>
  );
}

export default function DataPackets() {
  return (
    <group>

      {/* Data Center -> Core */}
      <Packet
        start={[-16, 2, -92]}
        end={[0, 4, -85]}
        speed={0.15}
      />

      <Packet
        start={[-16, 2, -92]}
        end={[0, 4, -85]}
        speed={0.15}
        offset={0.33}
      />

      <Packet
        start={[-16, 2, -92]}
        end={[0, 4, -85]}
        speed={0.15}
        offset={0.66}
      />

      {/* Compute Tower -> Core */}
      <Packet
        start={[18, 3, -92]}
        end={[0, 4, -85]}
        speed={0.18}
      />

      <Packet
        start={[18, 3, -92]}
        end={[0, 4, -85]}
        speed={0.18}
        offset={0.5}
      />

      {/* Left Pod -> Core */}
      <Packet
        start={[-12, 1, -72]}
        end={[0, 4, -85]}
        speed={0.12}
      />

      {/* Right Pod -> Core */}
      <Packet
        start={[12, 1, -72]}
        end={[0, 4, -85]}
        speed={0.12}
        offset={0.5}
      />

    </group>
  );
}
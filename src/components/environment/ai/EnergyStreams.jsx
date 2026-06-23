import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Stream({
  start,
  end,
  speed = 0.2,
  count = 8,
}) {
  const refs = useRef([]);

  useFrame(({ clock }) => {
    refs.current.forEach((particle, i) => {
      if (!particle) return;

      const t =
        (clock.elapsedTime * speed +
          i / count) %
        1;

      particle.position.x =
        start[0] +
        (end[0] - start[0]) * t;

      particle.position.y =
        start[1] +
        (end[1] - start[1]) * t;

      particle.position.z =
        start[2] +
        (end[2] - start[2]) * t;

      const scale =
        1 - i / count;

      particle.scale.setScalar(scale);
    });
  });

  return (
    <>
      {Array.from({ length: count }).map(
        (_, i) => (
          <mesh
            key={i}
            ref={(el) =>
              (refs.current[i] = el)
            }
          >
            <sphereGeometry
              args={[0.15, 12, 12]}
            />

            <meshStandardMaterial
              color="#00D4FF"
              emissive="#00D4FF"
              emissiveIntensity={8}
            />
          </mesh>
        )
      )}
    </>
  );
}

export default function EnergyStreams() {
  return (
    <group>

      <Stream
        start={[-16, 2, -92]}
        end={[0, 4, -85]}
      />

      <Stream
        start={[18, 3, -92]}
        end={[0, 4, -85]}
      />

      <Stream
        start={[-12, 1, -72]}
        end={[0, 4, -85]}
      />

      <Stream
        start={[12, 1, -72]}
        end={[0, 4, -85]}
      />

    </group>
  );
}
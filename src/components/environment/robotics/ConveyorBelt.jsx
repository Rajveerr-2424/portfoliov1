import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import RobotCrate from "./RobotCrate";

export default function ConveyorBelt() {
  const crates = useRef([]);
  const frontRoller = useRef();
  const backRoller = useRef();

  useFrame((_, delta) => {
    // Move crates
    crates.current.forEach((crate) => {
      if (!crate) return;

      crate.position.z += delta * 1.35;

      if (crate.position.z > 13) {
        crate.position.z = -13;
      }
    });

    // Rotate rollers
    if (frontRoller.current) {
      frontRoller.current.rotation.x += delta * 5;
    }

    if (backRoller.current) {
      backRoller.current.rotation.x += delta * 5;
    }
  });

  return (
    <group position={[-85, 0.8, -20]}>

      {/* ===================== */}
      {/* BELT BASE */}
      {/* ===================== */}

      <mesh position={[0, 0.25, 0]}>
        <boxGeometry args={[5, 0.5, 28]} />
        <meshStandardMaterial
          color="#222222"
          metalness={0.8}
          roughness={0.35}
        />
      </mesh>

      {/* ===================== */}
      {/* BELT SURFACE */}
      {/* ===================== */}

      <mesh position={[0, 0.56, 0]}>
        <boxGeometry args={[4.8, 0.08, 28]} />
        <meshStandardMaterial color="#111111" />
      </mesh>

      {/* ===================== */}
      {/* SIDE RAILS */}
      {/* ===================== */}

      <mesh position={[-2.45, 0.78, 0]}>
        <boxGeometry args={[0.12, 0.35, 28]} />
        <meshStandardMaterial color="#777777" />
      </mesh>

      <mesh position={[2.45, 0.78, 0]}>
        <boxGeometry args={[0.12, 0.35, 28]} />
        <meshStandardMaterial color="#777777" />
      </mesh>

      {/* ===================== */}
      {/* EDGE LIGHTS */}
      {/* ===================== */}

      <mesh position={[-2.30, 0.95, 0]}>
        <boxGeometry args={[0.05, 0.05, 28]} />
        <meshStandardMaterial
          color="#FF8800"
          emissive="#FF8800"
          emissiveIntensity={5}
        />
      </mesh>

      <mesh position={[2.30, 0.95, 0]}>
        <boxGeometry args={[0.05, 0.05, 28]} />
        <meshStandardMaterial
          color="#FF8800"
          emissive="#FF8800"
          emissiveIntensity={5}
        />
      </mesh>

      {/* ===================== */}
      {/* SUPPORT LEGS */}
      {/* ===================== */}

      {[-10, -5, 0, 5, 10].map((z) => (
        <group key={z}>
          <mesh position={[-2.1, -0.15, z]}>
            <boxGeometry args={[0.22, 1.5, 0.22]} />
            <meshStandardMaterial
              color="#666666"
              metalness={1}
            />
          </mesh>

          <mesh position={[2.1, -0.15, z]}>
            <boxGeometry args={[0.22, 1.5, 0.22]} />
            <meshStandardMaterial
              color="#666666"
              metalness={1}
            />
          </mesh>

          <mesh position={[0, 0.1, z]}>
            <boxGeometry args={[4.2, 0.12, 0.12]} />
            <meshStandardMaterial color="#555555" />
          </mesh>
        </group>
      ))}

      {/* ===================== */}
      {/* FRONT ROLLER */}
      {/* ===================== */}

      <mesh
        ref={frontRoller}
        position={[0, 0.42, -13.5]}
        rotation={[Math.PI/2, 0, Math.PI/2.01]}
      >
        <cylinderGeometry args={[0.28, 0.28, 6.4, 32]} />
        <meshStandardMaterial
          color="#777777"
          metalness={1}
        />
      </mesh>

      {/* ===================== */}
      {/* BACK ROLLER */}
      {/* ===================== */}

      <mesh
        ref={backRoller}
        position={[0, 0.42, 13.5]}
        rotation={[Math.PI/2 , 0, Math.PI/2.03]}
      >
        <cylinderGeometry args={[0.28, 0.28, 5.8, 32]} />
        <meshStandardMaterial
          color="#777777"
          metalness={1}
        />
      </mesh>

      {/* ===================== */}
      {/* DRIVE MOTOR */}
      {/* ===================== */}

      <group position={[0, 0.65, -14.5]}>
        <mesh>
          <boxGeometry args={[2.2, 1.3, 1.2]} />
          <meshStandardMaterial
            color="#444444"
            metalness={1}
          />
        </mesh>

        <mesh position={[0, 0.3, 0.65]}>
          <boxGeometry args={[1.4, 0.15, 0.05]} />
          <meshStandardMaterial
            color="#FF8800"
            emissive="#FF8800"
            emissiveIntensity={5}
          />
        </mesh>
      </group>

      {/* ===================== */}
      {/* HAZARD PLATES */}
      {/* ===================== */}

      <mesh position={[0, 0.6, -13.95]}>
        <boxGeometry args={[5.2, 0.05, 0.5]} />
        <meshStandardMaterial
          color="#FFD000"
          emissive="#FF8800"
          emissiveIntensity={1}
        />
      </mesh>

      <mesh position={[0, 0.6, 13.95]}>
        <boxGeometry args={[5.2, 0.05, 0.5]} />
        <meshStandardMaterial
          color="#FFD000"
          emissive="#FF8800"
          emissiveIntensity={1}
        />
      </mesh>

      {/* ===================== */}
      {/* MOVING CRATES */}
      {/* ===================== */}

      {[-9, 0, 9].map((z, i) => (
        <group
          key={i}
          ref={(el) => (crates.current[i] = el)}
          position={[0, 1.05, z]}
        >
          <RobotCrate />
        </group>
      ))}

    </group>
  );
}
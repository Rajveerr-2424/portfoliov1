import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function RobotArm() {

  const base = useRef();
  const shoulder = useRef();
  const elbow = useRef();

  useFrame(({ clock }) => {

    const t = clock.getElapsedTime();

    base.current.rotation.y =
      Math.sin(t * 0.4) * 0.7;

    shoulder.current.rotation.z =
      Math.sin(t * 0.8) * 0.35;

    elbow.current.rotation.z =
      Math.cos(t * 0.8) * 0.45;

  });

  return (

    <group position={[-88,0.2,-5]}>

      {/* Base */}

      <mesh>

        <cylinderGeometry args={[1,1.2,0.6,24]} />

        <meshStandardMaterial
          color="#555555"
          metalness={1}
        />

      </mesh>

      {/* Rotating Base */}

      <group ref={base} position={[0,0.3,0]}>

        {/* Vertical Column */}

        <mesh position={[0,1.8,0]}>

          <boxGeometry args={[0.7,3.5,0.7]} />

          <meshStandardMaterial
            color="#666666"
            metalness={1}
          />

        </mesh>

        {/* Shoulder */}

        <group
          ref={shoulder}
          position={[0,3.3,0]}
        >

          <mesh position={[0,1.3,0]}>

            <boxGeometry args={[0.5,2.8,0.5]} />

            <meshStandardMaterial
              color="#FF8800"
              metalness={0.8}
            />

          </mesh>

          {/* Elbow */}

          <group
            ref={elbow}
            position={[0,2.6,0]}
          >

            <mesh position={[0,1.1,0]}>

              <boxGeometry args={[0.4,2.2,0.4]} />

              <meshStandardMaterial
                color="#DDDDDD"
                metalness={1}
              />

            </mesh>

            {/* Gripper */}

            <mesh position={[0,2.2,0]}>

              <boxGeometry args={[0.8,0.2,0.8]} />

              <meshStandardMaterial
                color="#00D5FF"
                emissive="#00D5FF"
                emissiveIntensity={2}
              />

            </mesh>

          </group>

        </group>

      </group>

    </group>

  );
}
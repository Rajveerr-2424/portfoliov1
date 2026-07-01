import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function RobotArm() {

  const base = useRef();
  const shoulder = useRef();
  const elbow = useRef();

  const leftFinger = useRef();
const rightFinger = useRef();

  const state = useRef(0);

const timer = useRef(0);

useFrame((_, delta) => {

    timer.current += delta;

    switch(state.current){

        // WAIT

        case 0:

            base.current.rotation.y +=
            (-0.55-base.current.rotation.y)*0.05;

            shoulder.current.rotation.z +=
            (0.45-shoulder.current.rotation.z)*0.05;

            elbow.current.rotation.z +=
            (0.7-elbow.current.rotation.z)*0.05;

            if(timer.current>2){

                timer.current=0;

                state.current=1;

            }

        break;

        // LOWER

        case 1:

            shoulder.current.rotation.z +=
            (1.15-shoulder.current.rotation.z)*0.06;

            elbow.current.rotation.z +=
            (0.15-elbow.current.rotation.z)*0.06;

            if(timer.current>1){

                timer.current=0;

                state.current=2;

            }

        break;

        // PICK

        case 2:

            if(timer.current>0.5){

                timer.current=0;

                state.current=3;

            }

        break;

        // ROTATE

        case 3:

            base.current.rotation.y +=
            (0.65-base.current.rotation.y)*0.05;

            shoulder.current.rotation.z +=
            (0.4-shoulder.current.rotation.z)*0.05;

            elbow.current.rotation.z +=
            (0.8-elbow.current.rotation.z)*0.05;

            if(timer.current>2){

                timer.current=0;

                state.current=4;

            }

        break;

        // DROP

        case 4:

            shoulder.current.rotation.z +=
            (1.05-shoulder.current.rotation.z)*0.05;

            elbow.current.rotation.z +=
            (0.25-elbow.current.rotation.z)*0.05;

            if(timer.current>1){

                timer.current=0;

                state.current=5;

            }

        break;

        // RETURN

        case 5:

            base.current.rotation.y +=
            (-0.55-base.current.rotation.y)*0.05;

            shoulder.current.rotation.z +=
            (0.45-shoulder.current.rotation.z)*0.05;

            elbow.current.rotation.z +=
            (0.7-elbow.current.rotation.z)*0.05;

            if(timer.current>2){

                timer.current=0;

                state.current=0;

            }

        break;

    }

    //gripper animation
    const open =
state.current===0 ||
state.current===1 ||
state.current===4 ||
state.current===5;

const gap=open?0.22:0.10;

leftFinger.current.position.x +=
(-gap-leftFinger.current.position.x)*0.08;

rightFinger.current.position.x +=
(gap-rightFinger.current.position.x)*0.08;

});

  return (

    <group
    position={[-80.8,0.2,-5]}
    scale={1.5}
>

      <mesh position={[0,0.8,0]}>

<sphereGeometry args={[0.12,16,16]}/>

<meshStandardMaterial

color="#00FF88"

emissive="#00FF88"

emissiveIntensity={6}

/>

</mesh>
      
      
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

            <group position={[0,2.2,0]}>

    <mesh
    ref={leftFinger}
    position={[-0.22,0.3,0]}
    >

        <boxGeometry args={[0.08,0.6,0.08]}/>

        <meshStandardMaterial
        color="#FF8800"
        emissive="#FF8800"
        emissiveIntensity={3}
        />

    </mesh>

    <mesh
    ref={rightFinger}
    position={[0.22,0.3,0]}
    >

        <boxGeometry args={[0.08,0.6,0.08]}/>

        <meshStandardMaterial
        color="#FF8800"
        emissive="#FF8800"
        emissiveIntensity={3}
        />

    </mesh>

</group>

          </group>

        </group>

      </group>

    </group>

  );
}
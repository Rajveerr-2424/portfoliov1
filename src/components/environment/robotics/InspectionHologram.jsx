import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function InspectionHologram(){

    const ring=useRef();

    useFrame(({clock})=>{

        ring.current.rotation.y+=0.01;

        ring.current.position.y=
        2+
        Math.sin(clock.elapsedTime*2)*0.15;

    });

    return (
    <group position={[-85,2,-3]}>

        <mesh
            ref={ring}
            rotation={[Math.PI/2,0,0]}
        >
            <torusGeometry args={[0.7,0.04,16,64]} />
            <meshStandardMaterial
                color="#00D5FF"
                emissive="#00D5FF"
                emissiveIntensity={5}
            />
        </mesh>

        <mesh
            rotation={[Math.PI/2,0,0]}
            position={[0,0.35,0]}
        >
            <torusGeometry args={[0.45,0.03,16,64]} />
            <meshStandardMaterial
                color="#88FFFF"
                emissive="#88FFFF"
                emissiveIntensity={4}
            />
        </mesh>

        <mesh
            rotation={[Math.PI/2,0,0]}
            position={[0,-0.35,0]}
        >
            <torusGeometry args={[1,0.03,16,64]} />
            <meshStandardMaterial
                color="#00D5FF"
                emissive="#00D5FF"
                emissiveIntensity={3}
            />
        </mesh>

    </group>
);

}
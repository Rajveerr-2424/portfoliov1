import IndustrialWall from "./IndustrialWall";
import SteelBeam from "./SteelBeam";
import IndustrialDoor from "./IndustrialDoor";
import WarningLight from "./WarningLight";
import Pipe from "./Pipe";

export default function AssemblyBay() {
  return (
    <group position={[-85, 0, -42.4]}>

      {/* ========================= */}
      {/* FOUNDATION */}
      {/* ========================= */}

      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[18, 0.4, 14]} />
        <meshStandardMaterial color="#181818" />
      </mesh>

      {/* ========================= */}
      {/* WALLS */}
      {/* ========================= */}

      <IndustrialWall
        width={18}
        height={8}
        position={[0, 4, -7]}
      />

      <IndustrialWall
        width={18}
        height={8}
        position={[0, 4, 7]}
      />

      <IndustrialWall
        width={14}
        height={8}
        depth={0.4}
        position={[-9, 4, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />

      <IndustrialWall
        width={14}
        height={8}
        depth={0.4}
        position={[9, 4, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />

      {/* ========================= */}
      {/* ROOF */}
      {/* ========================= */}

      {/* Roof Left */}

<mesh
  position={[-4.5, 9.5, 0]}
  rotation={[0, 0, Math.PI / 10]}
>
  <boxGeometry args={[11, 0.35, 14.5]} />

  <meshStandardMaterial
    color="#2b2b2b"
    metalness={0.9}
  />
</mesh>

{/* Roof Right */}

<mesh
  position={[4.5, 9.5, 0]}
  rotation={[0, 0, -Math.PI / 10]}
>
  <boxGeometry args={[11, 0.35, 14.5]} />

  <meshStandardMaterial
    color="#2b2b2b"
    metalness={0.9}
  />
</mesh>

<mesh position={[0,10.65,0]}>
    <boxGeometry args={[0.4,0.4,14.5]} />

    <meshStandardMaterial
        color="#3b3b3b"
    />
</mesh>

      {/* ========================= */}
      {/* STEEL FRAME */}
      {/* ========================= */}

      <SteelBeam position={[-8.5, 4, -6.5]} />
      <SteelBeam position={[8.5, 4, -6.5]} />
      <SteelBeam position={[-8.5, 4, 6.5]} />
      <SteelBeam position={[8.5, 4, 6.5]} />

      {/* ========================= */}
      {/* MAIN DOOR */}
      {/* ========================= */}

      <group position={[0, 2.5, 7.15]}>
        <IndustrialDoor />
      </group>

      {/* ========================= */}
      {/* WARNING LIGHTS */}
      {/* ========================= */}

      <WarningLight position={[-4, 5.5, 7.3]} />
      <WarningLight position={[4, 5.5, 7.3]} />

      {/* ========================= */}
      {/* ROOF PIPES */}
      {/* ========================= */}

      <Pipe
        position={[-4, 8.6, 0]}
        rotation={[0, 0, Math.PI / 2]}
        length={14}
      />

      <Pipe
        position={[0, 8.6, 0]}
        rotation={[0, 0, Math.PI / 2]}
        length={14}
      />

      <Pipe
        position={[4, 8.6, 0]}
        rotation={[0, 0, Math.PI / 2]}
        length={14}
      />


      {/* Chimney */}

<mesh position={[-5,11,-3]}>
    <cylinderGeometry args={[0.6,0.8,6,24]} />

    <meshStandardMaterial
        color="#5d5d5d"
        metalness={1}
    />
</mesh>

<mesh position={[5,11,-3]}>
    <cylinderGeometry args={[0.6,0.8,6,24]} />

    <meshStandardMaterial
        color="#5d5d5d"
        metalness={1}
    />
</mesh>


<mesh
position={[0,8.6,-4]}
rotation={[0,0,0]}
>

<boxGeometry args={[8,0.1,1]} />

<meshStandardMaterial
color="#FF8800"
emissive="#FF8800"
emissiveIntensity={2}
/>

</mesh>


{/* Vent */}

<mesh position={[-7,8.7,4]}>

<boxGeometry args={[1.8,1,1.8]} />

<meshStandardMaterial
color="#555"
/>

</mesh>

<mesh position={[7,8.7,4]}>

<boxGeometry args={[1.8,1,1.8]} />

<meshStandardMaterial
color="#555"
/>

</mesh>


<mesh position={[0,6.3,7.35]}>

<boxGeometry args={[6.3,0.35,0.05]} />

<meshStandardMaterial
color="#FFD400"
emissive="#FF8800"
emissiveIntensity={2}
/>

</mesh>

    </group>
  );
}
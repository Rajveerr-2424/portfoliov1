import { Text } from "@react-three/drei";

function Sign({
  position,
  text,
  rotation = [0, 0, 0],
}) {
  return (
    <group position={position} rotation={rotation}>
      <mesh position={[0, 2, 0]}>
        <boxGeometry args={[4, 2, 0.2]} />
        <meshStandardMaterial
          color="#111"
          emissive="#111"
        />
      </mesh>

      <Text
        position={[0, 2, 0.15]}
        fontSize={0.4}
        color="white"
      >
        {text}
      </Text>

      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 2]} />
        <meshStandardMaterial color="#666" />
      </mesh>
    </group>
  );
}

export default function RoadSigns() {
  return (
    <>
      <Sign
        position={[8, 0, -20]}
        text="AI"
      />

      <Sign
        position={[-20, 0, -8]}
        rotation={[0, Math.PI / 2, 0]}
        text="ROBOTICS"
      />

      <Sign
        position={[20, 0, 8]}
        rotation={[0, -Math.PI / 2, 0]}
        text="SKILLS"
      />

      <Sign
        position={[-8, 0, 20]}
        rotation={[0, Math.PI, 0]}
        text="CONTACT"
      />
    </>
  );
}
import { Text } from "@react-three/drei";

export default function DirectionSigns() {
  return (
    <group>
      {/* AI */}
      <Text
        position={[0, 3, -18]}
        fontSize={1}
        color="cyan"
      >
        ↑ AI DISTRICT
      </Text>

      {/* Robotics */}
      <Text
        position={[-18, 3, 0]}
        rotation={[0, Math.PI / 2, 0]}
        fontSize={1}
        color="orange"
      >
        ← ROBOTICS LAB
      </Text>

      {/* Skills */}
      <Text
        position={[18, 3, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        fontSize={1}
        color="lime"
      >
        SKILLS CITY →
      </Text>

      {/* Contact */}
      <Text
        position={[0, 3, 18]}
        rotation={[0, Math.PI, 0]}
        fontSize={1}
        color="hotpink"
      >
        ↓ CONTACT BAY
      </Text>
    </group>
  );
}
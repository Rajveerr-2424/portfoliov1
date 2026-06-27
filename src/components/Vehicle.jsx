import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import TronBike from "./TronBike";
import { controls } from "../controls/controlState";
import { useCamera } from "../context/CameraContext";

export const vehicleRef = { current: null };

const keys = {};


window.addEventListener("keydown", (e) => {
  keys[e.key.toLowerCase()] = true;
});

window.addEventListener("keyup", (e) => {
  keys[e.key.toLowerCase()] = false;
});

export default function Vehicle() {
  const { editorMode } = useCamera();
  const ref = useRef();

  const speed = useRef(0);

  useEffect(() => {
    vehicleRef.current = ref.current;
  }, []);

  useFrame((_, delta) => {
    if (editorMode) return;
    if (!ref.current) return;

    // ===== VEHICLE SETTINGS =====
    const acceleration = 80;
    const maxSpeed = 20;
    const friction = 0.97;
    const steeringSpeed = 2.2;

    // ===== ACCELERATION =====

    if (keys["w"] || controls.forward) {
      speed.current += acceleration * delta;
    }

    if (keys["s"] || controls.backward) {
      speed.current -= acceleration * delta;
    }

    // Clamp speed

    speed.current = Math.max(
      -maxSpeed / 2,
      Math.min(maxSpeed, speed.current)
    );

    // Friction

    speed.current *= friction;

    // ===== STEERING =====

    const steeringFactor =
      Math.min(Math.abs(speed.current) / maxSpeed, 1);

    if (keys["a"] || controls.left) {
      ref.current.rotation.y +=
        steeringSpeed * steeringFactor * delta;
    }

    if (keys["d"] || controls.right) {
      ref.current.rotation.y -=
        steeringSpeed * steeringFactor * delta;
    }

    // ===== MOVEMENT =====

    const angle = ref.current.rotation.y;

    const dirX = Math.sin(angle);
    const dirZ = Math.cos(angle);

    const nextX =
  ref.current.position.x +
  dirX * speed.current * delta;

const nextZ =
  ref.current.position.z +
  dirZ * speed.current * delta;

// World size
const WORLD_LIMIT = 195;

if (
  nextX > -WORLD_LIMIT &&
  nextX < WORLD_LIMIT
) {
  ref.current.position.x = nextX;
}

if (
  nextZ > -WORLD_LIMIT &&
  nextZ < WORLD_LIMIT
) {
  ref.current.position.z = nextZ;
}
  });

  return (
  <group ref={ref} position={[0, 1.5, 4]}>
    <TronBike />
  </group>
);
}
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { vehicleRef } from "./Vehicle";

export default function FollowCamera() {
  const { camera } = useThree();

  const cameraPosition = new THREE.Vector3();
  const lookTarget = new THREE.Vector3();

  useFrame(() => {
  if (!vehicleRef.current) return;

  const vehicle = vehicleRef.current;

  cameraPosition.set(
    vehicle.position.x - 12,
    vehicle.position.y + 8,
    vehicle.position.z - 12
  );

  camera.position.lerp(cameraPosition, 0.08);

  camera.lookAt(
    vehicle.position.x,
    vehicle.position.y,
    vehicle.position.z
  );
});

  return null;
}
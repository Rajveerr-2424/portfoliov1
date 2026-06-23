import { useFrame, useThree } from "@react-three/fiber";
import { vehicleRef } from "./Vehicle";
import { useEffect, useRef } from "react";
import * as THREE from "three";

import { useCamera } from "../context/CameraContext";
import { CAMERA_PRESETS } from "../config/cameraPresets";

export default function CameraManager() {
  const { camera } = useThree();
  const { cameraMode } = useCamera();

  const zoomDistance = useRef(12);

  useEffect(() => {
    const handleWheel = (e) => {
      if (cameraMode !== "drive") return;

      zoomDistance.current += e.deltaY * 0.01;

      zoomDistance.current = Math.max(
        6,
        Math.min(25, zoomDistance.current)
      );
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [cameraMode]);

  const desiredPosition = new THREE.Vector3();
  const lookTarget = new THREE.Vector3();

  useFrame(() => {
    if (!vehicleRef.current) return;

    const vehicle = vehicleRef.current;

    // DRIVE MODE
    const preset =
  CAMERA_PRESETS[cameraMode] ||
  CAMERA_PRESETS.drive;

// Drive mode keeps scroll zoom
if (cameraMode === "drive") {
  desiredPosition.set(
    vehicle.position.x - zoomDistance.current,
    vehicle.position.y + zoomDistance.current * 0.6,
    vehicle.position.z - zoomDistance.current
  );
} else {
  desiredPosition.set(
    vehicle.position.x + preset.offset[0],
    vehicle.position.y + preset.offset[1],
    vehicle.position.z + preset.offset[2]
  );
}

lookTarget.set(
  vehicle.position.x,
  vehicle.position.y + 1,
  vehicle.position.z
);

camera.position.lerp(
  desiredPosition,
  preset.lerp
);

camera.lookAt(lookTarget);
  });

  return null;
}
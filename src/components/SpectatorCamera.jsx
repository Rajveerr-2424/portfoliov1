import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useCamera } from "../context/CameraContext";
import * as THREE from "three";

export default function SpectatorCamera() {
  const { camera } = useThree();
  const { spectator } = useCamera();

  const keys = useRef({});

  const yaw = useRef(0);
  const pitch = useRef(0);

  useEffect(() => {
    const down = (e) => (keys.current[e.code] = true);
    const up = (e) => (keys.current[e.code] = false);

    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);

    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);

  useEffect(() => {
    if (!spectator) return;

    const move = (e) => {
      yaw.current -= e.movementX * 0.002;
      pitch.current -= e.movementY * 0.002;

      pitch.current = Math.max(
        -Math.PI / 2 + 0.05,
        Math.min(Math.PI / 2 - 0.05, pitch.current)
      );
    };

    const click = () => {
      document.body.requestPointerLock();
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("click", click);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("click", click);
      document.exitPointerLock?.();
    };
  }, [spectator]);

  useFrame((_, delta) => {
    if (!spectator) return;

    camera.rotation.order = "YXZ";
    camera.rotation.y = yaw.current;
    camera.rotation.x = pitch.current;

    const speed = 20 * delta;

    const forward = new THREE.Vector3();
    camera.getWorldDirection(forward);

    const right = new THREE.Vector3();
    right.crossVectors(forward, camera.up).normalize();

    if (keys.current["KeyW"])
      camera.position.addScaledVector(forward, speed);

    if (keys.current["KeyS"])
      camera.position.addScaledVector(forward, -speed);

    if (keys.current["KeyA"])
      camera.position.addScaledVector(right, speed);

    if (keys.current["KeyD"])
      camera.position.addScaledVector(right, -speed);

    if (keys.current["Space"])
      camera.position.y += speed;

    if (keys.current["ShiftLeft"])
      camera.position.y -= speed;
  });

  return null;
}
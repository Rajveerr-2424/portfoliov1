import { useEffect } from "react";
import { useCamera } from "../context/CameraContext";

export default function CameraDebug() {
  const { setCameraMode } = useCamera();

  useEffect(() => {
    const handleKey = (e) => {
      switch (e.key) {
        case "1":
          setCameraMode("drive");
          break;

        case "2":
          setCameraMode("achievement");
          break;

        case "3":
          setCameraMode("drone");
          break;

        case "4":
          setCameraMode("focus");
          break;

        case "5":
          setCameraMode("cinematic");
          break;

        default:
          break;
      }
    };

    window.addEventListener(
      "keydown",
      handleKey
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKey
      );
  }, []);

  return null;
}
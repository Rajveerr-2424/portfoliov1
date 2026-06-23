import { controls } from "../controls/controlState";
import { useCamera } from "../context/CameraContext";

export default function MobileControls() {
  // Hide on desktop
  if (window.innerWidth > 768) {
    return null;
  }

  const { setCameraMode } = useCamera();

  const press = (key, state) => {
    controls[key] = state;
  };

  const buttonStyle = {
    position: "fixed",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    border: "none",
    background: "rgba(0, 212, 255, 0.7)",
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
    zIndex: 9999,
    touchAction: "none",
    backdropFilter: "blur(5px)",
  };

  return (
    <>
      {/* ===================== */}
      {/* MOVEMENT CONTROLS */}
      {/* ===================== */}

      {/* FORWARD */}
      <button
        style={{
          ...buttonStyle,
          bottom: "140px",
          left: "80px",
        }}
        onTouchStart={() => press("forward", true)}
        onTouchEnd={() => press("forward", false)}
      >
        ↑
      </button>

      {/* LEFT */}
      <button
        style={{
          ...buttonStyle,
          bottom: "70px",
          left: "10px",
        }}
        onTouchStart={() => press("left", true)}
        onTouchEnd={() => press("left", false)}
      >
        ←
      </button>

      {/* RIGHT */}
      <button
        style={{
          ...buttonStyle,
          bottom: "70px",
          left: "150px",
        }}
        onTouchStart={() => press("right", true)}
        onTouchEnd={() => press("right", false)}
      >
        →
      </button>

      {/* BACKWARD */}
      <button
        style={{
          ...buttonStyle,
          bottom: "0px",
          left: "80px",
        }}
        onTouchStart={() => press("backward", true)}
        onTouchEnd={() => press("backward", false)}
      >
        ↓
      </button>

      {/* ===================== */}
      {/* CAMERA CONTROLS */}
      {/* ===================== */}

      {/* DRIVE */}
      <button
        style={{
          ...buttonStyle,
          right: "20px",
          bottom: "300px",
        }}
        onClick={() => setCameraMode("drive")}
      >
        D
      </button>

      {/* FOCUS */}
      <button
        style={{
          ...buttonStyle,
          right: "20px",
          bottom: "230px",
        }}
        onClick={() => setCameraMode("focus")}
      >
        F
      </button>

      {/* ACHIEVEMENT */}
      <button
        style={{
          ...buttonStyle,
          right: "20px",
          bottom: "160px",
        }}
        onClick={() => setCameraMode("achievement")}
      >
        A
      </button>

      {/* DRONE */}
      <button
        style={{
          ...buttonStyle,
          right: "20px",
          bottom: "90px",
        }}
        onClick={() => setCameraMode("drone")}
      >
        DR
      </button>

      {/* CINEMATIC */}
      <button
        style={{
          ...buttonStyle,
          right: "20px",
          bottom: "20px",
        }}
        onClick={() => setCameraMode("cinematic")}
      >
        C
      </button>
    </>
  );
}
import { controls } from "../controls/controlState";

export default function MobileControls() {
  // Hide controls on desktop
  if (window.innerWidth > 768) {
    return null;
  }

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
  };

  return (
    <>
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
    </>
  );
}
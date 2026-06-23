import { controls } from "../controls/controlState";

if (window.innerWidth > 768) {
  return null;
}

export default function MobileControls() {
  const press = (key, state) => {
    controls[key] = state;
  };

  return (
    <>
      {/* FORWARD */}
      <button
        style={{
          position: "fixed",
          bottom: "140px",
          left: "80px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          zIndex: 9999,
        }}
        onTouchStart={() => press("forward", true)}
        onTouchEnd={() => press("forward", false)}
      >
        ↑
      </button>

      {/* LEFT */}
      <button
        style={{
          position: "fixed",
          bottom: "70px",
          left: "10px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          zIndex: 9999,
        }}
        onTouchStart={() => press("left", true)}
        onTouchEnd={() => press("left", false)}
      >
        ←
      </button>

      {/* RIGHT */}
      <button
        style={{
          position: "fixed",
          bottom: "70px",
          left: "150px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          zIndex: 9999,
        }}
        onTouchStart={() => press("right", true)}
        onTouchEnd={() => press("right", false)}
      >
        →
      </button>

      {/* BACKWARD */}
      <button
        style={{
          position: "fixed",
          bottom: "0px",
          left: "80px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          zIndex: 9999,
        }}
        onTouchStart={() => press("backward", true)}
        onTouchEnd={() => press("backward", false)}
      >
        ↓
      </button>
    </>
  );
}
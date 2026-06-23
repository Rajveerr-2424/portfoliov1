import { createContext, useContext, useState } from "react";

const CameraContext = createContext();

export function CameraProvider({ children }) {
  const [cameraMode, setCameraMode] = useState("drive");

  return (
    <CameraContext.Provider
      value={{
        cameraMode,
        setCameraMode,
      }}
    >
      {children}
    </CameraContext.Provider>
  );
}

export function useCamera() {
  return useContext(CameraContext);
}
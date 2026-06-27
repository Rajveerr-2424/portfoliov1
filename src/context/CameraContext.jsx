import { createContext, useContext, useState } from "react";

const CameraContext = createContext();

export function CameraProvider({ children }) {
  const [cameraMode, setCameraMode] = useState("drive");
  const [editorMode, setEditorMode] = useState(false);

  return (
    <CameraContext.Provider
      value={{
        cameraMode,
        setCameraMode,
        editorMode,
        setEditorMode,
      }}
    >
      {children}
    </CameraContext.Provider>
  );
}

export function useCamera() {
  return useContext(CameraContext);
}
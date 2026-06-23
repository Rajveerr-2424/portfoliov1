import { useGLTF } from "@react-three/drei";
import { forwardRef } from "react";

const TronBike = forwardRef((props, ref) => {
  const { scene } = useGLTF("/models/tron-bike.glb");

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={0.006}
      position={[0, 1, 0]}
      {...props}
    />
  );
});

export default TronBike;

useGLTF.preload("/models/tron-bike.glb");
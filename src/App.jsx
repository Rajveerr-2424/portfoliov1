import { Canvas } from "@react-three/fiber";

import { CameraProvider } from "./context/CameraContext";

import Ground from "./components/Ground";
import Roads from "./components/Roads";
import Garage from "./components/Garage";
import DirectionSigns from "./components/DirectionSigns";
import DistrictMarkers from "./components/DistrictMarkers";
import WorldBoundary from "./components/WorldBoundary";

import Vehicle from "./components/Vehicle";
import CameraManager from "./components/CameraManager";
import CameraDebug from "./components/CameraDebug";

import AITower from "./components/environment/AITower";
import RoboticsLab from "./components/environment/RoboticsLab";
import SkillsTower from "./components/environment/SkillsTower";
import ContactTerminal from "./components/environment/ContactTerminal";

import RoadMarkings from "./components/environment/RoadMarkings";
import RoadCurbs from "./components/environment/RoadCurbs";
import StreetLights from "./components/environment/StreetLights";

import NeonBarriers from "./components/environment/NeonBarriers";
import RoadSigns from "./components/environment/RoadSigns";
import GroundGrid from "./components/environment/GroundGrid";

import EnergyRoad from "./components/environment/EnergyRoad";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import DistrictZones from "./components/DistrictZones";
import DistrictPlaza from "./components/environment/DistrictPlaza";

import DataCenter from "./components/environment/ai/DataCenter";
import NeuralLab from "./components/environment/ai/NeuralLab";
import ProjectPod from "./components/environment/ai/ProjectPod";
import NeuralCore from "./components/environment/ai/NeuralCore";

import DataLinks from "./components/environment/ai/DataLinks";
import NeuralNetwork from "./components/environment/ai/NeuralNetwork";
import AIHologram from "./components/environment/ai/AIHologram";
import DataPackets from "./components/environment/ai/DataPackets";
import EnergyStreams from "./components/environment/ai/EnergyStreams";



export default function App() {
  return (
    <CameraProvider>
      <Canvas

        
        camera={{
          position: [0, 8, -12],
          fov: 60,
        }}
      >

        <color attach="background" args={["#212121"]} />

        <ambientLight intensity={1.2} />

        <directionalLight
          position={[20, 20, 20]}
          intensity={0.3}
        />

        <Ground />
        <Roads />
        <EnergyRoad />
        <Garage />
        
        {/* <DistrictZones /> */}
        {/* AI */}
{/* AI */}
<DistrictPlaza
  position={[0, 0, -85]}
  color="#00d5ff"
  rotationY={Math.PI / 2}
/>

{/* ROBOTICS */}
<DistrictPlaza
  position={[-85, 0, 0]}
  color="#FF8800"
  rotationY={Math.PI}
/>

{/* SKILLS */}
<DistrictPlaza
  position={[85, 0, 0]}
  color="#00FF88"
  rotationY={0}
/>

{/* CONTACT */}
<DistrictPlaza
  position={[0, 0, 85]}
  color="#FF00FF"
  rotationY={-Math.PI / 2}
/>
        {/* <DirectionSigns /> */}
        
        <WorldBoundary />

        <Vehicle />

        <CameraManager />

        {/* Temporary */}
        <CameraDebug />
        <AITower />
        <RoboticsLab />
        <SkillsTower />
        <ContactTerminal />
        
        <DataCenter />
<NeuralLab />
<NeuralCore />

<ProjectPod position={[-18, 0, -72]} />
<ProjectPod position={[18, 0, -72]} />

        <RoadMarkings />
        <RoadCurbs />
        <StreetLights />
        <NeonBarriers />
        <RoadSigns />
        <DataLinks />
        <DataPackets />
        <EnergyStreams />
        <NeuralNetwork />
        <AIHologram />
        {/* { <EffectComposer>
            <Bloom
  intensity={0.2}
  luminanceThreshold={0.9}
  luminanceSmoothing={0.9}
/>
        </EffectComposer> } */}
        {/* <GroundGrid /> */}
      </Canvas>
    </CameraProvider>
  );
}
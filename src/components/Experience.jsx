import {
  PresentationControls,
  Stage,
  MeshReflectorMaterial,
  PerspectiveCamera,
} from "@react-three/drei";

import { useLoader } from "@react-three/fiber";
import Traditional_ring from "./Traditional";

const Experience = () => {
  return (
    <PerspectiveCamera
      position={[0, 1, -11]}
      aspect={200 / 800}
      radius={(1200 + 600) / 2}
      fov={40}
    >
      <PresentationControls
        speed={3}
        // global
        // zoom={2.5}
        polar={[-0.1, Math.PI / 2]}
      >
        <Stage environment={"city"} intensity={0.6}>
          <Traditional_ring
            position={[0, 33, 19]}
            scale={[20, 20, 20]}
            rotation={[4.7, 0, 0]}
          />

          <mesh rotation={[-Math.PI / 2, 0, 0]}>
           
          </mesh>
        </Stage>
      </PresentationControls>
    </PerspectiveCamera>
  );
};

export default Experience;

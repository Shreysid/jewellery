import {
  PresentationControls,
  Stage,
  MeshReflectorMaterial,
  PerspectiveCamera,
} from "@react-three/drei";

import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
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
        speed={1.5}
        global
        zoom={2.5}
        polar={[-0.1, Math.PI / 4]}
      >
        <Stage environment={"city"} intensity={0.6}>
          <Suspense fallback={null}>
            <Traditional_ring position={[0, 13, 19]} scale={[20, 20, 20]} />
          </Suspense>
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[170, 170]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={2048}
              mixBlur={1}
              mixStrength={40}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#101010"
              metalness={0.5}
            />
          </mesh>
        </Stage>
      </PresentationControls>
    </PerspectiveCamera>
  );
};

export default Experience;

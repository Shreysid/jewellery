import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./components/Experience";
import Configurator from "./components/Configurator";
import { CustomizationProvider } from "./Contexts/Customization";

function App() {
  return (
    <CustomizationProvider>
    <div className="App">
      <Canvas camera={{ position: [2, 2, 2], fov: 45, near: 3, far: 3 }}>
        <color attach="background" args={["#213547"]} />
        <Experience />
      </Canvas>
      <Configurator/>
    </div>
    </CustomizationProvider>
  );
}

export default App;

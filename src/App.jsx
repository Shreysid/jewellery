import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./components/Experience";
import Configurator from "./components/Configurator";
import { CustomizationProvider } from "./Contexts/Customization";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <Analytics>
    <CustomizationProvider>
    <div className="App">
      <Canvas camera={{ position: [2, 2, 2], fov: 45, near: 3, far: 3 }}>
        <color attach="background" args={["#213547"]} />
        <Experience />
      </Canvas>
      <Configurator/>
    </div>
    </CustomizationProvider>
    </Analytics>
  );
}

export default App;

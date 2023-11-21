import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      <Canvas camera={{position: [2,2,2], fov:45, near:3, far:3}}>
        <color attach="background" args={["#213547"]} />
        {/* <fog attach="fog" args={["#213547", 10, 20]} /> */}
        {/* color to be used #f7bbbd */}
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;

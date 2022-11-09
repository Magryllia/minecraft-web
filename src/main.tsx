import { KeyboardControls } from "@react-three/drei";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <KeyboardControls
    map={[
      { name: "moveForward", keys: ["w"] },
      { name: "moveBackward", keys: ["s"] },
      { name: "moveLeft", keys: ["a"] },
      { name: "moveRight", keys: ["d"] },
      { name: "jump", keys: [" "] },
    ]}
  >
    <App />
  </KeyboardControls>
  // </React.StrictMode>
);

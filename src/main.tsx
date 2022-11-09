import { KeyboardControls } from "@react-three/drei";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <KeyboardControls
    map={[
      { name: "moveForward", keys: ["w"] },
      { name: "moveBackward", keys: ["s"] },
      { name: "moveLeft", keys: ["a"] },
      { name: "moveRight", keys: ["d"] },
      { name: "jump", keys: [" "] },
      { name: "digit1", keys: ["1"] },
      { name: "digit2", keys: ["2"] },
      { name: "digit3", keys: ["3"] },
      { name: "digit4", keys: ["4"] },
      { name: "digit5", keys: ["5"] },
    ]}
  >
    <App />
  </KeyboardControls>
);

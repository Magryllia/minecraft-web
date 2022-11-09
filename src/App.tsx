import { Physics } from "@react-three/cannon";
import { Loader, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import "./App.css";
import { Ground } from "./components/Ground";
import { Player } from "./components/Player";
import { FPV } from "./components/FPV";
import { Cubes } from "./components/Cubes";
import { TextureSelector } from "./components/TextureSelector";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Container } from "@mui/material";
import { Header } from "./components/Header";
import { ControlInfo } from "./components/ControlInfo";

function App() {
  const theme = createTheme({
    palette: {},
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
        }}
      >
        <Header />
        <Canvas id="canvas">
          <Sky />
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <FPV />
            <Physics>
              <Player />
              <ControlInfo />
              <Cubes />
              <Ground />
            </Physics>
          </Suspense>
        </Canvas>
        <div className="absolute centered cursor">+</div>
        <TextureSelector />
        <Loader />
      </Container>
    </ThemeProvider>
  );
}

export default App;

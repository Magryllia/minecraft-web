import React from "react";
import { useEffect, useState } from "react";
import { useStore } from "../hooks/useStore";
import { dirtImg, grassImg, glassImg, woodImg, logImg } from "../images/images";
import { useKeyboardControls } from "@react-three/drei";

const images: { [key: string]: string } = {
  dirt: dirtImg,
  grass: grassImg,
  glass: glassImg,
  wood: woodImg,
  log: logImg,
};

export const TextureSelector = () => {
  const [visible, setVisible] = useState(false);
  const [activeTexture, setTexture] = useStore((state) => [state.texture, state.setTexture]);
  const [dirt, grass, glass, wood, log]: boolean[] = useKeyboardControls((state) => [
    state.digit1,
    state.digit2,
    state.digit3,
    state.digit4,
    state.digit5,
  ]);

  useEffect(() => {
    const textures = { dirt, grass, glass, wood, log };
    const pressedTexture = Object.entries(textures).find(([k, v]) => v);
    if (pressedTexture) {
      console.log("pressed", pressedTexture[0]);
      setTexture(pressedTexture[0]);
    }
  }, [setTexture, dirt, grass, glass, wood, log]);

  useEffect(() => {
    const visibilityTimeout = setTimeout(() => {
      setVisible(false);
    }, 2000);
    setVisible(true);

    return () => {
      clearTimeout(visibilityTimeout);
    };
  }, [activeTexture]);

  return (
    visible && (
      <div className="absolute centered texture-selector">
        {Object.entries(images).map(([k, src]) => {
          return <img key={k} src={src} alt={k} className={`${k === activeTexture ? "active" : ""}`} />;
        })}
      </div>
    )
  );
};

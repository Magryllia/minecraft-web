import { usePlane } from "@react-three/cannon";
import React from "react";
import { Mesh, NearestFilter, RepeatWrapping } from "three";
import { groundTexture } from "../images/Textures";
import { degToRad } from "three/src/math/MathUtils";
import { useStore } from "../hooks/useStore";

export const Ground = () => {
  const [ref] = usePlane<Mesh>(() => ({
    rotation: [degToRad(-90), 0, 0],
    position: [0, -0.5, 0],
  }));

  const [addCube] = useStore((state) => [state.addCube]);

  groundTexture.repeat.set(100, 100);

  return (
    <mesh
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        const [x, y, z] = Object.values(e.point).map((val) => Math.ceil(val));
        addCube(x - 0.5, y, z - 0.5);
      }}
    >
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" map={groundTexture} />
    </mesh>
  );
};

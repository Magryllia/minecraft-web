import { useBox } from "@react-three/cannon";
import { FC, useState } from "react";
import { Mesh, Texture, DoubleSide, FrontSide } from "three";
import * as textures from "../images/Textures";
import { useStore } from "../hooks/useStore";
import { ThreeEvent } from "@react-three/fiber";

type CubeProp = {
  position: [x: number, y: number, z: number];
  texture: string;
};

export const Cube: FC<CubeProp> = ({ position, texture }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref] = useBox<Mesh>(() => ({
    type: "Static",
    position,
  }));
  const [addCube, removeCube] = useStore((state) => [state.addCube, state.removeCube]);
  const activeTexture = textures[texture + "Texture"] as Texture;
  const isGlass = texture === "glass";
  return (
    <mesh
      onPointerOver={(e) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setIsHovered(false);
      }}
      onClick={(e: ThreeEvent<MouseEvent>) => {
        e.stopPropagation();
        const clickedFace = Math.floor((e.faceIndex as number) / 2);
        const { x, y, z } = ref.current?.position as THREE.Vector3;
        if (e.altKey) {
          removeCube(x, y, z);
          return;
        }
        switch (clickedFace) {
          case 0:
            addCube(x + 1, y, z);
            break;
          case 1:
            addCube(x - 1, y, z);
            break;
          case 2:
            addCube(x, y + 1, z);
            break;
          case 3:
            addCube(x, y - 1, z);
            break;
          case 4:
            addCube(x, y, z + 1);
            break;
          case 5:
            addCube(x, y, z - 1);
            break;

          default:
            break;
        }
      }}
      ref={ref}
    >
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial
        color={isHovered ? "grey" : "white"}
        attach="material"
        map={activeTexture}
        transparent={isGlass}
        side={isGlass ? DoubleSide : FrontSide}
      />
    </mesh>
  );
};

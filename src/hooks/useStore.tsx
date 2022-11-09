import { nanoid } from "nanoid";
import create from "zustand";

type CubeState = {
  texture: string;
  cubes: CubeInfo[];
  addCube: (x: number, y: number, z: number) => void;
  removeCube: (x: number, y: number, z: number) => void;
  setTexture: (texture: string) => void;
};

type CubeInfo = {
  key: string;
  pos: [x: number, y: number, z: number];
  texture: string;
};

export const useStore = create<CubeState>((set) => ({
  texture: "dirt",
  cubes: [],
  addCube: (x: number, y: number, z: number) => {
    set((prev) => ({
      cubes: [
        ...prev.cubes,
        {
          key: nanoid(),
          pos: [x, y, z],
          texture: prev.texture,
        },
      ],
    }));
  },
  removeCube: (x: number, y: number, z: number) => {
    set((prev) => ({
      cubes: prev.cubes.filter((cube) => {
        const [X, Y, Z] = cube.pos;
        return X !== x || Y !== y || Z !== z;
      }),
    }));
  },
  setTexture: (texture: string) => {
    set((prev) => ({
      texture: texture,
    }));
  },
}));

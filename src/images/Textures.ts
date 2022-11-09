import { NearestFilter, RepeatWrapping, TextureLoader } from "three";
import { dirtImg, grassImg, glassImg, woodImg, logImg } from "./images";

export const dirtTexture = new TextureLoader().load(dirtImg);
export const logTexture = new TextureLoader().load(logImg);
export const grassTexture = new TextureLoader().load(grassImg);
export const glassTexture = new TextureLoader().load(glassImg);
export const woodTexture = new TextureLoader().load(woodImg);
export const groundTexture = new TextureLoader().load(grassImg);

dirtTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;
groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;

// export const Textures = {
//   dirtTexture: new TextureLoader().load(dirtImg),
//   logTexture: new TextureLoader().load(logImg),
//   grassTexture: new TextureLoader().load(logImg),
//   glassTexture: new TextureLoader().load(glassImg),
//   woodTexture: new TextureLoader().load(woodImg),
//   groundTexture: new TextureLoader().load(grassImg),
// };

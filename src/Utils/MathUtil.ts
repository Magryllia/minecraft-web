import * as THREE from "three";

// export const ToVector = (ary: number[]): THREE.Vector2 | THREE.Vector3 | THREE.Vector4 => {
//   switch (ary.length) {
//     case 2:
//       return new THREE.Vector2(ary[0], ary[1]);
//       break;
//     case 3:
//       return new THREE.Vector3(ary[0], ary[1], ary[2]);
//       break;
//     case 4:
//       return new THREE.Vector4(ary[0], ary[1], ary[2], ary[3]);
//       break;

//     default:
//       throw new Error("Invalid length of array.");
//       break;
//   }
// };

export const ToVector3 = (ary: number[]): THREE.Vector3 => {
  if (ary.length != 3) {
    throw new Error("Invalid length of array.");
  }

  return new THREE.Vector3(ary[0], ary[1], ary[2]);
};

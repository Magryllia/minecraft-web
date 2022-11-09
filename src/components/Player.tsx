import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { ToVector3 } from "../Utils/MathUtil";
import { Mesh, Vector3 } from "three";
import { useKeyboardControls } from "@react-three/drei";

const JUMP_FORCE = 5;
const SPEED = 2;

export const Player = () => {
  const [moveForward, moveBackward, moveLeft, moveRight, jump]: boolean[] = useKeyboardControls((state) => [
    state.moveForward,
    state.moveBackward,
    state.moveLeft,
    state.moveRight,
    state.jump,
  ]);

  const { camera } = useThree();

  // プレイヤー用のSphereコリジョン
  const [ref, api] = useSphere<Mesh>(() => ({
    mass: 1,
    type: "Dynamic",
    position: [0, 1, 0],
  }));

  const vel = useRef([0, 0, 0]);
  useEffect(() => {
    api.velocity.subscribe((v) => (vel.current = v));
  }, [api.velocity]);

  // プレイヤーの位置情報を更新
  const pos = useRef([0, 0, 0]);
  useEffect(() => {
    api.position.subscribe((p) => (pos.current = p));
  }, [api.position]);

  // プレイヤーの速度とカメラの位置を更新
  useFrame(() => {
    camera.position.copy(ToVector3(pos.current) as THREE.Vector3);

    const direction = new Vector3();

    const frontVector = new Vector3(0, 0, +moveBackward - +moveForward);

    const sideVector = new Vector3(+moveLeft - +moveRight, 0, 0);

    direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED).applyEuler(camera.rotation);

    api.velocity.set(direction.x, vel.current[1], direction.z);

    if (jump && Math.abs(vel.current[1]) < 0.05) {
      api.velocity.set(vel.current[0], JUMP_FORCE, vel.current[2]);
    }
  });

  return <mesh ref={ref}></mesh>;
};

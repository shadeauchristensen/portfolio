import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import skyScene from "../assets/free_-_skybox_fantasy_town.glb";

export function Sky({ isRotating, rotationDirection }) {
  const sky = useGLTF(skyScene);
  const skyRef = useRef();

  // 'delta' represents the time in seconds since the last frame.
  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += rotationDirection * 2.5 * delta; // Adjust the rotation speed as needed
    }
  })

  return (
    <group
      ref={skyRef}
      scale={[-0.5, 0.85, -0.59]}
      position={[0, 0.5, -100]}
      rotation={[0.17, 0, 0]}
    >
      <primitive object={sky.scene} />
    </group>
  )
}

export default Sky
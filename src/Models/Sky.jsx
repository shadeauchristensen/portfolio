import { useGLTF } from '@react-three/drei'
import React from 'react'


import skyScene from '../baker_and_the_bridge/free_-_skybox_fantasy_town.glb'

const Sky = () => {
  const sky = useGLTF(skyScene);
  return (
    <group scale={[-1, 0.8, -0.2]}
        position={[0, 0.5, 0]}
        rotation={[0.17, 0, 0]}>
        <primitive object={sky.scene} />
    </group>
  );
}

export default Sky
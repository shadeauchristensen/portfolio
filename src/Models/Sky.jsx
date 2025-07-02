import { useGLTF } from '@react-three/drei'
import React from 'react'


import skyScene from '../baker_and_the_bridge/free_-_skybox_fantasy_town.glb'

const Sky = () => {
  const sky = useGLTF(skyScene);
  return (
    <group scale={[-1.2, 1, 0.8]}
        position={[-10, 300.5, -300]}
        rotation={[0, 100.95, 6.4]}>
        <primitive object={sky.scene} />
    </group>
  );
}

export default Sky
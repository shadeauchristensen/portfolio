import { useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { a } from '@react-spring/three';

import beeScene from '../bumblebee/scene.gltf';
import { useActionData } from 'react-router-dom';

const Bee = ({ beeFacingLeft, isRotating, position, scale, rotation, ...props }) => {
  const beeRef = useRef();
  const { scene, animations } = useGLTF(beeScene);
  const { actions } = useAnimations(animations, beeRef);

  // Animate bee rotation with a subtle hover effect
  useFrame((state) => {
  if (beeRef.current) {
    const idleWobble = Math.sin(state.clock.elapsedTime * 10) * 0.003;

    if (isRotating) {
      // Face direction AND idle animation
      beeRef.current.rotation.y = (beeFacingLeft ? Math.PI / 1 : -Math.PI / 10) + idleWobble;
    } else {
      // Maintain current facing, only idle animation
      beeRef.current.rotation.y += idleWobble; 
    }
  }
})

  return (
    <a.group
      ref={beeRef}
      position={position}
      scale={[
        beeFacingLeft ? scale[0] : -scale[0], // flip X scale if moving left
        scale[1],
        scale[2],
      ]}
      rotation={rotation}
      {...props}
    >
      <primitive object={scene} />
    </a.group>
  );
};

export default Bee
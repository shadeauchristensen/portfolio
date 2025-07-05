import { useRef, useEffect } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { a } from '@react-spring/three';

import beeScene from '../bumblebee/scene.gltf';

const Bee = ({ beeFacingLeft, isRotating, position, scale, rotation, ...props }) => {
  const beeRef = useRef();
  const { scene, animations } = useGLTF(beeScene);
  const { actions } = useAnimations(animations, beeRef);

  // Animate bee rotation with a subtle hover effect
  useFrame((state) => {
    if (beeRef.current) {
      const idleWobble = Math.sin(state.clock.elapsedTime * 5) * 0.003;

      if (isRotating) {
        // Face direction AND idle animation
        beeRef.current.rotation.y = (beeFacingLeft ? Math.PI / 1.45 : -Math.PI / 6) + idleWobble;
      } else {
        // Maintain current facing, only idle animation
        beeRef.current.rotation.y += idleWobble; 
      }
    }
  })

  useEffect(() => {
  const flyAction = actions['Fly'];

    if (flyAction) {
      flyAction.play()
      flyAction.setEffectiveTimeScale(0.65) // default speed

      if (isRotating) {
        flyAction.setEffectiveTimeScale(1.75) // speed up when rotating
      } else {
        flyAction.setEffectiveTimeScale(0.65) // normal speed when idle
      }
    }
  }, [actions, isRotating])

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
      {...props} beeRef={beeRef}
    >
      <primitive object={scene} />
    </a.group>
  )
}

export default Bee
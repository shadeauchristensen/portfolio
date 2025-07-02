import { useGLTF } from '@react-three/drei'

import beeScene from '../bumblebee/scene.gltf'

const Bee = ({ isRotating, ...props }) => {
  const { scene, animations } = useGLTF(beeScene)

  return (
    <group {...props}>
      <primitive object={scene} />
    </group>
  )
}

export default Bee
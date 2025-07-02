import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import Loader from '../Components/Loader'
import Island from '../Models/Island'
import Sky from '../Models/Sky'
import Bee from '../Models/Bee'

const Home = () => {
const [isRotating, setIsRotating] = useState(false)

const adjustIslandForScreenSize = () => {
  let screenScale = null
  let screenPosition = [-1.18, -8.95, -7.15] // Default position for larger screens
  let rotation = [0.51, 12.5, 0.01] // Default rotation

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9]
    }
    else {
      screenScale = [1, 1, 1]
    }

    return [screenPosition, screenScale, rotation]
  }

  const [screenPosition, screenScale, rotation] = adjustIslandForScreenSize()

  const adjustBeeForScreenSize = () => {
    let beeScreenScale, beeScreenPosition
    let beeRotation = [0, -10, 0] // Default rotation

    if (window.innerWidth < 768) {
      beeScreenScale = [1.5, 1.5, 1.5]
      beeScreenPosition = [0, -1.5, 0] // Adjusted position for smaller screens
      beeRotation = [0, 0, 0] // Adjusted rotation for smaller screens
    }
    else {
      beeScreenScale = [0.5, 0.5, 0.5]
      beeScreenPosition = [0, 0, 0] // Default position for larger screens
    }

    return [beeScreenPosition, beeScreenScale, beeRotation]
  }

  const [beeScreenPosition, beeScreenScale, beeRotation] = adjustBeeForScreenSize()

  return (
    <section className='w-full h-screen relative'>
      {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'> */}
        {/* <h1 className='text-5xl font-bold'>Welcome to My Portfolio</h1> */}
        <Canvas className={`w-full h-full bg-transparent ${isRotating ? 'cursor-Grabbong' : 'cursor-grab'}`}
          camera={{ near: 0.1, far: 1000, position: [0, 0, 5] }}>

          <Suspense fallback={<Loader />}>
            <Sky />
            <Island 
              position={screenPosition}
              scale={screenScale}
              rotation={rotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
            />
            <Bee 
              isRotating={isRotating}
              scale={beeScreenScale}
              position={beeScreenPosition}
              rotation={beeRotation}
            />
          </Suspense>
        </Canvas>
      {/* </div> */}
    </section>
  )
}

export default Home
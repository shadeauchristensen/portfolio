import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import Loader from '../Components/Loader'
import Island from '../Models/Island'
import Sky from '../Models/Sky'

const Home = () => {
const adjustIslandForScreenSize = () => {
  let screenScale = null
  let screenPosition = [-1.18, -8.95, -9.15] // Default position for larger screens
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

  return (
    <section className='w-full h-screen relative'>
      {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'> */}
        {/* <h1 className='text-5xl font-bold'>Welcome to My Portfolio</h1> */}
        <Canvas className='w-full h-full bg-transparent'>
          <Suspense fallback={<Loader />}>
            <Sky />
            <Island 
              position={screenPosition}
              scale={screenScale}
              rotation={rotation}
            />
          </Suspense>
        </Canvas>
      {/* </div> */}
    </section>
  )
}

export default Home
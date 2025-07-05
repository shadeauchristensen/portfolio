import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import Loader from '../Components/Loader'
import Island from '../Models/Island'
import Sky from '../Models/Sky'
import Bee from '../Models/Bee'
import HomeInfo from '../Components/HomeInfo'

const Home = () => {
const [isRotating, setIsRotating] = useState(false)
const [currentStage, setCurrentStage] = useState(null);
const [beeFacingLeft, setBeeFacingLeft] = useState(true);
const [rotationDirection, setRotationDirection] = useState(0);


const adjustIslandForScreenSize = () => {
  let screenScale = null
  let screenPosition = [-2.08, -4.855, -12.05] // Default position for larger screens
  let rotation = [0.51, 12.5, -0.01] // Default rotation

    if (window.innerWidth < 768) {
      screenScale = [0.6, 0.6, 0.6];  // Keep island visible but smaller on mobile
    } else {
      screenScale = [0.6, 0.6, 0.6];
    }

    return [screenPosition, screenScale, rotation]
  }

  const [screenPosition, screenScale, rotation] = adjustIslandForScreenSize()
  

const adjustBeeForScreenSize = () => {
  let beeScreenScale = [.7, 1, 1];   // consistent size across devices
  let beeScreenPosition = [0.25, 0.05, -0.05];
  let beeRotation = [0.0, -0.35, -0.05]; // initial rotation consistent across devices

  return [beeScreenPosition, beeScreenScale, beeRotation];
}

  const [beeScreenPosition, beeScreenScale, beeRotation] = adjustBeeForScreenSize()

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
        </div>
        <Canvas className={`w-full h-full bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
          camera={{ near: 0.1, far: 1000, position: [0, 0, 5] }}>

          <Suspense fallback={<Loader />}>
              <ambientLight intensity={1} />
              <directionalLight position={[0, 0, -2]} intensity={5.05} />
            <Sky 
              isRotating={isRotating}
              rotationDirection={rotationDirection}
              // setRotationDirection={setRotationDirection}
            />
            <Island 
              position={screenPosition}
              scale={screenScale}
              rotation={rotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              currentStage={currentStage}
              setCurrentStage={setCurrentStage}
              beeFacingLeft={beeFacingLeft}
              setBeeFacingLeft={setBeeFacingLeft}
              setRotationDirection={setRotationDirection} 
            />
            <Bee 
              beeFacingLeft={beeFacingLeft}
              isRotating={isRotating}
              scale={beeScreenScale}
              position={beeScreenPosition}
              rotation={beeRotation}
            />
          </Suspense>
        </Canvas>
    </section>
  )
}

export default Home
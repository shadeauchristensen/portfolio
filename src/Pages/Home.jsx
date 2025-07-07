import { useState, Suspense, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'

import Loader from '../Components/Loader'
import Island from '../Models/Island'
import Sky from '../Models/Sky'
import Bee from '../Models/Bee'
import HomeInfo from '../Components/HomeInfo'

import mixkit from '../assets/mixkit-brutal-mind-1090.mp3'

import SoundOn from '../assets/audio/SoundOn.png';
import SoundOff from '../assets/audio/SoundOff.png';

const Home = () => {
  const audioRef = useRef(new Audio(mixkit))
  audioRef.current.volume = 0.35
  audioRef.current.loop = true
const [isRotating, setIsRotating] = useState(false)
const [currentStage, setCurrentStage] = useState(null);
const [beeFacingLeft, setBeeFacingLeft] = useState(true);
const [rotationDirection, setRotationDirection] = useState(0);
const [audioPlaying, setAudioPlaying] = useState(false);

useEffect(() => {
  const audio = audioRef.current;

  const handlePlay = () => {
    if (audioPlaying) {
      audio.play().catch((err) => {
        console.error("Autoplay failed:", err);
      });
    } else {
      audio.pause();
    }
  };

  handlePlay(); // initial try on mount or state change

  return () => {
    audio.pause();
  };
}, [audioPlaying]);

const adjustIslandForScreenSize = () => {
  let screenScale = null
  let screenPosition = [-1.95, -7.95, -9.55] // Default position for larger screens
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
  let beeScreenScale = [0.7, 1, 1];   // consistent size across devices
  let beeScreenPosition = [0.25, -0.55, 0.05];
  let beeRotation = [-0.05, -0.03, -0.05]; // initial rotation consistent across devices

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
        <div className='absolute bottom-8 left-6'>
          <img src={!audioPlaying ? SoundOff : SoundOn} alt="Sound Toggle" className='w-10 h-10 object-contain' onClick={() => setAudioPlaying(!audioPlaying)} />
        </div>
    </section>
  )
}

export default Home
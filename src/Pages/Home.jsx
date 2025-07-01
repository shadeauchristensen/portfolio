import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../Components/Loader'

const Home = () => {
  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {/* <h1 className='text-5xl font-bold'>Welcome to My Portfolio</h1> */}
        <Canvas className='w-full h-full bg-transparent' camera = {{ near: 0.1, far: 1000, position: [0, 0, 5] }}>

          <Suspense fallback={<Loader />}>
            {/* Add your 3D components here */}
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Home
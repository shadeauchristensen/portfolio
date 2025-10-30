import { Html } from '@react-three/drei'

const Loader = () => {
  return (
    <Html>
        <div className='flex justify-center items-center'>
            <div className='w-20 h-20 border-2 border-opacity-80 border-red-900 border-t-blue-500 rounded-full animate-spin' />
        </div>
    </Html>
  )
}

export default Loader
import { Html, useProgress } from '@react-three/drei'

export default function WorkplaceLoader() {
  const { progress } = useProgress()

  return (
    <Html as='div' center>
      <h1 className='text-5xl text-gray-200'>
        {progress.toFixed(0)}
        <span className='text-2xl text-stone-700'>%</span>
      </h1>
    </Html>
  )
}

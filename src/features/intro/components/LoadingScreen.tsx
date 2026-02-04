import { useEffect } from 'react'

import { useProgress } from '@react-three/drei'

export default function LoadingScreen({ onLoaded }: { onLoaded: () => void }) {
  const { progress } = useProgress()

  useEffect(() => {
    if (progress.toFixed(0) === '100') onLoaded()
  }, [progress, onLoaded])

  return (
    <h1 className='text-5xl text-stone-200 font-semibold'>
      {progress.toFixed(0)}
      <span className='text-2xl text-stone-700 ml-1'>%</span>
    </h1>
  )
}

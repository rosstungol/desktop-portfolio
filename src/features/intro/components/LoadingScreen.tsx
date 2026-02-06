import { useProgress } from '@react-three/drei'
import { useEffect } from 'react'

export default function LoadingScreen({ onLoaded }: { onLoaded: () => void }) {
  const { progress } = useProgress()

  useEffect(() => {
    if (progress.toFixed(0) === '100') onLoaded()
  }, [progress, onLoaded])

  return (
    <h1 className='font-semibold text-5xl text-stone-200'>
      {progress.toFixed(0)}
      <span className='ml-1 text-2xl text-stone-700'>%</span>
    </h1>
  )
}

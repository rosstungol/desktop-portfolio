import { useProgress } from '@react-three/drei'
import { useEffect, useRef } from 'react'

export default function LoadingScreen({ onLoaded }: { onLoaded: () => void }) {
  const { progress } = useProgress()
  const hasLoadedRef = useRef(false)
  const progressRounded = Math.round(progress)

  useEffect(() => {
    if (progress >= 100 && !hasLoadedRef.current) {
      hasLoadedRef.current = true
      onLoaded()
    }
  }, [progress, onLoaded])

  return (
    <h1 className='font-semibold text-5xl text-stone-200'>
      {progressRounded}
      <span className='ml-1 text-2xl text-stone-700'>%</span>
    </h1>
  )
}

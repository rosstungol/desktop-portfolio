import { useProgress } from '@react-three/drei'
import { useEffect, useRef } from 'react'

export function LoadingScreen({ onLoaded }: { onLoaded: () => void }) {
	const progress = useProgress((state) => state.progress)
	const hasLoadedRef = useRef(false)
	const progressRounded = Math.round(progress)

	useEffect(() => {
		if (progress >= 100 && !hasLoadedRef.current) {
			hasLoadedRef.current = true
			onLoaded()
		}
	}, [progress, onLoaded])

	return (
		<div className='col-center'>
			<img src='/images/desktop.png' alt='desktop' className='mb-6 h-24' />
			<div className='progress-bar w-40'>
				<div className='fill h-full' style={{ width: `${progressRounded}%` }} />
			</div>
		</div>
	)
}

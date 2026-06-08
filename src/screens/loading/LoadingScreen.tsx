import { useProgress } from '@react-three/drei/core'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export function LoadingScreen({ onLoaded }: { onLoaded: () => void }) {
	const progress = useProgress((state) => state.progress)
	const hasLoadedRef = useRef(false)
	const loadingRef = useRef(null)

	const progressRounded = Math.round(progress)

	useEffect(() => {
		const el = loadingRef.current

		if (!el) return
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			gsap.set(el, { scale: 1, opacity: 1, y: 0 })
			return
		}

		if (progress >= 100 && !hasLoadedRef.current) {
			hasLoadedRef.current = true

			gsap.to(el, {
				opacity: 0,
				duration: 0.4,
				delay: 0.4,
				ease: 'power3.out',
				onComplete: () => onLoaded(),
			})
		}
	}, [progress, onLoaded])

	return (
		<div ref={loadingRef} className='col-center'>
			<img src='/images/desktop.avif' alt='desktop' className='mb-6 h-24' />
			<div
				className='h-1.5 w-40 overflow-hidden rounded border border-slate-800 bg-neutral-900'
				role='progressbar'
				aria-valuenow={progressRounded}
				aria-valuemin={0}
				aria-valuemax={100}
				aria-label='Loading progress'
			>
				<div
					className='h-full bg-slate-200'
					style={{ width: `${progressRounded}%` }}
				/>
			</div>
		</div>
	)
}

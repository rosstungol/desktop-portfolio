import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export function LoadingScreen({
	progress,
	onLoaded,
}: {
	progress: number
	onLoaded: () => void
}) {
	const hasLoadedRef = useRef(false)
	const loadingRef = useRef(null)

	const progressRounded = Math.round(progress)

	useEffect(() => {
		const el = loadingRef.current

		if (!el || hasLoadedRef.current) return
		if (progress < 100) return

		hasLoadedRef.current = true

		// Reduced motion skips the fade, but must still hand off — otherwise the
		// scene never starts and the overlay stays up forever.
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			onLoaded()
			return
		}

		gsap.to(el, {
			opacity: 0,
			duration: 0.4,
			delay: 0.4,
			ease: 'power3.out',
			onComplete: () => onLoaded(),
		})
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

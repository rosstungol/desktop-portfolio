import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { startTransition, useRef } from 'react'

import { DialogBox } from '@/components/ui/DialogBox'

export function StartScreen({ onStart }: { onStart: () => void }) {
	const startRef = useRef<HTMLDivElement | null>(null)

	useGSAP(() => {
		const el = startRef.current

		if (!el) return
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			gsap.set(el, { scale: 1, opacity: 1, y: 0 })
			return
		}

		gsap.fromTo(
			el,
			{
				scale: 0.8,
				opacity: 0,
				y: 40,
			},
			{
				scale: 1,
				opacity: 1,
				y: 0,
				duration: 0.4,
				ease: 'power3.out',
			}
		)
	}, [])

	return (
		<DialogBox
			ref={startRef}
			title='rosstungol.com'
			buttonText='enter'
			action={() => startTransition(onStart)}
		/>
	)
}

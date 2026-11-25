import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState } from 'react'

import { Monitor } from '@/components/icons/huge'
import { prefersReducedMotion } from '@/utils/prefersReducedMotion'

export function MobileToast() {
	const [visible, setVisible] = useState(true)
	const toastRef = useRef<HTMLDivElement | null>(null)

	useGSAP(() => {
		const el = toastRef.current
		if (!el) return

		const reduced = prefersReducedMotion()
		const tl = gsap.timeline({ onComplete: () => setVisible(false) })
		tl.fromTo(
			el,
			{ autoAlpha: 0, y: 12 },
			{
				autoAlpha: 1,
				y: 0,
				duration: reduced ? 0 : 0.3,
				ease: 'power2.out',
			}
		).to(
			el,
			{
				autoAlpha: 0,
				y: 12,
				duration: reduced ? 0 : 0.4,
				ease: 'power2.in',
			},
			'+=4'
		)

		return () => tl.kill()
	}, [])

	if (!visible) return null

	return (
		<div
			ref={toastRef}
			role='status'
			className='glass-bg card-border pointer-events-none fixed inset-x-0 bottom-8 z-20 mx-auto flex w-fit max-w-[calc(100vw-2rem)] items-center gap-3 rounded-xl px-4 py-2 text-neutral-200 select-none'
		>
			<span className='flex-center size-8 shrink-0 rounded-lg bg-slate-600/20'>
				<Monitor size={18} />
			</span>
			<p className='font-mono text-xs leading-snug font-medium text-pretty'>
				Full interactive experience on laptop or desktop.
			</p>
		</div>
	)
}

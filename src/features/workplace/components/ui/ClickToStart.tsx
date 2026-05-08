import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
// @ts-expect-error React canary: ViewTransition not typed yet (remove when stable version is available)
import { useRef, ViewTransition } from 'react'

gsap.registerPlugin(TextPlugin)

const FULL_TEXT = 'click anywhere to start'

export function ClickToStart() {
	const textRef = useRef<HTMLSpanElement | null>(null)

	useGSAP(() => {
		const el = textRef.current
		if (!el) return

		gsap.killTweensOf(el)

		gsap.fromTo(
			el,
			{ text: '' },
			{
				text: FULL_TEXT,
				duration: 1.5,
				ease: 'none',
			}
		)

		return () => {
			gsap.killTweensOf(el)
		}
	}, [])

	return (
		<ViewTransition>
			<div className='glass-bg card-border fixed bottom-28 left-1/2 z-20 w-max -translate-x-1/2 rounded-xl px-4 pt-1.5 pb-2.5 text-gray-200'>
				<p className='font-bold font-mono text-sm md:text-base'>
					<span ref={textRef} className='mr-1' />
					<span className='cursor text-xl'>▊</span>
				</p>
			</div>
		</ViewTransition>
	)
}

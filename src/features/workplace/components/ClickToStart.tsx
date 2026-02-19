import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

// @ts-expect-error React canary: ViewTransition not typed yet (remove when stable version is available)
import { useRef, ViewTransition } from 'react'

gsap.registerPlugin(TextPlugin)

const FULL_TEXT = 'click anywhere to start'

export default function ClickToStart() {
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
			<div className='card-container fixed bottom-28 left-1/2 z-20 w-max -translate-x-1/2 px-4 py-2 text-sm md:bottom-28 md:text-base'>
				<p>
					<span ref={textRef} />
					<span className='cursor'>_</span>
				</p>
			</div>
		</ViewTransition>
	)
}

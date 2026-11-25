import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { useRef, ViewTransition } from 'react'

import { prefersReducedMotion } from '@/utils/prefersReducedMotion'

gsap.registerPlugin(TextPlugin)

type SceneInstructionProps = {
	text: string
}

export function SceneInstruction({ text }: SceneInstructionProps) {
	const textRef = useRef<HTMLSpanElement | null>(null)

	useGSAP(() => {
		const el = textRef.current
		if (!el) return

		gsap.killTweensOf(el)

		if (prefersReducedMotion()) {
			el.textContent = text
			return
		}

		gsap.fromTo(
			el,
			{ text: '' },
			{
				text,
				duration: 1.5,
				ease: 'none',
			}
		)

		return () => {
			gsap.killTweensOf(el)
		}
	}, [text])

	return (
		<ViewTransition>
			<div className='glass-bg card-border pointer-events-none fixed bottom-28 left-1/2 z-20 flex w-max -translate-x-1/2 items-center rounded-xl px-4 pt-2 pb-3 text-neutral-200'>
				<p className='font-mono text-sm leading-none font-bold md:text-base'>
					<span ref={textRef} className='mr-1.5' />
					<span className='cursor text-xl'>▊</span>
				</p>
			</div>
		</ViewTransition>
	)
}

import gsap from 'gsap'
import { ChevronsRight } from 'lucide-react'
import { useRef, useState } from 'react'

import { AboutContent } from './AboutContent'

export function AboutScreen() {
	const [aboutIntro, setAboutIntro] = useState<boolean>(true)
	const introRef = useRef<HTMLDivElement>(null)

	const handleFadeOut = () => {
		gsap.to(introRef.current, {
			opacity: 0,
			duration: 0.5,
			ease: 'power3.out',
			onComplete: () => setAboutIntro(false),
		})
	}

	return (
		<section className='h-fit bg-neutral-950'>
			{aboutIntro && (
				<div
					ref={introRef}
					className='fixed top-[54px] bottom-20 left-0 z-30 h-full w-full flex-center bg-neutral-950'
				>
					<div className='noise h-full w-full flex-col text-center'>
						<h3 className='mt-80 mb-2 font-black font-display text-8xl tracking-tight'>
							Ross Tungol
						</h3>
						<p className='mb-10 font-light text-4xl'>Front-end Engineer</p>
						<button
							type='button'
							aria-label='Dismiss intro'
							onClick={() => handleFadeOut()}
							className='cursor-pointer border border-slate-100 p-2 transition-colors hover:bg-slate-100 hover:text-neutral-950'
						>
							<ChevronsRight size={40} />
						</button>
					</div>
				</div>
			)}

			<AboutContent />
		</section>
	)
}

import gsap from 'gsap'
import { ChevronsRight } from 'lucide-react'
import { useRef, useState } from 'react'

import { GridBackground } from '@/components/about/GridBackground'
import { AboutGrid } from '@/screens/about/AboutGrid'

import { WindowHeader } from '../wrapper/WindowHeader'
import { WindowWrapper } from '../wrapper/WindowWrapper'

function About() {
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
		<>
			<WindowHeader title='About' target='about' />
			<div className='h-[900px] w-[1800px]'>
				<div className='h-fit bg-neutral-950'>
					{aboutIntro && (
						<div
							ref={introRef}
							className='fixed top-[54px] bottom-0 left-0 z-30 w-full flex-center bg-neutral-950'
						>
							<div className='noise grid-bg z-10 h-full w-full flex-col text-center'>
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
							<GridBackground />
						</div>
					)}
					<AboutGrid />
				</div>
			</div>
		</>
	)
}

export const AboutWindow = WindowWrapper(About, 'about')

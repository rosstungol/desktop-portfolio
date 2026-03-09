import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { startTransition, useRef } from 'react'

import { Button } from '@/components/Button'

export function StartScreen({ onStart }: { onStart: () => void }) {
	const ref = useRef<HTMLDivElement | null>(null)

	useGSAP(() => {
		const el = ref.current

		if (!el) return

		el.style.display = 'block'

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
				duration: 0.6,
				ease: 'power3.out',
			}
		)
	}, [])

	const handleStartTransition = () => {
		startTransition(onStart)
	}

	return (
		<div ref={ref} className='card-container col-center m-4 min-w-56 max-w-96'>
			<div className='border-blue-500/10 border-b p-4'>
				<h1 className='text-center font-bold font-roboto'>rosstungol.com</h1>
			</div>
			<div className='p-4 sm:px-8 sm:py-6'>
				<Button className='w-full' onClick={handleStartTransition}>
					enter
				</Button>
			</div>
		</div>
	)
}

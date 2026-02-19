import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { Tooltip } from 'react-tooltip'
import { dockApps } from '@/data/constants'

export default function Dock() {
	const dockRef = useRef<HTMLDivElement | null>(null)

	const toggleApp = () => {}

	useGSAP(() => {
		const dock = dockRef.current
		if (!dock) return

		const icons = dock.querySelectorAll('.dock-icon')

		const animateIcons = (mouseX: number) => {
			const { left } = dock.getBoundingClientRect()

			icons.forEach((icon) => {
				const { left: iconLeft, width } = icon.getBoundingClientRect()
				const center = iconLeft - left + width / 2
				const distance = Math.abs(mouseX - center)
				const intensity = Math.exp(-(distance ** 2.5) / 20000)

				gsap.to(icon, {
					scale: 1 + 0.25 * intensity,
					y: -8 * intensity,
					duration: 0.2,
					ease: 'power1.out',
				})
			})
		}

		const handleMouseMove = (e: MouseEvent) => {
			const { left } = dock.getBoundingClientRect()

			animateIcons(e.clientX - left)
		}

		const resetIcons = () =>
			icons.forEach((icon) => {
				gsap.to(icon, {
					scale: 1,
					y: 0,
					duration: 0.3,
					ease: 'power1.out',
				})
			})

		dock.addEventListener('mousemove', handleMouseMove)
		dock.addEventListener('mouseleave', resetIcons)

		return () => {
			dock.removeEventListener('mousemove', handleMouseMove)
			dock.removeEventListener('mouseleave', resetIcons)
		}
	}, [])

	return (
		<section className='absolute bottom-1.5 left-1/2 -translate-x-1/2'>
			<div ref={dockRef} className='card-container flex items-center gap-1 p-1'>
				{dockApps.map(({ id, name, icon }) => (
					<div key={id} className='flex-center'>
						<button
							type='button'
							aria-label={name}
							data-tooltip-id='dock-tooltip'
							data-tooltip-content={name}
							onClick={() => toggleApp()}
							className='dock-icon'
						>
							<img
								src={`/icons/${icon}`}
								alt={name}
								loading='lazy'
								className='size-10'
							/>
						</button>
					</div>
				))}
				<div className='h-10 w-px bg-stone-200/30' />
				<div key='trash' className='flex-center'>
					<button
						type='button'
						aria-label='Trash'
						data-tooltip-id='dock-tooltip'
						data-tooltip-content='Trash'
						onClick={() => toggleApp()}
						className='dock-icon'
					>
						<img
							src={`/icons/trash.png`}
							alt='Trash'
							loading='lazy'
							className='size-9'
						/>
					</button>
				</div>
				<Tooltip id='dock-tooltip' place='top' className='tooltip' />
			</div>
		</section>
	)
}

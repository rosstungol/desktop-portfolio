import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { Tooltip } from 'react-tooltip'
import { useShallow } from 'zustand/shallow'

import { dockApps } from '../../data/constants'
import { locations } from '../../data/constants/locations'
import type { WindowKey } from '../../data/types'
import { useLocationStore } from '../../stores/location'
import { useWindowStore } from '../../stores/window'

export function Dock() {
	const { windows, openWindow, focusWindow } = useWindowStore(
		useShallow((state) => ({
			windows: state.windows,
			openWindow: state.openWindow,
			focusWindow: state.focusWindow,
		}))
	)

	const setActiveLocation = useLocationStore((state) => state.setActiveLocation)
	const dockRef = useRef<HTMLDivElement | null>(null)

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

	const handleAppToggle = (id: WindowKey, finderLocation?: 'trash') => {
		const appWindow = windows[id]

		if (id === 'finder' && finderLocation === 'trash') {
			setActiveLocation(locations.trash)
			appWindow.isOpen ? focusWindow('finder') : openWindow('finder')
		} else if (appWindow.isOpen) {
			focusWindow(id)
		} else {
			openWindow(id)
		}
	}

	return (
		<section className='absolute bottom-1.5 left-1/2 -translate-x-1/2 select-none'>
			<div
				ref={dockRef}
				className='glass-bg dock-border flex items-center gap-2 rounded-2xl p-1.5'
			>
				{dockApps.map(({ id, name, icon }) => (
					<div key={id} className='flex-center'>
						<button
							type='button'
							aria-label={name}
							data-tooltip-id='dock-tooltip'
							data-tooltip-content={name}
							onClick={() => handleAppToggle(id)}
							className='dock-icon z-10'
						>
							<img
								src={`/desktop/icons/${icon}`}
								alt={name}
								className='size-18'
							/>
						</button>
					</div>
				))}

				<div className='h-16 w-0.5 bg-neutral-200/40' />

				<div className='flex-center'>
					<button
						type='button'
						aria-label='Trash'
						data-tooltip-id='dock-tooltip'
						data-tooltip-content='Trash'
						onClick={() => handleAppToggle('finder', 'trash')}
						className='dock-icon z-10'
					>
						<img
							src={`/desktop/icons/trash.png`}
							alt='Trash'
							className='size-18'
						/>
					</button>
				</div>
				<Tooltip
					id='dock-tooltip'
					place='top'
					className='rounded! px-3! py-1! text-lg!'
				/>
			</div>
		</section>
	)
}

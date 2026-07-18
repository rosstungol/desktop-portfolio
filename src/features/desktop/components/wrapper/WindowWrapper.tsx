import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { useLayoutEffect, useRef } from 'react'
import { useShallow } from 'zustand/react/shallow'

import type { WindowKey } from '../../data/types'
import { useWindowStore } from '../../stores/window'

gsap.registerPlugin(Draggable)

export function WindowWrapper<P extends object>(
	Component: React.ComponentType<P>,
	windowKey: WindowKey
) {
	const Wrapped = (props: P) => {
		const { windows, focusWindow } = useWindowStore(
			useShallow((state) => ({
				windows: state.windows,
				focusWindow: state.focusWindow,
			}))
		)
		const ref = useRef<HTMLDivElement | null>(null)
		const { isOpen, isMinimized, zIndex } = windows[windowKey]

		useGSAP(() => {
			const el = ref.current

			if (!el) return

			if (!isOpen) return

			gsap.killTweensOf(el)

			if (isMinimized) {
				gsap.to(el, {
					scale: 0.5,
					opacity: 0,
					duration: 0.2,
					ease: 'power2.in',
					onComplete: () => {
						el.style.display = 'none'
					},
				})
			} else {
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
						duration: 0.3,
						ease: 'power3.out',
					}
				)
			}
		}, [isOpen, isMinimized])

		useGSAP(() => {
			const el = ref.current

			if (!el) return

			const [instance] = Draggable.create(el, {
				onPress: () => focusWindow(windowKey),
				bounds: '.desktop-container',
				dragClickables: false,
				allowEventDefault: true,
			})

			return () => instance.kill()
		}, [])

		useLayoutEffect(() => {
			const el = ref.current

			if (!el) return

			if (!isOpen) {
				el.style.display = 'none'
			}
		}, [isOpen])

		const windowPosition = {
			zIndex,
			top:
				windowKey === 'about' ? '40px' : windowKey === 'resume' ? '0' : '100px',
		}

		return (
			<section
				id={windowKey}
				ref={ref}
				style={windowPosition}
				className='glass-bg card-border absolute left-1/2 min-h-50 min-w-125 -translate-x-1/2 overflow-hidden rounded-2xl bg-neutral-900/85 text-neutral-200 shadow-xl'
			>
				<Component {...props} />
			</section>
		)
	}

	Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`

	return Wrapped
}

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { useLayoutEffect, useRef } from 'react'
import { useShallow } from 'zustand/shallow'

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
		const { isOpen, zIndex } = windows[windowKey]
		const ref = useRef<HTMLDivElement | null>(null)

		useGSAP(() => {
			const el = ref.current

			if (!el || !isOpen) return

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
		}, [isOpen])

		useGSAP(() => {
			const el = ref.current

			if (!el) return

			const [instance] = Draggable.create(el, {
				onPress: () => focusWindow(windowKey),
				bounds: '.desktop-container',
			})

			return () => instance.kill()
		}, [])

		useLayoutEffect(() => {
			const el = ref.current

			if (!el) return

			el.style.display = isOpen ? 'block' : 'none'
		}, [isOpen])

		return (
			<section
				id={windowKey}
				ref={ref}
				style={{ zIndex }}
				className='card-container -dark abs-center min-h-60 min-w-60 shadow-xl'
			>
				<Component {...props} />
			</section>
		)
	}

	Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`

	return Wrapped
}

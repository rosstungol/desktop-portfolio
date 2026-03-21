import { Banana } from 'lucide-react'

import { INITIAL_Z_INDEX, useWindowStore } from '../../stores/window'
import { DigitalClock } from '../ui/DigitalClock'

export function Navbar() {
	const windows = useWindowStore((state) => state.windows)

	const windowsZIndex = Object.entries(windows).map((item) => {
		return { window: item[0], zIndex: item[1].zIndex }
	})

	const topWindow = windowsZIndex.reduce((prev, current) => {
		return prev.zIndex > current.zIndex ? prev : current
	})

	const navHeader =
		topWindow.zIndex === INITIAL_Z_INDEX ? 'finder' : topWindow.window

	return (
		<nav className='glass flex w-full items-center justify-between border-blue-500/10 border-b px-4 py-0.5 text-gray-200 text-xs'>
			<div className='flex items-center gap-2 font-bold'>
				<Banana size={10} />
				<h3 className='capitalize'>{navHeader}</h3>
			</div>
			<DigitalClock />
		</nav>
	)
}

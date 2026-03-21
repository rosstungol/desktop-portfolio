import { Banana } from 'lucide-react'

import { useWindowStore } from '../../stores/window'
import { DigitalClock } from '../ui/DigitalClock'

export function Navbar() {
	const windows = useWindowStore((state) => state.windows)

	const openWindows = Object.entries(windows)
		.filter(([, state]) => state.isOpen)
		.map(([key, state]) => ({ window: key, zIndex: state.zIndex }))

	const topWindow =
		openWindows.length > 0
			? openWindows.reduce((prev, curr) =>
					curr.zIndex > prev.zIndex ? curr : prev
				)
			: null

	const navHeading = topWindow?.window ?? 'finder'

	return (
		<nav className='glass flex w-full items-center justify-between border-blue-500/10 border-b px-4 py-0.5 text-gray-200 text-xs'>
			<div className='flex items-center gap-2 font-bold'>
				<Banana size={10} />
				<h3 className='capitalize'>{navHeading}</h3>
			</div>
			<DigitalClock />
		</nav>
	)
}

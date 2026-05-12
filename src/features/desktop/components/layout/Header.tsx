import { Banana } from 'lucide-react'

import { useWindowStore } from '../../stores/window'
import { DigitalClock } from '../ui/DigitalClock'

export function Header() {
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

	const title = topWindow?.window ?? 'finder'

	return (
		<header className='glass-bg flex w-full select-none items-center justify-between px-10 py-2 text-neutral-200 text-xl'>
			<div className='flex items-center gap-6 font-bold'>
				<Banana size={22} />
				<h1 className='capitalize'>{title}</h1>
			</div>
			<DigitalClock />
		</header>
	)
}

import { Banana } from '@/components/icons/huge'

import { useWindowStore } from '../../stores/window'
import { getWindowTitle } from '../../utils/getWindowTitle'
import { DigitalClock } from '../ui/DigitalClock'

export function Header() {
	const windows = useWindowStore((state) => state.windows)
	const title = getWindowTitle(windows)

	return (
		<header className='glass-bg flex w-full items-center justify-between px-10 py-2 text-xl text-neutral-200 select-none'>
			<div className='flex items-center gap-6 font-bold'>
				<Banana size={22} />
				<h1>{title}</h1>
			</div>
			<DigitalClock />
		</header>
	)
}

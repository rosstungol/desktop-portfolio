import { Banana } from 'lucide-react'

import { DigitalClock } from '../ui/DigitalClock'

export function Navbar() {
	return (
		<nav className='glass flex w-full items-center justify-between border-blue-500/10 border-b px-4 py-0.5 text-gray-200 text-xs'>
			<div className='flex items-center gap-2 font-bold'>
				<Banana size={10} />
				<p>Ross Tungol</p>
			</div>
			<DigitalClock />
		</nav>
	)
}

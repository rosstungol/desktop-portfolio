import { Banana } from 'lucide-react'
import DigitalClock from './DigitalClock'

export default function Navbar() {
	return (
		<nav className='glass flex w-full items-center justify-between px-4 py-0.5 text-stone-200 text-xs'>
			<div className='flex items-center gap-2 font-bold'>
				<Banana size={10} />
				<p>Ross Tungol</p>
			</div>
			<DigitalClock />
		</nav>
	)
}

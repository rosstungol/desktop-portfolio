import { SquareArrowOutUpRight } from 'lucide-react'

import { playground } from '@/data/constants/projects'

import { useWindowStore } from '../../stores/window'
import { WindowHeader } from '../wrapper/WindowHeader'
import { WindowWrapper } from '../wrapper/WindowWrapper'

function LowOrbit() {
	const lowOrbitIsOpen = useWindowStore(
		(state) => state.windows.lowOrbit.isOpen
	)

	return (
		<>
			<WindowHeader title='Low Orbit' target='lowOrbit' />
			{lowOrbitIsOpen && (
				<div className='relative h-225 w-450'>
					<iframe
						title='Low Orbit'
						src={playground.lowOrbit.url}
						className='h-full w-full'
						sandbox='allow-scripts'
					/>
					<a
						href={playground.lowOrbit.url}
						target='_blank'
						rel='noopener noreferrer'
						className='absolute right-4 bottom-4 flex items-center gap-2 font-bold font-mono text-xl drop-shadow drop-shadow-neutral-900/50'
					>
						Open in new tab
						<SquareArrowOutUpRight size={18} />
					</a>
				</div>
			)}
		</>
	)
}

export const LowOrbitWindow = WindowWrapper(LowOrbit, 'lowOrbit')

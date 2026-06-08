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
				<div className='h-225 w-450'>
					<iframe
						title='Low Orbit'
						src={playground.lowOrbit.url}
						className='h-full w-full'
						sandbox='allow-scripts'
					/>
				</div>
			)}
		</>
	)
}

export const LowOrbitWindow = WindowWrapper(LowOrbit, 'lowOrbit')

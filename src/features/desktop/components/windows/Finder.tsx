import { locations } from '../../data/constants'
import { useLocationStore } from '../../stores/location'
import { FinderMenu } from '../ui/FinderMenu'
import { IconList } from '../ui/IconList'
import { WindowHeader } from '../wrapper/WindowHeader'
import { WindowWrapper } from '../wrapper/WindowWrapper'

function Finder() {
	const activeLocation = useLocationStore((state) => state.activeLocation)

	return (
		<>
			<WindowHeader title='Finder' target='finder' />
			<div className='flex h-80 w-[520px]'>
				<div className='m-1 w-32 rounded-xl border border-blue-500/10 bg-gray-600/10 p-2'>
					<FinderMenu name='Favorites' items={Object.values(locations)} />
				</div>

				<div className='w-full'>
					{activeLocation && (
						<IconList location={activeLocation} type='finder' />
					)}
				</div>
			</div>
		</>
	)
}

export const FinderWindow = WindowWrapper(Finder, 'finder')

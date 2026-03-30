import { locations } from '../../data/constants/locations'
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
			<div className='flex h-[700px] w-[1200px]'>
				<aside className='m-3 w-72 rounded-2xl border border-blue-500/10 bg-gray-600/10 p-4'>
					<FinderMenu name='Favorites' items={Object.values(locations)} />
					<FinderMenu
						name='Projects'
						items={locations.projects.children ?? []}
					/>
				</aside>
				<div className='w-full'>
					<IconList items={activeLocation?.children ?? []} location='finder' />
				</div>
			</div>
		</>
	)
}

export const FinderWindow = WindowWrapper(Finder, 'finder')

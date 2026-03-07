import { locations } from '../../data/constants'
import { WindowHeader } from '../wrapper/WindowHeader'
import { WindowWrapper } from '../wrapper/WindowWrapper'
import { FinderContent } from './FinderContent'
import { FinderMenu } from './FinderMenu'

function Finder() {
	return (
		<>
			<WindowHeader title='Finder' target='finder' />
			<div className='flex h-80 w-[520px]'>
				<div className='m-1 w-32 rounded-xl border border-blue-500/10 bg-gray-600/10 p-2'>
					<FinderMenu name='Favorites' items={Object.values(locations)} />
				</div>

				<div className='relative w-full'>
					<FinderContent />
				</div>
			</div>
		</>
	)
}

export const FinderWindow = WindowWrapper(Finder, 'finder')

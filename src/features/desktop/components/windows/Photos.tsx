import { photos } from '../../data/constants'
import { useWindowStore } from '../../stores/window'
import { WindowHeader } from '../wrapper/WindowHeader'
import { WindowWrapper } from '../wrapper/WindowWrapper'

function Photos() {
	const openWindow = useWindowStore((state) => state.openWindow)

	return (
		<>
			<WindowHeader title='Photos' target='photos' />
			<ul className='grid max-h-96 w-[480px] grid-cols-3 gap-2 overflow-y-auto rounded-b-2xl bg-gray-900/80 p-3'>
				{photos.map((item) => (
					<li key={item.id} className='h-40 overflow-hidden rounded'>
						<button
							type='button'
							onClick={() => openWindow('image', item)}
							aria-label={`View ${item.name}`}
							className='h-full w-full cursor-pointer'
						>
							<img
								src={item.fileContent.image}
								alt={item.name}
								loading='lazy'
								decoding='async'
								className='h-full w-full object-cover'
								onError={(e) => {
									if (e.currentTarget.src.endsWith('placeholder.avif')) return
									e.currentTarget.src = '/desktop/images/placeholder.avif'
								}}
							/>
						</button>
					</li>
				))}
			</ul>
		</>
	)
}

export const PhotosWindow = WindowWrapper(Photos, 'photos')

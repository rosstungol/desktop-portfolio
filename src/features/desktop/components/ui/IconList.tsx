import clsx from 'clsx'
import type { LocationChild, WindowLocation } from '../../data/types'
import { useWindowStore } from '../../stores/window'

export function IconList({
	location,
	desktop,
}: {
	location: WindowLocation
	desktop: boolean
}) {
	const openWindow = useWindowStore((state) => state.openWindow)

	const openItem = (item: LocationChild) => {
		switch (item.name) {
			case 'Resume':
				return openWindow('resume')
			case 'Contact':
				return openWindow('contact')
			default:
				throw new Error('Unknown item type')
		}
	}

	return (
		<ul>
			{location.children.map((item) => (
				<li
					key={item.id}
					className={clsx(
						'absolute',
						desktop ? item.desktopPosition : item.finderPosition
					)}
				>
					<button
						type='button'
						onClick={() => openItem(item)}
						className='col-center'
					>
						<img
							src={`/desktop/icons/${item.icon}`}
							alt={item.name}
							className='size-10'
						/>
						<p
							className={clsx(
								'text-[10px] text-gray-200',
								desktop && 'drop-shadow drop-shadow-gray-900'
							)}
						>
							{item.name}
						</p>
					</button>
				</li>
			))}
		</ul>
	)
}

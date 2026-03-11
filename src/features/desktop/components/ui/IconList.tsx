import clsx from 'clsx'

import type { IconItem, LocationItem } from '../../data/types'
import { useLocationStore } from '../../stores/location'
import { useWindowStore } from '../../stores/window'

type IconListProps = {
	items: IconItem[]
	location: 'desktop' | 'finder'
}

export function IconList({ items, location }: IconListProps) {
	const openWindow = useWindowStore((state) => state.openWindow)
	const setActiveLocation = useLocationStore((state) => state.setActiveLocation)

	const openItem = (item: LocationItem) => {
		if (item.type === 'url') return window.open(item.href, '_blank')
		if (item.type === 'folder') setActiveLocation(item)
		if (item.type === 'resume') openWindow('resume')
		if (item.type === 'contact') openWindow('contact')
		if (item.type === 'imageFile') openWindow(item.type, item)
		if (item.type === 'textFile') openWindow(item.type, item)
	}

	return (
		<ul className='relative'>
			{items?.map((item) => (
				<li
					key={item.id}
					className={clsx(
						'absolute',
						location === 'desktop' && item.desktopPosition
							? item.desktopPosition
							: item.finderPosition
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
								location === 'desktop' && 'drop-shadow drop-shadow-gray-900'
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

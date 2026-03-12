import clsx from 'clsx'

import type { LocationItem } from '../../data/types'
import { useLocationStore } from '../../stores/location'
import { useWindowStore } from '../../stores/window'

type IconListProps = {
	items: LocationItem[]
	location: 'desktop' | 'finder'
}

export function IconList({ items, location }: IconListProps) {
	const openWindow = useWindowStore((state) => state.openWindow)
	const setActiveLocation = useLocationStore((state) => state.setActiveLocation)

	const openItem = (item: LocationItem) => {
		if (item.type === 'url') return window.open(item.href, '_blank')
		if (item.type === 'folder') setActiveLocation(item)
		if (item.type === 'imageFile' || item.type === 'textFile')
			openWindow(item.type, item)
		if (
			item.type === 'finder' ||
			item.type === 'safari' ||
			item.type === 'contact' ||
			item.type === 'photos' ||
			item.type === 'terminal' ||
			item.type === 'resume'
		) {
			openWindow(item.type)
		}
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
						className='col-center size-18'
					>
						{item.icon && (
							<img
								src={`/desktop/icons/${item.icon}`}
								alt={item.name}
								className='size-10'
							/>
						)}
						<p
							className={clsx(
								'w-18 truncate text-[10px] text-gray-200',
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

import clsx from 'clsx'

import type { LocationItem } from '../../data/types'
import { useLocationStore } from '../../stores/location'
import { useWindowStore } from '../../stores/window'

type IconListProps = {
	items: LocationItem[] | undefined
	type: 'desktop' | 'finder'
}

export function IconList({ items, type }: IconListProps) {
	const openWindow = useWindowStore((state) => state.openWindow)
	const setActiveLocation = useLocationStore((state) => state.setActiveLocation)

	const openItem = (item: LocationItem) => {
		if (item.window === 'finder') setActiveLocation(item)
		if (item.window === 'resume') openWindow('resume')
		if (item.window === 'contact') openWindow('contact')
		if (item.window === 'imageFile') openWindow(item.window, item)
		if (item.window === 'textFile') openWindow(item.window, item)
		if (item.type === 'url') return window.open(item.href, '_blank')
	}

	return (
		<ul className='relative'>
			{items?.map((item) => (
				<li
					key={item.id}
					className={clsx(
						'absolute',
						type === 'desktop' && item.desktopPosition
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
								type === 'desktop' && 'drop-shadow drop-shadow-gray-900'
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

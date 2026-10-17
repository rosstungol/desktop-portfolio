import { cn } from '@/utils/cn'

import type { LocationItem } from '../../data/types'
import { useLocationStore } from '../../stores/location'
import { useWindowStore } from '../../stores/window'
import { resolveItemAction } from '../../utils/resolveItemAction'

type IconListProps = {
	items: LocationItem[]
	location: 'desktop' | 'finder'
}

export function IconList({ items, location }: IconListProps) {
	const openWindow = useWindowStore((state) => state.openWindow)
	const setActiveLocation = useLocationStore((state) => state.setActiveLocation)

	const openItem = (item: LocationItem) => {
		const action = resolveItemAction(item)

		if (action.kind === 'openUrl')
			window.open(action.href, '_blank', 'noopener,noreferrer')
		else if (action.kind === 'setLocation') setActiveLocation(action.item)
		else if (action.kind === 'openWindow') openWindow(action.key, action.data)
	}

	return (
		<ul className='relative select-none'>
			{items?.map((item) => (
				<li
					key={item.id}
					className={cn(
						'absolute',
						location === 'desktop' && item.desktopPosition
							? item.desktopPosition
							: item.finderPosition
					)}
				>
					<button
						type='button'
						onClick={() => openItem(item)}
						title={item.name}
						className='col-center size-28'
					>
						{item.icon && (
							<img
								src={`/desktop/icons/${item.icon}`}
								alt={item.name}
								className='size-20'
							/>
						)}
						<p
							className={cn(
								'w-32 truncate text-neutral-200 text-xl',
								location === 'desktop' && 'drop-shadow drop-shadow-neutral-900'
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

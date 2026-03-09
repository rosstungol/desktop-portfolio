import clsx from 'clsx'
import type { WindowLocation } from '../../data/types'
import { useWindowStore } from '../../stores/window'

type IconListProps = {
	location: WindowLocation
	type: 'desktop' | 'finder'
}

export function IconList({ location, type }: IconListProps) {
	const openWindow = useWindowStore((state) => state.openWindow)

	return (
		<ul className='relative'>
			{location.children.map((item) => (
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
						onClick={() => openWindow(item.window)}
						className='col-center'
					>
						<img
							src={`/desktop/icons/${item.icon}`}
							alt=''
							aria-hidden='true'
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

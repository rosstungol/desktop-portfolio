import clsx from 'clsx'
import { useShallow } from 'zustand/shallow'

import type { WindowLocation } from '../../data/types'
import { useLocationStore } from '../../stores/location'

export function FinderMenu({
	name,
	items,
}: {
	name: string
	items: WindowLocation[]
}) {
	const { activeLocation, setActiveLocation } = useLocationStore(
		useShallow((state) => ({
			activeLocation: state.activeLocation,
			setActiveLocation: state.setActiveLocation,
		}))
	)

	if (activeLocation == null) return null

	return (
		<div>
			<h3 className='mb-1 font-semibold text-[10px] text-gray-400'>{name}</h3>
			<ul className='flex flex-col gap-1'>
				{items.map((item: WindowLocation) => {
					return (
						<li key={item.id}>
							<button
								type='button'
								onClick={() => setActiveLocation(item)}
								className={clsx(
									'flex w-full items-center gap-1 rounded p-1 text-[10px]',
									'transition-colors hover:bg-blue-500/10',
									item.id === activeLocation.id &&
										'bg-blue-500/10 text-blue-400'
								)}
							>
								<item.Icon size={12} />
								<p className='font-semibold'>{item.name}</p>
							</button>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

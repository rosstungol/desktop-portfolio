import clsx from 'clsx'
import { useShallow } from 'zustand/shallow'

import type { MenuItem } from '../../data/types'
import { useLocationStore } from '../../stores/location'

export function FinderMenu({
	name,
	items,
}: {
	name: string
	items: MenuItem[]
}) {
	const { activeLocation, setActiveLocation } = useLocationStore(
		useShallow((state) => ({
			activeLocation: state.activeLocation,
			setActiveLocation: state.setActiveLocation,
		}))
	)

	return (
		<div className='mb-3'>
			<h3 className='mb-1 font-semibold text-[10px] text-gray-400'>{name}</h3>
			<ul className='flex flex-col gap-0.5'>
				{items?.map((item) => (
					<li key={item.id}>
						<button
							type='button'
							onClick={() => setActiveLocation(item)}
							aria-pressed={item.id === activeLocation?.id}
							className={clsx(
								'flex w-full items-center gap-1 rounded p-1 text-[10px]',
								'transition-colors hover:bg-blue-500/10',
								item.id === activeLocation?.id && 'bg-blue-500/10 text-blue-400'
							)}
						>
							{item.Icon && <item.Icon size={12} />}
							<span className='font-semibold text-[10px]'>{item.name}</span>
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}

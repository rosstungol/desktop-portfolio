import { useShallow } from 'zustand/shallow'

import { cn } from '@/utils/cn'

import type { LocationItem } from '../../data/types'
import { useLocationStore } from '../../stores/location'

type FinderMenuProps = {
	name: string
	items: LocationItem[]
}

export function FinderMenu({ name, items }: FinderMenuProps) {
	const { activeLocation, setActiveLocation } = useLocationStore(
		useShallow((state) => ({
			activeLocation: state.activeLocation,
			setActiveLocation: state.setActiveLocation,
		}))
	)

	return (
		<div className='mb-8'>
			<h2 className='mb-2 font-semibold text-gray-400 text-xl'>{name}</h2>
			<ul className='flex flex-col gap-2'>
				{items?.map((item) => (
					<li key={item.id}>
						<button
							type='button'
							onClick={() => setActiveLocation(item)}
							aria-pressed={item.id === activeLocation?.id}
							className={cn(
								'flex w-full items-center gap-2 rounded-xl px-4 py-2',
								'transition-colors hover:bg-blue-500/10',
								item.id === activeLocation?.id && 'bg-blue-500/10 text-blue-400'
							)}
						>
							{item.Icon && <item.Icon size={20} />}
							<span className='font-semibold text-xl'>{item.name}</span>
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}

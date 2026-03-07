import { useShallow } from 'zustand/shallow'

import type { LocationChild } from '../../data/types'
import { useLocationStore } from '../../stores/location'
import { useWindowStore } from '../../stores/window'

export function FinderContent() {
	const { openWindow } = useWindowStore()

	const { activeLocation } = useLocationStore(
		useShallow((state) => ({
			activeLocation: state.activeLocation,
			setActiveLocation: state.setActiveLocation,
		}))
	)

	const openItem = (item: LocationChild) => {
		if (item.name === 'Resume') return openWindow('resume')
		if (item.name === 'Contact') return openWindow('contact')
	}

	return (
		<ul>
			{activeLocation?.children.map((item) => (
				<li key={item.id} className={item.finderPosition}>
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
						<p className='text-[10px]'>{item.name}</p>
					</button>
				</li>
			))}
		</ul>
	)
}

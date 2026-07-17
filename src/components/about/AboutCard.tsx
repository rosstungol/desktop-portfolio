import { aboutText } from '@/data/constants'

import { GridCard } from './GridCard'

export function AboutCard() {
	return (
		<GridCard className='col-span-3 content-center text-center lg:text-left'>
			{aboutText.map((item) => (
				<p
					key={item}
					className='my-8 text-balance font-light text-lg sm:text-3xl'
				>
					{item}
				</p>
			))}
		</GridCard>
	)
}

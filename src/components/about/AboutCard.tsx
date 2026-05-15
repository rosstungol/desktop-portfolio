import { aboutText } from '@/data/constants'

import { GridCard } from './GridCard'

export function AboutCard() {
	return (
		<GridCard className='col-span-3 content-center text-center lg:text-left'>
			<p className='text-balance font-light text-lg sm:text-3xl'>{aboutText}</p>
		</GridCard>
	)
}

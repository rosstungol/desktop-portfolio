import { aboutText } from '@/data/constants'

import { GridCard } from './GridCard'

export function AboutCard() {
	return (
		<GridCard className='col-span-3 content-center text-center md:text-left'>
			<p className='text-balance font-light text-lg sm:text-2xl'>{aboutText}</p>
		</GridCard>
	)
}

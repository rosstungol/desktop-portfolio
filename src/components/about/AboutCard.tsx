import { aboutText } from '@/data/constants'

import { AboutScreenCard } from './AboutScreenCard'

export function AboutCard() {
	return (
		<AboutScreenCard className='col-span-3 content-center text-center md:text-left'>
			<p className='text-balance font-light text-lg sm:text-2xl'>{aboutText}</p>
		</AboutScreenCard>
	)
}

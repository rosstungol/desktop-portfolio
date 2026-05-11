import { SquareArrowOutUpRight } from 'lucide-react'
import { contactLinks } from '@/data/constants'
import { AboutScreenCard } from './AboutScreenCard'

export function TitleCard() {
	return (
		<AboutScreenCard className='flex flex-col justify-between'>
			<header>
				<div className='space-y-2'>
					<h3 className='font-black font-display text-6xl tracking-tight'>
						Ross Tungol
					</h3>
					<p className='font-light text-3xl'>Front-end Engineer</p>
				</div>
			</header>
			<ul className='ml-auto space-y-1'>
				{contactLinks.map(({ link, label }) => (
					<li key={label}>
						<a
							href={link}
							className='flex items-center gap-1 font-semibold text-xl'
							target='_blank'
							rel='noopener noreferrer'
						>
							{label}
							<SquareArrowOutUpRight size={18} />
						</a>
					</li>
				))}
			</ul>
		</AboutScreenCard>
	)
}

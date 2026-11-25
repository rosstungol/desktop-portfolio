import type { MouseEvent } from 'react'

import { File, SquareArrowOutUpRight } from '@/components/icons/huge'
import { aboutText, resume, socialLinks } from '@/data/constants'
import { useWindowStore } from '@/features/desktop/stores/window'
import { useIsMobile } from '@/hooks/useIsMobile'

import { GridCard } from './GridCard'

const linkClassName = 'flex w-fit items-center gap-1 text-base lg:text-lg'

export function SidebarCard() {
	const openWindow = useWindowStore((state) => state.openWindow)
	const isMobile = useIsMobile()

	const handleResumeClick = (event: MouseEvent<HTMLAnchorElement>) => {
		if (isMobile) return

		event.preventDefault()
		openWindow('resume')
	}

	return (
		<GridCard className='flex h-full flex-col gap-2'>
			<header>
				<h3 className='font-display text-3xl font-black tracking-tight md:text-4xl'>
					Ross Tungol
				</h3>
			</header>

			<div className='mb-6'>
				{aboutText.map((item) => (
					<p key={item} className='text-pretty md:text-2xl'>
						{item}
					</p>
				))}
			</div>

			<ul className='mt-auto flex flex-wrap gap-6'>
				{socialLinks.map(({ link, label }) => (
					<li key={label}>
						<a
							href={link}
							className={linkClassName}
							target='_blank'
							rel='noopener noreferrer'
						>
							{label}
							<SquareArrowOutUpRight size={18} />
						</a>
					</li>
				))}
				<li>
					<a
						href={resume.filePath}
						className={linkClassName}
						target='_blank'
						rel='noopener noreferrer'
						onClick={handleResumeClick}
					>
						Resume
						<File size={18} />
					</a>
				</li>
			</ul>
		</GridCard>
	)
}

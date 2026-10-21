import { lazy } from 'react'

import { SquareArrowOutUpRight } from '@/components/icons/huge'
import { socialLinks } from '@/data/constants'
import type { SceneState } from '@/data/types'
import { useIsMobile } from '@/hooks/useIsMobile'

import { GridCard } from './GridCard'

const WorkplaceScene = lazy(
	() => import('@/features/workplace/components/scene/WorkplaceScene')
)

export function TitleCard({
	sceneState,
	onProgress,
}: {
	sceneState?: SceneState
	onProgress?: (progress: number) => void
}) {
	const isMobile = useIsMobile()

	return (
		<GridCard className='relative' title>
			<header className='absolute top-6 left-6 z-20 p-0'>
				<div className='lg:space-y-2'>
					<h3 className='font-display text-4xl font-black tracking-tight md:text-6xl'>
						Ross Tungol
					</h3>
					<p className='text-xl font-light md:px-1 lg:px-0 lg:text-3xl'>
						Software Engineer
					</p>
				</div>
			</header>
			<ul className='absolute right-6 bottom-6 z-20 flex gap-4'>
				{socialLinks.map(({ link, label }) => (
					<li key={label}>
						<a
							href={link}
							className='flex items-center gap-1 text-sm font-light lg:text-xl'
							target='_blank'
							rel='noopener noreferrer'
						>
							{label}
							<SquareArrowOutUpRight size={isMobile ? 12 : 18} />
						</a>
					</li>
				))}
			</ul>

			{isMobile && (
				<div className='h-[calc(100dvh-200px)] md:h-[calc(100dvh-220px)]'>
					<WorkplaceScene sceneState={sceneState} onProgress={onProgress} />
				</div>
			)}
		</GridCard>
	)
}

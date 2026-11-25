import { Github, Globe } from '@/components/icons/huge'
import type { Project } from '@/data/types'
import { IconLink } from '@/features/desktop/components/ui/IconLink'

import { GridCard } from './GridCard'

export function ProjectList({ list }: { list: Project[] }) {
	return (
		<ul className='mb-4 grid grid-cols-1 gap-6 pt-6 has-hover:*:not-hover:opacity-50 md:grid-cols-2'>
			{list.map((project) => (
				<li key={project.title}>
					<GridCard className='space-y-6'>
						<div className='aspect-video w-full overflow-clip border border-neutral-500/50'>
							<img
								src={project.image}
								alt={project.title}
								className='h-full w-full object-cover'
							/>
						</div>
						<div>
							<h4 className='font-display mb-2 text-xl font-bold md:text-3xl'>
								{project.title}
							</h4>
							<ul className='flex gap-4'>
								{project.github && (
									<li>
										<IconLink
											href={project.github}
											size='sm'
											label='Github'
											target='_blank'
											rel='noopener noreferrer'
											Icon={Github}
										/>
									</li>
								)}
								{project.url && (
									<li>
										<IconLink
											href={project.url}
											size='sm'
											label='URL'
											target='_blank'
											rel='noopener noreferrer'
											Icon={Globe}
										/>
									</li>
								)}
							</ul>
						</div>
						<p className='md:text-xl lg:text-2xl'>{project.description}</p>
						<div className='flex flex-wrap gap-2'>
							{project.tags?.map((item) => (
								<div
									key={item}
									className='w-fit rounded-full bg-slate-600/20 px-3 py-1'
								>
									<p className='text-sm font-semibold lg:text-xl'>{item}</p>
								</div>
							))}
						</div>
					</GridCard>
				</li>
			))}
		</ul>
	)
}

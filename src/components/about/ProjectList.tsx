import { Globe } from 'lucide-react'

import type { Project } from '@/data/types'
import { IconLink } from '@/features/desktop/components/ui/IconLink'

import { GitHubIcon } from '../icons/GitHubIcon'
import { GridCard } from './GridCard'

export function ProjectList({ list }: { list: Project[] }) {
	return (
		<ul className='mb-4 space-y-6 has-hover:*:not-hover:opacity-50'>
			{list.map((project) => (
				<li key={project.title}>
					<GridCard className='hover:card-shadow space-y-8 transition hover:-translate-y-0.5'>
						<div className='flex flex-col items-center gap-6 sm:flex-row'>
							<div className='h-auto w-full overflow-clip border border-neutral-500/50 sm:h-28 sm:w-52'>
								<img
									src={project.image}
									alt={project.title}
									className='h-full w-full object-cover'
								/>
							</div>
							<div className='flex flex-col items-center sm:items-start'>
								<h4 className='mb-2 font-bold font-display text-xl md:text-3xl'>
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
												Icon={GitHubIcon}
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
						</div>
						<p className='font-light md:text-xl lg:text-2xl'>
							{project.description}
						</p>
						<div className='flex flex-wrap gap-2'>
							{project.tags?.map((item) => (
								<div
									key={item}
									className='w-fit rounded-full bg-slate-600/20 px-3 py-1'
								>
									<p className='font-semibold text-sm lg:text-xl'>{item}</p>
								</div>
							))}
						</div>
					</GridCard>
				</li>
			))}
		</ul>
	)
}

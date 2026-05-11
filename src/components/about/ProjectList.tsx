import { Globe } from 'lucide-react'
import { projects } from '@/data/constants/projects'
import { IconLink } from '@/features/desktop/components/ui/IconLink'
import { Github } from '../icons/Github'
import { AboutScreenCard } from './AboutScreenCard'

export function ProjectList() {
	return (
		<>
			<ul className='mb-4 space-y-6 has-hover:*:not-hover:opacity-50'>
				{projects.map((project) => (
					<li key={project.title}>
						<AboutScreenCard className='hover:card-shadow space-y-8 transition hover:-translate-y-0.5'>
							<div className='flex items-center gap-6'>
								<div className='h-28 w-52 overflow-clip border border-neutral-500/50'>
									<img
										src={project.image}
										alt={project.title}
										className='h-full w-auto object-cover'
									/>
								</div>
								<div>
									<h4 className='mb-2 font-bold font-display text-3xl'>
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
												>
													<Github size={26} />
												</IconLink>
											</li>
										)}
										{project.demo && (
											<li>
												<IconLink
													href={project.demo}
													size='sm'
													label='Live Demo'
													target='_blank'
													rel='noopener noreferrer'
												>
													<Globe size={26} />
												</IconLink>
											</li>
										)}
									</ul>
								</div>
							</div>
							<p className='text-2xl'>{project.description}</p>
							<div className='flex flex-wrap gap-2'>
								{project.tags?.map((item) => (
									<div
										key={item}
										className='w-fit rounded-full border border-neutral-300/20 bg-neutral-950 px-3 py-1'
									>
										<p className='font-semibold text-xl'>{item}</p>
									</div>
								))}
							</div>
						</AboutScreenCard>
					</li>
				))}
			</ul>
			<p className='py-4 text-center text-2xl'>
				I'll be updating the list regularly. Check back again soon!
			</p>
		</>
	)
}

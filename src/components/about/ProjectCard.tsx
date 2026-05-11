import { AboutScreenCard } from './AboutScreenCard'
import { ProjectList } from './ProjectList'

export function ProjectCard() {
	return (
		<AboutScreenCard className='overflow-y-scroll lg:flex-2'>
			<div className=''>
				<h3 className='mb-4 font-bold font-display text-3xl'>Projects</h3>
				<ul className='grid'>
					<li>
						<ProjectList />
					</li>
				</ul>
			</div>
		</AboutScreenCard>
	)
}

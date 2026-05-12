import { GridCard } from './GridCard'
import { ProjectList } from './ProjectList'

export function ProjectCard() {
	return (
		<GridCard className='overflow-y-auto'>
			<div className=''>
				<h3 className='mb-4 font-bold font-display text-3xl'>Projects</h3>
				<ul className='grid'>
					<li>
						<ProjectList />
					</li>
				</ul>
			</div>
		</GridCard>
	)
}

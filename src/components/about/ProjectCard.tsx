import { playgroundList, projectsList } from '@/data/constants/projects'

import { GridCard } from './GridCard'
import { ProjectList } from './ProjectList'

export function ProjectCard() {
	return (
		<GridCard className='overflow-y-auto'>
			<div className='space-y-6'>
				<div>
					<h3 className='mb-4 font-bold font-display text-3xl'>Projects</h3>
					<ProjectList list={projectsList} />
				</div>
				<div>
					<h3 className='mb-4 font-bold font-display text-3xl'>Playground</h3>
					<ProjectList list={playgroundList} />
				</div>
				<p className='py-4 text-center font-light text-lg md:text-2xl'>
					I'll be updating the list regularly. Check back again soon!
				</p>
			</div>
		</GridCard>
	)
}

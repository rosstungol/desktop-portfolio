import { playgroundList, projectsList } from '@/data/constants/projects'

import { GridCard } from './GridCard'
import { ProjectList } from './ProjectList'

export function ProjectCard() {
	return (
		<GridCard className='overflow-y-auto'>
			<ul className='mb-4 space-y-10 transition-opacity has-hover:*:not-hover:opacity-50'>
				<li>
					<h3 className='mb-4 font-bold font-display text-3xl'>Projects</h3>
					<ProjectList list={projectsList} />
				</li>
				<li>
					<h3 className='mb-4 font-bold font-display text-3xl'>Playground</h3>
					<ProjectList list={playgroundList} />
				</li>
				<li className='text-center font-light text-lg md:text-2xl'>
					I'll be updating the list regularly. Check back again soon!
				</li>
			</ul>
		</GridCard>
	)
}

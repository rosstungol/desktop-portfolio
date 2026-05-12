import { AboutCard } from '@/components/about/AboutCard'
import { ProjectCard } from '@/components/about/ProjectCard'
import { ResumeCard } from '@/components/about/ResumeCard'
import { TitleCard } from '@/components/about/TitleCard'
import type { SceneState } from '@/data/types'

export function AboutGrid({ sceneState }: { sceneState?: SceneState }) {
	return (
		<div className='about-grid noise text-neutral-50 has-hover:*:not-hover:opacity-50'>
			<div className='title transition-opacity'>
				<TitleCard sceneState={sceneState} />
			</div>
			<div className='about transition-opacity'>
				<AboutCard />
			</div>
			<div className='resume transition-opacity'>
				<ResumeCard />
			</div>
			<div className='projects transition-opacity'>
				<ProjectCard />
			</div>
		</div>
	)
}

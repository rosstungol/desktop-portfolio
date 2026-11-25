import { GridBackground } from '@/components/about/GridBackground'
import { ProjectCard } from '@/components/about/ProjectCard'
import { SidebarCard } from '@/components/about/SidebarCard'

export function AboutGrid() {
	return (
		<div className='about-grid noise p-4 text-neutral-50 has-hover:*:not-hover:opacity-50 md:p-6'>
			<div className='sidebar transition-opacity'>
				<SidebarCard />
			</div>
			<div className='works transition-opacity'>
				<ProjectCard />
			</div>
			<GridBackground />
		</div>
	)
}

import { skillsList } from '@/data/constants'
import { GridCard } from './GridCard'

export function SkillsCard() {
	return (
		<GridCard className='content-center space-y-6'>
			<div>
				<h3 className='font-bold text-sm lg:text-xl'>Programming Languages</h3>
				<p className='lg:text-2xl'>{skillsList.languages.join(', ')}</p>
			</div>
			<div>
				<h3 className='font-bold text-sm lg:text-xl'>Libraries & Frameworks</h3>
				<p className='lg:text-2xl'>{skillsList.libraries.join(', ')}</p>
			</div>
			<div>
				<h3 className='font-bold text-sm lg:text-xl'>Tools & Platforms</h3>
				<p className='lg:text-2xl'>{skillsList.tools.join(', ')}</p>
			</div>
			<div>
				<h3 className='font-bold text-sm lg:text-xl'>Design</h3>
				<p className='lg:text-2xl'>{skillsList.design.join(', ')}</p>
			</div>
		</GridCard>
	)
}

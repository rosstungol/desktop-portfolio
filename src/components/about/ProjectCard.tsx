import { useRef, useState, type KeyboardEvent } from 'react'

import { playgroundList, projectsList } from '@/data/constants/projects'
import { cn } from '@/utils/cn'

import { GridCard } from './GridCard'
import { ProjectList } from './ProjectList'

const tabs = [
	{ label: 'Projects', list: projectsList },
	{ label: 'Playground', list: playgroundList },
] as const

export function ProjectCard() {
	const [activeTab, setActiveTab] = useState(0)
	const tabsRef = useRef<HTMLDivElement>(null)

	const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
		if (
			event.key !== 'ArrowRight' &&
			event.key !== 'ArrowLeft' &&
			event.key !== 'Home' &&
			event.key !== 'End'
		)
			return

		event.preventDefault()
		const direction = event.key === 'ArrowRight' ? 1 : -1
		const next =
			event.key === 'Home'
				? 0
				: event.key === 'End'
					? tabs.length - 1
					: (activeTab + direction + tabs.length) % tabs.length
		setActiveTab(next)
		tabsRef.current
			?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
			[next]?.focus()
	}

	return (
		<GridCard className='flex flex-col overflow-hidden pb-0 sm:pb-0'>
			<div
				ref={tabsRef}
				role='tablist'
				aria-label='Works'
				onKeyDown={handleKeyDown}
				className='font-display mb-4 flex gap-6 font-bold sm:text-3xl'
			>
				{tabs.map(({ label }, index) => (
					<button
						key={label}
						type='button'
						role='tab'
						id={`works-tab-${index}`}
						aria-controls='works-panel'
						aria-selected={activeTab === index}
						tabIndex={activeTab === index ? 0 : -1}
						onClick={() => setActiveTab(index)}
						className={cn(
							'cursor-pointer border-b-2 transition-colors',
							activeTab === index
								? 'border-slate-100 text-neutral-50'
								: 'border-transparent text-neutral-400 hover:text-neutral-200'
						)}
					>
						{label}
					</button>
				))}
			</div>

			<div
				aria-hidden='true'
				className='-mx-4 border-t border-neutral-500/50 sm:-mx-6'
			/>

			<div
				id='works-panel'
				role='tabpanel'
				aria-labelledby={`works-tab-${activeTab}`}
				className='-mr-4 min-h-0 flex-1 overflow-y-auto pr-4 sm:-mr-6 sm:pr-6'
			>
				<ProjectList list={tabs[activeTab].list} />
			</div>
		</GridCard>
	)
}

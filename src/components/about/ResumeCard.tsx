import { useWindowStore } from '@/features/desktop/stores/window'

import { AboutScreenCard } from './AboutScreenCard'

export function ResumeCard() {
	const openWindow = useWindowStore((state) => state.openWindow)

	return (
		<AboutScreenCard className='flex-center'>
			<button
				type='button'
				onClick={() => openWindow('resume')}
				className='flex w-fit cursor-pointer items-center gap-2 border p-2 px-4 transition-colors hover:bg-neutral-50 hover:text-neutral-950'
			>
				<span className='font-semibold text-xl'>View Resume</span>
			</button>
		</AboutScreenCard>
	)
}

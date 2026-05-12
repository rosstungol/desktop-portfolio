import { useWindowStore } from '@/features/desktop/stores/window'
import { useIsMobile } from '@/hooks/useIsMobile'
import { downloadResume } from '@/utils/downloadResume'

import { GridCard } from './GridCard'

export function ResumeCard() {
	const isMobile = useIsMobile()

	const openWindow = useWindowStore((state) => state.openWindow)

	const handleClick = isMobile
		? () => downloadResume()
		: () => openWindow('resume')

	return (
		<GridCard className='flex-center'>
			<button
				type='button'
				onClick={handleClick}
				className='flex w-fit cursor-pointer items-center gap-2 border border-slate-100 p-2 px-4 transition-colors hover:bg-slate-100 hover:text-neutral-950'
			>
				<span className='font-semibold text-xl'>
					{isMobile ? 'Download' : 'View'} Resume
				</span>
			</button>
		</GridCard>
	)
}

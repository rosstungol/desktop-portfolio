import type { WindowKey } from '@/features/desktop/data/types'
import { useWindowStore } from '@/features/desktop/stores/window'

export function WindowControls({ target }: { target: WindowKey }) {
	const closeWindow = useWindowStore((state) => state.closeWindow)

	return (
		<div className='flex gap-3'>
			<button
				type='button'
				className='size-5 rounded-full bg-red-400'
				aria-label='Close window'
				title='Close window'
				onClick={() => closeWindow(target)}
			/>
			<button
				type='button'
				className='size-5 rounded-full bg-neutral-300'
				disabled={true}
			/>
			<button
				type='button'
				className='size-5 rounded-full bg-neutral-300'
				disabled={true}
			/>
		</div>
	)
}

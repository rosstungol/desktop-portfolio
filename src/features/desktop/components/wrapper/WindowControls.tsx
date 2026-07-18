import { useShallow } from 'zustand/react/shallow'

import type { WindowKey } from '@/features/desktop/data/types'
import { useWindowStore } from '@/features/desktop/stores/window'

export function WindowControls({ target }: { target: WindowKey }) {
	const { minimizeWindow, closeWindow } = useWindowStore(
		useShallow((state) => ({
			minimizeWindow: state.minimizeWindow,
			closeWindow: state.closeWindow,
		}))
	)

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
				className='size-5 rounded-full bg-yellow-400'
				aria-label='Minimize window'
				title='Minimize window'
				onClick={() => minimizeWindow(target)}
			/>
			<button
				type='button'
				className='size-5 rounded-full bg-neutral-300'
				disabled={true}
			/>
		</div>
	)
}

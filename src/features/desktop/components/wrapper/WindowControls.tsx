import type { WindowKey } from '@/features/desktop/data/types'
import { useWindowStore } from '@/features/desktop/store/window'

export default function WindowControls({ target }: { target: WindowKey }) {
	const closeWindow = useWindowStore((state) => state.closeWindow)

	return (
		<div className='flex gap-1.5'>
			<button
				type='button'
				className='size-3 rounded-full border border-red-500 bg-red-400'
				onClick={() => closeWindow(target)}
			/>
			<button
				type='button'
				className='size-3 rounded-full border border-gray-400 bg-gray-300'
				disabled={true}
			/>
			<button
				type='button'
				className='size-3 rounded-full border border-gray-400 bg-gray-300'
				disabled={true}
			/>
		</div>
	)
}

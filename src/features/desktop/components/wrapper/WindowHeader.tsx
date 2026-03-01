import type { WindowKey } from '../../data/types'
import WindowControls from './WindowControls'

export default function WindowHeader({
	title,
	target,
}: {
	title: string
	target: WindowKey
}) {
	return (
		<div className='relative flex items-center rounded-t-xl p-2 text-xs'>
			<WindowControls target={target} />
			<p className='abs-center font-semibold'>{title}</p>
		</div>
	)
}

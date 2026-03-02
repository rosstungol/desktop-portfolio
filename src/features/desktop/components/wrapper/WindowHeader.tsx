import clsx from 'clsx'
import type { ReactNode } from 'react'

import type { WindowKey } from '../../data/types'
import WindowControls from './WindowControls'

export default function WindowHeader({
	title,
	target,
	rightButton,
}: {
	title: string
	target: WindowKey
	rightButton?: ReactNode
}) {
	return (
		<div
			className={clsx(
				'relative flex items-center justify-between rounded-t-xl text-xs',
				rightButton ? 'px-2.5 py-1' : 'p-2.5'
			)}
		>
			<WindowControls target={target} />
			<p className='abs-center font-semibold'>{title}</p>
			<div>{rightButton}</div>
		</div>
	)
}

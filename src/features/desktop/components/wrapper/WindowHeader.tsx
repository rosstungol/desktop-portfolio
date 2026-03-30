import clsx from 'clsx'
import type { ReactNode } from 'react'

import type { WindowKey } from '../../data/types'
import { WindowControls } from './WindowControls'

export function WindowHeader({
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
				'relative flex items-center justify-between rounded-t-xl border-blue-500/15 border-b text-xl',
				rightButton ? 'px-4 py-1' : 'p-4'
			)}
		>
			<WindowControls target={target} />
			<h2 className='abs-center font-semibold'>{title}</h2>
			<div>{rightButton}</div>
		</div>
	)
}

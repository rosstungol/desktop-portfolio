import type { ReactNode } from 'react'

import { cn } from '@/utils/cn'

export function GridCard({
	children,
	className,
}: {
	children: ReactNode
	className?: string
}) {
	return (
		<div
			className={cn(
				'h-full overflow-hidden border border-neutral-500/50 p-4 sm:p-6',
				className
			)}
		>
			{children}
		</div>
	)
}

import type { ReactNode } from 'react'

import { cn } from '@/utils/cn'

type AboutScreenCardProps = {
	children: ReactNode
	className?: string
	title?: boolean
}

export function AboutScreenCard({
	children,
	className,
	title,
}: AboutScreenCardProps) {
	return (
		<div
			className={cn(
				'noise h-full overflow-hidden border border-neutral-500/50',
				!title && 'p-4 sm:p-6',
				className
			)}
		>
			{children}
		</div>
	)
}

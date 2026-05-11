import type { ReactNode } from 'react'

import { cn } from '@/utils/cn'

type AboutScreenCardProps = {
	children: ReactNode
	className?: string
}

export function AboutScreenCard({ children, className }: AboutScreenCardProps) {
	return (
		<div
			className={cn(
				'noise h-full overflow-hidden border border-neutral-500/50 p-6',
				className
			)}
		>
			{children}
		</div>
	)
}

import type { HTMLAttributes, ReactNode } from 'react'

import { cn } from '@/utils/cn'

import { Button } from './Button'

type CardProps = HTMLAttributes<HTMLElement> & {
	title: string
	buttonText: string
	action: () => void
	children?: ReactNode
}

export function DialogBox({
	title,
	buttonText,
	action,
	children,
	...props
}: CardProps) {
	return (
		<section
			className='glass-bg card-border m-4 max-w-96 min-w-56 rounded-xl text-neutral-200'
			{...props}
		>
			<div className='border-b border-slate-800 p-4'>
				<h1 className='text-center font-mono font-bold text-pretty'>{title}</h1>
			</div>
			<div className='space-y-2 p-4 text-center text-pretty sm:p-6'>
				{children}
				<Button fullWidth onClick={action} className={cn(children && 'mt-6')}>
					{buttonText}
				</Button>
			</div>
		</section>
	)
}

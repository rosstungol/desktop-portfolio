import type { HTMLAttributes, ReactNode, RefObject } from 'react'

import { cn } from '@/utils/cn'

import { Button } from './Button'

type CardProps = HTMLAttributes<HTMLElement> & {
	title: string
	buttonText: string
	action: () => void
	ref?: RefObject<HTMLElement | null>
	children?: ReactNode
}

export function DialogBox({
	title,
	buttonText,
	action,
	ref,
	children,
	...props
}: CardProps) {
	return (
		<section
			ref={ref}
			className='glass-bg card-border m-4 min-w-56 max-w-96 rounded-xl text-neutral-200'
			{...props}
		>
			<div className='border-slate-800 border-b p-4'>
				<h1 className='text-pretty text-center font-bold font-mono'>{title}</h1>
			</div>
			<div className='space-y-2 text-pretty p-4 text-center sm:p-6'>
				{children}
				<Button fullWidth onClick={action} className={cn(children && 'mt-6')}>
					{buttonText}
				</Button>
			</div>
		</section>
	)
}

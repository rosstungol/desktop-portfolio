import type { HTMLAttributes, ReactNode, RefObject } from 'react'

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
			className='glass-bg card-border min-w-56 max-w-96 rounded-xl text-gray-200'
			{...props}
		>
			<div className='border-blue-500/10 border-b p-4'>
				<h1 className='text-center font-bold font-roboto'>{title}</h1>
			</div>
			<div className='col-center gap-6 p-6'>
				{children}
				<Button fullWidth onClick={action}>
					{buttonText}
				</Button>
			</div>
		</section>
	)
}

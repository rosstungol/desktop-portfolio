import type { ButtonHTMLAttributes } from 'react'

import { cn } from '@/utils/cn'

type ButtonVariant = 'primary' | 'secondary'
type ButtonSize = 'md' | 'sm'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: ButtonVariant
	size?: ButtonSize
	fullWidth?: boolean
}

const baseStyles =
	'glass-bg flex-center cursor-pointer rounded-lg border-2 font-bold text-neutral-200 font-mono'
const hoverStyles =
	'transition-colors hover:bg-slate-100 hover:text-neutral-950'
const disabledStyles =
	'disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-neutral-200'

const variantStyles: Record<ButtonVariant, string> = {
	primary: 'border-slate-100',
	secondary: 'border-slate-600 hover:border-slate-100',
}

const sizeStyles: Record<ButtonSize, string> = {
	sm: 'p-1 gap-1.5 text-xs',
	md: 'p-2 gap-2 text-sm',
}

export function Button({
	variant = 'primary',
	size = 'md',
	fullWidth = false,
	className,
	children,
	...props
}: ButtonProps) {
	return (
		<button
			type='button'
			className={cn(
				baseStyles,
				hoverStyles,
				disabledStyles,
				variantStyles[variant],
				sizeStyles[size],
				fullWidth && 'w-full',
				className
			)}
			{...props}
		>
			{children}
		</button>
	)
}

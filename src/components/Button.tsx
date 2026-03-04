import clsx from 'clsx'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary'
type ButtonSize = 'md' | 'sm'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: ButtonVariant
	size?: ButtonSize
	children: ReactNode
}

const baseStyles =
	'glass flex-center cursor-pointer rounded-lg border-2 font-bold text-gray-200 transition-colors hover:bg-blue-100 hover:text-gray-950'

const disabledStyles =
	'disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-gray-200'

const variantStyles: Record<ButtonVariant, string> = {
	primary: 'border-blue-100',
	secondary: 'border-blue-500/10 hover:border-blue-100',
}

const sizeStyles: Record<ButtonSize, string> = {
	sm: 'p-1 gap-1.5 text-xs',
	md: 'p-2 gap-2 text-sm',
}

export function Button({
	variant = 'primary',
	size = 'md',
	className,
	children,
	...props
}: ButtonProps) {
	return (
		<button
			type='button'
			className={clsx(
				baseStyles,
				disabledStyles,
				variantStyles[variant],
				sizeStyles[size],
				className
			)}
			{...props}
		>
			{children}
		</button>
	)
}

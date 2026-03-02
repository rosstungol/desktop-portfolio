import clsx from 'clsx'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary'
type ButtonSize = 'md' | 'sm'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: ButtonVariant
	size?: ButtonSize
	roundedFull?: boolean
	children: ReactNode
}

const baseStyles =
	'glass cursor-pointer rounded border-2 font-bold text-gray-200 transition-colors hover:bg-gray-300 hover:text-gray-950'

const variantStyles: Record<ButtonVariant, string> = {
	primary: 'border-gray-300',
	secondary: 'border-gray-300/10 hover:border-gray-300',
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

import type { AnchorHTMLAttributes } from 'react'

import { cn } from '@/utils/cn'

type IconLinkSize = 'md' | 'sm'

type IconLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
	label: string
	size?: IconLinkSize
	rounded?: boolean
}

const baseStyles =
	'flex-center w-fit cursor-pointer bg-slate-600/20 font-bold text-neutral-200'
const hoverStyles =
	'transition-colors hover:bg-slate-100 hover:text-neutral-950'

const sizeStyles: Record<IconLinkSize, string> = {
	sm: 'p-2',
	md: 'p-4',
}

export function IconLink({
	href,
	label,
	size = 'md',
	rounded = false,
	children,
	className,
	...props
}: IconLinkProps) {
	return (
		<a
			href={href}
			aria-label={label}
			title={label}
			className={cn(
				baseStyles,
				hoverStyles,
				sizeStyles[size],
				rounded ? 'rounded-full' : 'rounded-xl',
				className
			)}
			{...props}
		>
			{children}
		</a>
	)
}

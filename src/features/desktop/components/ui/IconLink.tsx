import clsx from 'clsx'
import type { AnchorHTMLAttributes } from 'react'

type IconLinkSize = 'md' | 'sm'

type IconLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
	label: string
	size?: IconLinkSize
	rounded?: boolean
}

const baseStyles =
	'flex-center border-2 border-blue-500/10 font-bold text-gray-200'
const hoverStyles =
	'transition-colors hover:border-blue-100 hover:bg-blue-100 hover:text-gray-950'

const sizeStyles: Record<IconLinkSize, string> = {
	sm: 'p-1',
	md: 'p-2',
}

export function IconLink({
	href,
	label,
	size = 'md',
	rounded = false,
	children,
	...props
}: IconLinkProps) {
	return (
		<a
			href={href}
			aria-label={label}
			title={label}
			className={clsx(
				baseStyles,
				hoverStyles,
				sizeStyles[size],
				rounded ? 'rounded-full' : 'rounded-lg'
			)}
			{...props}
		>
			{children}
		</a>
	)
}

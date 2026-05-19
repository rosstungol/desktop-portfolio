import type { AnchorHTMLAttributes, ComponentType, SVGProps } from 'react'
import { cn } from '@/utils/cn'

type IconLinkSize = 'md' | 'sm'

type IconProps = SVGProps<SVGSVGElement> & {
	size?: number | string
}

type IconType = ComponentType<IconProps>

type IconLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
	label: string
	size?: IconLinkSize
	rounded?: boolean
	Icon: IconType
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
	Icon,
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
			<Icon size={size === 'sm' ? 26 : 40} />
		</a>
	)
}

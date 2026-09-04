import type { IconSvgElement } from '@hugeicons/react'
import { HugeiconsIcon } from '@hugeicons/react'
import type { SVGProps } from 'react'

export type IconProps = SVGProps<SVGSVGElement> & {
	size?: number | string
}

type HugeIconProps = IconProps & {
	icon: IconSvgElement
}

export function HugeIcon({ icon, size = 24, className }: HugeIconProps) {
	return <HugeiconsIcon icon={icon} size={size} className={className} />
}

import type { LucideIcon } from 'lucide-react'

// Window Store types
export type WindowData = unknown

type WindowState = {
	isOpen: boolean
	zIndex: number
	data: WindowData
}

export type WindowKey =
	| 'finder'
	| 'safari'
	| 'contact'
	| 'photos'
	| 'terminal'
	| 'resume'
	| 'textFile'
	| 'imageFile'

export type WindowsRecord = Record<WindowKey, WindowState>

// Location Store types
type ItemType = WindowKey | 'url' | 'folder'

export type BaseLocationItem = {
	id: number
	name: string
	children?: LocationItem[]
}

export type LocationItem = BaseLocationItem & {
	icon?: string
	Icon?: LucideIcon
	type?: ItemType
	finderPosition?: string
	desktopPosition?: string
	href?: string
	description?: string[]
}

export type MenuItem = Pick<LocationItem, 'id' | 'name' | 'Icon'>

export type IconItem = Pick<
	LocationItem,
	| 'id'
	| 'name'
	| 'icon'
	| 'type'
	| 'finderPosition'
	| 'desktopPosition'
	| 'href'
	| 'children'
>

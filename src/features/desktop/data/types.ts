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
	| 'trash'
	| 'resume'
	| 'textFile'
	| 'imageFile'

export type WindowsRecord = Record<WindowKey, WindowState>

// Location Store types
type ItemType = 'url' | 'folder' | 'pdf' | 'location' | 'alias'

export type LocationItem = {
	id: number
	name: string
	type?: ItemType
	icon?: string
	Icon?: LucideIcon
	finderPosition?: string
	desktopPosition?: string
	window?: WindowKey
	href?: string
	children?: LocationItem[]
}

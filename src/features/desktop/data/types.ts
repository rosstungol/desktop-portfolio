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
type File = {
	id: number
	name: string
	icon: string
	window: WindowKey
	fileType: string
	finderPosition: string
	desktopPosition?: string
	description?: string[]
}

type Folder = {
	id: number
	name: string
	icon: string
	window: WindowKey
	finderPosition: string
	desktopPosition?: string
	children: LocationItem[]
}

export type LocationItem = Folder | File

export type DesktopItem = LocationItem & {
	desktopPosition: string
}

export type WindowLocation = {
	id: number
	name: string
	Icon: LucideIcon
	children: LocationItem[]
}

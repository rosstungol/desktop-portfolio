import type { LucideIcon } from 'lucide-react'

// Window Store types
export type WindowData = LocationItem

type WindowState = {
	isOpen: boolean
	zIndex: number
	data: WindowData | null
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
type FileContent = {
	image?: string
	title?: string
	text?: string[]
}

type ItemType = WindowKey | 'url' | 'folder' | 'finderLocation'

export type BaseItem = {
	id: number
	name: string
}

export type BaseLocationItem = BaseItem & {
	icon?: string
	Icon?: LucideIcon
	type?: ItemType
	href?: string
	children?: LocationItem[]
	finderPosition?: string
	desktopPosition?: string
	fileContent?: FileContent
}

export type FinderItem = BaseLocationItem & {
	icon: string
	type: ItemType
	finderPosition: string
}

export type FinderLocationItem = BaseLocationItem & {
	type: 'finderLocation'
	Icon: LucideIcon
	children: LocationItem[]
}

export type DesktopItem = BaseLocationItem & {
	icon: string
	type: 'resume' | 'textFile' | 'imageFile' | 'folder'
	finderPosition: string
	desktopPosition: string
}

export type FileItem = BaseLocationItem & {
	type: 'textFile' | 'imageFile'
	fileContent: FileContent
}

export type FolderItem = BaseLocationItem & {
	type: 'folder'
	children: LocationItem[]
}

export type UrlItem = BaseLocationItem & {
	type: 'url'
	href: string
}

export type LocationItem =
	| FinderItem
	| FinderLocationItem
	| DesktopItem
	| FileItem
	| FolderItem
	| UrlItem

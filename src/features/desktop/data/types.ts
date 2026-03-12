import type { LucideIcon } from 'lucide-react'

// Window Store types
export type WindowData = LocationItem

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
type FileContent = {
	image?: string
	title?: string
	text?: string[]
}

type ItemType = WindowKey | 'url' | 'folder' | 'finderLocation' | 'desktop'

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

export type FinderLocationItem = BaseLocationItem & {
	type: ItemType
	Icon: LucideIcon
	children: LocationItem[]
}

export type FinderItem = BaseLocationItem & {
	icon: string
	type: ItemType
	finderPosition: string
}

export type DesktopItem = BaseLocationItem & {
	icon: string
	type: ItemType
	finderPosition: string
	desktopPosition: string
}

export type FolderItem = BaseLocationItem & {
	type: 'folder'
	children: LocationItem[]
}

export type UrlItem = BaseLocationItem & {
	type: 'url'
	href: string
}

export type FileItem = BaseLocationItem & {
	type: WindowKey
	fileContent: FileContent
}

export type LocationItem =
	| FinderLocationItem
	| FinderItem
	| DesktopItem
	| UrlItem
	| FolderItem
	| FileItem

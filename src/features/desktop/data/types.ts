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
	fileContent?: string[]
}

type UrlItem = BaseLocationItem & {
	type: 'url'
	href: string
}

type FolderItem = BaseLocationItem & {
	type: 'folder'
	children: LocationItem[]
}

type FileItem = BaseLocationItem & {
	type: WindowKey
	fileContent?: string[]
}

type MenuItem = BaseLocationItem & {
	Icon: LucideIcon
}

export type FinderLocationItem = BaseLocationItem & {
	Icon: LucideIcon
	children: LocationItem[]
}

export type LocationItem =
	| UrlItem
	| FolderItem
	| FileItem
	| MenuItem
	| FinderLocationItem

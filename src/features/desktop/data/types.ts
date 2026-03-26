import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

// Window Store types
export type WindowData = LocationItem

type WindowState = {
	isOpen: boolean
	zIndex: number
	data: WindowData | null
}

export type WindowKey =
	| 'finder'
	| 'about'
	| 'contact'
	| 'photos'
	| 'terminal'
	| 'resume'
	| 'file'
	| 'image'

export type WindowsRecord = Record<WindowKey, WindowState>

// Location Store types
type FileContent = {
	image?: string
	title?: string
	text?: ReactNode
}

type ItemType = WindowKey | 'url' | 'folder' | 'finderLocation'

export type BaseItem = {
	id: string
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
	type: 'resume' | 'file' | 'image' | 'folder'
	finderPosition: string
	desktopPosition: string
}

export type FileItem = BaseLocationItem & {
	type: 'file' | 'image'
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

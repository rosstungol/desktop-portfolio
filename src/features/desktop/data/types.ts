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
	kind: string
	fileType: string
	position: string
	description: string[]
}

type Folder = {
	id: number
	name: string
	icon: string
	kind: string
	position: string
	windowPosition: string
	children: File[]
}

type LocationChild = Folder | File

export type Location = {
	id: number
	type: string
	name: string
	icon: string
	kind: string
	children: LocationChild[]
}

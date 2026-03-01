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

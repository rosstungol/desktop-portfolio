import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type WindowData = unknown | null

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

type WindowsRecord = Record<WindowKey, WindowState>

const INITIAL_Z_INDEX = 1000

const WINDOW_CONFIG: WindowsRecord = {
	finder: {
		isOpen: false,
		zIndex: INITIAL_Z_INDEX,
		data: null,
	},
	safari: {
		isOpen: false,
		zIndex: INITIAL_Z_INDEX,
		data: null,
	},
	contact: {
		isOpen: false,
		zIndex: INITIAL_Z_INDEX,
		data: null,
	},
	photos: {
		isOpen: false,
		zIndex: INITIAL_Z_INDEX,
		data: null,
	},
	terminal: {
		isOpen: false,
		zIndex: INITIAL_Z_INDEX,
		data: null,
	},
	trash: {
		isOpen: false,
		zIndex: INITIAL_Z_INDEX,
		data: null,
	},
	resume: {
		isOpen: false,
		zIndex: INITIAL_Z_INDEX,
		data: null,
	},
	textFile: {
		isOpen: false,
		zIndex: INITIAL_Z_INDEX,
		data: null,
	},
	imageFile: {
		isOpen: false,
		zIndex: INITIAL_Z_INDEX,
		data: null,
	},
} satisfies WindowsRecord

type WindowStore = {
	windows: WindowsRecord
	nextZIndex: number
	openWindow: (windowKey: WindowKey, data?: WindowData) => void
	closeWindow: (windowKey: WindowKey) => void
	focusWindow: (windowKey: WindowKey) => void
}

export const useWindowStore = create<WindowStore>()(
	immer((set) => ({
		windows: WINDOW_CONFIG,
		nextZIndex: INITIAL_Z_INDEX + 1,
		openWindow: (windowKey, data = null) =>
			set((state) => {
				const window = state.windows[windowKey]

				window.isOpen = true
				window.zIndex = state.nextZIndex
				window.data = data ?? window.data

				state.nextZIndex++
			}),
		closeWindow: (windowKey) =>
			set((state) => {
				const window = state.windows[windowKey]

				window.isOpen = false
				window.zIndex = INITIAL_Z_INDEX
				window.data = null
			}),
		focusWindow: (windowKey) =>
			set((state) => {
				const window = state.windows[windowKey]

				window.zIndex = state.nextZIndex++
			}),
	}))
)

import { create, type StoreApi, type UseBoundStore } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import type { WindowData, WindowKey, WindowsRecord } from '../data/types'

export const INITIAL_Z_INDEX = 1000

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
	resume: {
		isOpen: false,
		zIndex: INITIAL_Z_INDEX,
		data: null,
	},
	file: {
		isOpen: false,
		zIndex: INITIAL_Z_INDEX,
		data: null,
	},
	image: {
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

export const useWindowStore: UseBoundStore<StoreApi<WindowStore>> =
	create<WindowStore>()(
		immer((set) => ({
			windows: WINDOW_CONFIG,
			nextZIndex: INITIAL_Z_INDEX + 1,

			openWindow: (windowKey, data?: WindowData) =>
				set((state) => {
					const appWindow = state.windows[windowKey]

					appWindow.isOpen = true
					appWindow.zIndex = state.nextZIndex
					appWindow.data = data !== undefined ? data : appWindow.data

					state.nextZIndex++
				}),

			closeWindow: (windowKey) =>
				set((state) => {
					const appWindow = state.windows[windowKey]

					appWindow.isOpen = false
					appWindow.zIndex = INITIAL_Z_INDEX
					appWindow.data = null
				}),

			focusWindow: (windowKey) =>
				set((state) => {
					const appWindow = state.windows[windowKey]

					if (!appWindow.isOpen) return

					appWindow.zIndex = state.nextZIndex++
				}),
		}))
	)

import { create, type StoreApi, type UseBoundStore } from 'zustand'

import type { WindowData, WindowKey, WindowsRecord } from '../data/types'

const INITIAL_Z_INDEX = 1000

const WINDOW_CONFIG: WindowsRecord = {
	finder: {
		isOpen: false,
		isMinimized: false,
		zIndex: INITIAL_Z_INDEX,
		data: null,
	},
	about: {
		isOpen: true,
		isMinimized: false,
		zIndex: INITIAL_Z_INDEX,
		data: null,
	},
	contact: {
		isOpen: false,
		isMinimized: false,
		zIndex: INITIAL_Z_INDEX,
		data: null,
	},
	photos: {
		isOpen: false,
		isMinimized: false,
		zIndex: INITIAL_Z_INDEX,
		data: null,
	},
	terminal: {
		isOpen: false,
		isMinimized: false,
		zIndex: INITIAL_Z_INDEX,
		data: null,
	},
	resume: {
		isOpen: false,
		isMinimized: false,
		zIndex: INITIAL_Z_INDEX,
		data: null,
	},
	file: {
		isOpen: false,
		isMinimized: false,
		zIndex: INITIAL_Z_INDEX,
		data: null,
	},
	image: {
		isOpen: false,
		isMinimized: false,
		zIndex: INITIAL_Z_INDEX,
		data: null,
	},
	lowOrbit: {
		isOpen: false,
		isMinimized: false,
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
	minimizeWindow: (windowKey: WindowKey) => void
	restoreWindow: (windowKey: WindowKey) => void
}

export const useWindowStore: UseBoundStore<StoreApi<WindowStore>> =
	create<WindowStore>((set) => ({
		windows: WINDOW_CONFIG,
		nextZIndex: INITIAL_Z_INDEX + 1,

		openWindow: (windowKey, data?: WindowData) =>
			set((state) => ({
				windows: {
					...state.windows,
					[windowKey]: {
						...state.windows[windowKey],
						isOpen: true,
						isMinimized: false,
						zIndex: state.nextZIndex,
						data: data !== undefined ? data : state.windows[windowKey].data,
					},
				},
				nextZIndex: state.nextZIndex + 1,
			})),

		closeWindow: (windowKey) =>
			set((state) => ({
				windows: {
					...state.windows,
					[windowKey]: {
						...state.windows[windowKey],
						isOpen: false,
						isMinimized: false,
						zIndex: INITIAL_Z_INDEX,
						data: null,
					},
				},
			})),

		focusWindow: (windowKey) =>
			set((state) => {
				if (!state.windows[windowKey].isOpen) return {}

				return {
					windows: {
						...state.windows,
						[windowKey]: {
							...state.windows[windowKey],
							zIndex: state.nextZIndex,
						},
					},
					nextZIndex: state.nextZIndex + 1,
				}
			}),

		minimizeWindow: (windowKey) =>
			set((state) => ({
				windows: {
					...state.windows,
					[windowKey]: {
						...state.windows[windowKey],
						isMinimized: true,
					},
				},
			})),

		restoreWindow: (windowKey) =>
			set((state) => ({
				windows: {
					...state.windows,
					[windowKey]: {
						...state.windows[windowKey],
						isMinimized: false,
						zIndex: state.nextZIndex,
					},
				},
				nextZIndex: state.nextZIndex + 1,
			})),
	}))

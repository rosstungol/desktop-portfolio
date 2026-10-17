import { beforeEach, describe, expect, it } from 'vite-plus/test'

import type { FileItem } from '@/features/desktop/data/types'
import { useWindowStore } from '@/features/desktop/stores/window'

const INITIAL_STATE = useWindowStore.getState()
const INITIAL_Z_INDEX = 1000

const sampleFile: FileItem = {
	id: 'sample',
	name: 'sample.txt',
	type: 'file',
	fileContent: { title: 'Sample', text: 'hello' },
}

beforeEach(() => {
	useWindowStore.setState(INITIAL_STATE, true)
})

describe('window store initial state', () => {
	it('opens only the about window', () => {
		const { windows } = useWindowStore.getState()
		const openWindows = Object.entries(windows)
			.filter(([, state]) => state.isOpen)
			.map(([key]) => key)

		expect(openWindows).toEqual(['about'])
	})

	it('starts every window at the base z-index', () => {
		const zIndexes = Object.values(useWindowStore.getState().windows).map(
			(state) => state.zIndex
		)

		expect(new Set(zIndexes)).toEqual(new Set([INITIAL_Z_INDEX]))
	})
})

describe('openWindow', () => {
	it('opens a closed window above the current top', () => {
		useWindowStore.getState().openWindow('finder')

		expect(useWindowStore.getState().windows.finder).toMatchObject({
			isOpen: true,
			zIndex: INITIAL_Z_INDEX + 1,
		})
	})

	it('stacks successively opened windows above one another', () => {
		const store = useWindowStore.getState()
		store.openWindow('finder')
		store.openWindow('terminal')

		const { finder, terminal } = useWindowStore.getState().windows
		expect(terminal.zIndex).toBeGreaterThan(finder.zIndex)
	})

	it('un-minimizes a window it reopens', () => {
		const store = useWindowStore.getState()
		store.minimizeWindow('about')
		store.openWindow('about')

		expect(useWindowStore.getState().windows.about.isMinimized).toBe(false)
	})

	it('attaches the provided data', () => {
		useWindowStore.getState().openWindow('file', sampleFile)

		expect(useWindowStore.getState().windows.file.data).toEqual(sampleFile)
	})

	it('preserves existing data when reopened without data', () => {
		const store = useWindowStore.getState()
		store.openWindow('file', sampleFile)
		store.openWindow('file')

		expect(useWindowStore.getState().windows.file.data).toEqual(sampleFile)
	})
})

describe('closeWindow', () => {
	it('closes, un-minimizes, resets the z-index and clears data', () => {
		const store = useWindowStore.getState()
		store.openWindow('file', sampleFile)
		store.closeWindow('file')

		expect(useWindowStore.getState().windows.file).toMatchObject({
			isOpen: false,
			isMinimized: false,
			zIndex: INITIAL_Z_INDEX,
			data: null,
		})
	})
})

describe('focusWindow', () => {
	it('moves an open window above the others', () => {
		const store = useWindowStore.getState()
		store.openWindow('finder')
		store.openWindow('terminal')
		store.focusWindow('finder')

		const { finder, terminal } = useWindowStore.getState().windows
		expect(finder.zIndex).toBeGreaterThan(terminal.zIndex)
	})

	it('ignores closed windows without consuming a z-index', () => {
		const store = useWindowStore.getState()
		store.openWindow('finder')
		const before = useWindowStore.getState().nextZIndex

		store.focusWindow('terminal')

		const state = useWindowStore.getState()
		expect(state.windows.terminal.zIndex).toBe(INITIAL_Z_INDEX)
		expect(state.nextZIndex).toBe(before)
	})
})

describe('minimizeWindow', () => {
	it('minimizes an open window without changing its z-index', () => {
		const store = useWindowStore.getState()
		store.openWindow('finder')
		const { zIndex } = useWindowStore.getState().windows.finder

		store.minimizeWindow('finder')

		expect(useWindowStore.getState().windows.finder).toMatchObject({
			isOpen: true,
			isMinimized: true,
			zIndex,
		})
	})
})

describe('restoreWindow', () => {
	it('un-minimizes and brings the window to the front', () => {
		const store = useWindowStore.getState()
		store.openWindow('finder')
		store.openWindow('terminal')
		store.minimizeWindow('finder')

		store.restoreWindow('finder')

		const { finder, terminal } = useWindowStore.getState().windows
		expect(finder.isMinimized).toBe(false)
		expect(finder.zIndex).toBeGreaterThan(terminal.zIndex)
	})
})

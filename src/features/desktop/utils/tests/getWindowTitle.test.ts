import { describe, expect, it } from 'vite-plus/test'

import type { WindowKey, WindowsRecord } from '@/features/desktop/data/types'
import { useWindowStore } from '@/features/desktop/stores/window'
import { getWindowTitle } from '@/features/desktop/utils/getWindowTitle'

const closedWindows = (): WindowsRecord =>
	Object.fromEntries(
		Object.keys(useWindowStore.getState().windows).map((key) => [
			key,
			{ isOpen: false, isMinimized: false, zIndex: 1000, data: null },
		])
	) as WindowsRecord

const titleFor = (open: Partial<Record<WindowKey, number>>): string => {
	const windows = closedWindows()

	for (const [key, zIndex] of Object.entries(open) as [WindowKey, number][]) {
		windows[key] = { ...windows[key], isOpen: true, zIndex }
	}

	return getWindowTitle(windows)
}

describe('getWindowTitle', () => {
	it('falls back to Finder when no window is open', () => {
		expect(titleFor({})).toBe('Finder')
	})

	it('uses the open window with the highest z-index', () => {
		expect(titleFor({ about: 10, finder: 20 })).toBe('Finder')
		expect(titleFor({ about: 30, finder: 20 })).toBe('About')
	})

	it('splits camelCase window keys into a title', () => {
		expect(titleFor({ lowOrbit: 1000 })).toBe('Low Orbit')
	})
})

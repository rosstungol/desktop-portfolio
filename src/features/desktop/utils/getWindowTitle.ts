import type { WindowsRecord } from '../data/types'

const DEFAULT_TITLE = 'Finder'

const toTitleCase = (key: string) =>
	key
		.replace(/([A-Z])/g, ' $1')
		.replace(/^./, (match) => match.toUpperCase())
		.trim()

/**
 * Title shown in the desktop header: the visible window with the highest
 * z-index, falling back to `Finder` when no window is visible.
 */
export const getWindowTitle = (windows: WindowsRecord): string => {
	const openWindows = Object.entries(windows).filter(
		([, state]) => state.isOpen && !state.isMinimized
	)

	if (openWindows.length === 0) return DEFAULT_TITLE

	const [topWindowKey] = openWindows.reduce((prev, curr) =>
		curr[1].zIndex > prev[1].zIndex ? curr : prev
	)

	return toTitleCase(topWindowKey)
}

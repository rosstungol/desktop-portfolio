import type { WindowState } from '../data/types'

export type WindowAction = 'restore' | 'focus' | 'open'

/**
 * Decides what a dock/icon click should do for a window, based on its current
 * state: minimized windows are restored, open windows are focused, and closed
 * windows are opened.
 */
export const resolveWindowAction = (
	windowState: Pick<WindowState, 'isOpen' | 'isMinimized'>
): WindowAction => {
	if (windowState.isMinimized) return 'restore'
	if (windowState.isOpen) return 'focus'
	return 'open'
}

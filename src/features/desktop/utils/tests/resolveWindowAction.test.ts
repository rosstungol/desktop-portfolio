import { describe, expect, it } from 'vite-plus/test'

import { resolveWindowAction } from '@/features/desktop/utils/resolveWindowAction'

describe('resolveWindowAction', () => {
	it('restores a minimized window, even if it is also open', () => {
		expect(resolveWindowAction({ isOpen: true, isMinimized: true })).toBe(
			'restore'
		)
	})

	it('focuses an open, non-minimized window', () => {
		expect(resolveWindowAction({ isOpen: true, isMinimized: false })).toBe(
			'focus'
		)
	})

	it('opens a closed window', () => {
		expect(resolveWindowAction({ isOpen: false, isMinimized: false })).toBe(
			'open'
		)
	})
})

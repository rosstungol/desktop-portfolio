import { describe, expect, it } from 'vite-plus/test'

import {
	closeWork,
	completeWorkFocus,
	initialWorkState,
	requestWork,
} from '@/features/workplace/utils/workState'

describe('mobile work state', () => {
	it('waits for focus and ignores repeat taps', () => {
		const requested = requestWork(initialWorkState, 'start')

		expect(requested).toEqual({ requested: true, open: false })
		expect(requestWork(requested, 'start')).toBe(requested)
	})

	it('opens immediately when already focused', () => {
		expect(requestWork(initialWorkState, 'focus')).toEqual({
			requested: false,
			open: true,
		})
	})

	it('clears a pending request on desktop without opening the sheet', () => {
		expect(completeWorkFocus({ requested: true, open: false }, false)).toEqual(
			initialWorkState
		)
	})

	it('opens on mobile and keeps a sheet that is already open', () => {
		expect(completeWorkFocus({ requested: true, open: false }, true)).toEqual({
			requested: false,
			open: true,
		})
		expect(completeWorkFocus({ requested: false, open: true }, true)).toEqual({
			requested: false,
			open: true,
		})
	})

	it('close resets the state', () => {
		expect(closeWork()).toBe(initialWorkState)
	})
})

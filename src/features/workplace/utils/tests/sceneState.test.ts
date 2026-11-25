import { describe, expect, it } from 'vite-plus/test'

import type { SceneState } from '@/data/types'
import {
	isOrbitEnabled,
	isSceneInteractive,
	shouldRenderClickToStart,
	shouldRenderSceneControls,
} from '@/features/workplace/utils/sceneState'

const ALL_STATES: SceneState[] = ['loading', 'start', 'focus', 'idle']

describe('desktop scene overlays', () => {
	it('shows click-to-start only before focus, and never on mobile', () => {
		const visible = ALL_STATES.filter((state) =>
			shouldRenderClickToStart(state, false)
		)

		expect(visible).toEqual(['start', 'idle'])
		expect(
			ALL_STATES.every((state) => !shouldRenderClickToStart(state, true))
		).toBe(true)
	})

	it('shows scene controls only while focused or idle, and never on mobile', () => {
		const visible = ALL_STATES.filter((state) =>
			shouldRenderSceneControls(state, false)
		)

		expect(visible).toEqual(['focus', 'idle'])
		expect(
			ALL_STATES.every((state) => !shouldRenderSceneControls(state, true))
		).toBe(true)
	})

	it('accepts scene input (orbit, cursors, click-to-focus) everywhere except loading and focus', () => {
		const interactive = ALL_STATES.filter((state) => isSceneInteractive(state))

		expect(interactive).toEqual(['start', 'idle'])
		expect(isSceneInteractive(undefined)).toBe(false)
	})

	it('enables orbit from device state on mobile and the toggle on desktop', () => {
		expect(isOrbitEnabled('start', true, false)).toBe(true)
		expect(isOrbitEnabled('idle', true, false)).toBe(true)
		expect(isOrbitEnabled('focus', true, false)).toBe(false)
		expect(isOrbitEnabled('idle', false, true)).toBe(true)
		expect(isOrbitEnabled('idle', false, false)).toBe(false)
		expect(isOrbitEnabled('start', false, true)).toBe(false)
	})
})

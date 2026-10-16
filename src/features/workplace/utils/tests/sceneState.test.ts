import { describe, expect, it } from 'vite-plus/test'

import type { SceneState } from '@/data/types'
import {
	shouldRenderClickToStart,
	shouldRenderSceneControls,
} from '@/features/workplace/utils/sceneState'

const ALL_STATES: SceneState[] = ['loading', 'intro', 'start', 'focus', 'idle']

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
})

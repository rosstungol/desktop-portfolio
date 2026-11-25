import type { SceneState } from '@/data/types'

export type WorkState = {
	requested: boolean
	open: boolean
}

export const initialWorkState: WorkState = { requested: false, open: false }

export const requestWork = (
	state: WorkState,
	sceneState: SceneState
): WorkState => {
	if (state.requested || state.open) return state
	if (sceneState === 'focus') return { requested: false, open: true }
	return { requested: true, open: state.open }
}

export const completeWorkFocus = (
	state: WorkState,
	isMobile: boolean
): WorkState => ({
	requested: false,
	open: state.open || (isMobile && state.requested),
})

export const closeWork = (): WorkState => initialWorkState

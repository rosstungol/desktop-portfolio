import type { SceneState } from '@/data/types'

/** States where the desktop is shown but not yet focused. */
export const CLICK_TO_START_RENDER_STATES: ReadonlySet<SceneState> = new Set([
	'start',
	'idle',
])

/** States where the camera focus/idle controls are shown. */
export const SCENE_CONTROLS_RENDER_STATES: ReadonlySet<SceneState> = new Set([
	'focus',
	'idle',
])

/**
 * Whether the "click to start" prompt should render (and, since it is what
 * invites the click, whether the body should listen for a focus transition).
 */
export const shouldRenderClickToStart = (
	sceneState: SceneState,
	isMobile: boolean
): boolean => !isMobile && CLICK_TO_START_RENDER_STATES.has(sceneState)

/** Whether the scene focus/idle controls should render. */
export const shouldRenderSceneControls = (
	sceneState: SceneState,
	isMobile: boolean
): boolean => !isMobile && SCENE_CONTROLS_RENDER_STATES.has(sceneState)

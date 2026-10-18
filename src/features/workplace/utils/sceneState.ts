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
 * States where the scene accepts pointer input: everything except `loading`
 * and `focus`.
 */
export const INTERACTIVE_SCENE_STATES: ReadonlySet<SceneState> = new Set([
	'intro',
	'start',
	'idle',
])

/**
 * Whether the "click to start" prompt should render (and, since it is what
 * invites the click, whether clicking the desktop screen moves the scene into
 * focus).
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

/**
 * Whether the scene takes pointer input in this state: orbit controls and the
 * grab cursor on the canvas, plus the pointer cursor and click-to-focus on the
 * desktop screen. An undefined state (scene not wired up yet) is not
 * interactive.
 */
export const isSceneInteractive = (sceneState?: SceneState): boolean =>
	sceneState !== undefined && INTERACTIVE_SCENE_STATES.has(sceneState)

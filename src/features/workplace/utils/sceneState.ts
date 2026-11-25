import type { SceneState } from '@/data/types'

/**
 * States where the desktop prompt is shown and the scene accepts pointer
 * input: everything except `loading` and `focus`.
 */
export const INTERACTIVE_SCENE_STATES: ReadonlySet<SceneState> = new Set([
	'start',
	'idle',
])

/** States where the camera focus/idle controls are shown. */
export const SCENE_CONTROLS_RENDER_STATES: ReadonlySet<SceneState> = new Set([
	'focus',
	'idle',
])

/**
 * Whether the desktop "click to start" prompt should render (and, since it is
 * what invites the click, whether a scene click moves into focus).
 */
export const shouldRenderClickToStart = (
	sceneState: SceneState,
	isMobile: boolean
): boolean => !isMobile && INTERACTIVE_SCENE_STATES.has(sceneState)

/** Whether the scene focus/idle controls should render. */
export const shouldRenderSceneControls = (
	sceneState: SceneState,
	isMobile: boolean
): boolean => !isMobile && SCENE_CONTROLS_RENDER_STATES.has(sceneState)

/**
 * Whether the scene takes pointer input in this state: orbit controls and the
 * pointer cursor, plus click-to-focus while the prompt is visible. An undefined
 * state (scene not wired up yet) is not interactive.
 */
export const isSceneInteractive = (sceneState?: SceneState): boolean =>
	sceneState !== undefined && INTERACTIVE_SCENE_STATES.has(sceneState)

/** Orbit follows device state on mobile, and the explicit toggle on desktop. */
export const isOrbitEnabled = (
	sceneState: SceneState | undefined,
	isMobile: boolean,
	orbitActive: boolean
): boolean =>
	isMobile
		? isSceneInteractive(sceneState)
		: orbitActive && sceneState === 'idle'

import { startTransition, useEffect, useState } from 'react'

import { ClickToStart } from './features/workplace/components/ClickToStart'
import { SceneControls } from './features/workplace/components/SceneControls'
import { WorkplaceScene } from './features/workplace/components/WorkplaceScene'
import { SceneIntro } from './pages/intro/SceneIntro'

export type SceneState = 'loading' | 'intro' | 'start' | 'focus' | 'idle'

const SCENE_INTRO_RENDER_STATES = new Set(['loading', 'intro'])
const CLICK_TO_START_RENDER_STATES = new Set(['start', 'idle'])
const SCENE_CONTROLS_RENDER_STATES = new Set(['focus', 'idle'])

export function App() {
	const [sceneState, setSceneState] = useState<SceneState>('loading')

	useEffect(() => {
		const handleFocusTransition = () => {
			startTransition(() => setSceneState('focus'))
		}

		let timeoutId: ReturnType<typeof setTimeout> | undefined

		if (CLICK_TO_START_RENDER_STATES.has(sceneState)) {
			timeoutId = setTimeout(() => {
				document.body.addEventListener('click', handleFocusTransition)
			}, 1000)
		}

		return () => {
			if (timeoutId) clearTimeout(timeoutId)
			document.body.removeEventListener('click', handleFocusTransition)
		}
	}, [sceneState])

	return (
		<main>
			{SCENE_INTRO_RENDER_STATES.has(sceneState) && (
				<SceneIntro
					sceneState={sceneState}
					onLoaded={() => setSceneState('intro')}
					onStart={() => setSceneState('start')}
				/>
			)}

			{CLICK_TO_START_RENDER_STATES.has(sceneState) && <ClickToStart />}

			{SCENE_CONTROLS_RENDER_STATES.has(sceneState) && (
				<SceneControls
					sceneState={sceneState}
					onFocus={() => setSceneState('focus')}
					onIdle={() => setSceneState('idle')}
				/>
			)}

			<WorkplaceScene sceneState={sceneState} />
		</main>
	)
}

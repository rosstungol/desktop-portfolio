import { startTransition, useEffect, useState } from 'react'

import type { SceneState } from './data/types'
import { WorkplaceScene } from './features/workplace/components/scene/WorkplaceScene'
import { ClickToStart } from './features/workplace/components/ui/ClickToStart'
import { SceneControls } from './features/workplace/components/ui/SceneControls'
import { useIsMobile } from './hooks/useIsMobile'
import { AboutGrid } from './screens/about/AboutGrid'
import { SceneIntro } from './screens/intro/SceneIntro'

const SCENE_INTRO_RENDER_STATES = new Set(['loading', 'intro'])
const CLICK_TO_START_RENDER_STATES = new Set(['start', 'idle'])
const SCENE_CONTROLS_RENDER_STATES = new Set(['focus', 'idle'])

export function App() {
	const [sceneState, setSceneState] = useState<SceneState>('loading')
	const isMobile = useIsMobile()

	useEffect(() => {
		const handleFocusTransition = () => {
			startTransition(() => setSceneState('focus'))
		}

		let timeoutId: ReturnType<typeof setTimeout> | undefined

		if (CLICK_TO_START_RENDER_STATES.has(sceneState)) {
			if (!isMobile)
				timeoutId = setTimeout(() => {
					document.body.addEventListener('click', handleFocusTransition)
				}, 1000)
		}

		return () => {
			if (timeoutId) clearTimeout(timeoutId)
			document.body.removeEventListener('click', handleFocusTransition)
		}
	}, [sceneState, isMobile])

	return (
		<main>
			{SCENE_INTRO_RENDER_STATES.has(sceneState) && (
				<SceneIntro
					sceneState={sceneState}
					onLoaded={() => setSceneState('intro')}
					onStart={() => setSceneState('start')}
				/>
			)}

			{!isMobile && CLICK_TO_START_RENDER_STATES.has(sceneState) && (
				<ClickToStart />
			)}

			{!isMobile && SCENE_CONTROLS_RENDER_STATES.has(sceneState) && (
				<SceneControls
					sceneState={sceneState}
					onFocus={() => setSceneState('focus')}
					onIdle={() => setSceneState('idle')}
				/>
			)}

			{!isMobile ? (
				<div className='h-dvh'>
					<WorkplaceScene sceneState={sceneState} />
				</div>
			) : (
				<div className='h-dvh w-fit'>
					<AboutGrid sceneState={sceneState} />
				</div>
			)}
		</main>
	)
}

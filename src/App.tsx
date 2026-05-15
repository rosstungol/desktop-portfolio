import {
	lazy,
	startTransition,
	useEffect,
	useState,
	// @ts-expect-error React canary: ViewTransition not typed yet (remove when stable version is available)
	ViewTransition,
} from 'react'

import type { SceneState } from './data/types'
import { ClickToStart } from './features/workplace/components/ui/ClickToStart'
import { SceneControls } from './features/workplace/components/ui/SceneControls'
import { useIsMobile } from './hooks/useIsMobile'
import { AboutGrid } from './screens/about/AboutGrid'
import { LoadingScreen } from './screens/loading/LoadingScreen'

const CLICK_TO_START_RENDER_STATES = new Set(['start', 'idle'])
const SCENE_CONTROLS_RENDER_STATES = new Set(['focus', 'idle'])

const WorkplaceScene = lazy(
	() => import('./features/workplace/components/scene/WorkplaceScene')
)

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
			{sceneState === 'loading' && (
				<ViewTransition>
					<div className='viewport-overlay z-30'>
						<LoadingScreen
							onLoaded={() => startTransition(() => setSceneState('start'))}
						/>
					</div>
				</ViewTransition>
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

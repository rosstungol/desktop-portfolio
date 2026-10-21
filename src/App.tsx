import { lazy, startTransition, useState, ViewTransition } from 'react'

import type { SceneState } from './data/types'
import { ClickToStart } from './features/workplace/components/ui/ClickToStart'
import { SceneControls } from './features/workplace/components/ui/SceneControls'
import {
	shouldRenderClickToStart,
	shouldRenderSceneControls,
} from './features/workplace/utils/sceneState'
import { useIsMobile } from './hooks/useIsMobile'
import { AboutGrid } from './screens/about/AboutGrid'
import { LoadingScreen } from './screens/loading/LoadingScreen'

const WorkplaceScene = lazy(
	() => import('./features/workplace/components/scene/WorkplaceScene')
)

export function App() {
	const [sceneState, setSceneState] = useState<SceneState>('loading')
	const [progress, setProgress] = useState(0)
	const isMobile = useIsMobile()

	const handleFocus = () => startTransition(() => setSceneState('focus'))
	const handleIdle = () => startTransition(() => setSceneState('idle'))

	return (
		<main>
			{sceneState === 'loading' && (
				<ViewTransition>
					<div className='viewport-overlay z-30'>
						<LoadingScreen
							progress={progress}
							onLoaded={() => startTransition(() => setSceneState('start'))}
						/>
					</div>
				</ViewTransition>
			)}

			{shouldRenderClickToStart(sceneState, isMobile) && <ClickToStart />}

			{shouldRenderSceneControls(sceneState, isMobile) && (
				<SceneControls
					sceneState={sceneState}
					onFocus={handleFocus}
					onIdle={handleIdle}
				/>
			)}

			{!isMobile ? (
				<div className='h-dvh'>
					<WorkplaceScene
						sceneState={sceneState}
						onFocus={handleFocus}
						onProgress={setProgress}
					/>
				</div>
			) : (
				<div className='h-dvh w-fit'>
					<AboutGrid sceneState={sceneState} onProgress={setProgress} />
				</div>
			)}
		</main>
	)
}

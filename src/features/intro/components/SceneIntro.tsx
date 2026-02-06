// @ts-expect-error React canary: ViewTransition not typed yet (remove when stable version is available)
import { ViewTransition } from 'react'

import type { SceneState } from '@/App'

import LoadingScreen from './LoadingScreen'
import StartScreen from './StartScreen'

type SceneIntroProps = {
	sceneState: SceneState
	onLoaded: () => void
	onStart: () => void
}

export default function SceneIntro({
	sceneState,
	onLoaded,
	onStart,
}: SceneIntroProps) {
	let screenContent: React.ReactNode

	if (sceneState === 'loading') {
		screenContent = <LoadingScreen onLoaded={onLoaded} />
	} else if (sceneState === 'intro') {
		screenContent = <StartScreen onStart={onStart} />
	}

	return (
		<ViewTransition>
			<div className='fullscreen-overlay overlay-bg'>{screenContent}</div>
		</ViewTransition>
	)
}

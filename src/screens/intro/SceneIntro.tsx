// @ts-expect-error React canary: ViewTransition not typed yet (remove when stable version is available)
import { type ReactNode, ViewTransition } from 'react'

import type { SceneState } from '@/data/types'

import { LoadingScreen } from './LoadingScreen'
import { StartScreen } from './StartScreen'

type SceneIntroProps = {
	sceneState: SceneState
	onLoaded: () => void
	onStart: () => void
}

export function SceneIntro({ sceneState, onLoaded, onStart }: SceneIntroProps) {
	let screenContent: ReactNode

	if (sceneState === 'loading') {
		screenContent = <LoadingScreen onLoaded={onLoaded} />
	} else if (sceneState === 'intro') {
		screenContent = <StartScreen onStart={onStart} />
	}

	return (
		<ViewTransition>
			<div className='viewport-overlay z-30'>{screenContent}</div>
		</ViewTransition>
	)
}

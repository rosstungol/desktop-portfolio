import { ZoomIn, ZoomOut } from 'lucide-react'

// @ts-expect-error React canary: ViewTransition not typed yet (remove when stable version is available)
import { type ReactNode, ViewTransition } from 'react'
import type { SceneState } from '@/App'

type SceneControlsProps = {
	sceneState: SceneState
	onIdle: () => void
	onFocus: () => void
}

export default function SceneControls({
	sceneState,
	onIdle,
	onFocus,
}: SceneControlsProps) {
	let zoomIcon: ReactNode

	if (sceneState === 'focus') {
		zoomIcon = (
			<>
				<ZoomOut />
				<span className='sr-only'>Zoom Out</span>
			</>
		)
	} else {
		zoomIcon = (
			<>
				<ZoomIn />
				<span className='sr-only'>Zoom In</span>
			</>
		)
	}

	const handleToggle = () => {
		if (sceneState === 'focus') {
			onIdle()
		} else if (sceneState === 'idle') {
			onFocus()
		}
	}

	return (
		<ViewTransition>
			<div className='fixed top-6 left-6 z-20'>
				<button
					type='button'
					onClick={handleToggle}
					className='button -secondary'
				>
					{zoomIcon}
				</button>
			</div>
		</ViewTransition>
	)
}

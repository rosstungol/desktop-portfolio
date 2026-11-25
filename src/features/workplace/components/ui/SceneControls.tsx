import { type ReactNode } from 'react'

import { RotateThree, ZoomIn, ZoomOut } from '@/components/icons/huge'
import { Button } from '@/components/ui/Button'
import type { SceneState } from '@/data/types'

type SceneControlsProps = {
	sceneState: SceneState
	orbitActive: boolean
	onIdle: () => void
	onFocus: () => void
	onOrbitToggle: () => void
}

export function SceneControls({
	sceneState,
	orbitActive,
	onIdle,
	onFocus,
	onOrbitToggle,
}: SceneControlsProps) {
	let zoomIcon: ReactNode

	if (sceneState === 'focus') {
		zoomIcon = (
			<>
				<ZoomOut />
				<span className='sr-only'>Zoom Out</span>
			</>
		)
	} else if (sceneState === 'idle') {
		zoomIcon = (
			<>
				<ZoomIn />
				<span className='sr-only'>Zoom In</span>
			</>
		)
	}

	const handleFocusToggle = () => {
		if (sceneState === 'focus') {
			onIdle()
		} else if (sceneState === 'idle') {
			onFocus()
		}
	}

	return (
		<div className='fixed top-6 left-6 z-20 flex gap-2'>
			<Button variant='secondary' onClick={handleFocusToggle}>
				{zoomIcon}
			</Button>
			{sceneState === 'idle' && (
				<Button
					variant='secondary'
					className={
						orbitActive
							? 'border-slate-100 bg-slate-100 text-neutral-950'
							: undefined
					}
					aria-label={
						orbitActive ? 'Disable orbit controls' : 'Enable orbit controls'
					}
					aria-pressed={orbitActive}
					onClick={onOrbitToggle}
				>
					<RotateThree />
				</Button>
			)}
		</div>
	)
}

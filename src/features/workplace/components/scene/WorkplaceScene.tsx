import { useProgress } from '@react-three/drei/core'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { useEffect, useRef } from 'react'
import type { Group } from 'three'

import type { SceneState } from '@/data/types'
import { DesktopContainer } from '@/features/desktop/components/layout/DesktopContainer'
import { useIsUltrawide } from '@/hooks/useIsUltraWide'
import { cn } from '@/utils/cn'

import { CAMERA_CONFIG } from '../../sceneConfig'
import { isSceneInteractive } from '../../utils/sceneState'
import { CameraController } from '../camera/CameraController'
import { FixedWidthCamera } from '../camera/FixedWidthCamera'
import { Lighting } from './Lighting'
import { RoomModel } from './RoomModel'
import { Skybox } from './Skybox'

export default function WorkplaceScene({
	sceneState,
	onFocus,
	onProgress,
}: {
	sceneState?: SceneState
	onFocus?: () => void
	onProgress?: (progress: number) => void
}) {
	const screenRef = useRef<Group | null>(null)
	const isUltrawide = useIsUltrawide()
	const orbitEnabled = isSceneInteractive(sceneState)
	const progress = useProgress((state) => state.progress)

	// Loading progress is tracked here (inside the lazy scene chunk) and pushed
	// up, so the entry bundle never imports drei/three.
	useEffect(() => {
		onProgress?.(progress)
	}, [progress, onProgress])

	return (
		<Canvas
			shadows
			// `focus` is static after the 1.5s dolly; demand-mode stops rendering
			// (and stops burning GPU) until the camera tween invalidates frames.
			frameloop={sceneState === 'focus' ? 'demand' : 'always'}
			camera={{ position: [...CAMERA_CONFIG.initialPosition] }}
			dpr={[1, 1.5]}
			className={cn(
				'z-10',
				orbitEnabled && 'cursor-grab active:cursor-grabbing'
			)}
		>
			{!isUltrawide && <FixedWidthCamera />}
			<CameraController sceneState={sceneState} screenRef={screenRef} />
			<Skybox />
			<Lighting />
			<RoomModel />
			<DesktopContainer
				screenRef={screenRef}
				sceneState={sceneState}
				onFocus={onFocus}
			/>

			{import.meta.env.DEV && <Perf />}
		</Canvas>
	)
}

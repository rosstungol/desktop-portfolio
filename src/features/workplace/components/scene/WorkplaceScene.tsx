import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { useRef } from 'react'
import type * as THREE from 'three'

import type { SceneState } from '@/App'
import { DesktopContainer } from '@/features/desktop/components/layout/DesktopContainer'

import { CameraController } from '../camera/CameraController'
import { FixedWidthCamera } from '../camera/FixedWidthCamera'
import { Lighting } from './Lighting'
import { RoomModel } from './RoomModel'
import { Skybox } from './Skybox'

export function WorkplaceScene({ sceneState }: { sceneState: SceneState }) {
	const screenRef = useRef<THREE.Group | null>(null)

	return (
		<Canvas
			shadows
			camera={{ position: [60, 180, 120] }}
			dpr={[1, 1.5]}
			className='z-10'
		>
			<FixedWidthCamera />
			<CameraController sceneState={sceneState} screenRef={screenRef} />
			<Skybox />
			<Lighting />
			<RoomModel />
			<DesktopContainer screenRef={screenRef} />

			{import.meta.env.DEV && <Perf />}
		</Canvas>
	)
}

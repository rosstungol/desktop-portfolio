import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { useRef } from 'react'
import type { Group } from 'three/src/objects/Group.js'

import type { SceneState } from '@/data/types'
import { DesktopContainer } from '@/features/desktop/components/layout/DesktopContainer'

import { CAMERA_CONFIG } from '../../sceneConfig'
import { CameraController } from '../camera/CameraController'
import { FixedWidthCamera } from '../camera/FixedWidthCamera'
import { Lighting } from './Lighting'
import { RoomModel } from './RoomModel'
import { Skybox } from './Skybox'

export default function WorkplaceScene({
	sceneState,
}: {
	sceneState?: SceneState
}) {
	const screenRef = useRef<Group | null>(null)

	return (
		<Canvas
			shadows
			camera={{ position: [...CAMERA_CONFIG.initialPosition] }}
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

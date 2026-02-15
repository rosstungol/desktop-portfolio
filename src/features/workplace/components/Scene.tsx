import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { useRef } from 'react'
import type * as THREE from 'three'
import type { SceneState } from '@/App'
import DesktopContainer from '@/features/desktop/components/DesktopContainer'

import CameraController from './CameraController'
import FixedWidthCamera from './FixedWidthCamera'
import Lighting from './Lighting'
import RoomModel from './RoomModel'
import Skybox from './Skybox'

export default function Scene({ sceneState }: { sceneState: SceneState }) {
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
			<DesktopContainer screenRef={screenRef} />
			<Skybox />
			<Lighting />
			<RoomModel />
			{import.meta.env.DEV && <Perf />}
		</Canvas>
	)
}

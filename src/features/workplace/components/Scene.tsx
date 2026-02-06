import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'

import type { SceneState } from '@/App'
import DesktopContainer from '@/features/desktop/components/DesktopContainer'

import CameraController from './CameraController'
import Lighting from './Lighting'
import RoomModel from './RoomModel'
import Skybox from './Skybox'

type SceneProps = {
  sceneState: SceneState
}

export default function Scene({ sceneState }: SceneProps) {
  return (
    <Canvas
      shadows
      camera={{ position: [60, 150, 100] }}
      dpr={[1, 1.5]}
      className='z-10'
    >
      <CameraController sceneState={sceneState} />
      <DesktopContainer />
      <Skybox />
      <Lighting />
      <RoomModel />
      {import.meta.env.DEV && <Perf />}
    </Canvas>
  )
}

import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'

import type { SceneState } from '@/App'
import DesktopContainer from '@/features/desktop/components/DesktopContainer'

import { CameraHover, CameraIntro } from '../camera'

import Lighting from './Lighting'
import RoomModel from './RoomModel'
import Skybox from './Skybox'

type SceneProps = {
  sceneState: SceneState
  onIdle: () => void
}

export default function Scene({ sceneState, onIdle }: SceneProps) {
  return (
    <Canvas
      shadows
      camera={{ position: [60, 150, 100] }}
      dpr={[1, 1.5]}
      className='z-10'
    >
      {sceneState === 'start' && <CameraIntro onIdle={onIdle} />}
      {sceneState === 'idle' && <CameraHover />}

      <DesktopContainer />
      <Skybox />
      <Lighting />
      <RoomModel />
      <Perf />
    </Canvas>
  )
}

import { Suspense } from 'react'

import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'

import DesktopContainer from '@/features/desktop/components/DesktopContainer'

import WorkplaceEnvironment from './WorkplaceEnvironment'
import WorkplaceLight from './WorkplaceLight'
import WorkplaceLoader from './WorkplaceLoader'
import WorkplaceModel from './WorkplaceModel'

export default function WorkplaceCanvas() {
  return (
    <Canvas
      shadows
      camera={{ position: [60, 60, 60], fov: 60 }}
      dpr={[1, 1.5]}
      className='canvas-bg'
    >
      <Suspense fallback={<WorkplaceLoader />}>
        <DesktopContainer />
        <WorkplaceEnvironment />
        <WorkplaceLight />
        <WorkplaceModel />
      </Suspense>
      <OrbitControls enablePan />
      <Perf />
    </Canvas>
  )
}

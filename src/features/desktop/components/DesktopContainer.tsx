import { Html } from '@react-three/drei'

import DesktopScreen from './DesktopScreen'

export default function DesktopContainer() {
  return (
    <>
      <Html
        rotation-y={-Math.PI / -1.915}
        position={[-16.17, 26.23, 0.27]}
        transform
        occlude
      >
        <div
          className='desktop-bg'
          onPointerDown={(e) => e.stopPropagation()}
        />
      </Html>
      <Html
        rotation-y={-Math.PI / -1.915}
        position={[-16.16, 26.23, 0.27]}
        transform
        occlude
      >
        <DesktopScreen />
      </Html>
    </>
  )
}

import { Html } from '@react-three/drei'
import type { RefObject } from 'react'
import type * as THREE from 'three'
import DesktopScreen from './DesktopScreen'

export default function DesktopContainer({
	screenRef,
}: {
	screenRef: RefObject<THREE.Group | null>
}) {
	return (
		<group ref={screenRef} position={[-16.17, 26.23, 0.27]}>
			<Html
				rotation-y={Math.PI / 1.915}
				transform
				occlude
				onPointerDown={(e) => e.stopPropagation()}
			>
				<div className='desktop-container'>
					<DesktopScreen />
				</div>
			</Html>
		</group>
	)
}

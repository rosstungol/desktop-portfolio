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
		<group ref={screenRef} position={[-24.26, 39.33, 0.41]}>
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

import { Html } from '@react-three/drei'
import type { RefObject } from 'react'
import type * as THREE from 'three'

import { DESKTOP_POSITION } from '@/features/workplace/sceneConfig'

import { DesktopScreen } from './DesktopScreen'

export function DesktopContainer({
	screenRef,
}: {
	screenRef: RefObject<THREE.Group | null>
}) {
	return (
		<group ref={screenRef} position={[...DESKTOP_POSITION]}>
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

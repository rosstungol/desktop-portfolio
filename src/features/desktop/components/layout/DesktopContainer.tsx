import { Html } from '@react-three/drei/web/Html'
import type { RefObject } from 'react'
import type { Group } from 'three'

import { DESKTOP_POSITION } from '@/features/workplace/sceneConfig'
import { useIsMobile } from '@/hooks/useIsMobile'

import { DesktopScreen } from './DesktopScreen'

export function DesktopContainer({
	screenRef,
}: {
	screenRef: RefObject<Group | null>
}) {
	const isMobile = useIsMobile()

	return (
		<group ref={screenRef} position={[...DESKTOP_POSITION]}>
			<Html
				rotation-y={Math.PI / 1.915}
				transform
				occlude
				onPointerDown={(e) => e.stopPropagation()}
			>
				<div className='desktop-container'>
					{!isMobile && <DesktopScreen />}
				</div>
			</Html>
		</group>
	)
}

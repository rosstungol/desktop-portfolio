import { Html } from '@react-three/drei/web/Html'
import type { RefObject } from 'react'
import type { Group } from 'three'

import type { SceneState } from '@/data/types'
import { DESKTOP_POSITION } from '@/features/workplace/sceneConfig'
import { isSceneInteractive } from '@/features/workplace/utils/sceneState'
import { useIsMobile } from '@/hooks/useIsMobile'
import { cn } from '@/utils/cn'

import { DesktopScreen } from './DesktopScreen'

export function DesktopContainer({
	sceneState,
	screenRef,
	onFocus,
}: {
	sceneState?: SceneState
	screenRef: RefObject<Group | null>
	onFocus?: () => void
}) {
	const isMobile = useIsMobile()
	const isInteractive = isSceneInteractive(sceneState)

	return (
		<group ref={screenRef} position={[...DESKTOP_POSITION]}>
			<Html
				rotation-y={Math.PI / 1.915}
				transform
				occlude
				onPointerDown={(e) => e.stopPropagation()}
			>
				<div
					className={cn('desktop-container', isInteractive && 'cursor-pointer')}
					onClick={isInteractive ? onFocus : undefined}
				>
					{!isMobile && <DesktopScreen />}
				</div>
			</Html>
		</group>
	)
}

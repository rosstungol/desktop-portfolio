import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'
import { PerspectiveCamera } from 'three'

import { FIXED_HORIZONTAL_FOV, hFovToVFov } from '../../utils/fov'

export function FixedWidthCamera() {
	const { camera, size } = useThree()

	useEffect(() => {
		if (!(camera instanceof PerspectiveCamera)) return
		if (size.width === 0 || size.height === 0) return

		const aspect = size.width / size.height
		camera.fov = hFovToVFov(FIXED_HORIZONTAL_FOV, aspect)
		camera.updateProjectionMatrix()
	}, [camera, size.width, size.height])

	return null
}

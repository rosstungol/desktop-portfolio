import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'
import { MathUtils, PerspectiveCamera } from 'three'

const vFovToHFov = (vFov: number, aspect: number) =>
	MathUtils.radToDeg(
		2 * Math.atan(Math.tan(MathUtils.degToRad(vFov) / 2) * aspect)
	)

const hFovToVFov = (hFov: number, aspect: number) =>
	MathUtils.radToDeg(
		2 * Math.atan(Math.tan(MathUtils.degToRad(hFov) / 2) / aspect)
	)

const DESIGN_ASPECT = 16 / 10
const DESIGN_VERTICAL_FOV = 78

const FIXED_HORIZONTAL_FOV = vFovToHFov(DESIGN_VERTICAL_FOV, DESIGN_ASPECT)

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

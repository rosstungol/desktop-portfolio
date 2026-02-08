import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'
import * as THREE from 'three'

const vFovToHFov = (vFov: number, aspect: number) =>
	THREE.MathUtils.radToDeg(
		2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(vFov) / 2) * aspect)
	)

const hFovToVFov = (hFov: number, aspect: number) =>
	THREE.MathUtils.radToDeg(
		2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(hFov) / 2) / aspect)
	)

const DESIGN_ASPECT = 16 / 10
const DESIGN_VERTICAL_FOV = 78

const FIXED_HORIZONTAL_FOV = vFovToHFov(DESIGN_VERTICAL_FOV, DESIGN_ASPECT)

export default function FixedWidthCamera() {
	const { camera, size } = useThree()

	useEffect(() => {
		if (!(camera instanceof THREE.PerspectiveCamera)) return
		if (size.width === 0 || size.height === 0) return

		const aspect = size.width / size.height
		camera.fov = hFovToVFov(FIXED_HORIZONTAL_FOV, aspect)
		camera.updateProjectionMatrix()
	}, [camera, size.width, size.height])

	return null
}

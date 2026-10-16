import { MathUtils } from 'three'

export const vFovToHFov = (vFov: number, aspect: number) =>
	MathUtils.radToDeg(
		2 * Math.atan(Math.tan(MathUtils.degToRad(vFov) / 2) * aspect)
	)

export const hFovToVFov = (hFov: number, aspect: number) =>
	MathUtils.radToDeg(
		2 * Math.atan(Math.tan(MathUtils.degToRad(hFov) / 2) / aspect)
	)

export const DESIGN_ASPECT = 16 / 10
export const DESIGN_VERTICAL_FOV = 78

/**
 * Horizontal FOV derived from the design vertical FOV and design aspect.
 * The camera holds this value constant regardless of the viewport's aspect.
 */
export const FIXED_HORIZONTAL_FOV = vFovToHFov(
	DESIGN_VERTICAL_FOV,
	DESIGN_ASPECT
)

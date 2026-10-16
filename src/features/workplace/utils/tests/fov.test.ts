import { describe, expect, it } from 'vite-plus/test'

import {
	DESIGN_ASPECT,
	DESIGN_VERTICAL_FOV,
	FIXED_HORIZONTAL_FOV,
	hFovToVFov,
	vFovToHFov,
} from '@/features/workplace/utils/fov'

describe('fixed-width camera FOV maths', () => {
	it('leaves a square aspect unchanged', () => {
		expect(vFovToHFov(90, 1)).toBeCloseTo(90, 6)
		expect(hFovToVFov(90, 1)).toBeCloseTo(90, 6)
	})

	it('round-trips vertical FOV through horizontal for the same aspect', () => {
		const aspect = 21 / 9

		expect(hFovToVFov(vFovToHFov(65, aspect), aspect)).toBeCloseTo(65, 6)
	})

	it('derives the fixed horizontal FOV from the design vertical FOV', () => {
		expect(FIXED_HORIZONTAL_FOV).toBeCloseTo(
			vFovToHFov(DESIGN_VERTICAL_FOV, DESIGN_ASPECT),
			6
		)
	})

	it('uses a smaller vertical FOV as the aspect ratio widens', () => {
		const wide = hFovToVFov(FIXED_HORIZONTAL_FOV, 21 / 9)
		const narrow = hFovToVFov(FIXED_HORIZONTAL_FOV, 4 / 3)

		expect(wide).toBeLessThan(narrow)
	})
})

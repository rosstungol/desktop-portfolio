// @vitest-environment happy-dom
import { act, cleanup, renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vite-plus/test'

import { useIsUltrawide } from '@/hooks/useIsUltraWide'
import { setViewport } from '@/utils/tests/viewport'

afterEach(() => {
	cleanup()
	setViewport(1280, 800)
})

describe('useIsUltrawide', () => {
	it('reports ultrawide above the default 2:1 threshold', () => {
		setViewport(2560, 1080)

		const { result } = renderHook(() => useIsUltrawide())

		expect(result.current).toBe(true)
	})

	it('is not ultrawide at or below the threshold', () => {
		setViewport(1920, 1080)

		const { result } = renderHook(() => useIsUltrawide())

		expect(result.current).toBe(false)
	})

	it('updates when the viewport is resized', () => {
		setViewport(1920, 1080)
		const { result } = renderHook(() => useIsUltrawide())

		act(() => setViewport(3440, 1080))
		expect(result.current).toBe(true)

		act(() => setViewport(1280, 720))
		expect(result.current).toBe(false)
	})

	it('honours a custom threshold', () => {
		setViewport(2560, 1080)

		const { result } = renderHook(() => useIsUltrawide(3))

		expect(result.current).toBe(false)
	})
})

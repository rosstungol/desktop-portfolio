// @vitest-environment happy-dom
import { act, cleanup, renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vite-plus/test'

import { useIsMobile } from '@/hooks/useIsMobile'
import { setViewport } from '@/utils/tests/viewport'

afterEach(() => {
	cleanup()
	setViewport(1280)
})

describe('useIsMobile', () => {
	it('reports mobile below the breakpoint', () => {
		setViewport(800)

		const { result } = renderHook(() => useIsMobile())

		expect(result.current).toBe(true)
	})

	it('reports desktop at or above the breakpoint', () => {
		setViewport(1024)

		const { result } = renderHook(() => useIsMobile())

		expect(result.current).toBe(false)
	})

	it('updates when the viewport is resized', () => {
		setViewport(1280)
		const { result } = renderHook(() => useIsMobile())

		act(() => setViewport(500))

		expect(result.current).toBe(true)
	})

	it('honours a custom breakpoint', () => {
		setViewport(1000)

		const { result } = renderHook(() => useIsMobile(1200))

		expect(result.current).toBe(true)
	})
})

// @vitest-environment happy-dom
import { act, cleanup, render } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vite-plus/test'

import { DigitalClock } from '@/features/desktop/components/ui/DigitalClock'

const TIME_PATTERN =
	/^[A-Z][a-z]{2} [A-Z][a-z]{2} \d{1,2} \d{1,2}:\d{2} (AM|PM)$/

beforeEach(() => {
	vi.useFakeTimers()
})

afterEach(() => {
	cleanup()
	vi.useRealTimers()
})

describe('DigitalClock', () => {
	it('renders the current time in the expected format', () => {
		vi.setSystemTime(new Date('2024-03-09T14:05:00'))

		const { container } = render(<DigitalClock />)

		expect(container.querySelector('time')?.textContent).toMatch(TIME_PATTERN)
	})

	it('updates as time advances', async () => {
		vi.setSystemTime(new Date('2024-03-09T14:05:00'))
		const { container } = render(<DigitalClock />)
		const time = container.querySelector('time')
		const initial = time?.textContent

		vi.setSystemTime(new Date('2024-03-09T14:06:00'))
		await act(async () => {
			vi.advanceTimersByTime(1000)
		})

		expect(time?.textContent).not.toBe(initial)
		expect(time?.textContent).toMatch(TIME_PATTERN)
	})

	it('cancels the animation frame when unmounted', () => {
		const cancel = vi.spyOn(window, 'cancelAnimationFrame')

		const { unmount } = render(<DigitalClock />)
		unmount()

		expect(cancel).toHaveBeenCalled()
	})
})

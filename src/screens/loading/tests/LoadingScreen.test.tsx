// @vitest-environment happy-dom
import { cleanup, render } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vite-plus/test'

import { LoadingScreen } from '@/screens/loading/LoadingScreen'

beforeEach(() => {
	// The reduced-motion branch must still hand off to the scene.
	vi.spyOn(window, 'matchMedia').mockReturnValue({
		matches: true,
	} as MediaQueryList)
})

afterEach(() => {
	cleanup()
	vi.restoreAllMocks()
})

describe('LoadingScreen', () => {
	it('hands off to the scene when progress reaches 100 under reduced motion', () => {
		const onLoaded = vi.fn()

		render(<LoadingScreen progress={100} onLoaded={onLoaded} />)

		expect(onLoaded).toHaveBeenCalledTimes(1)
	})

	it('does not hand off before progress reaches 100', () => {
		const onLoaded = vi.fn()

		render(<LoadingScreen progress={99} onLoaded={onLoaded} />)

		expect(onLoaded).not.toHaveBeenCalled()
	})

	it('hands off exactly once, even across re-renders', () => {
		const onLoaded = vi.fn()
		const { rerender } = render(
			<LoadingScreen progress={50} onLoaded={onLoaded} />
		)

		rerender(<LoadingScreen progress={100} onLoaded={onLoaded} />)
		rerender(<LoadingScreen progress={100} onLoaded={vi.fn()} />)

		expect(onLoaded).toHaveBeenCalledTimes(1)
	})
})

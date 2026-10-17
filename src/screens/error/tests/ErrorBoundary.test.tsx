// @vitest-environment happy-dom
import { cleanup, render } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vite-plus/test'

import { ErrorBoundary } from '@/screens/error/ErrorBoundary'

function Boom(): never {
	throw new Error('boom')
}

beforeEach(() => {
	vi.spyOn(console, 'error').mockImplementation(() => {})
})

afterEach(() => {
	cleanup()
	vi.restoreAllMocks()
})

describe('ErrorBoundary', () => {
	it('renders its children while there is no error', () => {
		const { getByText } = render(
			<ErrorBoundary fallback={<p>fallback</p>}>
				<p>content</p>
			</ErrorBoundary>
		)

		expect(getByText('content')).toBeTruthy()
	})

	it('renders the fallback and logs when a child throws', () => {
		const { getByText, queryByText } = render(
			<ErrorBoundary fallback={<p>fallback</p>}>
				<Boom />
			</ErrorBoundary>
		)

		expect(getByText('fallback')).toBeTruthy()
		expect(queryByText('content')).toBeNull()
		expect(console.error).toHaveBeenCalled()
	})
})

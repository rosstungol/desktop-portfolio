// @vitest-environment happy-dom
import { useGSAP } from '@gsap/react'
import { cleanup, render } from '@testing-library/react'
import gsap from 'gsap'
import { afterEach, beforeEach, describe, expect, it } from 'vite-plus/test'

import { WindowWrapper } from '@/features/desktop/components/wrapper/WindowWrapper'
import { useWindowStore } from '@/features/desktop/stores/window'

gsap.registerPlugin(useGSAP)

const INITIAL_STATE = useWindowStore.getState()

beforeEach(() => {
	useWindowStore.setState(INITIAL_STATE, true)
})

afterEach(() => {
	cleanup()
})

describe('WindowWrapper', () => {
	it('renders the window for its store key', () => {
		const Wrapped = WindowWrapper(() => <p>content</p>, 'about')

		const { container } = render(<Wrapped />)

		expect(container.querySelector('#about')?.textContent).toBe('content')
	})
})

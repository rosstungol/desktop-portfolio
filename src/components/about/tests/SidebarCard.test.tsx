// @vitest-environment happy-dom
import {
	cleanup,
	createEvent,
	fireEvent,
	render,
	screen,
} from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vite-plus/test'

import { SidebarCard } from '@/components/about/SidebarCard'
import { useWindowStore } from '@/features/desktop/stores/window'
import { setViewport } from '@/utils/tests/viewport'

const INITIAL_STATE = useWindowStore.getState()

afterEach(() => {
	cleanup()
	useWindowStore.setState(INITIAL_STATE, true)
	setViewport(1280)
	vi.restoreAllMocks()
})

describe('SidebarCard', () => {
	it('opens the Resume window instead of following the link on desktop', () => {
		setViewport(1280)
		const openWindow = vi.fn()
		useWindowStore.setState({ openWindow })

		render(<SidebarCard />)

		const link = screen.getByRole('link', { name: /resume/i })
		const click = createEvent.click(link)
		fireEvent(link, click)

		expect(click.defaultPrevented).toBe(true)
		expect(openWindow).toHaveBeenCalledWith('resume')
	})

	it('follows the Resume link on mobile', () => {
		setViewport(800)
		const openWindow = vi.fn()
		useWindowStore.setState({ openWindow })

		render(<SidebarCard />)

		const link = screen.getByRole('link', { name: /resume/i })
		const click = createEvent.click(link)
		fireEvent(link, click)

		expect(click.defaultPrevented).toBe(false)
		expect(openWindow).not.toHaveBeenCalled()
	})
})

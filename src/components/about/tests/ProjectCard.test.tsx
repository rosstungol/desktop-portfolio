// @vitest-environment happy-dom
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vite-plus/test'

import { ProjectCard } from '@/components/about/ProjectCard'

afterEach(() => {
	cleanup()
})

describe('ProjectCard', () => {
	it('switches the works list between Project and Playground tabs', () => {
		render(<ProjectCard />)

		expect(screen.getByText('rosstungol.com')).toBeTruthy()
		expect(screen.queryByText('low orbit')).toBeNull()

		fireEvent.click(screen.getByRole('tab', { name: 'Playground' }))

		expect(screen.getByText('low orbit')).toBeTruthy()
		expect(screen.queryByText('rosstungol.com')).toBeNull()
		expect(
			screen
				.getByRole('tab', { name: 'Playground' })
				.getAttribute('aria-selected')
		).toBe('true')
	})

	it('moves focus and selection with arrow keys within one tab stop', () => {
		render(<ProjectCard />)

		const project = screen.getByRole('tab', { name: 'Projects' })
		const playground = screen.getByRole('tab', { name: 'Playground' })
		expect(project.tabIndex).toBe(0)
		expect(playground.tabIndex).toBe(-1)

		project.focus()
		fireEvent.keyDown(project, { key: 'ArrowRight' })

		expect(document.activeElement).toBe(playground)
		expect(project.tabIndex).toBe(-1)
		expect(playground.tabIndex).toBe(0)
		expect(playground.getAttribute('aria-selected')).toBe('true')
		expect(screen.getByText('low orbit')).toBeTruthy()

		fireEvent.keyDown(playground, { key: 'ArrowLeft' })

		expect(document.activeElement).toBe(project)
		expect(project.getAttribute('aria-selected')).toBe('true')
	})

	it('jumps to the first and last tab with Home and End', () => {
		render(<ProjectCard />)

		const project = screen.getByRole('tab', { name: 'Projects' })
		const playground = screen.getByRole('tab', { name: 'Playground' })

		project.focus()
		fireEvent.keyDown(project, { key: 'End' })
		expect(document.activeElement).toBe(playground)

		fireEvent.keyDown(playground, { key: 'Home' })
		expect(document.activeElement).toBe(project)
	})
})

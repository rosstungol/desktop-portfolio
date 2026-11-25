// @vitest-environment happy-dom
import { useGSAP } from '@gsap/react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import gsap from 'gsap'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vite-plus/test'

import { BottomSheetModal } from '@/components/ui/BottomSheetModal'

gsap.registerPlugin(useGSAP)

let reducedMotion = false

beforeEach(() => {
	reducedMotion = false
	vi.spyOn(window, 'matchMedia').mockImplementation(
		() => ({ matches: reducedMotion }) as MediaQueryList
	)
})

afterEach(() => {
	cleanup()
	vi.restoreAllMocks()
})

describe('BottomSheetModal', () => {
	it('closes when the area outside the sheet is clicked', () => {
		const onClose = vi.fn()

		render(
			<BottomSheetModal open title='Work' onClose={onClose}>
				content
			</BottomSheetModal>
		)

		fireEvent.click(screen.getByRole('button', { name: /close work/i }))

		expect(onClose).toHaveBeenCalledTimes(1)
	})

	it('closes on Escape', () => {
		const onClose = vi.fn()

		render(
			<BottomSheetModal open title='Work' onClose={onClose}>
				content
			</BottomSheetModal>
		)

		fireEvent.keyDown(window, { key: 'Escape' })

		expect(onClose).toHaveBeenCalledTimes(1)
	})

	it('wraps Tab between the first and last controls', () => {
		render(
			<BottomSheetModal open title='Work' onClose={() => {}}>
				<button type='button' aria-label='child'>
					child
				</button>
			</BottomSheetModal>
		)

		const close = document.querySelector<HTMLButtonElement>(
			'[aria-label="Close"]'
		)
		const child = document.querySelector<HTMLButtonElement>(
			'[aria-label="child"]'
		)

		child!.focus()
		fireEvent.keyDown(window, { key: 'Tab' })
		expect(document.activeElement).toBe(close)

		fireEvent.keyDown(window, { key: 'Tab', shiftKey: true })
		expect(document.activeElement).toBe(child)
	})

	it('keeps the focus trap until the sheet unmounts', () => {
		const { rerender } = render(
			<BottomSheetModal open title='Work' onClose={() => {}}>
				<button type='button' aria-label='child'>
					child
				</button>
			</BottomSheetModal>
		)

		const close = document.querySelector<HTMLButtonElement>(
			'[aria-label="Close"]'
		)
		const child = document.querySelector<HTMLButtonElement>(
			'[aria-label="child"]'
		)

		child!.focus()
		rerender(
			<BottomSheetModal open={false} title='Work' onClose={() => {}}>
				<button type='button' aria-label='child'>
					child
				</button>
			</BottomSheetModal>
		)

		fireEvent.keyDown(window, { key: 'Tab' })

		expect(document.activeElement).toBe(close)
	})

	it('skips the slide and focuses the close button with reduced motion', () => {
		reducedMotion = true

		render(
			<BottomSheetModal open title='Work' onClose={() => {}}>
				content
			</BottomSheetModal>
		)

		expect(document.activeElement).toBe(
			screen.getByRole('button', { name: 'Close' })
		)
	})

	it('unmounts immediately on close with reduced motion', () => {
		reducedMotion = true

		const { rerender } = render(
			<BottomSheetModal open title='Work' onClose={() => {}}>
				content
			</BottomSheetModal>
		)

		rerender(
			<BottomSheetModal open={false} title='Work' onClose={() => {}}>
				content
			</BottomSheetModal>
		)

		expect(screen.queryByRole('dialog')).toBeNull()
	})

	it('matches the disabled controls to the close button size', () => {
		render(
			<BottomSheetModal open title='Work' onClose={() => {}}>
				content
			</BottomSheetModal>
		)

		for (const label of [
			'Close',
			'Minimize unavailable',
			'Maximize unavailable',
		]) {
			const button = document.querySelector<HTMLButtonElement>(
				`[aria-label="${label}"]`
			)
			expect(button?.className).toContain('size-6')
		}
	})
})

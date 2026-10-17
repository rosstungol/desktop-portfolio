// @vitest-environment happy-dom
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vite-plus/test'

import {
	ContactForm,
	contactFormSchema,
} from '@/features/desktop/components/forms/ContactForm'

afterEach(() => {
	cleanup()
	vi.restoreAllMocks()
	vi.unstubAllGlobals()
})

describe('contactFormSchema', () => {
	it('accepts and trims a valid submission', () => {
		const result = contactFormSchema.safeParse({
			name: '  Ross  ',
			email: '  ross@example.com  ',
			message: '  Hello there  ',
		})

		expect(result.success).toBe(true)
		expect(result.data).toEqual({
			name: 'Ross',
			email: 'ross@example.com',
			message: 'Hello there',
		})
	})

	it('rejects missing fields with a message per field', () => {
		const result = contactFormSchema.safeParse({
			name: '',
			email: '',
			message: '',
		})

		expect(result.success).toBe(false)
		if (result.success) return

		const fields = result.error.issues.map((issue) => issue.path[0])
		expect(fields).toEqual(expect.arrayContaining(['name', 'email', 'message']))
		expect(result.error.issues.map((issue) => issue.message)).toEqual(
			expect.arrayContaining([
				'Name is required',
				'Email is required',
				'Message is required',
			])
		)
	})

	it('rejects whitespace-only values', () => {
		const result = contactFormSchema.safeParse({
			name: '   ',
			email: 'ross@example.com',
			message: '   ',
		})

		expect(result.success).toBe(false)
		if (result.success) return

		expect(result.error.issues[0]?.message).toBe('Name is required')
	})

	it('rejects an invalid email address', () => {
		const result = contactFormSchema.safeParse({
			name: 'Ross',
			email: 'not-an-email',
			message: 'Hello',
		})

		expect(result.success).toBe(false)
		if (result.success) return

		expect(result.error.issues[0]?.path).toEqual(['email'])
	})
})

describe('ContactForm submission', () => {
	it('sends the trimmed values with the access key to web3forms', async () => {
		const fetchMock = vi.fn().mockResolvedValue({
			ok: true,
			json: async () => ({ success: true }),
		})
		vi.stubGlobal('fetch', fetchMock)

		const { getByLabelText, getByRole } = render(<ContactForm />)

		fireEvent.change(getByLabelText('Name'), { target: { value: '  Ross  ' } })
		fireEvent.change(getByLabelText('Email'), {
			target: { value: '  ross@example.com  ' },
		})
		fireEvent.change(getByLabelText('Message'), {
			target: { value: '  Hello  ' },
		})
		fireEvent.click(getByRole('button', { name: /submit/i }))

		await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1))

		const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit]
		expect(url).toBe('https://api.web3forms.com/submit')
		expect(init.method).toBe('POST')
		expect(JSON.parse(init.body as string)).toMatchObject({
			name: 'Ross',
			email: 'ross@example.com',
			message: 'Hello',
			access_key: expect.any(String),
		})
	})

	it('does not send when the form is invalid', async () => {
		const fetchMock = vi.fn()
		vi.stubGlobal('fetch', fetchMock)

		const { getByLabelText } = render(<ContactForm />)

		fireEvent.change(getByLabelText('Name'), { target: { value: 'Ross' } })
		fireEvent.change(getByLabelText('Email'), { target: { value: 'nope' } })
		fireEvent.change(getByLabelText('Message'), {
			target: { value: 'Hello' },
		})

		const email = getByLabelText('Email')
		// Dispatch submit directly: the native `type="email"` constraint would
		// otherwise block submission before the schema runs.
		fireEvent.submit(email.closest('form') as HTMLFormElement)

		await waitFor(() => expect(email.getAttribute('aria-invalid')).toBe('true'))
		expect(fetchMock).not.toHaveBeenCalled()
	})
})

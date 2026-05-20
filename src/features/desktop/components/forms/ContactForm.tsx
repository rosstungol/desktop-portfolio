import { CircleAlert, CircleCheck, ListRestart, Send } from 'lucide-react'
import { type SyntheticEvent, useState } from 'react'
import * as z from 'zod'
import { Button } from '@/components/ui/Button'
import { cn } from '@/utils/cn'

export const contactFormSchema = z.object({
	name: z.string().trim().min(1, 'Name is required'),
	email: z.email().trim().min(1, 'Email is required'),
	message: z.string().trim().min(1, 'Message is required'),
})

type ContactFormData = {
	name: string
	email: string
	message: string
}

const INITIAL_FORM_DATA: ContactFormData = {
	name: '',
	email: '',
	message: '',
}

export function ContactForm() {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [formData, setFormData] = useState(INITIAL_FORM_DATA)
	const [formErrors, setFormErrors] = useState<Record<string, string>>({})
	const [submitStatus, setSubmitStatus] = useState<{
		type: 'success' | 'error' | null
		message: string
	}>({
		type: null,
		message: '',
	})

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}))

		setFormErrors((prev) => ({
			...prev,
			[e.target.name]: '',
		}))
	}

	const showSubmitMessage = (type: 'success' | 'error', message: string) => {
		setSubmitStatus({ type, message })

		setTimeout(() => {
			setSubmitStatus({
				type: null,
				message: '',
			})
		}, 4000)
	}

	const onSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault()

		setFormErrors({})

		const dataValidation = contactFormSchema.safeParse(formData)

		if (!dataValidation.success) {
			dataValidation.error.issues.forEach((err) => {
				const field = err.path[0] as string
				setFormErrors((prev) => ({ ...prev, [field]: err.message }))
			})

			return
		}

		const payload = {
			...formData,
			access_key: '5b41650a-1de2-4dbd-844e-3d4e089c2b54',
		}

		if (!payload.access_key) {
			showSubmitMessage(
				'error',
				'Contact form is not configured. Please try again later.'
			)
			return
		}

		const json = JSON.stringify(payload)

		try {
			setIsLoading(true)

			const controller = new AbortController()
			const timeoutId = setTimeout(() => controller.abort(), 10000)

			const res = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: json,
				signal: controller.signal,
			})

			clearTimeout(timeoutId)

			const data = await res.json()

			if (data.success) {
				showSubmitMessage('success', 'Message sent successfully.')
				setFormData(INITIAL_FORM_DATA)
				setFormErrors({})
			} else {
				showSubmitMessage('error', 'Something went wrong. Please try again.')
			}
		} catch (error) {
			if (error instanceof Error && error.name === 'AbortError') {
				showSubmitMessage('error', 'Request timed out. Please try again.')
			} else {
				console.error('Error', error)
				showSubmitMessage('error', 'Network error. Please try again.')
			}
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className='relative'>
			<p className='mb-4 text-xl'>
				If you have opportunities, feel free to reach out! You can reach me by
				filling out the form below.
			</p>
			<form onSubmit={onSubmit} className='space-y-8'>
				<div className='flex flex-col gap-2'>
					<div className='flex items-center justify-between'>
						<label htmlFor='name' className='font-bold text-xl'>
							Name
						</label>
						{formErrors.name && (
							<p id='name-error' className='text-red-400 text-xl'>
								{formErrors.name}
							</p>
						)}
					</div>
					<input
						id='name'
						type='text'
						name='name'
						value={formData.name}
						onChange={handleChange}
						placeholder='Your name'
						className='rounded-lg border-2 border-slate-600 p-2 text-2xl transition-colors hover:border-slate-100 focus:border-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400'
						aria-invalid={!!formErrors.name}
						aria-describedby={formErrors.name ? 'name-error' : undefined}
					/>
				</div>

				<div className='flex flex-col gap-2'>
					<div className='flex items-center justify-between'>
						<label htmlFor='email' className='font-bold text-xl'>
							Email
						</label>
						{formErrors.email && (
							<p id='email-error' className='text-red-400 text-xl'>
								{formErrors.email}
							</p>
						)}
					</div>
					<input
						id='email'
						type='email'
						name='email'
						value={formData.email}
						onChange={handleChange}
						placeholder='you@example.com'
						className='rounded-lg border-2 border-slate-600 p-2 text-2xl transition-colors hover:border-slate-100 focus:border-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400'
						aria-invalid={!!formErrors.email}
						aria-describedby={formErrors.email ? 'email-error' : undefined}
					/>
				</div>

				<div className='flex flex-col gap-2'>
					<div className='flex items-center justify-between'>
						<label htmlFor='message' className='font-bold text-xl'>
							Message
						</label>
						{formErrors.message && (
							<p id='message-error' className='text-red-400 text-xl'>
								{formErrors.message}
							</p>
						)}
					</div>
					<textarea
						id='message'
						name='message'
						value={formData.message}
						onChange={handleChange}
						placeholder='Write your message here...'
						className='rounded-lg border-2 border-slate-600 p-2 text-2xl transition-colors hover:border-slate-100 focus:border-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400'
						aria-invalid={!!formErrors.message}
						aria-describedby={formErrors.message ? 'message-error' : undefined}
						rows={5}
					/>
				</div>

				{submitStatus.type && (
					<p
						className={cn(
							'absolute right-0 bottom-10 flex items-center gap-2 text-xl',
							submitStatus.type === 'success'
								? 'text-green-400'
								: 'text-red-400'
						)}
					>
						{submitStatus.type === 'success' ? (
							<CircleCheck />
						) : (
							<CircleAlert />
						)}
						{submitStatus.message}
					</p>
				)}

				<div className='mt-20 flex justify-end gap-4'>
					<Button
						type='reset'
						variant='secondary'
						className='text-xl'
						onClick={() => {
							setFormData(INITIAL_FORM_DATA)
							setFormErrors({})
						}}
						disabled={isLoading}
					>
						<ListRestart />
						Reset
					</Button>
					<Button type='submit' className='text-xl' disabled={isLoading}>
						<Send />
						Submit Form
					</Button>
				</div>
			</form>
		</div>
	)
}

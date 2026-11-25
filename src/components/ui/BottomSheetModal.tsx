import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {
	useEffect,
	useId,
	useLayoutEffect,
	useRef,
	useState,
	type ReactNode,
} from 'react'
import { createPortal } from 'react-dom'

import { prefersReducedMotion } from '@/utils/prefersReducedMotion'

type BottomSheetModalProps = {
	open: boolean
	title: string
	onClose: () => void
	children: ReactNode
}

export function BottomSheetModal({
	open,
	title,
	onClose,
	children,
}: BottomSheetModalProps) {
	const [mounted, setMounted] = useState(open)
	const panelRef = useRef<HTMLDivElement | null>(null)
	const closeRef = useRef<HTMLButtonElement | null>(null)
	const previouslyFocusedRef = useRef<HTMLElement | null>(null)
	const titleId = useId()

	useLayoutEffect(() => {
		if (!open) return

		previouslyFocusedRef.current = document.activeElement as HTMLElement | null
		setMounted(true)
	}, [open])

	useEffect(
		() => () => {
			const target = previouslyFocusedRef.current
			if (target?.isConnected) target.focus()
		},
		[]
	)

	useEffect(() => {
		if (!mounted) return

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				if (open) onClose()
				return
			}

			if (event.key !== 'Tab') return

			const el = panelRef.current
			if (!el) return

			const focusable = [
				...el.querySelectorAll<HTMLElement>(
					'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
				),
			]
			if (!focusable.length) {
				event.preventDefault()
				el.focus()
				return
			}

			const first = focusable[0]
			const last = focusable[focusable.length - 1]

			if (!el.contains(document.activeElement)) {
				event.preventDefault()
				first.focus()
			} else if (event.shiftKey && document.activeElement === first) {
				event.preventDefault()
				last.focus()
			} else if (!event.shiftKey && document.activeElement === last) {
				event.preventDefault()
				first.focus()
			}
		}

		window.addEventListener('keydown', handleKeyDown)
		return () => window.removeEventListener('keydown', handleKeyDown)
	}, [open, mounted, onClose])

	useGSAP(() => {
		const el = panelRef.current
		if (!el) return

		gsap.killTweensOf(el)

		const reduced = prefersReducedMotion()

		if (open) {
			if (reduced) {
				gsap.set(el, { yPercent: 0, autoAlpha: 1 })
				closeRef.current?.focus()
				return
			}

			gsap.fromTo(
				el,
				{ yPercent: 100, autoAlpha: 0 },
				{
					yPercent: 0,
					autoAlpha: 1,
					duration: 0.4,
					ease: 'power3.out',
					onComplete: () => closeRef.current?.focus(),
				}
			)
		} else if (mounted) {
			if (reduced) {
				setMounted(false)
				const target = previouslyFocusedRef.current
				if (target?.isConnected) target.focus()
				return
			}

			gsap.to(el, {
				yPercent: 100,
				duration: 0.4,
				ease: 'power3.in',
				onComplete: () => {
					setMounted(false)
					const target = previouslyFocusedRef.current
					if (target?.isConnected) target.focus()
				},
			})
		}
	}, [open, mounted])

	if (!mounted) return null

	return createPortal(
		<>
			<button
				type='button'
				aria-label={`Close ${title}`}
				tabIndex={-1}
				className='fixed inset-0 z-30'
				onClick={onClose}
			/>
			<div
				ref={panelRef}
				role='dialog'
				aria-modal='true'
				aria-labelledby={titleId}
				tabIndex={-1}
				style={{ opacity: 0 }}
				className='fixed inset-x-0 top-12 bottom-0 z-40 flex w-dvw flex-col bg-neutral-950 text-neutral-50 shadow-2xl'
			>
				<header className='relative flex items-center justify-between border-b border-slate-800 p-4 text-xl select-none'>
					<div className='flex gap-3'>
						<button
							ref={closeRef}
							type='button'
							className='size-6 rounded-full bg-red-400'
							aria-label='Close'
							title='Close'
							onClick={onClose}
						/>
						<button
							type='button'
							className='size-6 cursor-not-allowed rounded-full bg-yellow-400 opacity-50'
							aria-label='Minimize unavailable'
							disabled
						/>
						<button
							type='button'
							className='size-6 cursor-not-allowed rounded-full bg-green-400 opacity-50'
							aria-label='Maximize unavailable'
							disabled
						/>
					</div>
					<h2 id={titleId} className='abs-center font-semibold'>
						{title}
					</h2>
					<div />
				</header>
				<div className='min-h-0 flex-1 overflow-y-auto'>{children}</div>
			</div>
		</>,
		document.body
	)
}

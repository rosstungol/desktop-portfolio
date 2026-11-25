export function MobileOverlay({ onWork }: { onWork: () => void }) {
	return (
		<>
			<header className='pointer-events-none fixed top-4 left-4 z-10 text-neutral-50'>
				<h1 className='font-display text-3xl font-black tracking-tight'>
					Ross Tungol
				</h1>
				<p className='text-lg'>Software Engineer</p>
			</header>

			<nav
				aria-label='Mobile'
				className='glass-bg card-border fixed bottom-28 left-1/2 z-20 w-max -translate-x-1/2 rounded-xl px-4 pt-1.5 pb-2.5 text-neutral-200 select-none'
			>
				<button
					type='button'
					onClick={onWork}
					className='cursor-pointer font-mono text-sm font-bold md:text-base'
				>
					work
				</button>
			</nav>
		</>
	)
}

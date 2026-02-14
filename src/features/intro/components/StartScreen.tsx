import { startTransition } from 'react'

export default function StartScreen({ onStart }: { onStart: () => void }) {
	const handleStartTransition = () => {
		startTransition(onStart)
	}

	return (
		<div className='card-container col-center px-8 py-6'>
			<div className='mb-4'>
				<p>rosstungol.com</p>
			</div>
			<button
				type='button'
				onClick={handleStartTransition}
				className='button -primary w-full'
			>
				enter
			</button>
		</div>
	)
}

import { startTransition } from 'react'

import { Button } from '@/components/Button'

export default function StartScreen({ onStart }: { onStart: () => void }) {
	const handleStartTransition = () => {
		startTransition(onStart)
	}

	return (
		<div className='card-container col-center px-8 py-6'>
			<div className='mb-4'>
				<p>rosstungol.com</p>
			</div>
			<Button className='w-full' onClick={handleStartTransition}>
				enter
			</Button>
		</div>
	)
}

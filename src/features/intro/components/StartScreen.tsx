import { startTransition } from 'react'

import Button from '@/components/Button'

export default function StartScreen({ onStart }: { onStart: () => void }) {
	const handleStartTransition = () => {
		startTransition(onStart)
	}

	return (
		<div className='card-container col-center m-4 max-w-96 px-8 py-6'>
			<div className='mb-4'>
				<h1 className='text-center font-bold font-roboto'>rosstungol.com</h1>
			</div>
			<Button className='w-full' onClick={handleStartTransition}>
				enter
			</Button>
		</div>
	)
}

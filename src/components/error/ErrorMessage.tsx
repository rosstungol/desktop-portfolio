import { Button } from '../ui/Button'

export function ErrorMessage() {
	const reloadPage = () => {
		window.location.reload()
	}

	return (
		<div className='viewport-overlay'>
			<div className='card-container m-4'>
				<div className='border-blue-500/10 border-b p-4'>
					<h1 className='text-center font-bold font-roboto'>
						something went wrong
					</h1>
				</div>
				<div className='col-center gap-6 px-8 py-6'>
					<p>An error occurred. Please reload the page.</p>
					<Button onClick={reloadPage} className='w-full'>
						reload page
					</Button>
				</div>
			</div>
		</div>
	)
}

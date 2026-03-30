import { DialogBox } from '../../components/ui/DialogBox'

export function ErrorMessage() {
	return (
		<div className='viewport-overlay'>
			<DialogBox
				title='something went wrong'
				buttonText='reload page'
				action={() => window.location.reload()}
			>
				<p>An error occurred. Please reload the page.</p>
			</DialogBox>
		</div>
	)
}

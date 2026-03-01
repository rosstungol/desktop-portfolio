import WindowControls from './WindowControls'

export default function WindowHeader({ title }: { title: string }) {
	return (
		<div className='relative flex items-center rounded-t-xl p-2 text-xs'>
			<WindowControls target='contact' />
			<p className='abs-center font-semibold'>{title}</p>
		</div>
	)
}

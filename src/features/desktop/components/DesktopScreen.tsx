export default function DesktopScreen() {
	return (
		<div
			className='desktop-wrapper'
			onPointerDown={(e) => e.stopPropagation()}
		></div>
	)
}

import { useWindowStore } from '../../stores/window'
import { WindowHeader } from '../wrapper/WindowHeader'
import { WindowWrapper } from '../wrapper/WindowWrapper'

function ImageViewer() {
	const windows = useWindowStore((state) => state.windows)
	const data = windows.imageFile?.data

	if (!data) return null

	const { name, fileContent } = data

	return (
		<>
			<WindowHeader title={name} target={'imageFile'} />
			<div className='p-2'>
				{fileContent?.image ? (
					<div className='max-h-[500px] w-full flex-center overflow-clip rounded-md'>
						<img src={fileContent.image} alt={name} className='w-full' />
					</div>
				) : (
					<div className='p-4 text-center text-red-400'>
						Failed to load image
					</div>
				)}
			</div>
		</>
	)
}

export const ImageWindow = WindowWrapper(ImageViewer, 'imageFile')

import { type ReactNode, useState } from 'react'

import { useWindowStore } from '../../stores/window'
import { WindowHeader } from '../wrapper/WindowHeader'
import { WindowWrapper } from '../wrapper/WindowWrapper'

function ImageViewer() {
	const [hasError, setHasError] = useState(false)
	const data = useWindowStore((state) => state.windows.imageFile?.data)

	if (!data) return null

	const { name, fileContent } = data

	const imageFallback: ReactNode = (
		<div className='p-4 text-center text-red-400'>Failed to load image</div>
	)

	return (
		<>
			<WindowHeader title={name} target={'imageFile'} />
			<div className='p-2'>
				{fileContent?.image ? (
					<div className='max-h-[500px] flex-center overflow-hidden rounded-lg'>
						{hasError ? (
							imageFallback
						) : (
							<img
								src={fileContent.image}
								alt={name}
								className='block h-auto max-w-full object-cover'
								onError={() => setHasError(true)}
							/>
						)}
					</div>
				) : (
					imageFallback
				)}
			</div>
		</>
	)
}

export const ImageWindow = WindowWrapper(ImageViewer, 'imageFile')

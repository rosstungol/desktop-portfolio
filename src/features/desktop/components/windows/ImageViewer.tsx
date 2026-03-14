import { type ReactNode, useEffect, useState } from 'react'

import { useWindowStore } from '../../stores/window'
import { WindowHeader } from '../wrapper/WindowHeader'
import { WindowWrapper } from '../wrapper/WindowWrapper'

function ImageViewer() {
	const [imageSrc, setImageSrc] = useState<string | undefined>(undefined)
	const [hasError, setHasError] = useState(false)

	const data = useWindowStore((state) => state.windows.imageFile?.data)
	const image = data?.fileContent?.image

	useEffect(() => {
		setImageSrc(image)
		setHasError(false)
	}, [image])

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
								src={imageSrc}
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

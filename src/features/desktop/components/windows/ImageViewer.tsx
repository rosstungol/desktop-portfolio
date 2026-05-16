import { type ReactNode, useEffect, useState } from 'react'

import { useWindowStore } from '../../stores/window'
import { WindowHeader } from '../wrapper/WindowHeader'
import { WindowWrapper } from '../wrapper/WindowWrapper'

function ImageViewer() {
	const [imageSrc, setImageSrc] = useState<string | undefined>(undefined)
	const [hasError, setHasError] = useState(false)

	const data = useWindowStore((state) => state.windows.image?.data)
	const image = data?.fileContent?.image

	useEffect(() => {
		setImageSrc(image)
		setHasError(false)
	}, [image])

	if (!data) return null

	const { name, fileContent } = data

	const imageFallback: ReactNode = (
		<div>
			<p className='mx-auto my-10 text-2xl text-red-400'>
				Failed to load image
			</p>
		</div>
	)

	return (
		<>
			<WindowHeader title={name} target='image' />
			<div className='p-2'>
				{fileContent?.image ? (
					<div className='max-h-200 flex-center overflow-hidden rounded-lg'>
						{hasError ? (
							imageFallback
						) : (
							<img
								src={imageSrc}
								alt={name}
								loading='lazy'
								className='max-h-full max-w-full object-contain'
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

export const ImageWindow = WindowWrapper(ImageViewer, 'image')

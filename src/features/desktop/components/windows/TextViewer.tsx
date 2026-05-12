import { useWindowStore } from '../../stores/window'
import { WindowHeader } from '../wrapper/WindowHeader'
import { WindowWrapper } from '../wrapper/WindowWrapper'

function TextViewer() {
	const data = useWindowStore((state) => state.windows.file?.data)

	if (!data) return null

	const { name, fileContent } = data

	return (
		<>
			<WindowHeader title={name} target='file' />
			<div className='flex max-h-[880px] min-h-[200px] flex-col gap-2 overflow-y-auto rounded-b-2xl bg-neutral-900/60 px-10 py-16'>
				{fileContent?.image && (
					<div className='mb-6 max-h-60 w-full flex-center overflow-clip rounded'>
						<img src={fileContent.image} alt={name} loading='lazy' />
					</div>
				)}

				{fileContent?.title && (
					<h2 className='mb-6 font-bold text-3xl'>{fileContent.title}</h2>
				)}

				{fileContent?.text && (
					<div className='space-y-8 text-content leading-relaxed'>
						{fileContent.text}
					</div>
				)}
			</div>
		</>
	)
}

export const TextWindow = WindowWrapper(TextViewer, 'file')

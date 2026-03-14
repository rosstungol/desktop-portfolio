import { useWindowStore } from '../../stores/window'
import { WindowHeader } from '../wrapper/WindowHeader'
import { WindowWrapper } from '../wrapper/WindowWrapper'

function TextViewer() {
	const data = useWindowStore((state) => state.windows.textFile?.data)

	if (!data) return null

	const { name, fileContent } = data

	return (
		<>
			<WindowHeader title={name} target={'textFile'} />
			<div className='flex max-h-96 flex-col gap-2 overflow-y-auto rounded-b-2xl bg-gray-900/80 p-6'>
				{fileContent?.image && (
					<div className='mb-4 max-h-60 w-full flex-center overflow-clip rounded'>
						<img src={fileContent.image} alt={name} />
					</div>
				)}

				{fileContent?.title && (
					<h3 className='font-bold'>{fileContent.title}</h3>
				)}

				{Array.isArray(fileContent?.text) && fileContent?.text.length > 0 && (
					<div className='space-y-1 text-base leading-relaxed'>
						{fileContent.text.map((item: string, index) => (
							<p key={`${index}-${item.length}`} className='mb-2'>
								{item}
							</p>
						))}
					</div>
				)}
			</div>
		</>
	)
}

export const TextWindow = WindowWrapper(TextViewer, 'textFile')

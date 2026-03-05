import { Download } from 'lucide-react'
import { Document, Page, pdfjs } from 'react-pdf'

import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

import IconLink from '../IconLink'
import WindowHeader from '../wrapper/WindowHeader'
import WindowWrapper from '../wrapper/WindowWrapper'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	'pdfjs-dist/build/pdf.worker.min.mjs',
	import.meta.url
).toString()

function Resume() {
	return (
		<>
			<WindowHeader
				title='Resume.pdf'
				target='resume'
				rightButton={
					<IconLink
						href='/files/resume.pdf'
						label='Download Resume'
						size='sm'
						download
					>
						<Download size={12} />
					</IconLink>
				}
			/>
			<div className='px-2 pb-2'>
				<Document
					file='/files/resume.pdf'
					loading={
						<div className='p-4 text-center text-gray-400'>Loading...</div>
					}
					error={
						<div className='p-4 text-center text-red-400'>
							Failed to load PDF
						</div>
					}
				>
					<Page
						pageNumber={1}
						width={360}
						renderTextLayer
						renderAnnotationLayer
					/>
				</Document>
			</div>
		</>
	)
}

const ResumeWindow = WindowWrapper(Resume, 'resume')

export default ResumeWindow

import { Download } from 'lucide-react'
import { Document, Page, pdfjs } from 'react-pdf'

import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

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
					<a
						href='/files/resume.pdf'
						title='Download Resume'
						aria-label='Download Resume'
						download
						className='flex-center cursor-pointer rounded border-2 border-blue-500/10 p-1 text-gray-200 transition-colors hover:border-blue-100 hover:bg-blue-100 hover:text-gray-950'
					>
						<Download size={12} />
					</a>
				}
			/>
			<div className='px-1 pb-1'>
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

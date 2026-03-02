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
					<button type='button' className='button -secondary -sm'>
						<a href='/files/resume.pdf' download title='Download Resume'>
							<Download size={12} />
						</a>
					</button>
				}
			/>
			<div className='px-1 pb-1'>
				<Document file='/files/resume.pdf'>
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

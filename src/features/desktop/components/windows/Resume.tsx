import { Download } from 'lucide-react'
import { Document, Page, pdfjs } from 'react-pdf'

import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

import { resume } from '../../data/constants'
import { IconLink } from '../ui/IconLink'
import { WindowHeader } from '../wrapper/WindowHeader'
import { WindowWrapper } from '../wrapper/WindowWrapper'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	`pdfjs-dist/build/pdf.worker.min.mjs`,
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
						href={resume.link}
						label='Download Resume'
						size='sm'
						download={resume.fileName}
					>
						<Download size={26} />
					</IconLink>
				}
			/>
			<div className='px-3 pb-3'>
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
						width={720}
						renderTextLayer
						renderAnnotationLayer
					/>
				</Document>
			</div>
		</>
	)
}

export const ResumeWindow = WindowWrapper(Resume, 'resume')

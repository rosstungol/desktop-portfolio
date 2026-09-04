import { Document, Page, pdfjs } from 'react-pdf'
import { Download } from '@/components/icons/huge'

import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

import { resume } from '@/data/constants'

import { IconLink } from '../ui/IconLink'
import { WindowHeader } from '../wrapper/WindowHeader'
import { WindowWrapper } from '../wrapper/WindowWrapper'

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

function Resume() {
	return (
		<>
			<WindowHeader
				title='Resume.pdf'
				target='resume'
				rightButton={
					<IconLink
						href={resume.filePath}
						label='Download Resume'
						size='sm'
						download
						Icon={Download}
					/>
				}
			/>
			<div className='px-3 pb-3'>
				<Document
					file={resume.filePath}
					loading={
						<div className='p-4 text-center text-neutral-400'>Loading...</div>
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

export default WindowWrapper(Resume, 'resume')

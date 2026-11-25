import pdfWorkerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url'
import { Document, Page, pdfjs } from 'react-pdf'

import { LinkSquare02 } from '@/components/icons/huge'

import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

import { resume } from '@/data/constants'

import { WindowHeader } from '../wrapper/WindowHeader'
import { WindowWrapper } from '../wrapper/WindowWrapper'

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorkerSrc

function Resume() {
	return (
		<>
			<WindowHeader
				title='Resume.pdf'
				target='resume'
				rightButton={
					<a
						href={resume.filePath}
						target='_blank'
						rel='noopener noreferrer'
						className='flex-center w-fit cursor-pointer gap-1.5 rounded-xl bg-slate-600/20 p-2 font-mono text-sm font-bold text-neutral-200 transition-colors hover:bg-slate-100 hover:text-neutral-950'
					>
						Open in new tab
						<LinkSquare02 size={18} />
					</a>
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

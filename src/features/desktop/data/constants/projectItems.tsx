import { FolderCode, SquareArrowOutUpRight } from 'lucide-react'

import { playground, projects } from '@/data/constants/projects'

import type { FileItem, FolderItem, LocationItem, UrlItem } from '../types'

const resmyzeUrl = projects.resmyze.url

if (!resmyzeUrl) {
	throw new Error('Resmyze URL must be defined')
}

export const projectsItems = [
	{
		id: 'portfolio-icon',
		name: projects.portfolio.title,
		icon: 'folder.avif',
		Icon: FolderCode,
		type: 'folder',
		finderPosition: 'top-10 left-10',
		children: [
			{
				id: 'portfolio-file-icon',
				name: 'credits',
				icon: 'file.avif',
				type: 'file',
				finderPosition: 'top-10 left-10',
				fileContent: {
					title: 'Credits',
					text: (
						<>
							<p>
								Special thanks to the creators of the assets, design resources,
								and references that helped me design and develop this project.
							</p>
							<div>
								<h3>Assets</h3>
								<ul>
									<li>
										<span>3d Model</span>
										<a
											href='https://skfb.ly/pCnQQ'
											target='_blank'
											rel='noopener noreferrer'
											className='flex items-center gap-2'
										>
											virus - Cozy Workplace Corner
											<SquareArrowOutUpRight size={18} />
										</a>
									</li>
									<li>
										<span>Skybox Background</span>
										<a
											href='https://opengameart.org/content/ulukais-space-skyboxes'
											target='_blank'
											rel='noopener noreferrer'
											className='flex items-center gap-2'
										>
											Ulukai - Space Skyboxes
											<SquareArrowOutUpRight size={18} />
										</a>
									</li>
									<li>
										<span>Desktop Background</span>
										<a
											href='https://www.artstation.com/artwork/rAlwZE'
											target='_blank'
											rel='noopener noreferrer'
											className='flex items-center gap-2'
										>
											Bogdan mB0sco - Lofi Coffee
											<SquareArrowOutUpRight size={18} />
										</a>
									</li>
								</ul>
							</div>
							<div>
								<h3>Portfolio Concept</h3>
								<ul>
									<li>
										<span>Joey de Ruiter</span>
										<a
											href='https://joeyderuiter.me/'
											target='_blank'
											rel='noopener noreferrer'
											className='flex items-center gap-2'
										>
											Portfolio
											<SquareArrowOutUpRight size={18} />
										</a>
									</li>
								</ul>
							</div>
						</>
					),
				},
			} satisfies FileItem,
		],
	} satisfies FolderItem,
	{
		id: 'resmyze-icon',
		name: projects.resmyze.title,
		icon: 'folder.avif',
		Icon: FolderCode,
		type: 'folder',
		finderPosition: 'top-10 left-50',
		children: [
			{
				id: 'resmyze-file-icon',
				name: 'readme',
				icon: 'file.avif',
				type: 'file',
				finderPosition: 'top-10 left-10',
				fileContent: {
					title: projects.resmyze.title,
					text: (
						<>
							<p>
								A lightweight AI-powered tool that analyzes your resume against
								a specific job target and provides clear, actionable feedback—so
								you can apply with more confidence (and better results).
							</p>
							<div>
								<h3 className=''>Job-Specific Analysis</h3>
								<p>
									Tailor feedback based on company name, job title, and job
									summary.
								</p>
							</div>
							<div>
								<h3>Resume Upload</h3>
								<p>Upload a PDF and get instant insights.</p>
							</div>
							<div>
								<h3>Overall Score</h3>
								<p>Quickly see how your resume performs at a glance.</p>
							</div>
							<div>
								<h3>Detailed Breakdown</h3>
								<ul>
									<li>ATS Compatibility</li>
									<li>Writing Style</li>
									<li>Content Quality</li>
									<li>Structure & Formatting</li>
									<li>Skills Match</li>
								</ul>
							</div>
							<div>
								<h3>Actionable Feedback</h3>
								<p>
									Practical suggestions you can actually apply—no vague advice.
								</p>
							</div>
						</>
					),
				},
			} satisfies FileItem,
			{
				id: 'resmyze-link-icon',
				name: projects.resmyze.title,
				href: resmyzeUrl,
				icon: 'resmyze.avif',
				type: 'url',
				finderPosition: 'top-10 left-50',
			} satisfies UrlItem,
		],
	} satisfies FolderItem,
	{
		id: 'low-orbit-icon',
		name: playground.lowOrbit.title,
		icon: 'folder.avif',
		Icon: FolderCode,
		type: 'folder',
		finderPosition: 'top-10 left-90',
		children: [
			{
				id: 'low-orbit-file-icon',
				name: 'credits',
				icon: 'file.avif',
				type: 'file',
				finderPosition: 'top-10 left-10',
				fileContent: {
					title: 'Credits',
					text: (
						<>
							<div>
								<h3>Assets</h3>
								<ul>
									<li>
										<span>3d Model</span>
										<a
											href='https://skfb.ly/6AOJB'
											target='_blank'
											rel='noopener noreferrer'
											className='flex items-center gap-2'
										>
											cemayhan - Spaceship Agile
											<SquareArrowOutUpRight size={18} />
										</a>
									</li>
									<li>
										<span>Skybox Background</span>
										<a
											href='https://l1nq.com/phj1wz6'
											target='_blank'
											rel='noopener noreferrer'
											className='flex items-center gap-2'
										>
											Space HDRI Environment Maps
											<SquareArrowOutUpRight size={18} />
										</a>
									</li>
								</ul>
							</div>
						</>
					),
				},
			} satisfies FileItem,
		],
	} satisfies FolderItem,
] satisfies LocationItem[]

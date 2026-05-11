import { FolderCode } from 'lucide-react'
import { portfolio, resmyze } from '@/data/constants/projects'
import type { FileItem, FolderItem, LocationItem, UrlItem } from '../types'

export const projectsItems = [
	{
		id: 'project-1-icon',
		name: resmyze.title,
		icon: 'folder.png',
		Icon: FolderCode,
		type: 'folder',
		finderPosition: 'top-10 left-10',
		children: [
			{
				id: 'project-1-file-icon',
				name: 'readme',
				icon: 'file.png',
				type: 'file',
				finderPosition: 'top-10 left-10',
				fileContent: {
					title: resmyze.title,
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
								<ul className='list-disc pl-6 text-2xl'>
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
				id: 'project-1-link-icon',
				name: resmyze.title,
				href: resmyze.url,
				icon: 'resmyze.avif',
				type: 'url',
				finderPosition: 'top-10 left-50',
			} satisfies UrlItem,
		],
	} satisfies FolderItem,
	{
		id: 'project-2-icon',
		name: portfolio.title,
		icon: 'folder.png',
		Icon: FolderCode,
		type: 'folder',
		finderPosition: 'top-10 left-50',
		children: [
			{
				id: 'project-2-file-icon',
				name: 'readme',
				icon: 'file.png',
				type: 'file',
				finderPosition: 'top-10 left-10',
				fileContent: {
					title: portfolio.title,
					text: (
						<>
							<p>
								My portfolio website, built with Three.js and React Three Fiber.
								I created this project to explore creative web development and
								3D experiences on the web.
							</p>
							<div>
								<h3>Tech Stack</h3>
								<ul className='list-disc pl-6 text-2xl'>
									<li>React</li>
									<li>Three.js</li>
									<li>React Three Fiber</li>
									<li>Zustand</li>
									<li>GSAP</li>
								</ul>
							</div>
						</>
					),
				},
			} satisfies FileItem,
		],
	} satisfies FolderItem,
] satisfies LocationItem[]

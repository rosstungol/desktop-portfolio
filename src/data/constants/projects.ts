import type { Project } from '../types'

export const projects = {
	portfolio: {
		image: '/images/projects/portfolio.avif',
		title: 'rosstungol.com',
		description:
			'This is my portfolio, created to showcase my skills and projects. I built it with Three.js and React Three Fiber to explore creative web development and 3D experiences on the web. 	The full interactive experience of this website is available on desktop and laptop devices.',
		github: 'https://github.com/rosstungol/desktop-portfolio',
		tags: [
			'React',
			'Three.js',
			'React Three Fiber',
			'Zustand',
			'GSAP',
			'Tailwind',
		],
	},
	resmyze: {
		image: '/images/projects/resmyze.avif',
		title: 'resmyze',
		description:
			'A lightweight AI-powered tool that analyzes your resume against a specific job target and provides clear, actionable feedback.',
		github: 'https://github.com/rosstungol/resume-analyzer',
		url: 'https://resmyze-28ah8.puter.site',
		tags: ['React', 'React Router', 'Puter', 'Tailwind'],
	},
} satisfies Record<string, Project>

export const playground = {
	lowOrbit: {
		image: '/images/projects/low-orbit.avif',
		title: 'low orbit',
		github: 'https://github.com/rosstungol/low-orbit',
		description: 'A 3D spaceship flying game built with React Three Fiber.',
		tags: ['React', 'Three.js', 'React Three Fiber'],
		url: 'https://low-orbit.pages.dev/',
	},
} satisfies Record<string, Project>

export const projectsList: Project[] = Object.values(projects)
export const playgroundList: Project[] = Object.values(playground)

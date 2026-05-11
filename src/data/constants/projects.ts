import type { Project } from '../types'

export const resmyze: Project = {
	image: '/images/projects/resmyze.avif',
	title: 'resmyze',
	description:
		'A lightweight AI-powered tool that analyzes your resume against a specific job target and provides clear, actionable feedback.',
	github: 'https://github.com/rosstungol/resume-analyzer',
	demo: 'https://resmyze-28ah8.puter.site',
	tags: ['React', 'React Router', 'Puter'],
}

export const portfolio: Project = {
	image: '/images/projects/portfolio.avif',
	title: 'rosstungol.com',
	description:
		'My portfolio website, built with Three.js and React Three Fiber.',
	github: 'https://github.com/rosstungol/desktop-portfolio',
	tags: ['React', 'Three.js', 'React Three Fiber', 'Zustand'],
}

export const projects = [resmyze, portfolio] satisfies Project[]

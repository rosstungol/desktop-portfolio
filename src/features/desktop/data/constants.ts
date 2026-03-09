import { Blocks, FileCodeCorner, Monitor, Trash } from 'lucide-react'
import { Github } from '../components/icons/Github'
import { LinkedIn } from '../components/icons/LinkedIn'
import type { LocationChild } from './types'

export const dockApps = [
	{
		id: 'finder',
		name: 'Finder',
		icon: 'finder.png',
	},
	{
		id: 'safari',
		name: 'Safari',
		icon: 'safari.png',
	},
	{
		id: 'contact',
		name: 'Contact',
		icon: 'contact.png',
	},
	{
		id: 'photos',
		name: 'Photos',
		icon: 'photos.png',
	},
	{
		id: 'terminal',
		name: 'Terminal',
		icon: 'terminal.png',
	},
] as const

export const contactLinks = [
	{
		link: 'https://www.linkedin.com/in/ross-jonathan-tungol-34b2b9259/',
		label: 'LinkedIn profile',
		Icon: LinkedIn,
	},
	{
		link: 'https://www.github.com/rosstungol',
		label: 'GitHub profile',
		Icon: Github,
	},
] as const

const APPLICATIONS_LOCATION = {
	id: 1,
	name: 'Applications',
	Icon: Blocks,
	children: [
		{
			id: 11,
			name: 'Contact',
			icon: 'contact.png',
			window: 'contact',
			fileType: 'alias',
			finderPosition: 'top-6 left-6',
			description: ['test'],
		} as LocationChild,
	],
}

export const DESKTOP_LOCATION = {
	id: 2,
	name: 'Desktop',
	Icon: Monitor,
	children: [
		{
			id: 21,
			name: 'Resume.pdf',
			icon: 'pdf.png',
			window: 'resume',
			fileType: 'pdf',
			finderPosition: 'top-6 left-4',
			desktopPosition: 'top-10 right-8',
			description: ['test'],
		} as LocationChild,
	],
}

const PROJECTS_LOCATION = {
	id: 3,
	name: 'Projects',
	Icon: FileCodeCorner,
	children: [],
}

const TRASH_LOCATION = {
	id: 4,
	name: 'Trash',
	Icon: Trash,
	children: [],
}

export const locations = {
	applications: APPLICATIONS_LOCATION,
	desktop: DESKTOP_LOCATION,
	projects: PROJECTS_LOCATION,
	trash: TRASH_LOCATION,
} as const

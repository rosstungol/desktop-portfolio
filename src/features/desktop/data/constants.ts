import { Blocks, FileCodeCorner, Monitor, Trash } from 'lucide-react'
import { Github } from '../components/icons/Github'
import { LinkedIn } from '../components/icons/LinkedIn'

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
	type: 'applications',
	name: 'Applications',
	Icon: Blocks,
	kind: 'folder',
	children: [
		{
			id: 11,
			name: 'Contact',
			icon: 'contact.png',
			kind: 'shortcut',
			fileType: 'alias',
			finderPosition: 'absolute top-6 left-6',
			description: ['test'],
		},
	],
}

const DESKTOP_LOCATION = {
	id: 2,
	type: 'desktop',
	name: 'Desktop',
	Icon: Monitor,
	kind: 'folder',
	children: [
		{
			id: 21,
			name: 'Resume',
			icon: 'pdf.png',
			kind: 'file',
			fileType: 'pdf',
			finderPosition: 'absolute top-6 left-6',
			description: ['test'],
		},
	],
}

const PROJECTS_LOCATION = {
	id: 3,
	type: 'projects',
	name: 'Projects',
	Icon: FileCodeCorner,
	kind: 'folder',
	children: [],
}

const TRASH_LOCATION = {
	id: 4,
	type: 'trash',
	name: 'Trash',
	Icon: Trash,
	kind: 'folder',
	children: [],
}

export const locations = {
	applications: APPLICATIONS_LOCATION,
	desktop: DESKTOP_LOCATION,
	projects: PROJECTS_LOCATION,
	trash: TRASH_LOCATION,
} as const

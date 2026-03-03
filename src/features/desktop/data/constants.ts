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

export const contactLinks = {
	linkedIn: 'https://www.linkedin.com/in/ross-jonathan-tungol-34b2b9259/',
	github: 'https://www.github.com/rosstungol',
} as const

const APPLICATIONS_LOCATION = {
	id: 1,
	type: 'applications',
	name: 'Applications',
	icon: '',
	kind: 'folder',
	children: [],
}

const DESKTOP_LOCATION = {
	id: 2,
	type: 'desktop',
	name: 'Desktop',
	icon: '',
	kind: 'folder',
	children: [],
}

const PROJECTS_LOCATION = {
	id: 3,
	type: 'projects',
	name: 'Projects',
	icon: '',
	kind: 'folder',
	children: [],
}

const TRASH_LOCATION = {
	id: 4,
	type: 'trash',
	name: 'Trash',
	icon: '',
	kind: 'folder',
	children: [],
}

export const locations = {
	applications: APPLICATIONS_LOCATION,
	desktop: DESKTOP_LOCATION,
	projects: PROJECTS_LOCATION,
	trash: TRASH_LOCATION,
} as const

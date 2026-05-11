import type { FinderItem } from '../types'

export const applicationsItems = [
	{
		id: 'about-icon',
		name: 'About',
		icon: 'safari.png',
		type: 'about',
		finderPosition: 'top-10 left-10',
	},
	{
		id: 'contact-icon',
		name: 'Contact',
		icon: 'contact.png',
		type: 'contact',
		finderPosition: 'top-10 left-50',
	},
	{
		id: 'photos-icon',
		name: 'Photos',
		icon: 'photos.png',
		type: 'photos',
		finderPosition: 'top-10 left-90',
	},
	{
		id: 'terminal-icon',
		name: 'Terminal',
		icon: 'terminal.png',
		type: 'terminal',
		finderPosition: 'top-10 left-130',
	},
] satisfies FinderItem[]

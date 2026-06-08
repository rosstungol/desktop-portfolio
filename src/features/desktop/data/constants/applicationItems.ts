import type { FinderItem } from '../types'

export const applicationsItems = [
	{
		id: 'about-icon',
		name: 'About',
		icon: 'about.avif',
		type: 'about',
		finderPosition: 'top-10 left-10',
	},
	{
		id: 'contact-icon',
		name: 'Contact',
		icon: 'contact.avif',
		type: 'contact',
		finderPosition: 'top-10 left-50',
	},
	{
		id: 'photos-icon',
		name: 'Photos',
		icon: 'photos.avif',
		type: 'photos',
		finderPosition: 'top-10 left-90',
	},
	{
		id: 'terminal-icon',
		name: 'Terminal',
		icon: 'terminal.avif',
		type: 'terminal',
		finderPosition: 'top-10 left-130',
	},
	{
		id: 'low-orbit-icon',
		name: 'Low Orbit',
		icon: 'low-orbit.avif',
		type: 'lowOrbit',
		finderPosition: 'top-10 left-170',
	},
] satisfies FinderItem[]

import type { FileItem } from '../types'

export const dockApps = [
	{
		id: 'finder',
		name: 'Finder',
		icon: 'finder.png',
	},
	{
		id: 'about',
		name: 'About',
		icon: 'about.avif',
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

export const photos = [
	{
		id: 'me-1',
		name: 'me-1',
		type: 'image',
		fileContent: {
			image: '/desktop/images/me-1.avif',
		},
	},
	{
		id: 'me-2',
		name: 'me-2',
		type: 'image',
		fileContent: {
			image: '/desktop/images/me-2.avif',
		},
	},
] satisfies FileItem[]

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
		name: 'drummer',
		type: 'image',
		fileContent: {
			image: '/desktop/images/drummer.avif',
		},
	},
	{
		id: 'me-2',
		name: 'selfie',
		type: 'image',
		fileContent: {
			image: '/desktop/images/selfie.avif',
		},
	},
] satisfies FileItem[]

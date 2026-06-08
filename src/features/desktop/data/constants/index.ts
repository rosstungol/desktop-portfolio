import type { FileItem } from '../types'

export const dockApps = [
	{
		id: 'finder',
		name: 'Finder',
		icon: 'finder.avif',
	},
	{
		id: 'about',
		name: 'About',
		icon: 'about.avif',
	},
	{
		id: 'contact',
		name: 'Contact',
		icon: 'contact.avif',
	},
	{
		id: 'photos',
		name: 'Photos',
		icon: 'photos.avif',
	},
	{
		id: 'terminal',
		name: 'Terminal',
		icon: 'terminal.avif',
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

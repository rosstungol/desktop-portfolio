import { Github } from '../../components/icons/Github'
import { LinkedIn } from '../../components/icons/LinkedIn'
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

export const photos = [
	// TODO: Replace placeholders with actual photos
	{
		id: 'placeholder-image-1',
		name: 'Maki',
		type: 'image',
		fileContent: {
			image: '/desktop/images/maki.avif',
		},
	},
	{
		id: 'placeholder-image-2',
		name: 'Maki',
		type: 'image',
		fileContent: {
			image: '/desktop/images/maki.avif',
		},
	},
	{
		id: 'placeholder-image-3',
		name: 'Maki',
		type: 'image',
		fileContent: {
			image: '/desktop/images/maki.avif',
		},
	},
] satisfies FileItem[]

export const resume = {
	link: `${import.meta.env.BASE_URL}files/resume.pdf`,
	fileName: 'Ross-Tungol-Resume.pdf',
} as const

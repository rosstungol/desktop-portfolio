import { Github } from '../../components/icons/Github'
import { LinkedIn } from '../../components/icons/LinkedIn'

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

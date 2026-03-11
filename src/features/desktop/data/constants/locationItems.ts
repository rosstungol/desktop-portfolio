import { FolderCode } from 'lucide-react'

import type { IconItem, LocationItem } from '../types'

export const applicationsItems = [
	{
		id: 11,
		name: 'Contact',
		icon: 'contact.png',
		type: 'contact',
		finderPosition: 'top-6 left-6',
	},
] satisfies IconItem[]

export const desktopItems = [
	{
		id: 21,
		name: 'Resume.pdf',
		icon: 'pdf.png',
		type: 'resume',
		finderPosition: 'top-6 left-4',
		desktopPosition: 'top-10 right-8',
	},
] satisfies IconItem[]

export const projectsItems = [
	// TODO: Replace placeholders with actual projects
	{
		id: 31,
		name: 'Project1',
		icon: 'folder.png',
		Icon: FolderCode,
		type: 'folder',
		finderPosition: 'top-6 left-4',
		children: [
			{
				id: 41,
				name: 'ProjectFile1',
				icon: 'pdf.png',
				type: 'textFile',
				finderPosition: 'top-6 left-4',
			},
			{
				id: 42,
				name: 'ProjectLink1',
				href: 'https://google.com',
				icon: 'safari.png',
				type: 'url',
				finderPosition: 'top-6 left-24',
			},
		],
	},
	{
		id: 32,
		name: 'Project2',
		icon: 'folder.png',
		Icon: FolderCode,
		type: 'folder',
		finderPosition: 'top-6 left-24',
		children: [
			{
				id: 43,
				name: 'ProjectFile2',
				icon: 'pdf.png',
				type: 'textFile',
				finderPosition: 'top-6 left-4',
			},
			{
				id: 44,
				name: 'ProjectLink2',
				href: 'https://google.com',
				icon: 'safari.png',
				type: 'url',
				finderPosition: 'top-6 left-24',
			},
		],
	},
] satisfies LocationItem[]

export const trashItems = [] satisfies IconItem[]

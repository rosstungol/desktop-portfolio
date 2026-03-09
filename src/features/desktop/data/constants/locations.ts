import { Blocks, FileCodeCorner, Monitor, Trash } from 'lucide-react'
import type { DesktopItem, LocationItem, WindowLocation } from '../types'

const APPLICATIONS_LOCATION: WindowLocation = {
	id: 1,
	name: 'Applications',
	Icon: Blocks,
	children: [
		{
			id: 11,
			name: 'Contact',
			icon: 'contact.png',
			window: 'contact',
			fileType: 'alias',
			finderPosition: 'top-6 left-6',
		},
	] satisfies LocationItem[],
}

export const DESKTOP_LOCATION: WindowLocation = {
	id: 2,
	name: 'Desktop',
	Icon: Monitor,
	children: [
		{
			id: 21,
			name: 'Resume.pdf',
			icon: 'pdf.png',
			window: 'resume',
			fileType: 'pdf',
			finderPosition: 'top-6 left-4',
			desktopPosition: 'top-10 right-8',
		},
	] satisfies DesktopItem[],
}

const PROJECTS_LOCATION: WindowLocation = {
	id: 3,
	name: 'Projects',
	Icon: FileCodeCorner,
	children: [],
}

const TRASH_LOCATION: WindowLocation = {
	id: 4,
	name: 'Trash',
	Icon: Trash,
	children: [],
}

export const locations = {
	applications: APPLICATIONS_LOCATION,
	desktop: DESKTOP_LOCATION,
	projects: PROJECTS_LOCATION,
	trash: TRASH_LOCATION,
} as const

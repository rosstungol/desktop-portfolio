import { Blocks, Code2, Monitor, Trash2 } from 'lucide-react'
import type { LocationItem } from '../types'
import {
	applicationsItems,
	desktopItems,
	projectsItems,
	trashItems,
} from './locationItems'

const APPLICATIONS_LOCATION: LocationItem = {
	id: 1,
	name: 'Applications',
	Icon: Blocks,
	children: applicationsItems,
}

const DESKTOP_LOCATION: LocationItem = {
	id: 2,
	name: 'Desktop',
	Icon: Monitor,
	children: desktopItems,
}

const PROJECTS_LOCATION: LocationItem = {
	id: 3,
	name: 'Projects',
	Icon: Code2,
	children: projectsItems,
}

const TRASH_LOCATION: LocationItem = {
	id: 4,
	name: 'Trash',
	Icon: Trash2,
	children: trashItems,
}

export const locations = {
	applications: APPLICATIONS_LOCATION,
	desktop: DESKTOP_LOCATION,
	projects: PROJECTS_LOCATION,
	trash: TRASH_LOCATION,
} as const

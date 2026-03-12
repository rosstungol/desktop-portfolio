import { Blocks, Code2, Monitor, Trash2 } from 'lucide-react'

import type { FinderLocationItem } from '../types'
import {
	applicationsItems,
	desktopItems,
	projectsItems,
	trashItems,
} from './locationItems'

const APPLICATIONS_LOCATION: FinderLocationItem = {
	id: 1,
	name: 'Applications',
	type: 'finderLocation',
	Icon: Blocks,
	children: applicationsItems,
}

const DESKTOP_LOCATION: FinderLocationItem = {
	id: 2,
	name: 'Desktop',
	type: 'finderLocation',
	Icon: Monitor,
	children: desktopItems,
}

const PROJECTS_LOCATION: FinderLocationItem = {
	id: 3,
	name: 'Projects',
	type: 'finderLocation',
	Icon: Code2,
	children: projectsItems,
}

const TRASH_LOCATION: FinderLocationItem = {
	id: 4,
	name: 'Trash',
	type: 'finderLocation',
	Icon: Trash2,
	children: trashItems,
}

export const locations = {
	applications: APPLICATIONS_LOCATION,
	desktop: DESKTOP_LOCATION,
	projects: PROJECTS_LOCATION,
	trash: TRASH_LOCATION,
} as const

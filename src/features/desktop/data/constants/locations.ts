import { Blocks, Code, Monitor, Trash } from '@/components/icons/huge'

import type { FinderLocationItem } from '../types'
import { applicationsItems } from './applicationItems'
import { desktopItems } from './desktopItems'
import { projectsItems } from './projectItems'
import { trashItems } from './trashItems'

const APPLICATIONS_LOCATION: FinderLocationItem = {
	id: 'applications-location',
	name: 'Applications',
	type: 'finderLocation',
	Icon: Blocks,
	children: applicationsItems,
}

const DESKTOP_LOCATION: FinderLocationItem = {
	id: 'desktop-location',
	name: 'Desktop',
	type: 'finderLocation',
	Icon: Monitor,
	children: desktopItems,
}

const PROJECTS_LOCATION: FinderLocationItem = {
	id: 'projects-location',
	name: 'Projects',
	type: 'finderLocation',
	Icon: Code,
	children: projectsItems,
}

const TRASH_LOCATION: FinderLocationItem = {
	id: 'trash-location',
	name: 'Trash',
	type: 'finderLocation',
	Icon: Trash,
	children: trashItems,
}

export const locations = {
	applications: APPLICATIONS_LOCATION,
	desktop: DESKTOP_LOCATION,
	projects: PROJECTS_LOCATION,
	trash: TRASH_LOCATION,
} as const

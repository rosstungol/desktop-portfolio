import type { DesktopItem } from '../types'

export const desktopItems = [
	{
		id: 'resume-icon',
		name: 'Resume.pdf',
		icon: 'pdf.avif',
		type: 'resume',
		finderPosition: 'top-10 left-10',
		desktopPosition: 'top-10 right-10',
	},
	{
		id: 'low-orbit-icon',
		name: 'Low Orbit',
		icon: 'low-orbit.avif',
		type: 'lowOrbit',
		finderPosition: 'top-10 left-50',
		desktopPosition: 'top-50 right-10',
	},
] satisfies DesktopItem[]

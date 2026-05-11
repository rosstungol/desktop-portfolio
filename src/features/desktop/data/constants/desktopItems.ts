import type { DesktopItem } from '../types'

export const desktopItems = [
	{
		id: 'resume-icon',
		name: 'Resume.pdf',
		icon: 'pdf.png',
		type: 'resume',
		finderPosition: 'top-10 left-10',
		desktopPosition: 'top-10 right-10',
	},
] satisfies DesktopItem[]

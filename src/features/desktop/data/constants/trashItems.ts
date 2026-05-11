import type { FileItem, FinderItem } from '../types'

export const trashItems = [
	{
		id: 'maki-icon',
		name: 'Maki',
		icon: 'jpg.png',
		type: 'image',
		finderPosition: 'top-10 left-10',
		fileContent: {
			image: '/desktop/images/maki.avif',
		},
	} satisfies FileItem,
] satisfies FinderItem[]

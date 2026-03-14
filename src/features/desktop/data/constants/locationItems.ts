import { FolderCode } from 'lucide-react'

import type {
	DesktopItem,
	FileItem,
	FinderItem,
	FolderItem,
	LocationItem,
	UrlItem,
} from '../types'

export const applicationsItems = [
	{
		id: 1000,
		name: 'Contact',
		icon: 'contact.png',
		type: 'contact',
		finderPosition: 'top-6 left-4',
	},
] satisfies FinderItem[]

export const desktopItems = [
	{
		id: 2000,
		name: 'Resume.pdf',
		icon: 'pdf.png',
		type: 'resume',
		finderPosition: 'top-6 left-4',
		desktopPosition: 'top-10 right-8',
	},
] satisfies DesktopItem[]

export const projectsItems = [
	// TODO: Replace placeholders with actual projects
	{
		id: 3000,
		name: 'Project1',
		icon: 'folder.png',
		Icon: FolderCode,
		type: 'folder',
		finderPosition: 'top-6 left-4',
		children: [
			{
				id: 3001,
				name: 'ProjectFile1',
				icon: 'file.png',
				type: 'textFile',
				finderPosition: 'top-6 left-4',
				fileContent: {
					title: 'test',
					text: [
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
						'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
						'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
					],
				},
			} satisfies FileItem,
			{
				id: 3002,
				name: 'ProjectLink1',
				href: 'https://google.com',
				icon: 'safari.png',
				type: 'url',
				finderPosition: 'top-6 left-24',
			} satisfies UrlItem,
		],
	} satisfies FolderItem,
	{
		id: 3100,
		name: 'Project2',
		icon: 'folder.png',
		Icon: FolderCode,
		type: 'folder',
		finderPosition: 'top-6 left-24',
		children: [
			{
				id: 3101,
				name: 'ProjectFile2',
				icon: 'file.png',
				type: 'textFile',
				finderPosition: 'top-6 left-4',
				fileContent: {
					title: 'title 2',
					text: [
						'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
						'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
					],
				},
			} satisfies FileItem,
			{
				id: 3102,
				name: 'ProjectLink2',
				href: 'https://google.com',
				icon: 'safari.png',
				type: 'url',
				finderPosition: 'top-6 left-24',
			} satisfies UrlItem,
		],
	} satisfies FolderItem,
] satisfies LocationItem[]

export const trashItems = [
	{
		id: 4000,
		name: 'Maki',
		icon: 'jpg.png',
		type: 'imageFile',
		finderPosition: 'top-6 left-4',
		fileContent: {
			image: '/desktop/images/maki.avif',
		},
	} satisfies FileItem,
] satisfies FinderItem[]

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
		id: crypto.randomUUID(),
		name: 'Contact',
		icon: 'contact.png',
		type: 'contact',
		finderPosition: 'top-6 left-4',
	},
	{
		id: crypto.randomUUID(),
		name: 'Photos',
		icon: 'photos.png',
		type: 'photos',
		finderPosition: 'top-6 left-24',
	},
	{
		id: crypto.randomUUID(),
		name: 'Terminal',
		icon: 'terminal.png',
		type: 'terminal',
		finderPosition: 'top-6 left-44',
	},
] satisfies FinderItem[]

export const desktopItems = [
	{
		id: crypto.randomUUID(),
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
		id: crypto.randomUUID(),
		name: 'Project1',
		icon: 'folder.png',
		Icon: FolderCode,
		type: 'folder',
		finderPosition: 'top-6 left-4',
		children: [
			{
				id: crypto.randomUUID(),
				name: 'ProjectFile1',
				icon: 'file.png',
				type: 'textFile',
				finderPosition: 'top-6 left-4',
				fileContent: {
					title: 'test',
					text: (
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>
					),
				},
			} satisfies FileItem,
			{
				id: crypto.randomUUID(),
				name: 'ProjectLink1',
				href: 'https://google.com',
				icon: 'safari.png',
				type: 'url',
				finderPosition: 'top-6 left-24',
			} satisfies UrlItem,
		],
	} satisfies FolderItem,
	{
		id: crypto.randomUUID(),
		name: 'Project2',
		icon: 'folder.png',
		Icon: FolderCode,
		type: 'folder',
		finderPosition: 'top-6 left-24',
		children: [
			{
				id: crypto.randomUUID(),
				name: 'ProjectFile2',
				icon: 'file.png',
				type: 'textFile',
				finderPosition: 'top-6 left-4',
				fileContent: {
					title: 'title 2',
					text: (
						<p>
							Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
							aut fugit, sed quia consequuntur magni dolores eos qui ratione
							voluptatem sequi nesciunt.
						</p>
					),
				},
			} satisfies FileItem,
			{
				id: crypto.randomUUID(),
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
		id: crypto.randomUUID(),
		name: 'Maki',
		icon: 'jpg.png',
		type: 'imageFile',
		finderPosition: 'top-6 left-4',
		fileContent: {
			image: '/desktop/images/maki.avif',
		},
	} satisfies FileItem,
] satisfies FinderItem[]

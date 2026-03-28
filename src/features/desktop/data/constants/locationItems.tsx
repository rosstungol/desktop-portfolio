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
		id: 'about-icon',
		name: 'About',
		icon: 'safari.png',
		type: 'about',
		finderPosition: 'top-10 left-10',
	},
	{
		id: 'contact-icon',
		name: 'Contact',
		icon: 'contact.png',
		type: 'contact',
		finderPosition: 'top-10 left-50',
	},
	{
		id: 'photos-icon',
		name: 'Photos',
		icon: 'photos.png',
		type: 'photos',
		finderPosition: 'top-10 left-90',
	},
	{
		id: 'terminal-icon',
		name: 'Terminal',
		icon: 'terminal.png',
		type: 'terminal',
		finderPosition: 'top-10 left-130',
	},
] satisfies FinderItem[]

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

export const projectsItems = [
	// TODO: Replace placeholders with actual projects
	{
		id: 'project-1-icon',
		name: 'Project1',
		icon: 'folder.png',
		Icon: FolderCode,
		type: 'folder',
		finderPosition: 'top-10 left-10',
		children: [
			{
				id: 'project-1-file-icon',
				name: 'ProjectFile1',
				icon: 'file.png',
				type: 'file',
				finderPosition: 'top-10 left-10',
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
				id: 'project-1-link-icon',
				name: 'ProjectLink1',
				href: 'https://google.com',
				icon: 'safari.png',
				type: 'url',
				finderPosition: 'top-10 left-50',
			} satisfies UrlItem,
		],
	} satisfies FolderItem,
	{
		id: 'project-2-icon',
		name: 'Project2',
		icon: 'folder.png',
		Icon: FolderCode,
		type: 'folder',
		finderPosition: 'top-10 left-50',
		children: [
			{
				id: 'project-2-file-icon',
				name: 'ProjectFile2',
				icon: 'file.png',
				type: 'file',
				finderPosition: 'top-10 left-10',
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
				id: 'project-2-link-icon',
				name: 'ProjectLink2',
				href: 'https://google.com',
				icon: 'safari.png',
				type: 'url',
				finderPosition: 'top-10 left-50',
			} satisfies UrlItem,
		],
	} satisfies FolderItem,
] satisfies LocationItem[]

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

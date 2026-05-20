import { Github } from '@/components/icons/Github'
import { LinkedIn } from '@/components/icons/LinkedIn'

export const aboutText =
	'I’m a front-end engineer with experience in both development and design. I take pride in crafting intuitive, responsive, and visually refined web applications using modern web technologies.'

export const socialLinks = [
	{
		link: 'https://www.linkedin.com/in/ross-jonathan-tungol-34b2b9259/',
		label: 'LinkedIn',
		Icon: LinkedIn,
	},
	{
		link: 'https://github.com/rosstungol',
		label: 'Github',
		Icon: Github,
	},
] as const

export const skillsList = {
	languages: [
		'HTML',
		'CSS & SASS',
		'JavaScript',
		'TypeScript',
		'Dart',
		'Python',
	],
	libraries: [
		'React',
		'Next.js',
		'Node.js',
		'Express.js',
		'Tailwind CSS',
		'Jest',
		'Vitest',
		'Flutter',
	],
	tools: ['Git', 'Github', 'Bitbucket', 'Vite', 'Vercel'],
	design: ['UI/UX Design', 'Figma'],
} as const

export const resume = {
	filePath: `${import.meta.env.BASE_URL}Ross-Tungol-Resume.pdf`,
	fileName: 'Ross-Tungol-Resume.pdf',
}

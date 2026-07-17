import { GitHubIcon } from '@/components/icons/GitHubIcon'
import { LinkedInIcon } from '@/components/icons/LinkedInIcon'

export const aboutText = [
	'I`m a software engineer specializing in building modern, scalable web applications.',
	'I enjoy continuously learning new technologies, and creating software that solves problems.',
]

export const socialLinks = [
	{
		link: 'https://www.linkedin.com/in/ross-jonathan-tungol-34b2b9259/',
		label: 'LinkedIn',
		Icon: LinkedInIcon,
	},
	{
		link: 'https://github.com/rosstungol',
		label: 'GitHub',
		Icon: GitHubIcon,
	},
] as const

export const skillsList = {
	languages: ['HTML', 'CSS & SASS', 'JavaScript', 'TypeScript', 'Dart'],
	libraries: [
		'React',
		'Next.js',
		'Express.js',
		'Three.js',
		'Tailwind CSS',
		'Zustand',
		'Jest',
		'Flutter',
	],
	tools: ['Git', 'Github', 'Bitbucket', 'Vite', 'Webpack'],
	design: ['UI/UX Design', 'Figma'],
} as const

export const resume = {
	filePath: `${import.meta.env.BASE_URL}Ross-Tungol-Resume.pdf`,
	fileName: 'Ross-Tungol-Resume.pdf',
}

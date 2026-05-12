import { Github } from '@/components/icons/Github'
import { LinkedIn } from '@/components/icons/LinkedIn'

export const aboutText =
	'I’m a front-end engineer with experience in both development and design. I take pride in crafting intuitive, responsive, and visually refined web applications using modern web technologies.'

export const contactLinks = [
	{
		link: 'https://www.linkedin.com/in/ross-jonathan-tungol-34b2b9259/',
		label: 'LinkedIn',
		Icon: LinkedIn,
	},
	{
		link: 'https://www.github.com/rosstungol',
		label: 'GitHub',
		Icon: Github,
	},
] as const

export const resume = {
	filePath: `${import.meta.env.BASE_URL}files/resume.pdf`,
	fileName: 'Ross-Tungol-Resume.pdf',
} as const

import { resumePath } from '@/data/constants'

export const downloadResume = () => {
	const link = document.createElement('a')
	link.href = resumePath
	document.body.appendChild(link)
	link.click()
	document.body.removeChild(link)
}

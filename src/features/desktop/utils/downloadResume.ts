import { resume } from '../data/constants'

export const downloadResume = () => {
	const link = document.createElement('a')
	link.href = resume.filePath
	link.download = resume.fileName
	document.body.appendChild(link)
	link.click()
	document.body.removeChild(link)
}

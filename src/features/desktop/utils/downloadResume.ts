export const downloadResume = () => {
	const link = document.createElement('a')
	link.href = `${import.meta.env.BASE_URL}files/resume.pdf`
	link.download = 'Ross-Tungol-Resume.pdf'
	document.body.appendChild(link)
	link.click()
	document.body.removeChild(link)
}

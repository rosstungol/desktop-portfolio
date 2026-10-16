// @vitest-environment happy-dom
import { afterEach, describe, expect, it, vi } from 'vite-plus/test'

import { resume } from '@/data/constants'
import { downloadResume } from '@/utils/downloadResume'

afterEach(() => vi.restoreAllMocks())

describe('downloadResume', () => {
	it('clicks a temporary anchor pointing at the resume file', () => {
		const originalAppend = document.body.appendChild.bind(document.body)
		const appended: Node[] = []
		vi.spyOn(document.body, 'appendChild').mockImplementation((node: Node) => {
			appended.push(node)
			return originalAppend(node)
		})
		const click = vi
			.spyOn(HTMLAnchorElement.prototype, 'click')
			.mockImplementation(() => {})

		downloadResume()

		expect(click).toHaveBeenCalledTimes(1)
		expect(appended).toHaveLength(1)

		const anchor = appended[0] as HTMLAnchorElement
		expect(anchor.tagName).toBe('A')
		expect(anchor.getAttribute('href')).toBe(resume.filePath)
		expect(anchor.getAttribute('download')).toBe(resume.fileName)
		expect(document.body.contains(anchor)).toBe(false)
	})
})

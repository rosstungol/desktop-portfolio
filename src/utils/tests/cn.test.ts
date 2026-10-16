import { describe, expect, it } from 'vite-plus/test'

import { cn } from '@/utils/cn'

describe('cn', () => {
	it('joins truthy class names', () => {
		expect(cn('a', 'b')).toBe('a b')
	})

	it('ignores falsy values', () => {
		expect(cn('a', false, undefined, null, '', 'b')).toBe('a b')
	})

	it('supports conditional objects and arrays', () => {
		expect(cn(['a', { b: true, c: false }])).toBe('a b')
	})

	it('lets later conflicting Tailwind utilities win', () => {
		expect(cn('p-2', 'p-4')).toBe('p-4')
	})
})

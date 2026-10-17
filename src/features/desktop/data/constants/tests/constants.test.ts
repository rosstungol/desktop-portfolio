import { describe, expect, it } from 'vite-plus/test'

import { locations } from '@/features/desktop/data/constants/locations'
import type { LocationItem } from '@/features/desktop/data/types'

const collectItems = (items: LocationItem[]): LocationItem[] =>
	items.flatMap((item) => [
		item,
		...('children' in item && item.children ? collectItems(item.children) : []),
	])

const locationTrees = Object.values(locations).map((location) =>
	collectItems(location.children)
)

describe('location constants', () => {
	it('gives every item an id and a name', () => {
		for (const tree of locationTrees) {
			for (const item of tree) {
				expect(item.id).toBeTruthy()
				expect(item.name).toBeTruthy()
			}
		}
	})

	it('gives every item a Finder position', () => {
		for (const tree of locationTrees) {
			for (const item of tree) {
				expect(item.finderPosition).toBeTruthy()
			}
		}
	})

	it('keeps ids unique within each location', () => {
		for (const tree of locationTrees) {
			const ids = tree.map((item) => item.id)
			expect(new Set(ids).size).toBe(ids.length)
		}
	})
})

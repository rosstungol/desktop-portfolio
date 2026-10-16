import { describe, expect, it } from 'vite-plus/test'

import type { LocationItem, WindowKey } from '@/features/desktop/data/types'
import { resolveItemAction } from '@/features/desktop/utils/resolveItemAction'

const base = { id: 'item', name: 'Item', finderPosition: 'top-0 left-0' }

describe('resolveItemAction', () => {
	it('opens url items in a new tab', () => {
		const item: LocationItem = {
			...base,
			type: 'url',
			href: 'https://example.com',
		}

		expect(resolveItemAction(item)).toEqual({
			kind: 'openUrl',
			href: 'https://example.com',
		})
	})

	it('switches the active location for folders', () => {
		const item: LocationItem = { ...base, type: 'folder', children: [] }

		expect(resolveItemAction(item)).toEqual({ kind: 'setLocation', item })
	})

	it('opens a window carrying data for file and image items', () => {
		const file: LocationItem = {
			...base,
			type: 'file',
			fileContent: { title: 'Title' },
		}
		const image: LocationItem = {
			...base,
			type: 'image',
			fileContent: { image: '/image.avif' },
		}

		expect(resolveItemAction(file)).toEqual({
			kind: 'openWindow',
			key: 'file',
			data: file,
		})
		expect(resolveItemAction(image)).toEqual({
			kind: 'openWindow',
			key: 'image',
			data: image,
		})
	})

	it('opens a plain window for app-like items', () => {
		const appKeys: WindowKey[] = [
			'finder',
			'about',
			'contact',
			'photos',
			'terminal',
			'resume',
			'lowOrbit',
		]

		for (const key of appKeys) {
			const item: LocationItem = { ...base, icon: 'icon.avif', type: key }

			expect(resolveItemAction(item)).toEqual({ kind: 'openWindow', key })
		}
	})
})

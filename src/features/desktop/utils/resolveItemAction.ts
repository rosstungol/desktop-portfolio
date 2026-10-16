import type { LocationItem, WindowKey } from '../data/types'

export type ItemAction =
	| { kind: 'openUrl'; href: string }
	| { kind: 'setLocation'; item: LocationItem }
	| { kind: 'openWindow'; key: WindowKey; data?: LocationItem }
	| { kind: 'none' }

/**
 * Maps a location item to the action its icon should perform. App-like items
 * open a window, folders switch the active Finder location, `url` items open in
 * a new tab, and file/image items open a window carrying their content.
 */
export const resolveItemAction = (item: LocationItem): ItemAction => {
	if (item.type === 'url') return { kind: 'openUrl', href: item.href ?? '' }
	if (item.type === 'folder') return { kind: 'setLocation', item }
	if (item.type === 'image' || item.type === 'file')
		return { kind: 'openWindow', key: item.type, data: item }
	if (
		item.type === 'finder' ||
		item.type === 'about' ||
		item.type === 'contact' ||
		item.type === 'photos' ||
		item.type === 'terminal' ||
		item.type === 'resume' ||
		item.type === 'lowOrbit'
	) {
		return { kind: 'openWindow', key: item.type }
	}

	return { kind: 'none' }
}

import { create } from 'zustand'

import { locations } from '../data/constants/locations'
import type { BaseLocationItem } from '../data/types'

const DEFAULT_LOCATION = locations.applications

type LocationStore = {
	activeLocation: BaseLocationItem
	setActiveLocation: (location: BaseLocationItem) => void
	resetActiveLocation: () => void
}

export const useLocationStore = create<LocationStore>((set) => ({
	activeLocation: DEFAULT_LOCATION,
	setActiveLocation: (location) =>
		set({
			activeLocation: location,
		}),
	resetActiveLocation: () =>
		set({
			activeLocation: DEFAULT_LOCATION,
		}),
}))

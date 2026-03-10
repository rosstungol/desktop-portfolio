import { create } from 'zustand'

import { locations } from '../data/constants/locations'
import type { LocationItem } from '../data/types'

const DEFAULT_LOCATION = locations.applications

type LocationStore = {
	activeLocation: LocationItem
	setActiveLocation: (location: LocationItem) => void
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

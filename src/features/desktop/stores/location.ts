import { create } from 'zustand'

import { locations } from '../data/constants/locations'
import type { WindowLocation } from '../data/types'

const DEFAULT_LOCATION: WindowLocation = locations.applications

type LocationStore = {
	activeLocation: WindowLocation
	setActiveLocation: (location: WindowLocation) => void
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

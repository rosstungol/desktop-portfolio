import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { locations } from '../data/constants'
import type { WindowLocation } from '../data/types'

const DEFAULT_LOCATION: WindowLocation = locations.applications

type LocationStore = {
	activeLocation: WindowLocation | null
	setActiveLocation: (location?: WindowLocation | null) => void
	resetActiveLocation: () => void
}

export const useLocationStore = create<LocationStore>()(
	immer((set) => ({
		activeLocation: DEFAULT_LOCATION,
		setActiveLocation: (location = null) =>
			set((state) => {
				state.activeLocation = location
			}),
		resetActiveLocation: () =>
			set((state) => {
				state.activeLocation = DEFAULT_LOCATION
			}),
	}))
)

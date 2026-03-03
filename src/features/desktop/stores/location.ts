import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { locations } from '../data/constants'
import type { Location } from '../data/types'

const DEFAULT_LOCATION: Location = locations.applications

type LocationStore = {
	activeLocation: Location | null
	setActiveLocation: (location?: Location | null) => void
	resetActiveLocation: () => void
}

const useLocationStore = create<LocationStore>()(
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

export default useLocationStore

import { beforeEach, describe, expect, it } from 'vite-plus/test'

import { locations } from '@/features/desktop/data/constants/locations'
import { useLocationStore } from '@/features/desktop/stores/location'

const INITIAL_STATE = useLocationStore.getState()

beforeEach(() => {
	useLocationStore.setState(INITIAL_STATE, true)
})

describe('location store', () => {
	it('defaults to the applications location', () => {
		expect(useLocationStore.getState().activeLocation).toBe(
			locations.applications
		)
	})

	it('sets the active location to the given reference', () => {
		useLocationStore.getState().setActiveLocation(locations.trash)

		expect(useLocationStore.getState().activeLocation).toBe(locations.trash)
	})

	it('resets back to the default location', () => {
		const store = useLocationStore.getState()
		store.setActiveLocation(locations.projects)
		store.resetActiveLocation()

		expect(useLocationStore.getState().activeLocation).toBe(
			locations.applications
		)
	})
})

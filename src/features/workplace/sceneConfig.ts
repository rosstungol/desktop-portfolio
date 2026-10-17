export const CAMERA_CONFIG = {
	initialPosition: [120, 420, 130],
	defaultPosition: { x: 120, y: 100, z: 100 },
	oscillationPosition: { x: 75, y: 100, z: 140 },
	focusPosition: { x: -23.5, y: 75.4, z: -0.82 },
	defaultLookAt: { x: -6, y: 28, z: 0 },
	oscillation: {
		duration: 10,
		ease: 'sine.inOut',
		repeat: -1,
		yoyo: true,
	},
	intro: { duration: 3, ease: 'power3.out' },
	pullBack: { duration: 1.5, ease: 'sine.inOut' },
	orbitIdleDelay: 0.5,
	orbitReturn: { delay: 0.5, duration: 1.5, ease: 'power2.inOut' },
	orbitRotation: {
		minAzimuthAngle: 0.175,
		maxAzimuthAngle: 1.9,
		minPolarAngle: Math.PI / 8,
		maxPolarAngle: (5 * Math.PI) / 12,
	},
} as const

export const LIGHTING_CONFIG = {
	color: '#eb95d6',
	spotlightPosition: [60, 162, 18],
} as const

export const ROOM_MODEL_SCALE = 46

export const DESKTOP_POSITION = [-46.505, 75.4, 0.785] as const

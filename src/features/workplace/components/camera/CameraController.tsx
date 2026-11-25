import { useGSAP } from '@gsap/react'
import { OrbitControls } from '@react-three/drei/core/OrbitControls'
import { useFrame, useThree } from '@react-three/fiber'
import gsap from 'gsap'
import {
	type RefObject,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from 'react'
import { type Group, Vector3 } from 'three'

import type { SceneState } from '@/data/types'
import { useIsMobile } from '@/hooks/useIsMobile'
import { prefersReducedMotion } from '@/utils/prefersReducedMotion'

import { CAMERA_CONFIG } from '../../sceneConfig'
import { isOrbitEnabled } from '../../utils/sceneState'

type CameraControllerProps = {
	sceneState?: SceneState
	orbitActive: boolean
	screenRef: RefObject<Group | null>
	onFocusComplete?: () => void
	onIntroComplete?: () => void
}

export function CameraController({
	sceneState,
	orbitActive,
	screenRef,
	onFocusComplete,
	onIntroComplete,
}: CameraControllerProps) {
	const { camera, invalidate } = useThree()
	const animateRef = useRef<gsap.core.Tween | gsap.core.Timeline | null>(null)
	const orbitIdleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
	const lookAt = useRef(
		new Vector3(
			CAMERA_CONFIG.defaultLookAt.x,
			CAMERA_CONFIG.defaultLookAt.y,
			CAMERA_CONFIG.defaultLookAt.z
		)
	)
	const screenTarget = useRef(new Vector3())
	const onFocusCompleteRef = useRef(onFocusComplete)
	const onIntroCompleteRef = useRef(onIntroComplete)
	const sceneStateRef = useRef(sceneState)
	const isMobile = useIsMobile()
	const orbitEnabled = isOrbitEnabled(sceneState, isMobile, orbitActive)
	const [orbitReady, setOrbitReady] = useState(false)

	// Keep the late-release guard current before the focus layout effect runs.
	useLayoutEffect(() => {
		sceneStateRef.current = sceneState
	}, [sceneState])

	useEffect(() => {
		onFocusCompleteRef.current = onFocusComplete
	}, [onFocusComplete])

	useEffect(() => {
		onIntroCompleteRef.current = onIntroComplete
	}, [onIntroComplete])

	useFrame(() => {
		camera.lookAt(lookAt.current)
	})

	const killCameraMove = () => {
		animateRef.current?.kill()
		animateRef.current = null
		gsap.killTweensOf(camera.position)
	}

	const cancelOrbitReturn = () => {
		if (orbitIdleTimerRef.current !== null) {
			clearTimeout(orbitIdleTimerRef.current)
			orbitIdleTimerRef.current = null
		}
	}

	const jumpToDefault = () => {
		camera.position.set(
			CAMERA_CONFIG.defaultPosition.x,
			CAMERA_CONFIG.defaultPosition.y,
			CAMERA_CONFIG.defaultPosition.z
		)
		lookAt.current.set(
			CAMERA_CONFIG.defaultLookAt.x,
			CAMERA_CONFIG.defaultLookAt.y,
			CAMERA_CONFIG.defaultLookAt.z
		)
		invalidate()
	}

	const cameraOscillation = (): gsap.core.Tween =>
		gsap.to(camera.position, {
			...CAMERA_CONFIG.oscillationPosition,
			...CAMERA_CONFIG.oscillation,
		})

	const handleOrbitStart = () => {
		cancelOrbitReturn()
		killCameraMove()
	}

	const handleOrbitEnd = () => {
		cancelOrbitReturn()
		orbitIdleTimerRef.current = setTimeout(() => {
			orbitIdleTimerRef.current = null
			if (sceneStateRef.current === 'focus') return
			killCameraMove()
			gsap.killTweensOf(lookAt.current)

			if (prefersReducedMotion()) {
				jumpToDefault()
				return
			}

			const { duration, ease } = CAMERA_CONFIG.orbitReturn
			const tl = gsap.timeline({ overwrite: 'auto' })
			tl.to(camera.position, {
				...CAMERA_CONFIG.defaultPosition,
				...CAMERA_CONFIG.orbitReturn,
			})
			tl.to(
				lookAt.current,
				{ ...CAMERA_CONFIG.defaultLookAt, duration, ease },
				'<'
			)
			tl.add(cameraOscillation())
			animateRef.current = tl
		}, CAMERA_CONFIG.orbitIdleDelay * 1000)
	}

	useGSAP(() => {
		cancelOrbitReturn()
		killCameraMove()
		gsap.killTweensOf(lookAt.current)
		setOrbitReady(false)

		if (sceneState === 'start') {
			if (prefersReducedMotion()) {
				jumpToDefault()
				setOrbitReady(true)
				onIntroCompleteRef.current?.()
				return
			}

			const tl = gsap.timeline({ overwrite: 'auto' })

			tl.to(camera.position, {
				...CAMERA_CONFIG.defaultPosition,
				...CAMERA_CONFIG.intro,
				onComplete: () => {
					setOrbitReady(true)
					onIntroCompleteRef.current?.()
				},
			})
			tl.add(cameraOscillation())
			animateRef.current = tl
		}

		if (sceneState === 'idle') {
			if (prefersReducedMotion()) {
				jumpToDefault()
				setOrbitReady(true)
				return
			}

			const tl = gsap.timeline({ overwrite: 'auto' })

			tl.to(camera.position, {
				...CAMERA_CONFIG.defaultPosition,
				...CAMERA_CONFIG.pullBack,
				onComplete: () => setOrbitReady(true),
			})
			tl.add(cameraOscillation())
			animateRef.current = tl

			gsap.to(lookAt.current, {
				...CAMERA_CONFIG.defaultLookAt,
				...CAMERA_CONFIG.pullBack,
				overwrite: 'auto',
			})
		}

		if (sceneState === 'focus' && screenRef.current) {
			screenRef.current.getWorldPosition(screenTarget.current)

			if (prefersReducedMotion()) {
				camera.position.set(
					CAMERA_CONFIG.focusPosition.x,
					CAMERA_CONFIG.focusPosition.y,
					CAMERA_CONFIG.focusPosition.z
				)
				lookAt.current.copy(screenTarget.current)
				invalidate()
				onFocusCompleteRef.current?.()
				return
			}

			animateRef.current = gsap.to(camera.position, {
				...CAMERA_CONFIG.focusPosition,
				...CAMERA_CONFIG.focus,
				overwrite: 'auto',
				// The canvas runs frameloop="demand" while focused; the tweens must
				// request the frames that show their own progress.
				onUpdate: () => invalidate(),
				onComplete: () => onFocusCompleteRef.current?.(),
			})

			gsap.to(lookAt.current, {
				x: screenTarget.current.x,
				y: screenTarget.current.y,
				z: screenTarget.current.z,
				...CAMERA_CONFIG.focus,
				overwrite: 'auto',
				onUpdate: () => invalidate(),
			})
		}

		return () => {
			cancelOrbitReturn()
			killCameraMove()
			gsap.killTweensOf(lookAt.current)
		}
	}, [sceneState, camera, screenRef])

	return (
		<OrbitControls
			enabled={orbitEnabled && orbitReady}
			target={[
				CAMERA_CONFIG.defaultLookAt.x,
				CAMERA_CONFIG.defaultLookAt.y,
				CAMERA_CONFIG.defaultLookAt.z,
			]}
			enablePan={false}
			enableZoom={false}
			minAzimuthAngle={CAMERA_CONFIG.orbitRotation.minAzimuthAngle}
			maxAzimuthAngle={CAMERA_CONFIG.orbitRotation.maxAzimuthAngle}
			minPolarAngle={CAMERA_CONFIG.orbitRotation.minPolarAngle}
			maxPolarAngle={CAMERA_CONFIG.orbitRotation.maxPolarAngle}
			onStart={handleOrbitStart}
			onEnd={handleOrbitEnd}
		/>
	)
}

import { useGSAP } from '@gsap/react'
import { OrbitControls } from '@react-three/drei/core/OrbitControls'
import { useFrame, useThree } from '@react-three/fiber'
import gsap from 'gsap'
import { type RefObject, useRef, useState } from 'react'
import { type Group, Vector3 } from 'three'

import type { SceneState } from '@/data/types'

import { CAMERA_CONFIG } from '../../sceneConfig'
import { isSceneInteractive } from '../../utils/sceneState'

type CameraControllerProps = {
	sceneState?: SceneState
	screenRef: RefObject<Group | null>
}

export function CameraController({
	sceneState,
	screenRef,
}: CameraControllerProps) {
	const { camera } = useThree()
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
	const orbitEnabled = isSceneInteractive(sceneState)
	const [orbitReady, setOrbitReady] = useState(false)
	const interactiveRef = useRef(false)
	interactiveRef.current = orbitEnabled && orbitReady

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
			if (!interactiveRef.current) return
			killCameraMove()
			gsap.killTweensOf(lookAt.current)

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
			const tl = gsap.timeline({ overwrite: 'auto' })

			tl.to(camera.position, {
				...CAMERA_CONFIG.defaultPosition,
				...CAMERA_CONFIG.intro,
				onComplete: () => setOrbitReady(true),
			})
			tl.add(cameraOscillation())
			animateRef.current = tl
		}

		if (sceneState === 'idle') {
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

			animateRef.current = gsap.to(camera.position, {
				...CAMERA_CONFIG.focusPosition,
				duration: 1.5,
				ease: 'sine.inOut',
				overwrite: 'auto',
			})

			gsap.to(lookAt.current, {
				x: screenTarget.current.x,
				y: screenTarget.current.y,
				z: screenTarget.current.z,
				duration: 1.5,
				ease: 'sine.inOut',
				overwrite: 'auto',
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

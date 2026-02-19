import { useGSAP } from '@gsap/react'
import { useFrame, useThree } from '@react-three/fiber'
import gsap from 'gsap'
import { type RefObject, useRef } from 'react'
import * as THREE from 'three'

import type { SceneState } from '@/App'

type CameraControllerProps = {
	sceneState: SceneState
	screenRef: RefObject<THREE.Group | null>
}

export default function CameraController({
	sceneState,
	screenRef,
}: CameraControllerProps) {
	const { camera } = useThree()
	const animateRef = useRef<gsap.core.Tween | gsap.core.Timeline | null>(null)
	const lookAt = useRef(new THREE.Vector3(-3, 18, 0))
	const screenTarget = useRef(new THREE.Vector3())

	useFrame(() => {
		camera.lookAt(lookAt.current)
	})

	useGSAP(() => {
		animateRef.current?.kill()
		gsap.killTweensOf(lookAt.current)

		const defaultCameraPosition = (
			duration: number,
			ease: 'power3.out' | 'sine.inOut'
		): gsap.core.Tween => {
			return gsap.to(camera.position, {
				x: 68,
				y: 50,
				z: 45,
				duration: duration,
				ease: ease,
			})
		}

		const cameraOscillation = (): gsap.core.Tween => {
			return gsap.to(camera.position, {
				x: 25,
				y: 50,
				z: 78,
				duration: 12,
				ease: 'sine.inOut',
				repeat: -1,
				yoyo: true,
			})
		}

		if (sceneState === 'start') {
			const tl = gsap.timeline({ overwrite: 'auto' })

			animateRef.current = tl.add(defaultCameraPosition(3, 'power3.out'))
			tl.add(cameraOscillation())
		}

		if (sceneState === 'idle') {
			const tl = gsap.timeline({ overwrite: 'auto' })

			animateRef.current = tl.add(defaultCameraPosition(1.5, 'sine.inOut'))
			tl.add(cameraOscillation())

			gsap.to(lookAt.current, {
				x: -3,
				y: 18,
				z: 0,
				duration: 1.5,
				ease: 'sine.inOut',
				overwrite: 'auto',
			})
		}

		if (sceneState === 'focus') {
			if (!screenRef.current) return
			screenRef.current.getWorldPosition(screenTarget.current)

			animateRef.current = gsap.to(camera.position, {
				x: -12,
				y: 39.3,
				z: -0.45,
				duration: 1.5,
				ease: 'sine.inOut',
				overwrite: 'auto',
			})

			gsap.to(lookAt.current, {
				...screenTarget.current,
				duration: 1.5,
				ease: 'sine.inOut',
				overwrite: 'auto',
			})
		}

		return () => {
			animateRef.current?.kill()
			gsap.killTweensOf(lookAt.current)
		}
	}, [sceneState, camera, screenRef])

	return null
}

import { useFrame, useThree } from '@react-three/fiber'
import gsap from 'gsap'
import { type RefObject, useEffect, useRef } from 'react'
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
	const lookAt = useRef(new THREE.Vector3(0, 10, 0))
	const screenTarget = useRef(new THREE.Vector3())

	useFrame(() => {
		camera.lookAt(lookAt.current)
	})

	useEffect(() => {
		animateRef.current?.kill()
		gsap.killTweensOf(lookAt.current)

		if (sceneState === 'start') {
			const tl = gsap.timeline({ overwrite: 'auto' })

			animateRef.current = tl
				.to(camera.position, {
					x: 50,
					y: 30,
					z: 30,
					duration: 3,
					ease: 'power3.out',
				})
				.to(camera.position, {
					x: 30,
					y: 30,
					z: 46,
					duration: 8,
					ease: 'sine.inOut',
					repeat: -1,
					yoyo: true,
				})
		}

		if (sceneState === 'idle') {
			const tl = gsap.timeline({ overwrite: 'auto' })

			animateRef.current = tl
				.to(camera.position, {
					x: 50,
					y: 30,
					z: 30,
					duration: 1.5,
					ease: 'sine.inOut',
				})
				.to(camera.position, {
					x: 30,
					y: 30,
					z: 46,
					duration: 8,
					ease: 'sine.inOut',
					repeat: -1,
					yoyo: true,
				})

			gsap.to(lookAt.current, {
				x: 0,
				y: 10,
				z: 0,
				duration: 1.5,
				ease: 'sine.inOut',
				overwrite: 'auto',
			})
		}

		if (sceneState === 'focus') {
			screenRef.current?.getWorldPosition(screenTarget.current)

			animateRef.current = gsap.to(camera.position, {
				x: -8,
				y: 26.3,
				z: -0.3,
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

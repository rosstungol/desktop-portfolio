import { useFrame, useThree } from '@react-three/fiber'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

import type { SceneState } from '@/App'

type CameraControllerProps = {
	sceneState: SceneState
}

export default function CameraController({
	sceneState,
}: CameraControllerProps) {
	const { camera } = useThree()
	const animateRef = useRef<gsap.core.Tween | gsap.core.Timeline | null>(null)
	const lookAt = useRef(new THREE.Vector3(0, 10, 0))

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
					x: 40,
					y: 30,
					z: 20,
					duration: 3,
					ease: 'power3.out',
				})
				.to(camera.position, {
					x: 20,
					y: 30,
					z: 36,
					duration: 10,
					ease: 'sine.inOut',
					repeat: -1,
					yoyo: true,
				})
		}

		if (sceneState === 'idle') {
			animateRef.current = gsap.to(camera.position, {
				x: 20,
				y: 30,
				z: 36,
				duration: 10,
				ease: 'sine.inOut',
				repeat: -1,
				yoyo: true,
			})
		}

		if (sceneState === 'focus') {
			animateRef.current = gsap.to(camera.position, {
				x: -8,
				y: 26.3,
				z: -0.3,
				duration: 1.5,
				ease: 'sine.inOut',
				overwrite: 'auto',
			})

			gsap.to(lookAt.current, {
				x: -50,
				y: 26,
				z: 2.5,
				duration: 1.5,
				ease: 'sine.inOut',
				overwrite: 'auto',
			})
		}

		return () => {
			animateRef.current?.kill()
			gsap.killTweensOf(lookAt.current)
		}
	}, [sceneState, camera])

	return null
}

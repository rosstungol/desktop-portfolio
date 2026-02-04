import { useThree } from '@react-three/fiber'
import gsap from 'gsap'
import * as THREE from 'three'

export function CameraIntro({ onIdle }: { onIdle: () => void }) {
  const { camera } = useThree()

  const target = new THREE.Vector3(-3, 10, -5)

  gsap.to(camera.position, {
    x: 40,
    y: 30,
    z: 20,
    duration: 3,
    ease: 'power3.out',
    onUpdate: () => {
      camera.lookAt(target)
    },
    onComplete: onIdle,
  })

  return null
}

export function CameraHover() {
  const { camera } = useThree()

  const target = new THREE.Vector3(-3, 10, -5)

  gsap.to(camera.position, {
    x: 20,
    z: 36,
    duration: 10,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
    onUpdate: () => {
      camera.lookAt(target)
    },
  })

  return null
}

export function CameraZoomToScreen() {
  const { camera } = useThree()

  gsap.to(camera.position, {
    x: -8,
    z: -0.3,
    y: 25.5,
    duration: 2,
    ease: 'power3.out',
    onUpdate: () => {
      camera.lookAt(-50, 26, 2.5)
    },
  })

  return null
}

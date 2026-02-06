import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
// @ts-expect-error React canary: ViewTransition not typed yet (remove when stable version is available)
import { useEffect, useRef, ViewTransition } from 'react'

import type { SceneState } from '@/App'

gsap.registerPlugin(TextPlugin)

const FULL_TEXT = 'click anywhere to start'

export default function ClickToStart({
  sceneState,
}: {
  sceneState: SceneState
}) {
  const textRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    const el = textRef.current
    if (!el) return

    gsap.killTweensOf(el)

    if (sceneState === 'start') {
      gsap.fromTo(
        el,
        { text: '' },
        {
          text: FULL_TEXT,
          duration: 3,
          ease: 'none',
        }
      )
    } else {
      el.textContent = FULL_TEXT
    }

    return () => {
      gsap.killTweensOf(el)
    }
  }, [sceneState])

  return (
    <ViewTransition>
      <div className='card-container fixed bottom-28 left-1/2 z-20 -translate-x-1/2 px-4 py-2'>
        <p>
          <span ref={textRef} />
          <span className='cursor'>_</span>
        </p>
      </div>
    </ViewTransition>
  )
}

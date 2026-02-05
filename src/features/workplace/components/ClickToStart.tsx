// @ts-expect-error React canary: ViewTransition not typed yet (remove when stable version is available)
import { useEffect, useRef, ViewTransition } from 'react'

import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

import type { SceneState } from '@/App'

gsap.registerPlugin(TextPlugin)

export default function ClickToStart({
  sceneState,
}: {
  sceneState: SceneState
}) {
  const textRef = useRef<HTMLSpanElement | null>(null)

  const fullText = 'click anywhere to start'

  useEffect(() => {
    const el = textRef.current
    if (!el) return

    gsap.killTweensOf(el)

    if (sceneState === 'start') {
      gsap.fromTo(
        el,
        { text: '' },
        {
          text: fullText,
          duration: 3,
          ease: 'none',
        },
      )
    } else {
      el.textContent = fullText
    }
  }, [sceneState])

  return (
    <ViewTransition>
      <div className='fixed left-1/2 -translate-x-1/2 bottom-28 py-2 px-4 z-20 card-container'>
        <p>
          <span ref={textRef} />
          <span className='cursor'>_</span>
        </p>
      </div>
    </ViewTransition>
  )
}

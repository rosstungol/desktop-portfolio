import { startTransition, useEffect, useState } from 'react'

import Scene from '@/features/workplace/components/Scene'

import SceneIntro from './features/intro/components/SceneIntro'
import ClickToStart from './features/workplace/components/ClickToStart'

export type SceneState = 'loading' | 'intro' | 'start' | 'idle' | 'focus'

const SCENE_INTRO_VISIBLE_STATES = new Set(['loading', 'intro'])
const CLICK_TO_START_VISIBLE_STATES = new Set(['start'])

export default function App() {
  const [sceneState, setSceneState] = useState<SceneState>('loading')

  useEffect(() => {
    const onFocusTransition = () => {
      startTransition(() => setSceneState('focus'))
    }

    if (sceneState === 'start') {
      setTimeout(() => {
        document.body.addEventListener('click', onFocusTransition)
      }, 3000)
    }

    return () => document.body.removeEventListener('click', onFocusTransition)
  }, [sceneState])

  return (
    <main>
      {SCENE_INTRO_VISIBLE_STATES.has(sceneState) && (
        <SceneIntro
          sceneState={sceneState}
          onLoaded={() => setSceneState('intro')}
          onStart={() => setSceneState('start')}
        />
      )}

      {CLICK_TO_START_VISIBLE_STATES.has(sceneState) && (
        <ClickToStart sceneState={sceneState} />
      )}

      <Scene sceneState={sceneState} onIdle={() => setSceneState('idle')} />
    </main>
  )
}

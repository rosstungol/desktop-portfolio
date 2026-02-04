import { useState } from 'react'

import Scene from '@/features/workplace/components/Scene'

import SceneIntro from './features/intro/components/SceneIntro'

export type SceneState = 'loading' | 'intro' | 'start' | 'idle' | 'focus'

export default function App() {
  const [sceneState, setSceneState] = useState<SceneState>('loading')

  return (
    <main>
      {sceneState != 'start' && sceneState != 'idle' && (
        <SceneIntro
          sceneState={sceneState}
          onLoaded={() => setSceneState('intro')}
          onStart={() => setSceneState('start')}
        />
      )}
      <Scene sceneState={sceneState} onIdle={() => setSceneState('idle')} />
    </main>
  )
}

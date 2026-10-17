# Camera Controller

How the scene camera behaves in the 3D workplace. All positions, timings, and limits are `CAMERA_CONFIG` constants in [sceneConfig.ts](../src/features/workplace/sceneConfig.ts); the behavior lives in [CameraController.tsx](../src/features/workplace/components/camera/CameraController.tsx), which is keyed on the scene state machine (see [project-architecture.md](project-architecture.md)).

## Motion per scene state

- **`loading`** — camera rests at `initialPosition`; orbit controls off.
- **`start`** — intro: eases from `initialPosition` down to `defaultPosition` (3s, `power3.out`), then oscillates. Orbit controls enable only once the intro ends.
- **`focus`** — eases to `focusPosition` and looks at the desktop screen; orbit controls off.
- **`idle`** — eases back to `defaultPosition` (1.5s, `sine.inOut`), then oscillates. Orbit controls enable once the pull-back ends.

The oscillation loops between `defaultPosition` and `oscillationPosition` (yoyo, `sine.inOut`). A GSAP-tweened `lookAt` vector is applied every frame, so the camera always points at `defaultLookAt` (or at the monitor while focused) no matter where orbiting left it.

## Orbit controls

Rotate only — pan and zoom are disabled, and the orbit target is `defaultLookAt`. Rotation is clamped to a curated arc (`orbitRotation`): horizontal (azimuth) ≈10°–109°, vertical (polar) 22.5°–75°. All scripted positions sit inside the arc; the `focus` camera sits outside it, which is why the controls stay disabled until an eased pull-back has returned the camera to `defaultPosition`.

Grab-and-release hand-off:

- Grab (controls `start` event) kills any running camera tween and hands the camera to the user; drei's damping provides the inertia.
- Release (`end` event) starts the idle timer (`orbitIdleDelay`). When it expires, the camera holds still for `orbitReturn.delay`, eases to `defaultPosition` / `defaultLookAt` (`orbitReturn`), then the oscillation resumes. Grabbing again cancels the pending return.

## Cursors and focus trigger

Interactive states (`isSceneInteractive` in [sceneState.ts](../src/features/workplace/utils/sceneState.ts) — everything except `loading`/`focus`) show a grab cursor on the canvas. [DesktopContainer](../src/features/desktop/components/layout/DesktopContainer.tsx) shows a pointer cursor in those states, and clicking the desktop screen triggers the transition into `focus` ([App.tsx](../src/App.tsx)).

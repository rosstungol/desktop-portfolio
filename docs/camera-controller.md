# Camera Controller

How the scene camera behaves in the 3D workplace. All positions, timings, and limits are `CAMERA_CONFIG` constants in [sceneConfig.ts](../src/features/workplace/sceneConfig.ts); the behavior lives in [CameraController.tsx](../src/features/workplace/components/camera/CameraController.tsx), which is keyed on the scene state machine (see [project-architecture.md](project-architecture.md)).

## Motion per scene state

- **`loading`** — camera rests at `initialPosition`; orbit controls off.
- **`start`** — intro: eases from `initialPosition` down to `defaultPosition` (3s, `power3.out`), then oscillates. Mobile orbit becomes available once the intro ends; desktop waits for the orbit toggle in `idle`.
- **`focus`** — eases to `focusPosition` and looks at the desktop screen (`CAMERA_CONFIG.focus`: 1.5s, `sine.inOut`); orbit controls off.
- **`idle`** — eases back to `defaultPosition` (`pullBack`: 1.5s, `sine.inOut`), then oscillates. Mobile orbit becomes available once the pull-back ends; desktop waits for the orbit toggle.

The oscillation loops between `defaultPosition` and `oscillationPosition` (yoyo, `sine.inOut`). A GSAP-tweened `lookAt` vector is applied every frame, so the camera always points at `defaultLookAt` (or at the monitor while focused) no matter where orbiting left it. The intro tween calls `onIntroComplete` when it ends, which is what triggers the mobile toast. With `prefers-reduced-motion`, the camera jumps straight to its target pose: no intro, oscillation or return tween.

## Orbit controls

Rotate only — pan and zoom are disabled, and the orbit target is `defaultLookAt`. Rotation is clamped to a curated arc (`orbitRotation`): horizontal (azimuth) ≈10°–109°, vertical (polar) 22.5°–75°. All scripted positions sit inside the arc; the `focus` camera sits outside it, which is why the controls stay disabled until an eased pull-back has returned the camera to `defaultPosition`.

On desktop, the `RotateThree` toggle in [SceneControls.tsx](../src/features/workplace/components/ui/SceneControls.tsx) is the only way to enable orbit, and only in `idle`. Click-to-focus is disabled while orbit is active, and [SceneInstruction.tsx](../src/features/workplace/components/ui/SceneInstruction.tsx) switches the bottom prompt from `click anywhere to start` to `drag the scene to orbit`. Mobile keeps the camera state-driven orbit behavior and has no toggle.

Grab-and-release hand-off:

- Grab (controls `start` event) kills any running camera tween and hands the camera to the user; drei's damping provides the inertia.
- Release (`end` event) starts the idle timer (`orbitIdleDelay`). When it expires, the camera holds still for `orbitReturn.delay`, eases to `defaultPosition` / `defaultLookAt` (`orbitReturn`), then the oscillation resumes. Grabbing again cancels the pending return. Late releases while orbit is not ready or after focus are ignored so they cannot cancel the active camera move.

## Cursors and focus trigger

The canvas shows a grab cursor only while orbit is actually available. On desktop, it shows a pointer cursor while the click-to-start prompt is visible; clicking anywhere in the scene, including the prompt, transitions into `focus`. [App.tsx](../src/App.tsx) owns that click handler, and [DesktopContainer.tsx](../src/features/desktop/components/layout/DesktopContainer.tsx) keeps a hidden button for the keyboard path.

## Mobile work modal

On mobile, the `work` nav button requests `focus` and fades in the canvas dim using the same `CAMERA_CONFIG.focus` duration/ease as the camera tween. `CameraController` calls `onFocusComplete` when the focus tween ends, and `App` opens the `BottomSheetModal` only then. If the scene is already focused (for example after resizing from desktop), `App` opens the sheet immediately and skips the duplicate camera move.

Closing the modal starts `idle` and fades the dim out with `CAMERA_CONFIG.pullBack`, so the camera pull-back and dim fade share timing and easing. The sheet slides independently with its own short GSAP tween.

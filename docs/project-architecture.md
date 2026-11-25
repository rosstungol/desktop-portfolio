# Project Architecture

macOS-style desktop portfolio. A 3D office scene (React Three Fiber) renders a monitor with a working desktop UI (plain DOM embedded via drei `Html`). Every viewport renders the full-screen scene; mobile adds HTML overlays (name, dock-style nav, dim layer, and a slide-up Work sheet) outside the canvas.

**Stack:** React 19 + TypeScript · Vite+ / Rolldown · Tailwind CSS v4 · Zustand · GSAP · Bun

## Boot & State Flow

`src/main.tsx` → `ErrorBoundary` → `App`

`App` owns the scene state machine (`SceneState` in `src/data/types.ts`) and drives the scene and mobile overlays:

```
loading → start → (click on the desktop screen) → focus ⇄ idle
```

- `loading` — `LoadingScreen` overlay; the lazy scene reports progress back to `App` (drei `useProgress`, used inside the scene chunk so the entry bundle never imports three.js)
- `start` — 3D scene visible; the camera plays its intro and then oscillates. Mobile orbit opens when the intro ends; desktop waits for the orbit toggle in `idle`.
- `focus` — camera dollies to the monitor (desktop UI becomes interactive); orbit controls and cursors are off
- `idle` — camera pulls back, then oscillates. Mobile stays draggable; desktop uses the `RotateThree` toggle.

See [camera-controller.md](camera-controller.md) for the full camera behavior: timings, oscillation, orbit clamps, and the grab/idle hand-off.

Render path (`App.tsx`):

- all viewports → `WorkplaceScene` (lazy-loaded, 3D), with `MobileOverlay` (name + dock-style nav) added under 1024px once loading ends (`useIsMobile`)
- mobile intro end → `MobileToast` below the nav, fades out after a few seconds; never rendered on desktop
- mobile `work` after loading → `focus` + canvas dim, then `BottomSheetModal` with `AboutGrid` once the focus tween completes (immediately if already focused); close → slide sheet down, `idle`, and dim fade-out
- `Resume` is a sidebar link alongside the social links: desktop opens the resume window, mobile opens `resume.filePath` in a new tab. The window's `Open in new tab` link opens the PDF in a new tab.

`sceneState` is passed down to the camera controller and DOM overlays. No router, no data fetching — all content is static constants.

## Directory Layout

```
src/
├── main.tsx                  Entry: ErrorBoundary → App
├── App.tsx                   Scene state machine, mobile overlays and Work sheet
├── features/
│   ├── workplace/            3D scene (R3F)
│   │   ├── components/scene/       WorkplaceScene (Canvas), RoomModel, Lighting, Skybox, Effects
│   │   ├── components/camera/      CameraController (GSAP moves + OrbitControls, keyed on sceneState), FixedWidthCamera
│   │   ├── components/ui/          DOM overlays: SceneInstruction, SceneControls, MobileOverlay
│   │   ├── utils/                  sceneState, workState, fov helpers + tests
│   │   └── sceneConfig.ts          Camera / lighting / monitor position constants
│   └── desktop/              macOS desktop UI (DOM inside the 3D monitor)
│       ├── components/layout/      DesktopContainer (drei Html bridge), DesktopScreen, Header
│       ├── components/wrapper/     WindowWrapper HOC: drag, minimize, focus, z-index
│       ├── components/windows/     One file per app (About, Finder, Terminal, Resume, …)
│       ├── components/ui/          Dock, IconList, FinderMenu, DigitalClock
│       ├── stores/                 Zustand: window.ts (open/min/zIndex), location.ts (active folder)
│       └── data/constants/         Desktop content: locations, icons, terminal text
├── screens/                  Full-page views: AboutGrid (desktop About window), LoadingScreen, ErrorBoundary/Screen
├── components/               Shared UI: about cards, Button, DialogBox, BottomSheetModal, HugeIcon wrapper
├── data/                     Shared types (SceneState, Project) + site constants (projects, socials, resume)
├── hooks/                    useIsMobile (1024px), useIsUltraWide
├── utils/                    cn() class merger, downloadResume (tests/ here also holds the shared viewport helper)
└── assets/                   Tailwind entry (index.css, @theme tokens) + per-area CSS
```

## Key Patterns

- **3D ↔ DOM bridge** — `DesktopContainer` mounts ordinary React DOM into the scene with drei `<Html transform occlude>`. All desktop UI is plain DOM; only the wrapper group lives in the 3D scene.
- **Window management** — each window is `WindowWrapper(Component, windowKey)`: an HOC that subscribes to the window store and adds stacking (z-index), GSAP drag, and minimize animations. `DesktopScreen` mounts windows conditionally on store state; `Contact`/`Resume` are lazy.
- **State** — Zustand, scoped to `features/desktop`. Scene state is React `useState` in `App`; the mobile Work sheet uses the pure helpers in `features/workplace/utils/workState.ts`. No global store.
- **Animation** — GSAP via `useGSAP` for camera moves, dock magnification, window drag/minimize, loading transitions, and the mobile Work sheet. Camera focus/dim use `CAMERA_CONFIG.focus`; pull-back/dim fade use `CAMERA_CONFIG.pullBack`.
- **Code splitting** — `WorkplaceScene`, `ContactWindow`, `ResumeWindow` are `lazy()`; `vite.config.ts` pins one long-lived `three` group (Rolldown `codeSplitting`, recursion off so react stays out of it) with `output.strictExecutionOrder` so cross-chunk cycles stay safe; everything else splits automatically. `scripts/check-dist-graph.mjs` guards both rules at build time.
- **Styling** — Tailwind v4 CSS-first: design tokens in `@theme` (`assets/index.css`), per-area CSS files for complex layouts (`about-grid`, `desktop-container`, `terminal`). `cn()` (clsx + tailwind-merge) for conditional classes.
- **Testing** — Vitest 5 (bundled with Vite+), configured in the `test` block of `vite.config.ts`. Each folder keeps its tests in a `tests/` subfolder beside the code (`*.test.ts(x)`); see [Testing](testing.md).

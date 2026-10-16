# Project Architecture

macOS-style desktop portfolio. A 3D office scene (React Three Fiber) renders a monitor with a working desktop UI (plain DOM embedded via drei `Html`). Mobile viewports get a flat card grid instead of the 3D scene.

**Stack:** React 19 + TypeScript · Vite+ / Rolldown · Tailwind CSS v4 · Zustand · GSAP · Bun

## Boot & State Flow

`src/main.tsx` → `ErrorBoundary` → `App`

`App` owns the scene state machine (`SceneState` in `src/data/types.ts`) and selects the render path:

```
loading → start → (click) → focus ⇄ idle
```

- `loading` — `LoadingScreen` overlay; progress comes from drei `useProgress`
- `start` — 3D scene visible, camera oscillates
- `focus` — camera dollies to the monitor (desktop UI becomes interactive)
- `idle` — camera pulls back

Render paths (switch in `App.tsx`):

- viewport ≥ 1024px (`useIsMobile`) → `WorkplaceScene` (lazy-loaded, 3D)
- < 1024px → `screens/about/AboutGrid` (flat grid, no 3D)

`sceneState` is passed down to the camera controller and DOM overlays. No router, no data fetching — all content is static constants.

## Directory Layout

```
src/
├── main.tsx                  Entry: ErrorBoundary → App
├── App.tsx                   Scene state machine, render-path switch
├── features/
│   ├── workplace/            3D scene (R3F)
│   │   ├── components/scene/       WorkplaceScene (Canvas), RoomModel, Lighting, Skybox, Effects
│   │   ├── components/camera/      CameraController (GSAP, keyed on sceneState), FixedWidthCamera
│   │   ├── components/ui/          DOM overlays: ClickToStart, SceneControls
│   │   └── sceneConfig.ts          Camera / lighting / monitor position constants
│   └── desktop/              macOS desktop UI (DOM inside the 3D monitor)
│       ├── components/layout/      DesktopContainer (drei Html bridge), DesktopScreen, Header
│       ├── components/wrapper/     WindowWrapper HOC: drag, minimize, focus, z-index
│       ├── components/windows/     One file per app (About, Finder, Terminal, Resume, …)
│       ├── components/ui/          Dock, IconList, FinderMenu, DigitalClock
│       ├── stores/                 Zustand: window.ts (open/min/zIndex), location.ts (active folder)
│       └── data/constants/         Desktop content: locations, icons, terminal text
├── screens/                  Full-page views: AboutGrid (mobile), LoadingScreen, ErrorBoundary/Screen
├── components/               Shared UI: about cards, Button, DialogBox, HugeIcon wrapper
├── data/                     Shared types (SceneState, Project) + site constants (projects, socials, resume)
├── hooks/                    useIsMobile (1024px), useIsUltraWide
├── utils/                    cn() class merger, downloadResume (tests/ here also holds the shared viewport helper)
└── assets/                   Tailwind entry (index.css, @theme tokens) + per-area CSS
```

## Key Patterns

- **3D ↔ DOM bridge** — `DesktopContainer` mounts ordinary React DOM into the scene with drei `<Html transform occlude>`. All desktop UI is plain DOM; only the wrapper group lives in the 3D scene.
- **Window management** — each window is `WindowWrapper(Component, windowKey)`: an HOC that subscribes to the window store and adds stacking (z-index), GSAP drag, and minimize animations. `DesktopScreen` mounts windows conditionally on store state; `Contact`/`Resume` are lazy.
- **State** — Zustand (Immer for the window store) scoped to `features/desktop`. Scene state is React `useState` in `App`. No global store.
- **Animation** — GSAP via `useGSAP` for camera moves, dock magnification, window drag/minimize, loading transitions.
- **Code splitting** — `WorkplaceScene`, `ContactWindow`, `ResumeWindow` are `lazy()`; vendor chunks split in `vite.config.ts` (`three`, `postprocessing`, `animation`, `vendor`).
- **Styling** — Tailwind v4 CSS-first: design tokens in `@theme` (`assets/index.css`), per-area CSS files for complex layouts (`about-grid`, `desktop-container`, `terminal`). `cn()` (clsx + tailwind-merge) for conditional classes.
- **Testing** — Vitest 5 (bundled with Vite+), configured in the `test` block of `vite.config.ts`. Each folder keeps its tests in a `tests/` subfolder beside the code (`*.test.ts(x)`); see [Testing](testing.md).

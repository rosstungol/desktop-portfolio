# Testing

Unit tests run on **Vitest 5**, bundled with Vite+ (no direct `vitest` dependency). Each folder keeps its tests in a `tests/` subfolder beside the code it covers, named `*.test.ts` / `*.test.tsx`.

## Commands

```bash
vp test          # run once
vp test watch    # watch mode
```

`bun run test` maps to the same Vitest run. `vp test` and `vp check` are Vite+ built-ins; use `vp run test` only if a `package.json` script needs to shadow one.

## Configuration

Test settings live in the `test` block of `vite.config.ts` (Vite+ recommends keeping Vitest config there rather than a separate `vitest.config.ts`):

```ts
test: {
  environment: 'node',
  include: ['src/**/*.test.{ts,tsx}'],
}
```

- **Node is the default environment.** Files that need a DOM opt in per file with a docblock:

  ```ts
  // @vitest-environment happy-dom
  ```

- **No globals.** Import APIs explicitly from `vite-plus/test` (`describe`, `it`, `expect`, `vi`, …). The `vite-plus/prefer-vite-plus-imports` lint rule enforces the `vite-plus/*` entry point over `vitest`.
- **No `jest-dom`.** Assert with the DOM plus Vitest matchers (`screen.getByText(...)` already throws when missing; use `queryByText(...)` + `toBeNull()` for absence).
- `@testing-library/react` does **not** auto-clean when globals are off — call `cleanup()` in `afterEach` in DOM test files.
- **Tests are grouped per folder.** A folder's tests live in its own `tests/` subfolder, e.g. `features/desktop/stores/window.ts` → `features/desktop/stores/tests/window.test.ts`. Add a subfolder inside `tests/` only when a folder has enough tests to warrant it.
- Shared, non-test helpers live under the shared `utils` folder, in `src/utils/tests/` (e.g. `viewport.ts`).

## What is covered

| Area                                                      | File                                                                                                                                                                        | Notes                                                                     |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Window store (open/close/focus/minimize/restore, z-index) | `features/desktop/stores/tests/window.test.ts`                                                                                                                              | Resets the store from a snapshot in `beforeEach`.                         |
| Location store                                            | `features/desktop/stores/tests/location.test.ts`                                                                                                                            |                                                                           |
| Contact form (schema + submit)                            | `features/desktop/components/forms/tests/ContactForm.test.tsx`                                                                                                              | happy-dom; stubs `fetch`.                                                 |
| Camera FOV maths                                          | `features/workplace/utils/tests/fov.test.ts`                                                                                                                                |                                                                           |
| Location data invariants                                  | `features/desktop/data/constants/tests/constants.test.ts`                                                                                                                   | ids, names, Finder positions, per-location uniqueness.                    |
| `useIsMobile`, `useIsUltrawide`                           | `hooks/tests/*.test.ts`                                                                                                                                                     | happy-dom + `setViewport`.                                                |
| `cn`, `downloadResume`                                    | `utils/tests/*.test.ts`                                                                                                                                                     |                                                                           |
| `DigitalClock`, `ErrorBoundary`                           | `components/ui/tests/DigitalClock.test.tsx`, `screens/error/tests/ErrorBoundary.test.tsx`                                                                                   | fake timers / RTL.                                                        |
| Pure view helpers                                         | `features/desktop/utils/tests/` (`getWindowTitle`, `resolveWindowAction`, `resolveItemAction`, `parseTerminalCommand`), `features/workplace/utils/tests/sceneState.test.ts` | Extracted from components so they can be tested without the 3D/DOM shell. |

3D scene and GSAP-animated components (`WindowWrapper`, `CameraController`, the R3F scene) are intentionally **not** unit-tested; they are better covered by browser/e2e tests.

`vp check` type-checks test files too (they are part of `tsconfig.app.json`), so keep them type-clean.

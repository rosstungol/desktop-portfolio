# Desktop Portfolio

This is my portfolio, a React + TypeScript application built with Vite, featuring a macOS-like desktop simulator rendered inside a 3D workplace scene using React Three Fiber.

[rosstungol.com](https://rosstungol.com)

### Tech Stack

| Layer                         | Technology                  |
| ----------------------------- | --------------------------- |
| Framework                     | React 19 + TypeScript       |
| 3D Rendering                  | React Three Fiber, Three.js |
| R3F Helpers / Post-Processing | Drei, Postprocessing        |
| State                         | Zustand + Immer             |
| Animation                     | GSAP                        |
| Styling                       | Tailwind CSS v4             |
| UI Icons                      | Hugeicons                   |
| Build                         | Vite+ (Rolldown)            |
| Linter / Formatter            | Vite+ (Oxlint + Oxfmt)      |
| Package Manager               | Bun                         |

## Commands

| Command           | Description                                |
| ----------------- | ------------------------------------------ |
| `bun install`     | Install dependencies                       |
| `bun run dev`     | Start the dev server with HMR              |
| `bun run build`   | Type-check and build for production        |
| `bun run preview` | Preview the production build locally       |
| `bun run check`   | Run format, lint, and type checks together |
| `bun run lint`    | Run Oxlint only                            |
| `bun run format`  | Format the codebase with Oxfmt             |
| `bun run test`    | Run tests with Vitest                      |

Each script wraps the matching Vite+ built-in, so `vp dev`, `vp check`, `vp lint`, and so on also work directly.

A pre-commit hook runs `vp check --fix` on staged files, so formatting and lint fixes are applied automatically when you commit.

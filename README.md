# Desktop Portfolio

This is my portfolio, a React + TypeScript application built with Vite, featuring a macOS-like desktop simulator rendered inside a 3D workplace scene using React Three Fiber.

[rosstungol.com](https://rosstungol.com)

### Tech Stack

| Layer                         | Technology                  |
| ----------------------------- | --------------------------- |
| Framework                     | React 19 + TypeScript       |
| 3D Rendering                  | React Three Fiber, Three.js |
| R3F Helpers / Post-Processing | Drei, Postprocessing        |
| State                         | Zustand                     |
| Animation                     | GSAP                        |
| Styling                       | Tailwind CSS v4             |
| UI Icons                      | Hugeicons                   |
| Build                         | Vite+ (Rolldown)            |
| Linter / Formatter            | Vite+ (Oxlint + Oxfmt)      |
| Package Manager               | Bun                         |

## Commands

This project uses [Vite+](https://viteplus.dev) (`vp`) as its unified toolchain and [Bun](https://bun.sh) as its package manager.

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

Most scripts wrap the matching Vite+ built-in. The `build` script also runs `tsc -b`; use `vp run build` to include that type check.

A pre-commit hook runs `vp check --fix` on staged files, so formatting and lint fixes are applied automatically when you commit.

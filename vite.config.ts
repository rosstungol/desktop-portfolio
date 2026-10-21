import path from 'node:path'

import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, lazyPlugins } from 'vite-plus'

// https://vite.dev/config/
export default defineConfig({
	staged: {
		'*': 'vp check --fix',
	},
	fmt: {
		useTabs: true,
		tabWidth: 2,
		printWidth: 80,
		semi: false,
		singleQuote: true,
		jsxSingleQuote: true,
		quoteProps: 'as-needed',
		trailingComma: 'es5',
		endOfLine: 'lf',
		sortImports: true,
		sortTailwindcss: true,
	},
	lint: {
		jsPlugins: [{ name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' }],
		rules: { 'vite-plus/prefer-vite-plus-imports': 'error' },
		options: { typeAware: true, typeCheck: true },
	},
	plugins: lazyPlugins(() => [
		react({
			babel: {
				plugins: [['babel-plugin-react-compiler']],
			},
		}),
		tailwindcss(),
	]),
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},

	test: {
		// Vitest 5 is bundled with Vite+. Tests import from `vite-plus/test`.
		// Node is the default environment; DOM tests opt in per file with a
		// `// @vitest-environment happy-dom` docblock.
		environment: 'node',
		include: ['src/**/*.test.{ts,tsx}'],
	},

	build: {
		chunkSizeWarningLimit: 1000,

		rollupOptions: {
			output: {
				// One long-lived chunk for the 3D engine, reachable only through
				// the lazy scene import so the entry HTML never preloads it.
				// includeDependenciesRecursively must stay false: pulling deps in
				// would trap react/react-dom here and force three.js into the
				// entry graph (manualChunks did exactly that; groups are the
				// Rolldown-native replacement). Keeping deps out also pulls
				// drei's shared helpers (maath, its-fine, ...) into sibling
				// chunks, so group members cycle back into them;
				// strictExecutionOrder wraps modules so bodies run in source
				// order despite those cycles — without it, BufferGeometry
				// resolves to an uninitialized var and the app crashes.
				codeSplitting: {
					groups: [
						{
							name: 'three',
							test: /node_modules[\\/](three|@react-three|three-stdlib)[\\/]/,
							includeDependenciesRecursively: false,
						},
					],
				},
				strictExecutionOrder: true,
			},
		},
	},
})

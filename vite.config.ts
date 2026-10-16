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
				manualChunks(id) {
					if (id.includes('node_modules')) {
						if (
							id.includes('/node_modules/three/') ||
							id.includes('/node_modules/@react-three/') ||
							id.includes('/node_modules/three-stdlib/')
						) {
							return 'three'
						}

						if (id.includes('/node_modules/postprocessing/')) {
							return 'postprocessing'
						}

						if (id.includes('/node_modules/gsap/')) {
							return 'animation'
						}

						if (id.includes('/node_modules/react-pdf/')) {
							return undefined
						}

						if (id.includes('/node_modules/pdfjs-dist/')) {
							return undefined
						}

						if (id.includes('/node_modules/zod/')) {
							return undefined
						}

						return 'vendor'
					}
				},
			},
		},
	},
})

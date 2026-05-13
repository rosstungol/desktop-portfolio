import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react({
			babel: {
				plugins: [['babel-plugin-react-compiler']],
			},
		}),
		tailwindcss(),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
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

						return 'vendor'
					}
				},
			},
		},
	},
})

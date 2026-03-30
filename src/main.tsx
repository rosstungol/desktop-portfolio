import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './assets/index.css'

import { App } from './App'
import { ErrorBoundary } from './screens/error/ErrorBoundary'
import { ErrorMessage } from './screens/error/ErrorScreen'

gsap.registerPlugin(useGSAP)

const root = document.getElementById('root')

if (root) {
	createRoot(root).render(
		<StrictMode>
			<ErrorBoundary fallback={<ErrorMessage />}>
				<App />
			</ErrorBoundary>
		</StrictMode>
	)
}

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {
	lazy,
	startTransition,
	useCallback,
	useEffect,
	useRef,
	useState,
	ViewTransition,
} from 'react'

import { BottomSheetModal } from './components/ui/BottomSheetModal'
import type { SceneState } from './data/types'
import { MobileOverlay } from './features/workplace/components/ui/MobileOverlay'
import { MobileToast } from './features/workplace/components/ui/MobileToast'
import { SceneControls } from './features/workplace/components/ui/SceneControls'
import { SceneInstruction } from './features/workplace/components/ui/SceneInstruction'
import { CAMERA_CONFIG } from './features/workplace/sceneConfig'
import {
	shouldRenderClickToStart,
	shouldRenderSceneControls,
} from './features/workplace/utils/sceneState'
import {
	closeWork,
	completeWorkFocus,
	initialWorkState,
	requestWork,
} from './features/workplace/utils/workState'
import { useIsMobile } from './hooks/useIsMobile'
import { AboutGrid } from './screens/about/AboutGrid'
import { LoadingScreen } from './screens/loading/LoadingScreen'
import { prefersReducedMotion } from './utils/prefersReducedMotion'

const WorkplaceScene = lazy(
	() => import('./features/workplace/components/scene/WorkplaceScene')
)

export function App() {
	const [sceneState, setSceneState] = useState<SceneState>('loading')
	const [progress, setProgress] = useState(0)
	const [orbitActive, setOrbitActive] = useState(false)
	const [work, setWork] = useState(initialWorkState)
	const [showMobileToast, setShowMobileToast] = useState(false)
	const dimRef = useRef<HTMLDivElement | null>(null)
	const isMobile = useIsMobile()
	const workRequested = work.requested
	const workOpen = work.open

	const handleFocus = () => startTransition(() => setSceneState('focus'))
	const handleIdle = () => startTransition(() => setSceneState('idle'))

	const handleWork = () => {
		if (work.requested || work.open) return
		setWork((state) => requestWork(state, sceneState))
		if (sceneState !== 'focus') handleFocus()
	}

	const handleWorkClose = () => {
		setWork(closeWork())
		handleIdle()
	}

	const handleFocusComplete = useCallback(() => {
		setWork((state) =>
			state.requested ? completeWorkFocus(state, isMobile) : state
		)
	}, [isMobile])

	const handleIntroComplete = useCallback(() => {
		if (isMobile) setShowMobileToast(true)
	}, [isMobile])

	useGSAP(() => {
		const el = dimRef.current
		if (!el || !isMobile) return

		const show = workRequested || workOpen
		gsap.killTweensOf(el)
		if (prefersReducedMotion()) {
			gsap.set(el, { opacity: show ? 1 : 0 })
			return
		}

		gsap.to(el, {
			opacity: show ? 1 : 0,
			...(show ? CAMERA_CONFIG.focus : CAMERA_CONFIG.pullBack),
		})
	}, [isMobile, workRequested, workOpen])

	useEffect(() => {
		if (!isMobile) {
			setShowMobileToast(false)
			setWork(closeWork())
		}
	}, [isMobile])

	const showSceneInstruction = shouldRenderClickToStart(sceneState, isMobile)
	const canStart = showSceneInstruction && !orbitActive

	return (
		<main inert={isMobile && workOpen}>
			{sceneState === 'loading' && (
				<ViewTransition>
					<div className='viewport-overlay z-30'>
						<LoadingScreen
							progress={progress}
							onLoaded={() => startTransition(() => setSceneState('start'))}
						/>
					</div>
				</ViewTransition>
			)}

			{showSceneInstruction && (
				<SceneInstruction
					text={
						orbitActive ? 'drag the scene to orbit' : 'click anywhere to start'
					}
				/>
			)}

			{shouldRenderSceneControls(sceneState, isMobile) && (
				<SceneControls
					sceneState={sceneState}
					orbitActive={orbitActive}
					onFocus={handleFocus}
					onIdle={handleIdle}
					onOrbitToggle={() => setOrbitActive((active) => !active)}
				/>
			)}

			<div
				className='h-dvh w-full'
				onClick={canStart ? handleFocus : undefined}
			>
				<WorkplaceScene
					sceneState={sceneState}
					orbitActive={orbitActive}
					onFocus={canStart ? handleFocus : undefined}
					onFocusComplete={handleFocusComplete}
					onIntroComplete={handleIntroComplete}
					onProgress={setProgress}
				/>
			</div>

			{isMobile && (
				<div
					ref={dimRef}
					className='pointer-events-none fixed inset-0 z-[15] bg-black/60'
					style={{ opacity: 0 }}
				/>
			)}

			{isMobile && sceneState !== 'loading' && (
				<MobileOverlay onWork={handleWork} />
			)}
			{isMobile && showMobileToast && <MobileToast />}

			{isMobile && (
				<BottomSheetModal
					open={workOpen}
					title='Work'
					onClose={handleWorkClose}
				>
					<AboutGrid />
				</BottomSheetModal>
			)}
		</main>
	)
}

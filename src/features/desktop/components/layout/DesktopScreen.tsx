import { lazy, Suspense } from 'react'

import type { SceneState } from '@/data/types'

import { locations } from '../../data/constants/locations'
import { useWindowStore } from '../../stores/window'
import { Dock } from '../ui/Dock'
import { IconList } from '../ui/IconList'
import { AboutWindow } from '../windows/About'
import { FinderWindow } from '../windows/Finder'
import { ImageWindow } from '../windows/ImageViewer'
import { LowOrbitWindow } from '../windows/LowOrbit'
import { PhotosWindow } from '../windows/Photos'
import { TerminalWindow } from '../windows/Terminal'
import { TextWindow } from '../windows/TextViewer'
import { Header } from './Header'

const ContactWindow = lazy(() => import('../windows/Contact'))
const ResumeWindow = lazy(() => import('../windows/Resume'))

export function DesktopScreen({ sceneState }: { sceneState?: SceneState }) {
	const windows = useWindowStore((state) => state.windows)

	return (
		<div>
			<Header />
			<Dock />
			<IconList items={locations.desktop.children ?? []} location='desktop' />

			{windows.finder.isOpen && <FinderWindow sceneState={sceneState} />}
			{windows.about.isOpen && <AboutWindow sceneState={sceneState} />}
			{windows.contact.isOpen && (
				<Suspense>
					<ContactWindow sceneState={sceneState} />
				</Suspense>
			)}
			{windows.photos.isOpen && <PhotosWindow sceneState={sceneState} />}
			{windows.terminal.isOpen && <TerminalWindow sceneState={sceneState} />}
			{windows.resume.isOpen && (
				<Suspense>
					<ResumeWindow sceneState={sceneState} />
				</Suspense>
			)}
			{windows.file.isOpen && <TextWindow sceneState={sceneState} />}
			{windows.image.isOpen && <ImageWindow sceneState={sceneState} />}
			{windows.lowOrbit.isOpen && <LowOrbitWindow sceneState={sceneState} />}
		</div>
	)
}

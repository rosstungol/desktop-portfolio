import { lazy, Suspense } from 'react'
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

export function DesktopScreen() {
	const windows = useWindowStore((state) => state.windows)

	return (
		<div>
			<Header />
			<Dock />
			<IconList items={locations.desktop.children ?? []} location='desktop' />

			{windows.finder.isOpen && <FinderWindow />}
			{windows.about.isOpen && <AboutWindow />}
			{windows.contact.isOpen && (
				<Suspense>
					<ContactWindow />
				</Suspense>
			)}
			{windows.photos.isOpen && <PhotosWindow />}
			{windows.terminal.isOpen && <TerminalWindow />}
			{windows.resume.isOpen && (
				<Suspense>
					<ResumeWindow />
				</Suspense>
			)}
			{windows.file.isOpen && <TextWindow />}
			{windows.image.isOpen && <ImageWindow />}
			{windows.lowOrbit.isOpen && <LowOrbitWindow />}
		</div>
	)
}

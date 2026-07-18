import { locations } from '../../data/constants/locations'
import { useWindowStore } from '../../stores/window'
import { Dock } from '../ui/Dock'
import { IconList } from '../ui/IconList'
import { AboutWindow } from '../windows/About'
import { ContactWindow } from '../windows/Contact'
import { FinderWindow } from '../windows/Finder'
import { ImageWindow } from '../windows/ImageViewer'
import { LowOrbitWindow } from '../windows/LowOrbit'
import { PhotosWindow } from '../windows/Photos'
import { ResumeWindow } from '../windows/Resume'
import { TerminalWindow } from '../windows/Terminal'
import { TextWindow } from '../windows/TextViewer'
import { Header } from './Header'

export function DesktopScreen() {
	const windows = useWindowStore((state) => state.windows)

	return (
		<div>
			<Header />
			<Dock />
			<IconList items={locations.desktop.children ?? []} location='desktop' />

			{windows.finder.isOpen && <FinderWindow />}
			{windows.about.isOpen && <AboutWindow />}
			{windows.contact.isOpen && <ContactWindow />}
			{windows.photos.isOpen && <PhotosWindow />}
			{windows.terminal.isOpen && <TerminalWindow />}
			{windows.resume.isOpen && <ResumeWindow />}
			{windows.file.isOpen && <TextWindow />}
			{windows.image.isOpen && <ImageWindow />}
			{windows.lowOrbit.isOpen && <LowOrbitWindow />}
		</div>
	)
}

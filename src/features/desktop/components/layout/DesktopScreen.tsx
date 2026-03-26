import { locations } from '../../data/constants/locations'
import { Navbar } from '../layout/Navbar'
import { Dock } from '../ui/Dock'
import { IconList } from '../ui/IconList'
import { AboutWindow } from '../windows/About'
import { ContactWindow } from '../windows/Contact'
import { FinderWindow } from '../windows/Finder'
import { ImageWindow } from '../windows/ImageViewer'
import { PhotosWindow } from '../windows/Photos'
import { ResumeWindow } from '../windows/Resume'
import { TerminalWindow } from '../windows/Terminal'
import { TextWindow } from '../windows/TextViewer'

export function DesktopScreen() {
	return (
		<div>
			<Navbar />
			<Dock />
			<IconList items={locations.desktop.children ?? []} location='desktop' />

			<FinderWindow />
			<AboutWindow />
			<ContactWindow />
			<PhotosWindow />
			<TerminalWindow />
			<ResumeWindow />
			<TextWindow />
			<ImageWindow />
		</div>
	)
}

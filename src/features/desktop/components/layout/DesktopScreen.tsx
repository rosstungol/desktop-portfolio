import { locations } from '../../data/constants/locations'
import { Navbar } from '../layout/Navbar'
import { Dock } from '../ui/Dock'
import { IconList } from '../ui/IconList'
import { ContactWindow } from '../windows/Contact'
import { FinderWindow } from '../windows/Finder'
import { ResumeWindow } from '../windows/Resume'
import { TextWindow } from '../windows/Text'

export function DesktopScreen() {
	return (
		<div>
			<Navbar />
			<Dock />
			<IconList items={locations.desktop.children ?? []} location='desktop' />

			<FinderWindow />
			<ContactWindow />
			<ResumeWindow />
			<TextWindow />
		</div>
	)
}

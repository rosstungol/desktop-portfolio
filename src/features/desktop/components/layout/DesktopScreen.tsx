import { DESKTOP_LOCATION } from '../../data/constants/locations'
import { Navbar } from '../layout/Navbar'
import { Dock } from '../ui/Dock'
import { IconList } from '../ui/IconList'
import { ContactWindow } from '../windows/Contact'
import { FinderWindow } from '../windows/Finder'
import { ResumeWindow } from '../windows/Resume'

export function DesktopScreen() {
	return (
		<div>
			<Navbar />
			<Dock />
			<IconList items={DESKTOP_LOCATION.children ?? []} location='desktop' />

			<FinderWindow />
			<ContactWindow />
			<ResumeWindow />
		</div>
	)
}

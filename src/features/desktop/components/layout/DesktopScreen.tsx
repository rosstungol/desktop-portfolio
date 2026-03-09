import { DESKTOP_LOCATION } from '../../data/constants'
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
			<IconList location={DESKTOP_LOCATION} type='desktop' />

			<FinderWindow />
			<ContactWindow />
			<ResumeWindow />
		</div>
	)
}

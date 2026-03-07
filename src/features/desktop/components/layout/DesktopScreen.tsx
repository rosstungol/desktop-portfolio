import { Navbar } from '../layout/Navbar'
import { Dock } from '../ui/Dock'
import { ContactWindow } from '../windows/Contact'
import { FinderWindow } from '../windows/Finder'
import { ResumeWindow } from '../windows/Resume'

export function DesktopScreen() {
	return (
		<div>
			<Navbar />
			<Dock />

			<FinderWindow />
			<ContactWindow />
			<ResumeWindow />
		</div>
	)
}

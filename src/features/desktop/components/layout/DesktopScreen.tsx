import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'

import { Navbar } from '../layout/Navbar'
import { Dock } from '../ui/Dock'
import { ContactWindow } from '../windows/Contact'
import { FinderWindow } from '../windows/Finder'
import { ResumeWindow } from '../windows/Resume'

gsap.registerPlugin(Draggable)

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

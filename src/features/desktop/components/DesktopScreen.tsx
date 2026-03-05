import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'

import Dock from './Dock'
import Navbar from './Navbar'
import Contact from './windows/Contact'
import Finder from './windows/Finder'
import Resume from './windows/Resume'

gsap.registerPlugin(Draggable)

export default function DesktopScreen() {
	return (
		<div>
			<Navbar />
			<Dock />

			<Finder />
			<Contact />
			<Resume />
		</div>
	)
}

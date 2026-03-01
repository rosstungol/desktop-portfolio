import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'

import Contact from '@/features/desktop/components/windows/Contact'

import Dock from './Dock'
import Navbar from './Navbar'

gsap.registerPlugin(Draggable)

export default function DesktopScreen() {
	return (
		<div>
			<Navbar />
			<Dock />

			<Contact />
		</div>
	)
}

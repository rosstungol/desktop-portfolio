import { AboutScreen } from '@/screens/about/AboutScreen'

import { WindowHeader } from '../wrapper/WindowHeader'
import { WindowWrapper } from '../wrapper/WindowWrapper'

function About() {
	return (
		<>
			<WindowHeader title='About' target='about' />
			<div className='h-[900px] w-[1400px]'>
				<AboutScreen />
			</div>
		</>
	)
}

export const AboutWindow = WindowWrapper(About, 'about')

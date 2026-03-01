import type { ReactNode } from 'react'

import { contactLinks } from '../../data/constants'
import Github from '../icons/Github'
import LinkedIn from '../icons/LinkedIn'
import WindowHeader from '../wrapper/WindowHeader'
import WindowWrapper from '../wrapper/WindowWrapper'

function ContactLink({ link, Icon }: { link: string; Icon: ReactNode }) {
	return (
		<li>
			<a
				href={link}
				target='_blank'
				rel='noopener noreferrer'
				className='button -secondary size-12 flex-center rounded-full'
			>
				{Icon}
			</a>
		</li>
	)
}

function Contact() {
	return (
		<>
			<WindowHeader title='Contact' />
			<div className='col-center rounded-b-xl p-8 text-xs'>
				<div className='mb-4 size-32 flex-center rounded-full bg-gray-800' />
				<h1 className='mb-3 font-bold text-3xl'>Ross Tungol</h1>
				<div>
					<ul className='flex gap-6'>
						<ContactLink link={contactLinks.linkedIn} Icon={<LinkedIn />} />
						<ContactLink link={contactLinks.github} Icon={<Github />} />
					</ul>
				</div>
			</div>
		</>
	)
}

const ContactWindow = WindowWrapper(Contact, 'contact')

export default ContactWindow

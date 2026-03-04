import type { ReactNode } from 'react'

import { contactLinks } from '../../data/constants'
import Github from '../icons/Github'
import LinkedIn from '../icons/LinkedIn'
import WindowHeader from '../wrapper/WindowHeader'
import WindowWrapper from '../wrapper/WindowWrapper'

function ContactLink({
	link,
	label,
	Icon,
}: {
	link: string
	label: string
	Icon: ReactNode
}) {
	return (
		<li>
			<a
				href={link}
				target='_blank'
				rel='noopener noreferrer'
				aria-label={label}
				title={label}
				className='flex-center rounded-full border-2 border-blue-500/10 p-2 font-bold text-gray-200 transition-colors hover:border-blue-100 hover:bg-blue-100 hover:text-gray-950'
			>
				{Icon}
			</a>
		</li>
	)
}

function Contact() {
	return (
		<>
			<WindowHeader title='Contact' target='contact' />
			<div className='col-center rounded-b-xl p-8 text-xs'>
				<div className='mb-4 size-32 flex-center rounded-full bg-gray-800' />
				<h1 className='mb-3 font-bold text-3xl'>Ross Tungol</h1>
				<div>
					<ul className='flex gap-6'>
						<ContactLink
							link={contactLinks.linkedIn}
							label='LinkedIn profile'
							Icon={<LinkedIn />}
						/>
						<ContactLink
							link={contactLinks.github}
							label='GitHub profile'
							Icon={<Github />}
						/>
					</ul>
				</div>
			</div>
		</>
	)
}

const ContactWindow = WindowWrapper(Contact, 'contact')

export default ContactWindow

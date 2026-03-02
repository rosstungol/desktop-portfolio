import type { ReactNode } from 'react'

import { Button } from '@/components/Button'

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
			>
				<Button variant='secondary' roundedFull={true}>
					{Icon}
				</Button>
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

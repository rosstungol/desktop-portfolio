import { contactLinks } from '@/data/constants'

import { IconLink } from '../ui/IconLink'
import { WindowHeader } from '../wrapper/WindowHeader'
import { WindowWrapper } from '../wrapper/WindowWrapper'

function Contact() {
	return (
		<>
			<WindowHeader title='Contact' target='contact' />
			<div className='col-center w-140 rounded-b-xl p-16'>
				<div className='mb-8 size-52 flex-center overflow-clip rounded-full'>
					<img src='/images/me.avif' alt='Portrait of Ross Tungol' />
				</div>
				<h2 className='mb-6 font-bold text-6xl'>Ross Tungol</h2>
				<div>
					<ul className='flex gap-6'>
						{contactLinks.map(({ link, label, Icon }) => (
							<li key={label}>
								<IconLink
									href={link}
									label={label}
									rounded={true}
									{...(label !== 'Email' && {
										target: '_blank',
										rel: 'noopener noreferrer',
									})}
									Icon={Icon}
								/>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	)
}

export const ContactWindow = WindowWrapper(Contact, 'contact')

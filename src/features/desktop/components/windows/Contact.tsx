import { contactLinks } from '../../data/constants'
import { IconLink } from '../ui/IconLink'
import { WindowHeader } from '../wrapper/WindowHeader'
import { WindowWrapper } from '../wrapper/WindowWrapper'

function Contact() {
	return (
		<>
			<WindowHeader title='Contact' target='contact' />
			<div className='col-center w-80 rounded-b-xl p-8 text-xs'>
				<div className='mb-4 size-32 flex-center rounded-full bg-gray-800' />
				<h1 className='mb-3 font-bold text-3xl'>Ross Tungol</h1>
				<div>
					<ul className='flex gap-6'>
						{contactLinks.map(({ link, label, Icon }) => (
							<li key={label}>
								<IconLink
									href={link}
									label={label}
									rounded={true}
									target='_blank'
									rel='noopener noreferrer'
								>
									<Icon />
								</IconLink>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	)
}

export const ContactWindow = WindowWrapper(Contact, 'contact')

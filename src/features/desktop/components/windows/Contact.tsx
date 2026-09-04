import { socialLinks } from '@/data/constants'
import { ContactForm } from '../forms/ContactForm'
import { IconLink } from '../ui/IconLink'
import { WindowHeader } from '../wrapper/WindowHeader'
import { WindowWrapper } from '../wrapper/WindowWrapper'

function Contact() {
	return (
		<>
			<WindowHeader title='Contact' target='contact' />
			<div className='flex h-185 w-250 rounded-b-xl'>
				<aside className='col-center m-3 w-140 flex-2 rounded-lg bg-neutral-600/10 p-4'>
					<div className='mb-8 size-40 flex-center overflow-clip rounded-full'>
						<img src='/images/me.avif' alt='Portrait of Ross Tungol' />
					</div>
					<h2 className='mb-6 font-bold text-5xl'>Ross Tungol</h2>
					<ul className='flex gap-6'>
						{socialLinks.map(({ link, label, Icon }) => (
							<li key={label}>
								<IconLink
									href={link}
									label={label}
									rounded={true}
									{...(!link.startsWith('mailto:') && {
										target: '_blank',
										rel: 'noopener noreferrer',
									})}
									Icon={Icon}
								/>
							</li>
						))}
					</ul>
				</aside>
				<div className='flex-3 px-8 py-10'>
					<ContactForm />
				</div>
			</div>
		</>
	)
}

export default WindowWrapper(Contact, 'contact')

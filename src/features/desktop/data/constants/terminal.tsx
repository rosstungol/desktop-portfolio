export const help = [
	<br key={crypto.randomUUID()} />,
	<p key={crypto.randomUUID()} className='subheading'>
		about
	</p>,
	<p key={crypto.randomUUID()}>↳ displays information about me</p>,
	<br key={crypto.randomUUID()} />,

	<p key={crypto.randomUUID()} className='subheading'>
		skills
	</p>,
	<p key={crypto.randomUUID()}>↳ displays my tech stack</p>,
	<br key={crypto.randomUUID()} />,

	<p key={crypto.randomUUID()} className='subheading'>
		cv
	</p>,
	<p key={crypto.randomUUID()}>↳ downloads my resumé</p>,
	<br key={crypto.randomUUID()} />,

	<p key={crypto.randomUUID()} className='subheading'>
		kitten
	</p>,
	<p key={crypto.randomUUID()}>↳ displays a cat</p>,
	<br key={crypto.randomUUID()} />,

	<p key={crypto.randomUUID()} className='subheading'>
		clear
	</p>,
	<p key={crypto.randomUUID()}>↳ clears the terminal</p>,
	<br key={crypto.randomUUID()} />,

	<p key={crypto.randomUUID()} className='subheading'>
		help
	</p>,
	<p key={crypto.randomUUID()}>↳ displays available commands</p>,
	<br key={crypto.randomUUID()} />,
] as const

// TODO: Replace placeholder with description
export const about = [
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
]

export const skills = [
	<br key={crypto.randomUUID()} />,
	<p key={crypto.randomUUID()} className='subheading'>
		Primary languages, libraries & frameworks I use
	</p>,
	<p key={crypto.randomUUID()}>↳ HTML5, CSS3 & Sass, JavaScript, TypeScript</p>,
	<p key={crypto.randomUUID()}>
		↳ React.js, Next.js, React Native, Express, Tailwind CSS
	</p>,
	<br key={crypto.randomUUID()} />,

	<p key={crypto.randomUUID()} className='subheading'>
		Version control{' '}
	</p>,
	<p key={crypto.randomUUID()}>↳ Git, Github, Bitbucket</p>,
	<br key={crypto.randomUUID()} />,

	<p key={crypto.randomUUID()} className='subheading'>
		API
	</p>,
	<p key={crypto.randomUUID()}>↳ REST, GraphQL</p>,
	<br key={crypto.randomUUID()} />,

	<p key={crypto.randomUUID()} className='subheading'>
		Tests
	</p>,
	<p key={crypto.randomUUID()}>↳ Jest, Vitest</p>,
	<br key={crypto.randomUUID()} />,

	<p key={crypto.randomUUID()} className='subheading'>
		Design
	</p>,
	<p key={crypto.randomUUID()}>↳ UI/UX design, Figma</p>,
	<br key={crypto.randomUUID()} />,

	<p key={crypto.randomUUID()} className='subheading'>
		Other languages & frameworks I have worked with
	</p>,
	<p key={crypto.randomUUID()}>
		↳ Dart & Flutter, Ruby & Ruby on Rails, Python & Django
	</p>,
	<br key={crypto.randomUUID()} />,
] as const

export const kitten = [
	`
        ██            ██
      ██░░██        ██░░██
      ██░░▒▒████████▒▒░░██                ████
    ██▒▒░░░░▒▒▒▒░░▒▒░░░░▒▒██            ██░░░░██
    ██░░░░░░░░░░░░░░░░░░░░██            ██░░░░██
  ██▒▒░░░░░░░░░░░░░░░░░░░░▒▒████████      ██▓▓██
  ██░░░░██░░░░██░░░░██░░░░░░▓▓░░▓▓░░██    ██░░██
  ██░░░░░░░░██░░██░░░░░░░░░░▓▓░░▓▓░░░░██████▓▓██
  ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██░░██
  ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██░░██
  ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██
  ██▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██
  ██▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██
  ██▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▓▓██
    ██▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓▓██
      ██▓▓░░▓▓▓▓░░▓▓░░░░░░▓▓░░▓▓▓▓░░▓▓██
        ██░░████░░██████████░░████▒▒██
        ████    ████      ████    ████
`,
]

import { aboutText, skillsList } from '@/data/constants'

export const about = (
	<div className='terminal-output'>
		{aboutText.map((item) => (
			<p key={item}>{item}</p>
		))}
	</div>
)

export const skills = (
	<div className='terminal-output'>
		<div className='output-section'>
			<h3 className='subheading'>Programming Languages</h3>
			<p>↳ {skillsList.languages.join(', ')}</p>
		</div>
		<div className='output-section'>
			<h3 className='subheading'>Libraries & Frameworks</h3>
			<p>↳ {skillsList.libraries.join(', ')}</p>
		</div>
		<div className='output-section'>
			<h3 className='subheading'>Tools & Platforms</h3>
			<p>↳ {skillsList.tools.join(', ')}</p>
		</div>
		<div className='output-section'>
			<h3 className='subheading'>Design</h3>
			<p>↳ {skillsList.design.join(', ')}</p>
		</div>
	</div>
)

export const help = (
	<div className='terminal-output'>
		<div className='output-section'>
			<h3 className='subheading'>about</h3>
			<p>↳ displays information about me</p>
		</div>

		<div className='output-section'>
			<h3 className='subheading'>skills</h3>
			<p>↳ displays my tech stack</p>
		</div>

		<div className='output-section'>
			<h3 className='subheading'>cv</h3>
			<p>↳ downloads my resumé</p>
		</div>

		<div className='output-section'>
			<h3 className='subheading'>help</h3>
			<p>↳ displays available commands</p>
		</div>

		<div className='output-section'>
			<h3 className='subheading'>kitten</h3>
			<p>↳ displays a cat</p>
		</div>

		<div className='output-section'>
			<h3 className='subheading'>clear</h3>
			<p>↳ clears the terminal</p>
		</div>
	</div>
)

export const kitten = (
	<pre>
		{`
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
    `}
	</pre>
)

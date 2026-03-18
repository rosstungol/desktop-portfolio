import { type KeyboardEvent, type ReactNode, useRef, useState } from 'react'

import { about, help, kitten, skills } from '../../data/constants/terminal'
import { WindowHeader } from '../wrapper/WindowHeader'
import { WindowWrapper } from '../wrapper/WindowWrapper'

function Prompt({ command }: { command?: string }) {
	return (
		<span className='space-x-2 font-roboto'>
			<span className='text-green-300'>➜</span>
			<span className='mr-2 text-teal-300'>~</span>
			{command}
		</span>
	)
}

function Terminal() {
	const [inputValue, setInputValue] = useState<string>('')
	const [output, setOutput] = useState<string[] | ReactNode[]>([
		<p key={crypto.randomUUID()}>
			type <span className='font-bold text-teal-300'>'help'</span> to view a
			list of available commands.
		</p>,
	])
	const inputRef = useRef<HTMLInputElement>(null)

	const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
		e.preventDefault()

		switch (inputValue.trim()) {
			case 'about':
				setOutput([
					...output,
					<Prompt key={crypto.randomUUID()} command={inputValue} />,
					about,
				])
				break

			case 'skills':
				setOutput([
					...output,
					<Prompt key={crypto.randomUUID()} command={inputValue} />,
					skills,
				])
				break

			case 'kitten':
				setOutput([
					...output,
					<Prompt key={crypto.randomUUID()} command={inputValue} />,
					kitten,
				])
				break

			case 'clear':
				setOutput([])
				break

			case 'help':
				setOutput([
					...output,
					<Prompt key={crypto.randomUUID()} command={inputValue} />,
					help,
				])
				break

			case '':
				setOutput([
					...output,
					<Prompt key={crypto.randomUUID()} command={inputValue} />,
				])
				break

			default:
				setOutput([...output, `command not found: ${inputValue}`])
		}

		setInputValue('')
	}

	return (
		<>
			<WindowHeader title='Terminal' target='terminal' />
			<div id='terminal' className='h-96'>
				<div className='flex max-h-96 w-[500px] flex-col-reverse overflow-y-auto p-3 text-xs'>
					<div className='mb-2 flex'>
						<Prompt />
						<input
							name='terminal'
							ref={inputRef}
							type='text'
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
							onKeyDown={(e) => {
								if (e.key === 'Enter') handleEnter(e)
							}}
							className='terminal-input flex-1'
						/>
					</div>
					<output className='font-roboto'>
						{output.map((item, index) => (
							<pre key={`${index}-${item}`}>{item}</pre>
						))}
					</output>
				</div>
			</div>
		</>
	)
}

export const TerminalWindow = WindowWrapper(Terminal, 'terminal')

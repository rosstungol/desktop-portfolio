import {
	type KeyboardEvent,
	type ReactNode,
	useEffect,
	useRef,
	useState,
} from 'react'

import { about, help, kitten, skills } from '../../data/constants/terminal'
import { useWindowStore } from '../../stores/window'
import { downloadResume } from '../../utils/downloadResume'
import { WindowHeader } from '../wrapper/WindowHeader'
import { WindowWrapper } from '../wrapper/WindowWrapper'

function Prompt({ command }: { command?: string }) {
	return (
		<span className='prompt space-x-2 font-roboto'>
			<span className='arrow'>➜</span>
			<span className='tilde mr-2'>~</span>
			{command}
		</span>
	)
}

function Terminal() {
	const [inputValue, setInputValue] = useState<string>('')
	const [output, setOutput] = useState<string[] | ReactNode[]>([
		<p key={crypto.randomUUID()}>
			type <strong>'help'</strong> to view a list of available commands.
		</p>,
	])
	const terminalIsOpen = useWindowStore(
		(state) => state.windows.terminal.isOpen
	)
	const inputRef = useRef<HTMLInputElement>(null)
	const terminalRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (terminalIsOpen) inputRef.current?.focus()

		const handleClick = () => inputRef.current?.focus()
		const terminal = terminalRef.current

		terminal?.addEventListener('click', handleClick)

		return () => terminal?.removeEventListener('click', handleClick)
	}, [terminalIsOpen])

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

			case 'cv':
				downloadResume()
				setOutput([
					...output,
					<Prompt key={crypto.randomUUID()} command={inputValue} />,
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
				setOutput([
					...output,
					<Prompt key={crypto.randomUUID()} command={inputValue} />,
					`command not found: ${inputValue}`,
				])
		}

		setInputValue('')
	}

	return (
		<div ref={terminalRef}>
			<WindowHeader title='Terminal' target='terminal' />
			<div className='terminal h-[480px]'>
				<div className='flex max-h-[480px] w-[500px] flex-col-reverse overflow-y-auto p-3 text-xs'>
					<div className='mb-2 flex'>
						<Prompt />
						<input
							name='terminal'
							ref={inputRef}
							type='text'
							value={inputValue}
							spellCheck={false}
							className='terminal-input flex-1'
							onChange={(e) => setInputValue(e.target.value)}
							onKeyDown={(e) => {
								if (e.key === 'Enter') handleEnter(e)
							}}
						/>
					</div>
					<output className='font-roboto'>
						{output.map((item, index) => (
							<pre key={`${index}-${item?.toString.length}`}>{item}</pre>
						))}
					</output>
				</div>
			</div>
		</div>
	)
}

export const TerminalWindow = WindowWrapper(Terminal, 'terminal')

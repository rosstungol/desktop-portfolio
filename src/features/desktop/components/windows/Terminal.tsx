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

type OutputItem = {
	id: string
	content: ReactNode
	asPre?: boolean
}

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
	const [output, setOutput] = useState<OutputItem[]>([
		{
			id: crypto.randomUUID(),
			content: (
				<p>
					type <strong>'help'</strong> to view a list of available commands.
				</p>
			),
		},
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
				setOutput((prev) => [
					...prev,
					{
						id: crypto.randomUUID(),
						content: <Prompt command={inputValue} />,
					},
					...about.map((node) => ({
						id: crypto.randomUUID(),
						content: node,
					})),
				])
				break

			case 'skills':
				setOutput((prev) => [
					...prev,
					{
						id: crypto.randomUUID(),
						content: <Prompt command={inputValue} />,
					},
					...skills.map((node) => ({
						id: crypto.randomUUID(),
						content: node,
					})),
				])
				break

			case 'cv':
				downloadResume()
				setOutput((prev) => [
					...prev,
					{
						id: crypto.randomUUID(),
						content: <Prompt command={inputValue} />,
					},
				])
				break

			case 'kitten':
				setOutput((prev) => [
					...prev,
					{
						id: crypto.randomUUID(),
						content: <Prompt command={inputValue} />,
					},
					...kitten.map((node) => ({
						id: crypto.randomUUID(),
						content: node,
						asPre: true,
					})),
				])
				break

			case 'clear':
				setOutput([])
				break

			case 'help':
				setOutput((prev) => [
					...prev,
					{
						id: crypto.randomUUID(),
						content: <Prompt command={inputValue} />,
					},
					...help.map((node) => ({
						id: crypto.randomUUID(),
						content: node,
					})),
				])
				break

			case '':
				setOutput((prev) => [
					...prev,
					{
						id: crypto.randomUUID(),
						content: <Prompt command={inputValue} />,
					},
				])
				break

			default:
				setOutput((prev) => [
					...prev,
					{ id: crypto.randomUUID(), content: <Prompt command={inputValue} /> },
					{
						id: crypto.randomUUID(),
						content: `command not found: ${inputValue}`,
					},
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
						{output.map((item) =>
							item.asPre ? (
								<pre key={item.id}>{item.content}</pre>
							) : (
								<div key={item.id}>{item.content}</div>
							)
						)}
					</output>
				</div>
			</div>
		</div>
	)
}

export const TerminalWindow = WindowWrapper(Terminal, 'terminal')

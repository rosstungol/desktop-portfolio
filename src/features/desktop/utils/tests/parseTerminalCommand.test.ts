import { describe, expect, it } from 'vite-plus/test'

import { parseTerminalCommand } from '@/features/desktop/utils/parseTerminalCommand'

describe('parseTerminalCommand', () => {
	it('recognizes every known command', () => {
		const commands = [
			'about',
			'skills',
			'cv',
			'help',
			'kitten',
			'clear',
		] as const

		for (const command of commands) {
			expect(parseTerminalCommand(command)).toBe(command)
		}
	})

	it('ignores surrounding whitespace', () => {
		expect(parseTerminalCommand('  help  ')).toBe('help')
	})

	it('treats blank input as empty', () => {
		expect(parseTerminalCommand('')).toBe('empty')
		expect(parseTerminalCommand('   ')).toBe('empty')
	})

	it('reports unrecognized input as unknown', () => {
		expect(parseTerminalCommand('sudo rm -rf')).toBe('unknown')
	})
})

export type TerminalCommand =
	| 'about'
	| 'skills'
	| 'cv'
	| 'help'
	| 'kitten'
	| 'clear'
	| 'empty'
	| 'unknown'

/**
 * Classifies a raw terminal input into a known command. Input is trimmed, so
 * surrounding whitespace is ignored; an empty (or whitespace-only) entry is
 * `empty` and anything unrecognized is `unknown`.
 */
export const parseTerminalCommand = (input: string): TerminalCommand => {
	switch (input.trim()) {
		case 'about':
			return 'about'
		case 'skills':
			return 'skills'
		case 'cv':
			return 'cv'
		case 'help':
			return 'help'
		case 'kitten':
			return 'kitten'
		case 'clear':
			return 'clear'
		case '':
			return 'empty'
		default:
			return 'unknown'
	}
}

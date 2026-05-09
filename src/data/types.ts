export type SceneState = 'loading' | 'intro' | 'start' | 'focus' | 'idle'

export type Project = {
	image: string
	title: string
	description: string
	github?: string
	demo?: string
	tags?: string[]
}

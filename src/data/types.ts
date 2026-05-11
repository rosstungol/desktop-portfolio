export type SceneState = 'loading' | 'intro' | 'start' | 'focus' | 'idle'

export type Project = {
	image: string
	title: string
	description: string
	url: string
	github?: string
	tags?: string[]
}

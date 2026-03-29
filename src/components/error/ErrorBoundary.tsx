import React, { type ReactNode } from 'react'

type ErrorBoundaryProps = {
	fallback: ReactNode
	children: ReactNode
}

type ErrorBoundaryState = {
	hasError: boolean
}

export class ErrorBoundary extends React.Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError() {
		return { hasError: true }
	}

	componentDidCatch(error: Error, info: React.ErrorInfo) {
		console.error(error, info)
	}

	render() {
		if (this.state.hasError) return this.props.fallback
		return this.props.children
	}
}

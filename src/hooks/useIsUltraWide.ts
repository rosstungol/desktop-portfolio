import { useEffect, useState } from 'react'

export const useIsUltrawide = (threshold: number = 2.0) => {
	const [isUltrawide, setIsUltrawide] = useState<boolean>(() =>
		typeof window !== 'undefined'
			? window.innerWidth / window.innerHeight > threshold
			: false
	)

	useEffect(() => {
		const checkWidth = () => {
			setIsUltrawide(window.innerWidth / window.innerHeight > threshold)
		}

		checkWidth()

		window.addEventListener('resize', checkWidth)
		return () => window.removeEventListener('resize', checkWidth)
	}, [threshold])

	return isUltrawide
}

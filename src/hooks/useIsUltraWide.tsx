import { useEffect, useState } from 'react'

export const useIsUltrawide = (threshold: number = 2.0) => {
	const ratio = window.innerWidth / window.innerHeight

	const [isUltrawide, setIsUltrawide] = useState<boolean>(
		typeof window !== 'undefined' ? ratio > threshold : false
	)

	useEffect(() => {
		const checkWidth = () => {
			setIsUltrawide(ratio > threshold)
		}

		checkWidth()

		window.addEventListener('resize', checkWidth)
		return () => window.removeEventListener('resize', checkWidth)
	}, [threshold, ratio])

	return isUltrawide
}

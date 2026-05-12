import { useEffect, useState } from 'react'

export const useIsMobile = (breakpoint: number = 1024): boolean => {
	const [isMobile, setIsMobile] = useState<boolean>(() =>
		typeof window !== 'undefined' ? window.innerWidth < breakpoint : false
	)

	useEffect(() => {
		const checkIsMobile = () => {
			setIsMobile(window.innerWidth < breakpoint)
		}

		checkIsMobile()

		window.addEventListener('resize', checkIsMobile)
		return () => window.removeEventListener('resize', checkIsMobile)
	}, [breakpoint])

	return isMobile
}

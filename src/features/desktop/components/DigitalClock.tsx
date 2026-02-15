import dayjs from 'dayjs'
import { useEffect, useRef } from 'react'

export default function DigitalClock() {
	const timeRef = useRef<HTMLTimeElement>(null)

	useEffect(() => {
		let rafId: number
		let lastSecond = -1

		const update = () => {
			const now = Date.now()
			const currentSecond = Math.floor(now / 1000)

			if (currentSecond !== lastSecond) {
				lastSecond = currentSecond

				if (timeRef.current) {
					timeRef.current.textContent = dayjs(now).format('ddd MMM D h:mm A')
				}
			}

			rafId = requestAnimationFrame(update)
		}

		update()

		return () => cancelAnimationFrame(rafId)
	}, [])

	return <time ref={timeRef} />
}

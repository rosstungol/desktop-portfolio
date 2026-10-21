import { useEffect, useRef } from 'react'

// Same shape as the old dayjs format: "Sat Mar 9 2:05 PM".
const timeFormat = new Intl.DateTimeFormat('en-US', {
	weekday: 'short',
	month: 'short',
	day: 'numeric',
	hour: 'numeric',
	minute: '2-digit',
})

const formatTime = (date: Date) => {
	const parts = Object.fromEntries(
		timeFormat.formatToParts(date).map((part) => [part.type, part.value])
	)
	return `${parts.weekday} ${parts.month} ${parts.day} ${parts.hour}:${parts.minute} ${parts.dayPeriod}`
}

export function DigitalClock() {
	const timeRef = useRef<HTMLTimeElement>(null)

	useEffect(() => {
		const update = () => {
			if (timeRef.current) timeRef.current.textContent = formatTime(new Date())
		}

		update()

		const id = setInterval(update, 1000)
		return () => clearInterval(id)
	}, [])

	return <time ref={timeRef} />
}

import { useEffect, useState } from 'react'

export const useDebounce = (value: any, ms: number) => {
	const [debouncedValue, setDebouncedValue] = useState(value)

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value)
		}, ms)

		return () => {
			clearInterval(handler)
		}
	}, [value, ms])

	return debouncedValue
}

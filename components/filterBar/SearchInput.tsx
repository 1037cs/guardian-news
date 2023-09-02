'use client'

import styles from './input.module.scss'
import { useEffect, useState } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import { setPageNumber, setSearchString } from '@/redux/features/newsSlice'

const SearchInput = () => {
	const [text, setText] = useState('')
	const debouncedInput = useDebounce(text, 500)
	const dispatch = useDispatch<AppDispatch>()

	function handleChange(string: string) {
		setText(string)
	}

	useEffect(() => {
		dispatch(setPageNumber(2))
		dispatch(setSearchString(debouncedInput.replaceAll(' ', '%20')))
	}, [debouncedInput])

	return (
		<input
			className={styles.input}
			placeholder='What you looking for?'
			value={text}
			onChange={e => handleChange(e.target.value)}
		/>
	)
}

export default SearchInput

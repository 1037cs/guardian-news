'use client'

import Select from 'react-select'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import { setPageNumber, setSort } from '@/redux/features/newsSlice'
import styles from './input.module.scss'

export type Option = {
	value: SortOptions
	label: string
}

export enum SortOptions {
	NEWEST = 'newest',
	RELEVANCE = 'relevance'
}

export const options: Option[] = [
	{ value: SortOptions.NEWEST, label: 'By newest' },
	{ value: SortOptions.RELEVANCE, label: 'By relevance' }
]

const SortSelect = () => {
	const dispatch = useDispatch<AppDispatch>()

	const onChangeSortHandler = (value: Option | null) => {
		if (value) {
			dispatch(setPageNumber(2))
			dispatch(setSort(value.value))
		}
	}

	return (
		<div className={styles.selectWrapper}>
			<span className={styles.selectTitle}>Sort: </span>
			<Select
				isMulti={false}
				options={options}
				defaultValue={options[0]}
				onChange={value => onChangeSortHandler(value)}
				isSearchable={false}
				className={styles.select}
			/>
		</div>
	)
}

export default SortSelect

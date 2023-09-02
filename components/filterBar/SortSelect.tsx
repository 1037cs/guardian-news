'use client'

import Select from 'react-select'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import { setSort } from '@/redux/features/newsSlice'

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
		if (value) dispatch(setSort(value.value))
	}

	return (
		<Select
			isMulti={false}
			options={options}
			defaultValue={options[0]}
			onChange={value => onChangeSortHandler(value)}
			isSearchable={false}
		/>
	)
}

export default SortSelect

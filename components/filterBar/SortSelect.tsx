'use client'

import React, { useState } from 'react'
import Select from 'react-select'
import { useDispatch } from 'react-redux'
import { fetchNews } from '@/services/fetch'
import { AppDispatch } from '@/redux/store'

type Option = {
	value: SortOptions
	label: string
}

export enum SortOptions {
	NEWEST = 'newest',
	RELEVANCE = 'relevance'
}

const options: Option[] = [
	{ value: SortOptions.RELEVANCE, label: 'By relevance' },
	{ value: SortOptions.NEWEST, label: 'By newest' }
]

const SortSelect = () => {
	const [selectedSort, setSelectedSort] = useState<Option | null>(options[1])
	const dispatch = useDispatch<AppDispatch>()

	const onChangeHandler = (value: Option | null) => {
		dispatch(fetchNews({ sort: value?.value }))
	}

	return (
		<Select
			isMulti={false}
			options={options}
			defaultValue={selectedSort}
			onChange={value => onChangeHandler(value)}
			isSearchable={false}
		/>
	)
}

export default SortSelect

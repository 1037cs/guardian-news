'use client'

import React, { useState } from 'react'
import SortSelect, {
	Option as SortOption,
	options as sortOptions
} from '@/components/filterBar/SortSelect'
import CountSelect, {
	Option as CountOption,
	options as countOptions
} from '@/components/filterBar/CountSelect'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import { fetchNews } from '@/services/fetch'

const SelectBar = () => {
	const [selectedSort, setSelectedSort] = useState<SortOption | null>(
		sortOptions[1]
	)
	const [selectedCount, setSelectedCount] = useState<CountOption | null>(
		countOptions[0]
	)

	const dispatch = useDispatch<AppDispatch>()

	const onChangeSortHandler = (value: SortOption | null) => {
		setSelectedSort(value)
		dispatch(fetchNews({ sort: value?.value, count: selectedCount?.value }))
	}

	const onChangeCountHandler = (value: CountOption | null) => {
		setSelectedCount(value)
		dispatch(fetchNews({ sort: selectedSort?.value, count: value?.value }))
	}

	return (
		<>
			<SortSelect selectedSort={selectedSort} onChange={onChangeSortHandler} />
			<CountSelect
				selectedCount={selectedCount}
				onChange={onChangeCountHandler}
			/>
		</>
	)
}

export default SelectBar

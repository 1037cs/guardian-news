'use client'

import React, { useState } from 'react'
import Select from 'react-select'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import { fetchNews } from '@/services/fetch'

export type Option = {
	value: CountOptions
	label: string
}

export enum CountOptions {
	TWENTY = '20',
	THIRTY = '30',
	FIFTY = '50'
}

const options = [
	{ value: CountOptions.TWENTY, label: '20' },
	{ value: CountOptions.THIRTY, label: '30' },
	{ value: CountOptions.FIFTY, label: '50' }
]

const CountSelect = () => {
	const [selectedSort, setSelectedSort] = useState<Option | null>(options[0])
	const dispatch = useDispatch<AppDispatch>()

	const onChangeHandler = (value: Option | null) => {
		console.log(value)
		dispatch(fetchNews({ count: value?.value }))
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

export default CountSelect

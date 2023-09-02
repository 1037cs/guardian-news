'use client'

import React from 'react'
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import { setPageNumber, setPageSize } from '@/redux/features/newsSlice'
import styles from './input.module.scss'
import { updateNews } from '@/utils/fetch'

export type Option = {
	value: CountOptions
	label: string
}

export enum CountOptions {
	TWENTY = '20',
	THIRTY = '30',
	FIFTY = '50'
}

export const options = [
	{ value: CountOptions.TWENTY, label: '20' },
	{ value: CountOptions.THIRTY, label: '30' },
	{ value: CountOptions.FIFTY, label: '50' }
]

const CountSelect = () => {
	const { sort, pageSize, query } = useSelector(
		(state: RootState) => state.news
	)
	const dispatch = useDispatch<AppDispatch>()

	const onChangeCountHandler = (value: Option | null) => {
		if (value) {
			dispatch(setPageSize(value.value))
			dispatch(setPageNumber(2))
			dispatch(updateNews({ sort, pageSize: value.value, query }))
		}
	}

	return (
		<div className={styles.selectWrapper}>
			<span className={styles.selectTitle}>Page size: </span>
			<Select
				isMulti={false}
				options={options}
				defaultValue={options[0]}
				onChange={value => onChangeCountHandler(value)}
				isSearchable={false}
				className={styles.selectPage}
			/>
		</div>
	)
}

export default CountSelect

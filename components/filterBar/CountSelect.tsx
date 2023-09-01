'use client'

import React from 'react'
import Select from 'react-select'

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

const CountSelect = ({
	selectedCount,
	onChange
}: {
	selectedCount: Option | null
	onChange: (_: Option | null) => void
}) => {
	return (
		<Select
			isMulti={false}
			options={options}
			defaultValue={selectedCount}
			onChange={value => onChange(value)}
			isSearchable={false}
		/>
	)
}

export default CountSelect

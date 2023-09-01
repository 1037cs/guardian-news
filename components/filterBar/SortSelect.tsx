'use client'

import Select from 'react-select'

export type Option = {
	value: SortOptions
	label: string
}

export enum SortOptions {
	NEWEST = 'newest',
	RELEVANCE = 'relevance'
}

export const options: Option[] = [
	{ value: SortOptions.RELEVANCE, label: 'By relevance' },
	{ value: SortOptions.NEWEST, label: 'By newest' }
]

const SortSelect = ({
	selectedSort,
	onChange
}: {
	selectedSort: Option | null
	onChange: (_: Option | null) => void
}) => {
	return (
		<Select
			isMulti={false}
			options={options}
			defaultValue={selectedSort}
			onChange={value => onChange(value)}
			isSearchable={false}
		/>
	)
}

export default SortSelect

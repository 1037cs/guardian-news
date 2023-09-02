'use client'
import { createSlice } from '@reduxjs/toolkit'
import { Result } from '@/types/getNewsTypes'
import { fetchNews } from '@/services/fetch'
import { SortOptions } from '@/components/filterBar/SortSelect'
import { CountOptions } from '@/components/filterBar/CountSelect'

type State = {
	news: Result[]
	status: 'resolved' | 'error' | 'loading'
	error: string | null
	sort: SortOptions
	pageSize: CountOptions
}

const newsSlice = createSlice({
	name: 'news',
	initialState: {
		news: [],
		status: 'loading',
		error: null,
		sort: SortOptions.NEWEST,
		pageSize: CountOptions.TWENTY
	} as State,
	reducers: {
		setSort: (state: State, { payload }: { payload: SortOptions }) => {
			state.sort = payload
		},
		setPageSize: (state: State, { payload }: { payload: CountOptions }) => {
			state.pageSize = payload
		}
	},
	extraReducers: builder => {
		builder.addCase(fetchNews.pending, (state: State) => {
			state.status = 'loading'
			state.error = null
		}),
			builder.addCase(
				fetchNews.fulfilled,
				(state: State, { payload }: { payload: Result[] }) => {
					state.news = payload
					state.status = 'resolved'
				}
			),
			builder.addCase(fetchNews.rejected, (state: State, { payload }) => {
				state.status = 'error'
			})
	}
})

export const { setSort, setPageSize } = newsSlice.actions
export default newsSlice.reducer

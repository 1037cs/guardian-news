'use client'
import { createSlice } from '@reduxjs/toolkit'
import { Result } from '@/types/getNewsTypes'
import { fetchNews, updateNews } from '@/utils/fetch'
import { SortOptions } from '@/components/filterBar/SortSelect'
import { CountOptions } from '@/components/filterBar/CountSelect'

type State = {
	news: Result[]
	status: 'resolved' | 'error' | 'loading'
	error: string | null
	sort: SortOptions
	pageSize: CountOptions
	query: string
	pageNumber: number
}

const newsSlice = createSlice({
	name: 'news',
	initialState: {
		news: [],
		status: 'loading',
		error: null,
		sort: SortOptions.NEWEST,
		pageSize: CountOptions.TWENTY,
		query: '',
		pageNumber: 1
	} as State,
	reducers: {
		setSort: (state: State, { payload }: { payload: SortOptions }) => {
			state.sort = payload
		},
		setPageSize: (state: State, { payload }: { payload: CountOptions }) => {
			state.pageSize = payload
		},
		setSearchString: (state: State, { payload }: { payload: string }) => {
			state.query = payload
		},
		setPageNumber: (state: State, { payload }: { payload: number }) => {
			state.pageNumber = payload
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
			}),
			builder.addCase(
				updateNews.fulfilled,
				(state: State, { payload }: { payload: Result[] }) => {
					state.news = payload
				}
			),
			builder.addCase(updateNews.rejected, (state: State, { payload }) => {
				state.status = 'error'
			})
	}
})

export const { setSort, setPageSize, setSearchString, setPageNumber } =
	newsSlice.actions
export default newsSlice.reducer

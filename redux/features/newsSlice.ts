'use client'
import { createSlice } from '@reduxjs/toolkit'
import { Result } from '@/types/getNewsTypes'
import { fetchNews } from '@/services/fetch'
import moment from 'moment'

type State = {
	news: Result[]
	status: 'resolved' | 'error' | 'loading'
	error: string | null
}

const newsSlice = createSlice({
	name: 'news',
	initialState: {
		news: [],
		status: 'loading',
		error: null
	} as State,
	reducers: {
		sortNews: (state: State, { payload }: { payload: string }) => {
			if (payload === 'relevance') {
				state.news = state.news.sort((a, b) => {
					return a.fields.score > b.fields.score ? 1 : -1
				})
			} else if (payload === 'date') {
				state.news = state.news.sort((a, b) => {
					return moment(a.webPublicationDate).isBefore(b.webPublicationDate)
						? 1
						: -1
				})
			}
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

export const { sortNews } = newsSlice.actions
export default newsSlice.reducer

'use client'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Result, Root } from '@/types/getNewsTypes'
import { fetchNews } from '@/services/fetch'

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
	reducers: {},
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

// export const {  } = newsSlice.actions
export default newsSlice.reducer

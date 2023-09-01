'use client'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

type News = { webTitle: string; webPublicationDate: string }[]

type State = {
	news: News
	status: 'resolved' | 'error' | 'loading'
}

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
	const data = await fetch(
		'https://content.guardianapis.com/search?api-key=ac2cb542-cf61-46e9-be89-7b4dc6ac0db3'
	)

	const response = await data.json()
	return response.response.results
})

const newsSlice = createSlice({
	name: 'news',
	initialState: {
		news: [],
		status: 'resolved'
	} as State,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchNews.pending, (state: State) => {
			state.status = 'loading'
		}),
			builder.addCase(
				fetchNews.fulfilled,
				(state: State, { payload }: { payload: News }) => {
					state.news = payload
					state.status = 'resolved'
				}
			),
			builder.addCase(fetchNews.rejected, (state: State) => {
				state.status = 'error'
			})
	}
})

// export const {  } = newsSlice.actions
export default newsSlice.reducer

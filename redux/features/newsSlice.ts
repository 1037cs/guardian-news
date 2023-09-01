'use client'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Result, Root } from '@/redux/features/responseTypes'

type News = { webTitle: string; webPublicationDate: string }[]

type State = {
	news: Result[]
	status: 'resolved' | 'error' | 'loading'
	error: string | null
}

export const fetchNews = createAsyncThunk(
	'news/fetchNews',
	async (_, { rejectWithValue }) => {
		try {
			const data = await fetch(
				'https://content.guardianapis.com/search?show-fields=thumbnail&api-key=ac2cb542-cf61-46e9-be89-7b4dc6ac0db3'
			)

			if (!data.ok) {
				throw new Error(`${data.status} Server error`)
			}

			const response: Root = await data.json()
			return response.response.results
		} catch (e) {
			return rejectWithValue(e)
		}
	}
)

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

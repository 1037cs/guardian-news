import { Root } from '@/types/getPostTypes'
import { Root as newsRoot } from '@/types/getNewsTypes'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { SortOptions } from '@/components/filterBar/SortSelect'
import { CountOptions } from '@/components/filterBar/CountSelect'

export default async function getPost(id: string) {
	const response = await fetch(
		`https://content.guardianapis.com/${id}?show-fields=body,trailtext,thumbnail,main,standfirst,byline,shortUrl&api-key=ac2cb542-cf61-46e9-be89-7b4dc6ac0db3`
	)

	const data: Root = await response.json()
	return data
}

type RequestType = {
	sort: SortOptions
	pageSize: CountOptions
	query: string
}

export const fetchNews = createAsyncThunk(
	'news/fetchNews',
	async (payload: RequestType, { rejectWithValue }) => {
		try {
			const { sort, pageSize, query } = payload

			const data = await fetch(
				`https://content.guardianapis.com/search?q=${query}&query-fields=thumbnail,headline&order-by=${sort}&page-size=${pageSize}&show-fields=thumbnail&api-key=ac2cb542-cf61-46e9-be89-7b4dc6ac0db3`
			)

			const response: newsRoot = await data.json()
			return response.response.results
		} catch (e) {
			return rejectWithValue(e)
		}
	}
)

export const updateNews = createAsyncThunk(
	'news/updateNews',
	async (payload: RequestType, { rejectWithValue }) => {
		try {
			const { sort, pageSize, query } = payload

			const data = await fetch(
				`https://content.guardianapis.com/search?q=${query}&query-fields=thumbnail,headline&order-by=${sort}&page-size=${pageSize}&show-fields=thumbnail&api-key=ac2cb542-cf61-46e9-be89-7b4dc6ac0db3`
			)

			const response: newsRoot = await data.json()
			return response.response.results
		} catch (e) {
			return rejectWithValue(e)
		}
	}
)
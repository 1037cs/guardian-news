import { Root } from '@/types/getPostTypes'
import { Root as newsRoot } from '@/types/getNewsTypes'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { SortOptions } from '@/components/filterBar/SortSelect'
import { CountOptions } from '@/components/filterBar/CountSelect'

type RequestType = {
	sort: SortOptions
	pageSize: CountOptions
	query: string
	page?: number
}

//fetch post
export default async function getPost(id: string) {
	const response = await fetch(
		`https://content.guardianapis.com/${id}?show-fields=body,trailtext,thumbnail,main,standfirst,byline,shortUrl&api-key=9e677397-3b7a-447b-b451-27eca5d1bb18`
	)

	const data: Root = await response.json()
	return data
}

//fetch news
export const fetchNews = createAsyncThunk(
	'news/fetchNews',
	async (payload: RequestType, { rejectWithValue }) => {
		try {
			const { sort, pageSize, query } = payload

			const data = await fetch(
				`https://content.guardianapis.com/search?page=1&q=${query}&query-fields=thumbnail,headline&order-by=${sort}&page-size=${pageSize}&show-fields=thumbnail&api-key=9e677397-3b7a-447b-b451-27eca5d1bb18`
			)

			const response: newsRoot = await data.json()
			return response.response.results
		} catch (e) {
			return rejectWithValue(e)
		}
	}
)

//update news with page size
export const updateNews = createAsyncThunk(
	'news/updateNews',
	async (payload: RequestType, { rejectWithValue }) => {
		try {
			const { sort, pageSize, query } = payload

			const data = await fetch(
				`https://content.guardianapis.com/search?q=${query}&query-fields=thumbnail,headline&order-by=${sort}&page-size=${pageSize}&show-fields=thumbnail&api-key=9e677397-3b7a-447b-b451-27eca5d1bb18`
			)

			const response: newsRoot = await data.json()
			return response.response.results
		} catch (e) {
			return rejectWithValue(e)
		}
	}
)

export const paginationNews = createAsyncThunk(
	'news/paginationNews',
	async (payload: RequestType, { rejectWithValue }) => {
		try {
			const { sort, pageSize, query, page } = payload

			const data = await fetch(
				`https://content.guardianapis.com/search?q=${query}&page=${page}&query-fields=thumbnail,headline&order-by=${sort}&page-size=${pageSize}&show-fields=thumbnail&api-key=9e677397-3b7a-447b-b451-27eca5d1bb18`
			)

			const response: newsRoot = await data.json()
			return response.response.results
		} catch (e) {
			return rejectWithValue(e)
		}
	}
)

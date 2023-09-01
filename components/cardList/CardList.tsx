'use client'

import styles from './cardList.module.scss'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import Card from '@/components/card/Card'
import { fetchNews } from '@/services/fetch'
import { SortOptions } from '@/components/filterBar/SortSelect'

const CardList = () => {
	const { news, error, status } = useSelector((state: RootState) => state.news)
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		dispatch(fetchNews({}))
	}, [dispatch])

	return (
		<section className={styles.cardList}>
			{status === 'loading' ? (
				<h1>Loading...</h1>
			) : error ? (
				<h1>{error}</h1>
			) : (
				news.map(item => <Card key={item.webTitle} item={item} />)
			)}
		</section>
	)
}

export default CardList

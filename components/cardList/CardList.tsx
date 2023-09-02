'use client'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import { fetchNews } from '@/utils/fetch'
import { CircleLoader } from 'react-spinners'
import styles from './cardList.module.scss'
import Card from '@/components/card/Card'

const CardList = () => {
	const { news, error, status, sort, pageSize, query, pageNumber } =
		useSelector((state: RootState) => state.news)
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		dispatch(fetchNews({ sort, pageSize, query }))
	}, [dispatch, sort, query])

	return (
		<div className={styles.container}>
			{status === 'loading' ? (
				<CircleLoader color='rgba(148,36,451)' />
			) : news.length === 0 ? (
				<h2 style={{ display: 'inline' }}>News not found. </h2>
			) : (
				<section className={styles.cardList}>
					{news.map(item => (
						<Card key={item.webTitle} item={item} />
					))}
				</section>
			)}
		</div>
	)
}

export default CardList

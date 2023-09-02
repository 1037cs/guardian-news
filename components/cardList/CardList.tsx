'use client'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import { fetchNews, paginationNews } from '@/utils/fetch'
import { CircleLoader } from 'react-spinners'
import styles from './cardList.module.scss'
import Card from '@/components/card/Card'
import { setPageNumber } from '@/redux/features/newsSlice'

const CardList = () => {
	const { news, error, status, sort, pageSize, query, pageNumber } =
		useSelector((state: RootState) => state.news)
	const [pagination, setPagination] = useState<boolean>(false)
	const dispatch = useDispatch<AppDispatch>()

	const scrollHandler = (e: any) => {
		if (
			e.target.documentElement.scrollHeight -
				(e.target.documentElement.scrollTop + window.innerHeight) <
			500
		) {
			setPagination(true)
		}
	}

	useEffect(() => {
		dispatch(fetchNews({ sort, pageSize, query }))
	}, [dispatch, sort, query])

	useEffect(() => {
		document.addEventListener('scroll', scrollHandler)
		return () => document.removeEventListener('scroll', scrollHandler)
	}, [])

	useEffect(() => {
		if (pagination) {
			console.log('ПОДГРУЗИЛИСЬ НОВОСТИ СО СТРАНИЦЫ ' + pageNumber)
			dispatch(paginationNews({ sort, pageSize, query, page: pageNumber }))
				.then(() => {
					// setCurrentPage(prevState => prevState + 1)
					dispatch(setPageNumber(pageNumber + 1))
				})
				.finally(() => {
					setPagination(false)
				})
		}
	}, [pagination])

	return (
		<div className={styles.container}>
			{status === 'loading' ? (
				<CircleLoader color='rgba(148,36,451)' />
			) : news.length === 0 ? (
				<h2 style={{ display: 'inline' }}>News not found. </h2>
			) : (
				<section className={styles.cardList}>
					{news.map((item, i) => (
						<Card key={i} item={item} />
					))}
				</section>
			)}
		</div>
	)
}

export default CardList

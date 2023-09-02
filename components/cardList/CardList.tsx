'use client'

import styles from './cardList.module.scss'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import Card from '@/components/card/Card'
import { fetchNews, updateNews } from '@/utils/fetch'
import { CircleLoader } from 'react-spinners'
import { setPageNumber, setPageSize } from '@/redux/features/newsSlice'

const CardList = () => {
	const { news, error, status, sort, pageSize, query, pageNumber } =
		useSelector((state: RootState) => state.news)
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		dispatch(fetchNews({ sort, pageSize, query }))
	}, [dispatch, sort, query])

	// useEffect(() => {
	// 	dispatch(updateNews({ sort, pageSize, query, pageNumber, type: 'update' }))
	// }, [pageSize])

	// const scrollHandler = (e: Event) => {
	// 	const target = e.target as HTMLElement
	// 	if (
	// 		target.documentElement.scrollHeight -
	// 			(target.documentElement.scrollTop + window.innerHeight) <
	// 		100
	// 	) {
	// 	}
	// }

	// useEffect(() => {
	// 	document.addEventListener('scroll', scrollHandler)
	//
	// 	return () => document.removeEventListener('scroll', scrollHandler)
	// }, [])

	return status === 'loading' ? (
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			<CircleLoader color='rgba(148,36,451)' />
		</div>
	) : (
		<section className={styles.cardList}>
			{news.map(item => (
				<Card key={item.webTitle} item={item} />
			))}
		</section>
	)
}

export default CardList

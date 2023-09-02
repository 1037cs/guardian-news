'use client'

import styles from './cardList.module.scss'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import Card from '@/components/card/Card'
import { fetchNews } from '@/utils/fetch'
import { CircleLoader } from 'react-spinners'

const CardList = () => {
	const { news, error, status, sort, pageSize, searchString } = useSelector(
		(state: RootState) => state.news
	)
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		dispatch(fetchNews({ sort: sort, count: pageSize, query: searchString }))
	}, [dispatch, sort, pageSize, searchString])

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

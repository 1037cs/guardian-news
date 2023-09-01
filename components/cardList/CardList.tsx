'use client'

import styles from './cardList.module.scss'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import { fetchNews } from '@/redux/features/newsSlice'
import Card from '@/components/card/Card'

const CardList = () => {
	const news = useSelector((state: RootState) => state.news.news)
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		dispatch(fetchNews())
	}, [dispatch])

	return (
		<section className={styles.cardList}>
			{news.map(item => (
				<Card
					key={item.webTitle}
					title={item.webTitle}
					date={item.webPublicationDate}
				/>
			))}
		</section>
	)
}

export default CardList

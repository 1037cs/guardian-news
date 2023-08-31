'use client'

import styles from './page.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import Card from '@/components/card/Card'
import { Dispatch, useEffect } from 'react'
import { fetchNews } from '@/redux/features/newsSlice'

const Home = () => {
	const news = useSelector((state: RootState) => state.news.news)
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		console.log('use effect')
		dispatch(fetchNews())
	}, [dispatch])

	return (
		<main className={styles.wrapper}>
			<h1 className={styles.title}>Guardian News</h1>
			<section className={styles.cardList}>
				{news.map(item => (
					<Card
						key={item.webTitle}
						title={item.webTitle}
						date={item.webPublicationDate}
					/>
				))}
			</section>
		</main>
	)
}

export default Home

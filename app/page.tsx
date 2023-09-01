import styles from './page.module.scss'
import CardList from '@/components/cardList/CardList'

const Home = () => {
	return (
		<main className={styles.wrapper}>
			<h1 className={styles.title}>Guardian News</h1>
			<CardList />
		</main>
	)
}

export default Home

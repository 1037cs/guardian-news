import styles from './page.module.scss'
import CardList from '@/components/cardList/CardList'
import SelectBar from '@/components/filterBar/SelectBar'

const Home = () => {
	return (
		<main className={styles.wrapper}>
			<h1 className={styles.title}>Guardian News</h1>
			<SelectBar />
			<CardList />
		</main>
	)
}

export default Home

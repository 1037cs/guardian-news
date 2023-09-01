import styles from './page.module.scss'
import CardList from '@/components/cardList/CardList'
import SortSelect from '@/components/filterBar/SortSelect'
import CountSelect from '@/components/filterBar/CountSelect'

const Home = () => {
	return (
		<main className={styles.wrapper}>
			<h1 className={styles.title}>Guardian News</h1>
			<SortSelect />
			<CountSelect />
			<CardList />
		</main>
	)
}

export default Home

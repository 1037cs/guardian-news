import styles from './page.module.scss'
import Card from '@/components/card/Card'

const array = [
	{
		title: 'Lorem ipsum dolor sit amet, consectetur',
		date: '23 July 2023, 11:07:40AM'
	},
	{
		title: 'Napoli won Seria A',
		date: '10 July 2010, 09:07:40AM'
	},
	{
		title: 'Argentina won World Champion',
		date: '23 July 2023, 11:07:40AM'
	},
	{
		title: 'Lorem ipsum dolor sit amet, consectetur',
		date: '23 July 2023, 12:03:50AM'
	},
	{
		title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		date: '23 July 2023, 11:07:40AM'
	}
]

const getNews = async () => {
	const data = await fetch(
		'https://content.guardianapis.com/search?api-key=ac2cb542-cf61-46e9-be89-7b4dc6ac0db3'
	)

	return data.json()
}

export default async function Home() {
	const { response } = await getNews()
	const news = response.results

	return (
		<main className={styles.wrapper}>
			<h1 className={styles.title}>Guardian News</h1>
			<section className={styles.cardList}>
				{news.map(item => (
					<Card
						key={item.id}
						date={item.webPublicationDate}
						title={item.webTitle}
					/>
				))}
			</section>
		</main>
	)
}

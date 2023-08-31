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

export default function Home() {
	return (
		<main className={styles.wrapper}>
			<h1 className={styles.title}>Guardian News</h1>
			<section className={styles.cardList}>
				{array.map(item => (
					<Card key={item.title} date={item.date} title={item.title} />
				))}
			</section>
		</main>
	)
}

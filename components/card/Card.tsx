import React from 'react'
import styles from './Card.module.scss'

type CardType = {
	title: string
	date: string
}

const Card = ({ title, date }: CardType) => {
	return (
		<div className={styles.card}>
			<div className={styles.date}>{date}</div>
			<div className={styles.title}>{title}</div>
		</div>
	)
}

export default Card

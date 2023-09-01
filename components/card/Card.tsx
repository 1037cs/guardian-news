'use client'

import React from 'react'
import styles from './Card.module.scss'
import Image from 'next/image'
import { Result } from '@/redux/features/responseTypes'
import moment from 'moment'

const Card = ({ item }: { item: Result }) => {
	return (
		<div className={styles.card}>
			<Image
				width={0}
				height={0}
				src={item.fields.thumbnail}
				alt={item.webTitle}
				sizes='100vw'
				className={styles.image}
			/>
			<div className={styles.date}>
				{moment(item.webPublicationDate).format('D MMM YYYY, h:mm:ss A')}
			</div>
			<div className={styles.title}>{item.webTitle}</div>
		</div>
	)
}

export default Card

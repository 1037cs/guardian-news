'use client'

import React from 'react'
import styles from './Card.module.scss'
import Image from 'next/image'
import { Result } from '@/types/getNewsTypes'
import moment from 'moment'
import Link from 'next/link'

const Card = ({ item }: { item: Result }) => {
	return (
		<Link
			href={`./item/${item.id}`}
			style={{
				textDecoration: 'none',
				color: '#383838'
			}}
		>
			<div className={styles.card}>
				{item.fields?.thumbnail && (
					<Image
						width={0}
						height={0}
						src={item.fields.thumbnail}
						alt={item.webTitle}
						sizes='100vw'
						className={styles.image}
					/>
				)}
				<div className={styles.date}>
					{moment(item.webPublicationDate).format('D MMM YYYY, h:mm A')}
				</div>
				<p className={styles.title}>{item.webTitle}</p>
			</div>
		</Link>
	)
}

export default Card

import getPost from '@/services/fetch'
import styles from '@/app/item/[...id]/item.module.scss'
import moment from 'moment'
import Image from 'next/image'

type Props = {
	params: {
		id: []
	}
}

export default async function Post({ params: { id } }: Props) {
	const { response } = await getPost(id.join('/'))
	const post = response.content

	return (
		<main className={styles.wrapper}>
			<h1 className={styles.title}>{post.webTitle}</h1>
			<div className={styles.date}>
				{moment(post.webPublicationDate).format('D MMM YYYY, h:mm:ss A')}
			</div>
			<div className={styles.by}>
				by <i className={styles.author}>{post.fields.byline}</i>
			</div>
			<div>
				<Image
					src={post.fields.thumbnail}
					alt={post.webTitle}
					width={0}
					height={0}
					sizes='100vw'
					className={styles.image}
				/>
				<article
					className={styles.bodyWrapper}
					dangerouslySetInnerHTML={{ __html: post.fields.body }}
				/>
			</div>
		</main>
	)
}

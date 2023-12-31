import getPost from '@/utils/fetch'
import styles from '@/app/item/[...id]/item.module.scss'
import moment from 'moment'
import PostBody from '@/components/postBody/PostBody'
import PostMain from '@/components/postMain/PostMain'

type Props = {
	params: {
		id: []
	}
}

export default async function Post({ params: { id } }: Props) {
	console.log(id)
	const { response } = await getPost(id.join('/'))
	console.log(response);
	
	const post = response.content

	return (
		<main className={styles.wrapper}>
			<h1 className={styles.title}>
				<a href={post.webUrl} target='_blank' rel='noreferrer'>
					{post.webTitle}
				</a>
			</h1>
			<div className={styles.date}>
				{moment(post.webPublicationDate).format('D MMM YYYY, h:mm:ss A')}
			</div>
			<div className={styles.by}>
				by <i className={styles.author}>{post.fields.byline}</i>
			</div>
			<PostMain post={post} />
			<PostBody post={post} />
		</main>
	)
}

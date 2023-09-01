import { Content } from '@/types/getPostTypes'
import './postBody.scss'
import '../postMain/postMain.scss'
export default function PostBody({ post }: { post: Content }) {
	return (
		<article
			className='article'
			dangerouslySetInnerHTML={{ __html: post.fields.body }}
		/>
	)
}

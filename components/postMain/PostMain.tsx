import { Content } from '@/types/getPostTypes'

export default function PostMain({ post }: { post: Content }) {
	return (
		<div
			className='mainWrapper'
			dangerouslySetInnerHTML={{
				__html: post.fields.main
			}}
		/>
	)
}

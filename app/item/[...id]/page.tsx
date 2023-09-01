import getPost from '@/services/fetch'

type Props = {
	params: {
		id: []
	}
}

export default async function Post({ params: { id } }: Props) {
	const { response } = await getPost(id.join('/'))
	return <div>{response.content.webTitle}</div>
}

export interface Root {
	response: Response
}

export interface Response {
	status: string
	userTier: string
	total: number
	content: Content
}

export interface Content {
	id: string
	type: string
	sectionId: string
	sectionName: string
	webPublicationDate: string
	webTitle: string
	webUrl: string
	apiUrl: string
	fields: Fields
	isHosted: boolean
	pillarId: string
	pillarName: string
}

export interface Fields {
	standfirst: string
	byline: string
	body: string
	shortUrl: string
	thumbnail: string
	main: string
}

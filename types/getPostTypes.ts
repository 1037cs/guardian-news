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
	isHosted: boolean
	pillarId: string
	pillarName: string
}

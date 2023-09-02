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
	blocks: Blocks
	isHosted: boolean
	pillarId: string
	pillarName: string
}

export interface Blocks {
	main: Main
	body: Body[]
	totalBodyBlocks: number
}

export interface Main {
	id: string
	bodyHtml: string
	bodyTextSummary: string
	attributes: Attributes
	published: boolean
	createdDate: string
	firstPublishedDate: string
	publishedDate: string
	lastModifiedDate: string
	contributors: any[]
	elements: Element[]
}

export interface Attributes {}

export interface Element {
	type: string
	assets: Asset[]
	imageTypeData: ImageTypeData
}

export interface Asset {
	type: string
	mimeType: string
	file: string
	typeData: TypeData
}

export interface TypeData {
	aspectRatio: string
	width: number
	height: number
	isMaster?: boolean
}

export interface ImageTypeData {
	caption: string
	displayCredit: boolean
	credit: string
	source: string
	photographer: string
	alt: string
	mediaId: string
	mediaApiUri: string
	suppliersReference: string
	imageType: string
}

export interface Body {
	id: string
	bodyHtml: string
	bodyTextSummary: string
	attributes: Attributes2
	published: boolean
	createdDate: string
	firstPublishedDate: string
	publishedDate: string
	lastModifiedDate: string
	contributors: string[]
	elements: Element2[]
	title?: string
}

export interface Attributes2 {
	pinned: boolean
	keyEvent?: boolean
	title?: string
	summary?: boolean
}

export interface Element2 {
	type: string
	assets: Asset2[]
	textTypeData?: TextTypeData
	richLinkTypeData?: RichLinkTypeData
	tweetTypeData?: TweetTypeData
	imageTypeData?: ImageTypeData2
	videoTypeData?: VideoTypeData
	tracking?: Tracking
	contentAtomTypeData?: ContentAtomTypeData
}

export interface Asset2 {
	type: string
	mimeType: string
	file: string
	typeData: TypeData2
}

export interface TypeData2 {
	aspectRatio: string
	width: number
	height: number
	isMaster?: boolean
}

export interface TextTypeData {
	html: string
}

export interface RichLinkTypeData {
	url: string
	originalUrl: string
	linkText: string
	linkPrefix: string
	role: string
}

export interface TweetTypeData {
	source: string
	url: string
	id: string
	html: string
	originalUrl: string
	isMandatory: boolean
}

export interface ImageTypeData2 {
	displayCredit: boolean
	credit: string
	source: string
	photographer: string
	alt: string
	mediaId: string
	mediaApiUri: string
	suppliersReference: string
	imageType: string
}

export interface VideoTypeData {
	url: string
	description: string
	title?: string
	html: string
	source: string
	credit?: string
	height: number
	width: number
	originalUrl: string
	sourceDomain: string
	isMandatory: boolean
}

export interface Tracking {
	tracks: string
}

export interface ContentAtomTypeData {
	atomId: string
	atomType: string
	isMandatory: boolean
}

// export interface Root {
// 	response: Response
// }
//
// export interface Response {
// 	status: string
// 	userTier: string
// 	total: number
// 	content: Content
// }
//
// export interface Content {
// 	id: string
// 	type: string
// 	sectionId: string
// 	sectionName: string
// 	webPublicationDate: string
// 	webTitle: string
// 	webUrl: string
// 	apiUrl: string
// 	fields: Fields
// 	isHosted: boolean
// 	pillarId: string
// 	pillarName: string
// }
//
export interface Fields {
	standfirst: string
	byline: string
	body: string
	shortUrl: string
	thumbnail: string
	main: string
}

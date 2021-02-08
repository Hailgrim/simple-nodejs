export type IPost = {
	id: number;
	timestamp: number,
	title: string;
	text: string;
	image: string;
}

export type PostRouterParams = {
	id?: string
}
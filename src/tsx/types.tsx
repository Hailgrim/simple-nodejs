export type IPost = {
	id: number;
	timestamp: number;
	title: string;
	text: string;
	image: string;
}

export type ITask = {
	id: number;
	text: string;
	complete: boolean;
}

export type PostRouterParams = {
	id?: number;
}
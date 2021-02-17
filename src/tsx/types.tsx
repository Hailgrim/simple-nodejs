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

export type ReduxActionParams = {
	type?: string,
	payload?: any
}

export type rootReducerContainer = {
	app: appReducerParams,
	posts: postsReducerParams,
	tasks: tasksReducerParams
}

export type appReducerParams = {
	isAuthorized: boolean,
	authProcessing: boolean,
	authError: string | boolean,
	loading: boolean,
	loadingProgress: number
}

export type postsReducerParams = {
	list: IPost[],
	listError: string | boolean,
	post: IPost,
	postError: string | boolean,
	page: number,
	total_pages: number
}

export type tasksReducerParams = {
	list: ITask[]
}
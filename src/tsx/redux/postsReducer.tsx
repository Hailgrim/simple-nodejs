import { GET_POSTS, GET_POST, CLEAR_POST } from './actionTypes';
import { IPost } from '../types';

const initialState = {
	list: new Array<IPost>(),
	post: {
		id: 0,
		image: '',
		title: '\xa0',
		text: '\xa0',
		timestamp: 0
	} as IPost,
	page: 1,
	total_pages: 1
};

if (initialState.list.length == 0) {
	for (let i = -3; i < 0; i++) {
		initialState.list.push({
			id: i,
			image: ''/*'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNITEz8DwAEbQIj5vmLagAAAABJRU5ErkJggg=='*/,
			title: '\xa0',
			text: '\xa0',
			timestamp: 0
		});
	}
}

export const postsReducer = (state: any = initialState, action: any) => {
	switch (action.type) {
		case GET_POSTS:
			return {
				...state,
				list: action.payload.list,
				page: action.payload.page,
				total_pages: action.payload.total_pages
			};
		case GET_POST:
			return {
				...state,
				post: action.payload
			};
		case CLEAR_POST:
			return {
				...state,
				post: initialState.post
			};
		default: return state;
	}
}
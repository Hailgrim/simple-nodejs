import { POSTS_SUCCESS, POSTS_FAILURE, POST_SUCCESS, POST_FAILURE, POST_CLEAR, POSTS_CLEAR } from './actionTypes';
import { IPost, postsReducerParams, ReduxActionParams } from '../types';

const initialState = {
	list: new Array<IPost>(),
	listError: false,
	post: {
		id: -1,
		image: '',
		title: '\xa0',
		text: '\xa0\xa0\xa0',
		timestamp: 0
	},
	postError: false,
	page: 1,
	total_pages: 1
} as postsReducerParams;

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

export const postsReducer = (state: postsReducerParams = initialState, action: ReduxActionParams) => {
	switch (action.type) {
		case POSTS_SUCCESS:
			return { ...state, list: action.payload.list, page: action.payload.page, total_pages: action.payload.total_pages, listError: false };
		case POSTS_FAILURE:
			return { ...state, list: initialState.list, page: 0, total_pages: 1, listError: action.payload };
		case POSTS_CLEAR:
			return { ...state, post: initialState.list, listError: false };
		case POST_SUCCESS:
			return { ...state, post: action.payload, postError: false };
		case POST_FAILURE:
			return { ...state, post: initialState.post, postError: action.payload };
		case POST_CLEAR:
			return { ...state, post: initialState.post, postError: false };
		default: return state;
	}
}
import { GET_POSTS, CREATE_POST } from './actionTypes';
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
		case CREATE_POST:
			return {
				...state,
				list: state.list.concat(action.payload)
			};
		case GET_POSTS:
			return {
				...state,
				list: action.payload.list,
				page: action.payload.page,
				total_pages: action.payload.total_pages
			};
		default: return state;
	}
}